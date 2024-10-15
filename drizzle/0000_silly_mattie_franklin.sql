CREATE TABLE IF NOT EXISTS "zapline_conversation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"voicebot_id" uuid NOT NULL,
	"customer_id" varchar(256),
	"customer_phone" varchar(20),
	"start_time" timestamp with time zone NOT NULL,
	"end_time" timestamp with time zone,
	"duration" integer,
	"message_count" integer DEFAULT 0,
	"transcript" text,
	"sentiment" varchar(50),
	"outcome" varchar(50),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "zapline_usage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"voicebot_id" uuid NOT NULL,
	"total_conversations" integer DEFAULT 0,
	"total_messages" integer DEFAULT 0,
	"total_duration" integer DEFAULT 0,
	"period_start" timestamp with time zone NOT NULL,
	"period_end" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "zapline_user" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"email" varchar(256) NOT NULL,
	"store_name" varchar(256),
	"store_url" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"subscription_id" varchar(256),
	"subscription_status" varchar(50),
	"subscription_plan" varchar(50),
	"subscription_start_date" timestamp with time zone,
	"subscription_end_date" timestamp with time zone,
	CONSTRAINT "zapline_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "zapline_voicebot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" text,
	"status" varchar(50) DEFAULT 'active' NOT NULL,
	"voice" varchar(50),
	"language" varchar(50),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"settings" jsonb
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "zapline_conversation" ADD CONSTRAINT "zapline_conversation_voicebot_id_zapline_voicebot_id_fk" FOREIGN KEY ("voicebot_id") REFERENCES "public"."zapline_voicebot"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "zapline_usage" ADD CONSTRAINT "zapline_usage_voicebot_id_zapline_voicebot_id_fk" FOREIGN KEY ("voicebot_id") REFERENCES "public"."zapline_voicebot"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "zapline_voicebot" ADD CONSTRAINT "zapline_voicebot_user_id_zapline_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."zapline_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "voicebot_id_idx" ON "zapline_conversation" ("voicebot_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "usage_id_idx" ON "zapline_usage" ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_idx" ON "zapline_user" ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_idx" ON "zapline_voicebot" ("user_id");