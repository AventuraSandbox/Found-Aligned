import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { handleError, logSecurityEvent } from "@/lib/errorHandler";

const Admin = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
      return;
    }

    if (user) {
      checkAdminAccess();
    }
  }, [user, loading, navigate]);

  const checkAdminAccess = async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_current_user_role');

      if (error) throw error;

      if (data !== 'admin') {
        logSecurityEvent('unauthorized_admin_access', { userId: user?.id });
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "You don't have admin privileges.",
        });
        navigate("/");
        return;
      }

      setUserRole(data);
    } catch (error) {
      handleError(error, 'admin access check');
      navigate("/");
    }
  };

  const assignRole = async () => {
    if (!email || !role) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all fields.",
      });
      return;
    }

    setIsLoading(true);
    try {
      // For now, we'll use a simplified approach
      // In production, implement proper user lookup
      toast({
        title: "Feature Under Development",
        description: "Role assignment will be available in a future update.",
      });

      setEmail("");
      setRole("");
    } catch (error) {
      handleError(error, 'role assignment');
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (userRole !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Admin Panel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Assign User Roles</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">User Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={assignRole} 
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? "Assigning..." : "Assign Role"}
                </Button>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h3 className="text-lg font-semibold mb-2">Security Notice</h3>
              <p className="text-sm text-muted-foreground">
                All role changes are logged for security audit purposes. 
                Only assign admin roles to trusted users.
              </p>
            </div>

            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="w-full"
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;