import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Browse from "../pages/Browse";
import AddItem from "../pages/AddItem";
import ItemDetail from "../pages/ItemDetail";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import AdminRoute from "./AdminRoute";
// import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="items" element={<Browse />} />
          <Route
            path="items/new"
            element={
              <ProtectedRoute>
                <AddItem />
              </ProtectedRoute>
            }
          />
          <Route path="items/:id" element={<ItemDetail />} />

          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <AdminPanel />
                </AdminRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
