/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's work email
  - `company` (text, nullable) — submitter's company name
  - `message` (text, not null) — the contact message
  - `created_at` (timestamptz, default now()) — submission timestamp
  - `status` (text, default 'new') — tracking status (new, read, responded)

2. Security
- Enable RLS on `contact_submissions`.
- Allow anyone (anon + authenticated) to INSERT — the public contact form needs to submit without login.
- Allow only authenticated users (admins) to SELECT/UPDATE/DELETE — so the team can read and manage submissions.

3. Notes
- This is a public contact form, so INSERT is intentionally open to anon.
- Read/update/delete is restricted to authenticated (admin) users only.
- No user_id column needed since this is not owner-scoped data.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to submit contact form (INSERT)
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated (admin) users can read submissions
DROP POLICY IF EXISTS "auth_select_contact" ON contact_submissions;
CREATE POLICY "auth_select_contact"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

-- Only authenticated (admin) users can update submissions
DROP POLICY IF EXISTS "auth_update_contact" ON contact_submissions;
CREATE POLICY "auth_update_contact"
ON contact_submissions FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Only authenticated (admin) users can delete submissions
DROP POLICY IF EXISTS "auth_delete_contact" ON contact_submissions;
CREATE POLICY "auth_delete_contact"
ON contact_submissions FOR DELETE
TO authenticated
USING (true);
