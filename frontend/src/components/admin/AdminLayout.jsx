import { useState } from "react";
import { Users, Package, ShoppingBag, User } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { cn } from "../../lib/utils";

const AdminLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("users");

  const tabs = [
    { id: "users", label: "Manage Users", icon: Users },
    { id: "orders", label: "Manage Orders", icon: ShoppingBag },
    { id: "listings", label: "Manage Listings", icon: Package },
  ];

  return (
    <div className="min-h-screen bg-admin-content">
      {/* Navigation Tabs */}
      <nav className="bg-admin-nav border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center space-x-2 py-4 px-6 rounded-none border-b-2 transition-all duration-200",
                    activeTab === tab.id
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
