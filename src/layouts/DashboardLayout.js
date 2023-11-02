import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Drawer from "../components/drawer/Drawer";
import { Outlet } from "react-router-dom";
import SupportDrawer from "../components/drawer/SupportDrawer";
export default function DashboardLayout() {
  return (
    <div className="flex">
      <Navbar />
      <Outlet />
      <Drawer />
      <SupportDrawer />
    </div>
  );
}
