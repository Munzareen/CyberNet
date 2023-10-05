import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const user = null;
  return user ? <Outlet /> : <Navigate to="/signin" />;
};


export default AuthRoutes;
