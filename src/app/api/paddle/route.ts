/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

// transaction.paid
// subscription.activated
// subscription.cancelled - done
// subscription.created - done
// subscription.past_due
// subscription.updated - done
import { env } from "@/env";
import {
  Paddle,
  type EventName,
  type Environment,
  type PaddleOptions,
  type SubscriptionNotification,
} from "@paddle/paddle-node-sdk";
import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

const paddleOptions: PaddleOptions = {
  environment: env.NEXT_PUBLIC_PADDLE_ENVIRONMENT as Environment,
};

const paddle: Paddle = new Paddle(env.PADDLE_API_KEY, paddleOptions);

export async function POST(request: Request) {
  const signature = request.headers.get("paddle-signature");

  if (!signature) {
    console.error("Signature missing in header.");
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const body = await request.text();
    const payload = paddle.webhooks.unmarshal(
      body,
      env.PADDLE_WEBHOOK_SECRET_KEY,
      signature,
    ) as { eventType: EventName; data: unknown } | null;

    if (!payload) {
      console.error("Invalid payload");
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    console.log("Event Type:", payload.eventType);

    switch (payload.eventType) {
      case "subscription.created":
        await handleSubscriptionCreated(
          payload.data as SubscriptionNotification,
        );
        break;
      case "subscription.updated":
        await handleSubscriptionUpdated(
          payload.data as SubscriptionNotification,
        );
        break;
      case "subscription.canceled":
        await handleSubscriptionCanceled(
          payload.data as SubscriptionNotification,
        );
        break;
      default:
        console.log("Unhandled event type:", payload.eventType);
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
interface CustomDataType {
  userId: string;
}

async function handleSubscriptionCreated(data: SubscriptionNotification) {
  console.log("Subscription created. Customer-Id:", data.customerId);
  const {
    id,
    customerId,
    transactionId,
    startedAt,
    firstBilledAt,
    nextBilledAt,
    customData,
  } = data;

  const typedCustomData = customData as CustomDataType;

  if (typedCustomData?.userId) {
    await db
      .update(users)
      .set({
        subscriptionId: id,
        customerId: customerId,
        transactionId: transactionId,
        subscriptionCreatedAt: new Date(),
        subscriptionStartedAt: startedAt ? new Date(startedAt) : null,
        subscriptionFirstBilledAt: firstBilledAt
          ? new Date(firstBilledAt)
          : null,
        subscriptionNextBilledAt: nextBilledAt ? new Date(nextBilledAt) : null,
      })
      .where(eq(users.id, typedCustomData.userId));
  } else {
    console.error(`User ID not found in custom data for subscription: ${id}`);
  }
}

async function handleSubscriptionUpdated(data: SubscriptionNotification) {
  console.log("Subscription updated. Customer-Id:", data.customerId);
  const { id, nextBilledAt } = data;

  await db
    .update(users)
    .set({
      subscriptionUpdatedAt: new Date(),
      subscriptionNextBilledAt: nextBilledAt ? new Date(nextBilledAt) : null,
    })
    .where(eq(users.subscriptionId, id));
}

async function handleSubscriptionCanceled(data: SubscriptionNotification) {
  console.log("Subscription canceled. Customer-Id:", data.customerId);
  const { id } = data;

  await db
    .update(users)
    .set({
      subscriptionId: null,
      subscriptionUpdatedAt: new Date(),
    })
    .where(eq(users.subscriptionId, id));
}
