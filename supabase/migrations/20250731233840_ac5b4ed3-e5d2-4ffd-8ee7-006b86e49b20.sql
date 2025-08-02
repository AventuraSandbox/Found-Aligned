-- Create applications table to store form submissions
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  age INTEGER,
  location TEXT,
  
  -- Professional Background
  profession TEXT,
  company TEXT,
  education TEXT,
  income_range TEXT,
  
  -- Relationship Goals
  relationship_goals TEXT,
  previous_relationships TEXT,
  timeline TEXT,
  
  -- Values & Lifestyle
  values TEXT,
  lifestyle TEXT,
  interests TEXT,
  
  -- Ideal Partner
  ideal_partner_age_range TEXT,
  ideal_partner_location TEXT,
  ideal_partner_profession TEXT,
  ideal_partner_qualities TEXT,
  
  -- Investment & Commitment
  investment_level TEXT,
  commitment_level TEXT,
  expectations TEXT,
  
  -- Consent
  privacy_consent BOOLEAN DEFAULT false,
  marketing_consent BOOLEAN DEFAULT false,
  terms_consent BOOLEAN DEFAULT false,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications (public form)
CREATE POLICY "Anyone can submit applications" 
ON public.applications 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading applications (admin only later)
CREATE POLICY "No public read access to applications" 
ON public.applications 
FOR SELECT 
USING (false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_applications_updated_at
BEFORE UPDATE ON public.applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();