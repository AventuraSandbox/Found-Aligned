-- Remove user_id requirement and allow public submissions for applications and discovery calls

-- Update applications table: make user_id nullable and allow public inserts
ALTER TABLE public.applications ALTER COLUMN user_id DROP NOT NULL;

-- Update discovery_calls table: make user_id nullable and allow public inserts  
ALTER TABLE public.discovery_calls ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Users can insert their own applications" ON public.applications;
DROP POLICY IF EXISTS "Users can view their own applications" ON public.applications;
DROP POLICY IF EXISTS "Users can insert their own discovery calls" ON public.discovery_calls;
DROP POLICY IF EXISTS "Users can view their own discovery calls" ON public.discovery_calls;

-- Create new policies allowing public submissions but admin-only viewing
CREATE POLICY "Anyone can submit applications" 
ON public.applications 
FOR INSERT 
TO public
WITH CHECK (true);

CREATE POLICY "Admins can view all applications" 
ON public.applications 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can submit discovery calls" 
ON public.discovery_calls 
FOR INSERT 
TO public
WITH CHECK (true);

CREATE POLICY "Admins can view all discovery calls" 
ON public.discovery_calls 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));