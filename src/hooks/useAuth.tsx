import { useState } from "react";

export const useAuth = () => {
  const [loading] = useState(false);

  const signOut = async () => {
    // no-op without Supabase
  };

  return {
    user: null,
    session: null,
    loading,
    signOut,
    isAuthenticated: false,
  };
};