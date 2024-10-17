ALTER TABLE "zapline_voicebot" ALTER COLUMN "store_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "zapline_voicebot" DROP COLUMN IF EXISTS "name";