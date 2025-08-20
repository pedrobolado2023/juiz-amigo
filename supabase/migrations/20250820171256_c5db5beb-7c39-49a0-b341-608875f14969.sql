-- Final lockdown of dados_cliente table - ensure no public access whatsoever
-- Create an explicit deny policy for anon users and ensure only service role has access

-- Create explicit denial policy for anonymous users
CREATE POLICY "Block anonymous access to customer data" 
ON public.dados_cliente 
FOR ALL 
TO anon 
USING (false) 
WITH CHECK (false);

-- Create explicit denial policy for authenticated users (they should not access raw customer data)
CREATE POLICY "Block authenticated users from customer data" 
ON public.dados_cliente 
FOR ALL 
TO authenticated 
USING (false) 
WITH CHECK (false);

-- The existing service role policy should remain to allow n8n integration
-- Verify RLS is enabled (should already be enabled)
ALTER TABLE public.dados_cliente ENABLE ROW LEVEL SECURITY;

-- Also ensure no public grants exist on the table
REVOKE ALL ON public.dados_cliente FROM anon;
REVOKE ALL ON public.dados_cliente FROM authenticated;

-- For n8n_chat_histories, create a proper denial policy for anon users
CREATE POLICY "Block anonymous access to chat histories" 
ON public.n8n_chat_histories 
FOR ALL 
TO anon 
USING (false) 
WITH CHECK (false);

-- Revoke any existing public grants
REVOKE ALL ON public.n8n_chat_histories FROM anon;