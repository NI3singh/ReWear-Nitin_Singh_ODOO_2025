import React from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import SwipeCards from "./pages/Swipe";
import Dashboard from "./pages/Dashboard";
import AuthForm from "./pages/AuthForm";

const queryClient = new QueryClient();

const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ✅ Use RouterRoutes, not Routes */}
          <RouterRoutes>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/swipe" element={<SwipeCards />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<AuthForm />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Routes;
