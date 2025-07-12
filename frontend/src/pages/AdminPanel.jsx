import AdminLayout from "../components/admin/AdminLayout";
import ManageUsers from "../components/admin/ManageUsers";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Package, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import toast from "react-hot-toast";

const AdminPanel = () => {
  const activeSection = "users"; // useState not needed unless this will change

  const renderContent = () => {
    switch (activeSection) {
      case "users":
        return <ManageUsers />;
      case "orders":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Manage Orders</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Order management functionality coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        );
      case "listings":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5" />
                  <span>Manage Listings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Listing management functionality coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        // Fetch users data
        const { data: users, isLoading, isError, refetch } = useQuery({
 queryKey: ["allUsers"],
 queryFn: getAllUsers,
    });

        // Mutation for deleting a user
        const deleteUserMutation = useMutation({
 mutationFn: deleteUser,
          onSuccess: () => {
 toast.success("User deleted successfully!");
            refetch(); // Refetch users after deletion
          },
          onError: (error) => {
 toast.error(error.response.data.message || "Failed to delete user.");
          },
        });

        // Mutation for deleting an item (assuming an item management section exists or will exist)
        const deleteItemMutation = useMutation({
 mutationFn: deleteItem, // You would need an actual deleteItem function
 onSuccess: () => {
 toast.success("Item deleted successfully!");
          },
        });
        return <ManageUsers />;
    }
  };

  return <AdminLayout>{renderContent()}</AdminLayout>;
};

export default AdminPanel;
