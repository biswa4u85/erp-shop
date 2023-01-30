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
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Details from "../pages/Details";
import Popular from "../pages/Popular";
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route element={<RequireAuth />}>
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/orders" element={<Orders />} /> */}
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Routers