
-- Block UPDATE and DELETE on reservations table
CREATE POLICY "No public updates on reservations" ON public.reservations
FOR UPDATE USING (false);

CREATE POLICY "No public deletes on reservations" ON public.reservations
FOR DELETE USING (false);

-- Block UPDATE and DELETE on table_reservations table  
CREATE POLICY "No public updates on table_reservations" ON public.table_reservations
FOR UPDATE USING (false);

CREATE POLICY "No public deletes on table_reservations" ON public.table_reservations
FOR DELETE USING (false);

-- Add unique constraint to prevent duplicate table reservations
ALTER TABLE public.table_reservations 
ADD CONSTRAINT unique_table_reservation UNIQUE (email, reservation_date, reservation_time);

-- Add unique constraint to prevent duplicate room reservations
ALTER TABLE public.reservations 
ADD CONSTRAINT unique_room_reservation UNIQUE (email, check_in, room_type);
