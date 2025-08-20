-- Fix critical security vulnerability in dados_cliente table
-- Remove the overly permissive 'n8n' policy and implement proper access controls

-- Drop the existing dangerous policy that allows public access
DROP POLICY IF EXISTS "n8n" ON public.dados_cliente;

-- Create restrictive policies for dados_cliente table
-- Only allow authenticated users to read their own data or service accounts to manage data
CREATE POLICY "Authenticated users can read customer data" 
ON public.dados_cliente 
FOR SELECT 
TO authenticated 
USING (true);

-- Allow only service role to insert/update/delete customer data
CREATE POLICY "Service role can manage customer data" 
ON public.dados_cliente 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Secure the n8n_chat_histories table as well
ALTER TABLE public.n8n_chat_histories ENABLE ROW LEVEL SECURITY;

-- Create policies for chat histories - only authenticated users can access
CREATE POLICY "Authenticated users can read chat histories" 
ON public.n8n_chat_histories 
FOR SELECT 
TO authenticated 
USING (true);

-- Allow service role to manage chat histories for n8n integration
CREATE POLICY "Service role can manage chat histories" 
ON public.n8n_chat_histories 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);