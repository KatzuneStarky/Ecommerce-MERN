import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "react-toastify/dist/ReactToastify.css";
import IniciarSesion from "./pages/Auth/IniciarSesion";
import Dashboard from "./pages/Users/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import AllUsers from "./pages/Admin/AllUsers";
import Profile from "./pages/Users/Profile";
import Orders from "./pages/Users/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/all-users" element={<AllUsers />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sesion" element={<IniciarSesion />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
