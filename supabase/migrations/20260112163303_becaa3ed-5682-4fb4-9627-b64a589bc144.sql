-- Remove public SELECT policies that expose guest PII data
-- These tables should be write-only for public users

DROP POLICY IF EXISTS "Anyone can view reservations" ON public.reservations;
DROP POLICY IF EXISTS "Anyone can view table reservations" ON public.table_reservations;