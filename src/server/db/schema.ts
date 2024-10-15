// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  timestamp,
  varchar,
  text,
  integer,
  uuid,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `fbthing_${name}`);

export const users = createTable(
  "user",
  {
    id: varchar("id", { length: 256 }).primaryKey(),
    firstName: varchar("first_name", { length: 256 }),
    lastName: varchar("last_name", { length: 256 }),
    email: varchar("email", { length: 256 }).notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
    subscriptionId: varchar("subscription_id", { length: 256 }),
    transactionId: varchar("transaction_id", { length: 256 }),
    customerId: varchar("customer_id", { length: 256 }),
    subscriptionCreatedAt: timestamp("subscription_created_at", {
      withTimezone: true,
    }),
    subscriptionUpdatedAt: timestamp("subscription_updated_at", {
      withTimezone: true,
    }),
    subscriptionStartedAt: timestamp("subscription_started_at", {
      withTimezone: true,
    }),
    subscriptionFirstBilledAt: timestamp("subscription_first_billed_at", {
      withTimezone: true,
    }),
    subscriptionNextBilledAt: timestamp("subscription_next_billed_at", {
      withTimezone: true,
    }),
  },
  (table) => ({
    emailIndex: index("email_idx").on(table.email),
  }),
);

export const projects = createTable(
  "project",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: varchar("user_id", { length: 256 })
      .notNull()
      .references(() => users.id),
    name: varchar("name", { length: 256 }).notNull(),
    domain: varchar("domain", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (table) => ({
    userIdIndex: index("user_id_idx").on(table.userId),
    domainIndex: index("domain_idx").on(table.domain),
  }),
);

export const forms = createTable(
  "form",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => projects.id),
    title: varchar("title", { length: 256 }).notNull(),
    description: text("description"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (table) => ({
    projectIdIndex: uniqueIndex("project_id_idx").on(table.projectId),
  }),
);

export const feedbackItems = createTable(
  "feedback_item",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    formId: uuid("form_id")
      .notNull()
      .references(() => forms.id),
    type: varchar("type", { length: 50 }).notNull(),
    rating: integer("rating"),
    feedback: text("feedback").notNull(),
    screenshot: text("screenshot"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    formIdIndex: index("form_id_idx").on(table.formId),
    typeIndex: index("type_idx").on(table.type),
  }),
);

export const projectRelations = relations(projects, ({ one }) => ({
  form: one(forms, {
    fields: [projects.id],
    references: [forms.projectId],
  }),
}));

export const formRelations = relations(forms, ({ one }) => ({
  project: one(projects, {
    fields: [forms.projectId],
    references: [projects.id],
  }),
}));

export const feedbackItemRelations = relations(feedbackItems, ({ one }) => ({
  form: one(forms, {
    fields: [feedbackItems.formId],
    references: [forms.id],
  }),
}));
