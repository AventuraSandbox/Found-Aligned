-- Create admin role system and update policies for public submissions

-- Create enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to get current user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT role::TEXT FROM public.user_roles WHERE user_id = auth.uid() LIMIT 1;
$$;

-- RLS policies for user_roles table
CREATE POLICY "Admins can view all user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert user roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update user roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

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

-- Update profiles table policies for admin access
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));