/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Webhook } from "svix";
import { headers } from "next/headers";
import {
  type UserWebhookEvent,
  type UserJSON,
  type DeletedObjectJSON,
} from "@clerk/nextjs/server";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { env } from "@/env";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = env.CLERK_WEBHOOK_SECRET;

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: UserWebhookEvent;

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as UserWebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const eventType = evt.type;

  switch (eventType) {
    case "user.created":
    case "user.updated":
      await handleUserCreatedOrUpdated(evt.data, eventType);
      break;
    case "user.deleted":
      await handleUserDeleted(evt.data);
      break;
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`Unhandled event type: ${eventType}`); // shouldn't be possible unless wrong configuration
  }

  return new Response("", { status: 200 });
}

function isUserJSON(data: UserJSON | DeletedObjectJSON): data is UserJSON {
  return (data as UserJSON).email_addresses !== undefined;
}

async function handleUserCreatedOrUpdated(
  userData: UserJSON | DeletedObjectJSON,
  eventType: "user.created" | "user.updated",
) {
  if (!isUserJSON(userData)) {
    console.error(`Received unexpected data format for ${eventType} event`);
    return;
  }

  const { id, first_name, last_name, email_addresses, created_at, updated_at } =
    userData;
  const primaryEmail = email_addresses.find(
    (email) => email.id === userData.primary_email_address_id,
  )?.email_address;

  if (!primaryEmail) {
    console.error("No primary email found for user:", id);
    return;
  }

  if (eventType === "user.created") {
    await db.insert(users).values({
      id,
      firstName: first_name ?? null,
      lastName: last_name ?? null,
      email: primaryEmail,
      createdAt: created_at ? new Date(created_at) : new Date(),
    });
  } else {
    await db
      .update(users)
      .set({
        firstName: first_name ?? null,
        lastName: last_name ?? null,
        email: primaryEmail,
        updatedAt: updated_at ? new Date(updated_at) : new Date(),
      })
      .where(eq(users.id, id));
  }
}

async function handleUserDeleted(userData: DeletedObjectJSON) {
  const { id } = userData;
  if (typeof id !== "string") {
    console.error("Invalid id for deleted user:", id);
    return;
  }
  await db.delete(users).where(eq(users.id, id));
}
