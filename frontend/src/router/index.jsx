import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
// import NotFound from "../pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
