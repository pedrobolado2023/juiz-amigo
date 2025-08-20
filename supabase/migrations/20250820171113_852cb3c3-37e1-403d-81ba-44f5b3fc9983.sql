-- Further restrict access to customer data - only service roles should access this sensitive data
-- Remove authenticated user access since this appears to be a backend integration table

-- Drop the overly broad authenticated user policies
DROP POLICY IF EXISTS "Authenticated users can read customer data" ON public.dados_cliente;
DROP POLICY IF EXISTS "Authenticated users can read chat histories" ON public.n8n_chat_histories;

-- Keep only service role access for backend integrations like n8n
-- dados_cliente should only be accessible by service roles (for n8n workflows)
-- No regular users should access raw customer contact data

-- For chat histories, restrict to session-based access if session_id maps to user
-- Create a more restrictive policy that checks if the session belongs to the user
CREATE POLICY "Users can only access their own chat sessions" 
ON public.n8n_chat_histories 
FOR SELECT 
TO authenticated 
USING (
  -- This would need to be customized based on your session management
  -- For now, restrict to service role only until proper user-session mapping is implemented
  false
);

-- Alternative: If you need users to access chat histories, you would need to add a user_id column
-- and link chat sessions to specific users. For security, we're blocking user access for now.

-- Only service roles can access sensitive customer contact data
-- This ensures n8n workflows can function while protecting privacy