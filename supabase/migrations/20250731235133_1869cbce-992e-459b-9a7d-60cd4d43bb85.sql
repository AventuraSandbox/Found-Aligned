-- Create discovery_calls table to store booking form submissions
CREATE TABLE public.discovery_calls (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Contact Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Call Preferences
  call_type TEXT, -- 'video' or 'phone'
  preferred_time TEXT,
  timezone TEXT,
  
  -- Background Information
  age_range TEXT,
  location TEXT,
  relationship_status TEXT,
  background_info TEXT,
  questions TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.discovery_calls ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert discovery calls (public form)
CREATE POLICY "Anyone can submit discovery calls" 
ON public.discovery_calls 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading discovery calls (admin only later)
CREATE POLICY "No public read access to discovery calls" 
ON public.discovery_calls 
FOR SELECT 
USING (false);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_discovery_calls_updated_at
BEFORE UPDATE ON public.discovery_calls
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();