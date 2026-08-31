CREATE TABLE public.conference_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  church TEXT,
  city TEXT,
  accommodation_needed BOOLEAN NOT NULL DEFAULT false,
  dietary_needs TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'registered',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.conference_registrations TO anon;
GRANT INSERT ON public.conference_registrations TO authenticated;
GRANT ALL ON public.conference_registrations TO service_role;

ALTER TABLE public.conference_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a conference registration"
ON public.conference_registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_conference_registrations_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_conference_registrations_updated_at
BEFORE UPDATE ON public.conference_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_conference_registrations_updated_at();