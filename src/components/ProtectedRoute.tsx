import { ReactElement } from "react";

interface ProtectedRouteProps {
  children: ReactElement;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  // Supabase removed: route is always accessible
  return children;
}
