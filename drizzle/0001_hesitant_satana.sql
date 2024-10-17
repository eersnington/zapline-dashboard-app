ALTER TABLE "zapline_voicebot" ADD COLUMN "store_name" varchar(256);--> statement-breakpoint
ALTER TABLE "zapline_voicebot" ADD COLUMN "store_url" varchar(256);--> statement-breakpoint
ALTER TABLE "zapline_user" DROP COLUMN IF EXISTS "store_name";--> statement-breakpoint
ALTER TABLE "zapline_user" DROP COLUMN IF EXISTS "store_url";