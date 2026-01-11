-- Create a table for table reservations (restaurant)
CREATE TABLE public.table_reservations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    guest_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TEXT NOT NULL,
    guests_count INTEGER NOT NULL DEFAULT 2,
    special_requests TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.table_reservations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (anyone can create and view)
CREATE POLICY "Anyone can create table reservations" 
ON public.table_reservations 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view table reservations" 
ON public.table_reservations 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_table_reservations_updated_at
BEFORE UPDATE ON public.table_reservations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();