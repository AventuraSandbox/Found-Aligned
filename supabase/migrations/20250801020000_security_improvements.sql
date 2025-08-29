-- Security improvements migration
-- Add missing UPDATE/DELETE policies and indexes

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS applications_email_idx ON public.applications (email);
CREATE INDEX IF NOT EXISTS discovery_calls_email_idx ON public.discovery_calls (email);
CREATE INDEX IF NOT EXISTS applications_created_at_idx ON public.applications (created_at);
CREATE INDEX IF NOT EXISTS discovery_calls_created_at_idx ON public.discovery_calls (created_at);

-- Add UPDATE policies for applications
CREATE POLICY "Admins can update applications"
ON public.applications FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin')) 
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add DELETE policies for applications
CREATE POLICY "Admins can delete applications"
ON public.applications FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add UPDATE policies for discovery_calls
CREATE POLICY "Admins can update discovery calls"
ON public.discovery_calls FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin')) 
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add DELETE policies for discovery_calls
CREATE POLICY "Admins can delete discovery calls"
ON public.discovery_calls FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add CHECK constraints for enumerations
ALTER TABLE public.applications 
ADD CONSTRAINT applications_commitment_level_check 
CHECK (commitment_level IN ('casual', 'serious', 'marriage-focused', 'not-sure'));

ALTER TABLE public.discovery_calls 
ADD CONSTRAINT discovery_calls_call_type_check 
CHECK (call_type IN ('video', 'phone', 'either'));

-- Add NOT NULL constraints for critical fields
ALTER TABLE public.applications 
ALTER COLUMN email SET NOT NULL,
ALTER COLUMN first_name SET NOT NULL,
ALTER COLUMN last_name SET NOT NULL;

ALTER TABLE public.discovery_calls 
ALTER COLUMN email SET NOT NULL,
ALTER COLUMN first_name SET NOT NULL,
ALTER COLUMN last_name SET NOT NULL;
