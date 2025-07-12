import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { User, Mail, MapPin, Calendar, Ban, Eye, Edit } from "lucide-react";

const ManageUsers = () => {
  const [users] = useState([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      joinDate: "2024-01-15",
      location: "New York, NY",
      status: "active",
      itemsListed: 12,
      swapsCompleted: 8,
      points: 450,
    },
    {
      id: "2",
      name: "Mike Chen",
      email: "mike.chen@email.com",
      joinDate: "2024-02-20",
      location: "San Francisco, CA",
      status: "active",
      itemsListed: 6,
      swapsCompleted: 4,
      points: 220,
    },
    {
      id: "3",
      name: "Emma Wilson",
      email: "emma.w@email.com",
      joinDate: "2024-03-10",
      location: "Los Angeles, CA",
      status: "pending",
      itemsListed: 3,
      swapsCompleted: 0,
      points: 50,
    },
    {
      id: "4",
      name: "David Rodriguez",
      email: "david.r@email.com",
      joinDate: "2024-01-30",
      location: "Chicago, IL",
      status: "suspended",
      itemsListed: 15,
      swapsCompleted: 12,
      points: 680,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "suspended":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleViewUser = (userId) => {
    console.log("View user:", userId);
  };

  const handleEditUser = (userId) => {
    console.log("Edit user:", userId);
  };

  const handleSuspendUser = (userId) => {
    console.log("Suspend user:", userId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Manage Users</h2>
          <p className="text-muted-foreground mt-1">
            Review and manage all platform users
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="px-3 py-1">
            Total Users: {users.length}
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            Active: {users.filter(u => u.status === "active").length}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4">
        {users.map((user) => (
          <Card
            key={user.id}
            className="hover:shadow-md transition-all duration-200 bg-admin-card border border-border"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                {/* User Avatar and Basic Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16 border-2 border-border">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-muted text-muted-foreground text-lg font-medium">
                      {user.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground truncate">
                        {user.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`capitalize ${getStatusColor(user.status)}`}
                      >
                        {user.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{user.points} points</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Stats */}
                <div className="hidden md:flex flex-col space-y-3 min-w-48">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{user.itemsListed}</div>
                        <div className="text-xs text-muted-foreground">Items Listed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{user.swapsCompleted}</div>
                        <div className="text-xs text-muted-foreground">Swaps Done</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewUser(user.id)}
                    className="flex items-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditUser(user.id)}
                    className="flex items-center space-x-2"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit User</span>
                  </Button>
                  
                  {user.status !== "suspended" && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleSuspendUser(user.id)}
                      className="flex items-center space-x-2"
                    >
                      <Ban className="w-4 h-4" />
                      <span>Suspend</span>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
