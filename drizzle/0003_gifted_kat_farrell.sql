DROP INDEX IF EXISTS "project_id_idx";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "project_id_idx" ON "fbthing_form" ("project_id");