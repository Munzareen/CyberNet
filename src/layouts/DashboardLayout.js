import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Drawer from "../components/drawer/Drawer";
import { Outlet, Navigate } from "react-router-dom";
import SupportDrawer from "../components/drawer/SupportDrawer";
import Cookies from "js-cookie";
import ErrorBoundary from "./ErrorBoundary";
export default function DashboardLayout() {
  const accessToken = Cookies.get("access_token");
  console.log(`CURRENT COOKIE IS: ${accessToken}`);
  return accessToken ? (
    <div className="flex">
      <Navbar />
      <Outlet />
      <Drawer />
      <SupportDrawer />
    </div>
  ) : (
    <Navigate to="/" />
  );
}
