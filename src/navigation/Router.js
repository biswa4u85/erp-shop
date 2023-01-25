import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useLocalStorage } from '../hooks/useLocalStorage'
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";

const RequireAuth = () => {
  const [token, setToken] = useLocalStorage("token", null);
  let location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};

function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<Details />} />
        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Routers