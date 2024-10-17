import { relations, sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  timestamp,
  varchar,
  text,
  integer,
  uuid,
  jsonb,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `zapline_${name}`);

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
    subscriptionStatus: varchar("subscription_status", { length: 50 }),
    subscriptionPlan: varchar("subscription_plan", { length: 50 }),
    subscriptionStartDate: timestamp("subscription_start_date", {
      withTimezone: true,
    }),
    subscriptionEndDate: timestamp("subscription_end_date", {
      withTimezone: true,
    }),
  },
  (table) => ({
    emailIndex: index("email_idx").on(table.email),
  }),
);

export const voicebots = createTable(
  "voicebot",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: varchar("user_id", { length: 256 })
      .notNull()
      .references(() => users.id),
    name: varchar("store_name", { length: 256 }).notNull(),
    storeUrl: varchar("store_url", { length: 256 }),
    status: varchar("status", { length: 50 }).notNull().default("active"),
    voice: varchar("voice", { length: 50 }),
    language: varchar("language", { length: 50 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
    settings: jsonb("settings"), // For any additional bot-specific settings
  },
  (table) => ({
    userIdIndex: index("user_id_idx").on(table.userId),
  }),
);

export const conversations = createTable(
  "conversation",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    voicebotId: uuid("voicebot_id")
      .notNull()
      .references(() => voicebots.id),
    customerId: varchar("customer_id", { length: 256 }),
    customerPhone: varchar("customer_phone", { length: 20 }),
    startTime: timestamp("start_time", { withTimezone: true }).notNull(),
    endTime: timestamp("end_time", { withTimezone: true }),
    duration: integer("duration"), // in seconds
    messageCount: integer("message_count").default(0),
    transcript: text("transcript"),
    sentiment: varchar("sentiment", { length: 50 }), // e.g., 'positive', 'neutral', 'negative'
    outcome: varchar("outcome", { length: 50 }), // e.g., 'sale', 'inquiry', 'support'
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    voicebotIdIndex: index("voicebot_id_idx").on(table.voicebotId),
  }),
);

export const usageMetrics = createTable(
  "usage",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    voicebotId: uuid("voicebot_id")
      .notNull()
      .references(() => voicebots.id),
    totalConversations: integer("total_conversations").default(0),
    totalMessages: integer("total_messages").default(0),
    totalDuration: integer("total_duration").default(0), // in seconds
    periodStart: timestamp("period_start", { withTimezone: true }).notNull(),
    periodEnd: timestamp("period_end", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    usageIdIndex: index("usage_id_idx").on(table.id),
  }),
);

export const voicebotRelations = relations(voicebots, ({ one }) => ({
  user: one(users, {
    fields: [voicebots.userId],
    references: [users.id],
  }),
}));

export const conversationRelations = relations(conversations, ({ one }) => ({
  voicebot: one(voicebots, {
    fields: [conversations.voicebotId],
    references: [voicebots.id],
  }),
}));

export const usageMetricRelations = relations(usageMetrics, ({ one }) => ({
  voicebot: one(voicebots, {
    fields: [usageMetrics.voicebotId],
    references: [voicebots.id],
  }),
}));
