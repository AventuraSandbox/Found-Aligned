import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedRouteProps {
  children: JSX.Element;
  role?: "admin" | "user";
  fallback?: JSX.Element;
}

export default function ProtectedRoute({ 
  children, 
  role = "admin", 
  fallback = <div className="flex items-center justify-center min-h-screen">Loading...</div> 
}: ProtectedRouteProps) {
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        // Check if user is authenticated
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        
        if (authError || !user) {
          setAllowed(false);
          setLoading(false);
          return;
        }

        // Check user role
        const { data: roleData, error: roleError } = await supabase.rpc('get_current_user_role');
        
        if (roleError) {
          console.error('Error checking user role:', roleError);
          setAllowed(false);
        } else {
          setAllowed(roleData === role);
        }
      } catch (error) {
        console.error('Error in ProtectedRoute:', error);
        setAllowed(false);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [role]);

  if (loading) {
    return fallback;
  }

  if (allowed === null || !allowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}
