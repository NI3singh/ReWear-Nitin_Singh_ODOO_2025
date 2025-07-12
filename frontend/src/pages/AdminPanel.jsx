import AdminLayout from "../components/admin/AdminLayout";
import ManageUsers from "../components/admin/ManageUsers";
import { Package, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

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
        return <ManageUsers />;
    }
  };

  return <AdminLayout>{renderContent()}</AdminLayout>;
};

export default AdminPanel;
