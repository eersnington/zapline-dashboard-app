CREATE TABLE IF NOT EXISTS "fbthing_feedback_item" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"form_id" uuid NOT NULL,
	"type" varchar(50) NOT NULL,
	"rating" integer,
	"feedback" text NOT NULL,
	"screenshot" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fbthing_form" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fbthing_project" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"name" varchar(256) NOT NULL,
	"domain" varchar(256) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fbthing_user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"email" varchar(256) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"subscription_id" varchar(256),
	"transaction_id" varchar(256),
	"customer_id" varchar(256),
	"subscription_created_at" timestamp with time zone,
	"subscription_updated_at" timestamp with time zone,
	"subscription_started_at" timestamp with time zone,
	"subscription_first_billed_at" timestamp with time zone,
	"subscription_next_billed_at" timestamp with time zone,
	CONSTRAINT "fbthing_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fbthing_feedback_item" ADD CONSTRAINT "fbthing_feedback_item_form_id_fbthing_form_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."fbthing_form"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fbthing_form" ADD CONSTRAINT "fbthing_form_project_id_fbthing_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."fbthing_project"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fbthing_project" ADD CONSTRAINT "fbthing_project_user_id_fbthing_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."fbthing_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "form_id_idx" ON "fbthing_feedback_item" ("form_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "type_idx" ON "fbthing_feedback_item" ("type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "project_id_idx" ON "fbthing_form" ("project_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_idx" ON "fbthing_project" ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "domain_idx" ON "fbthing_project" ("domain");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_idx" ON "fbthing_user" ("email");