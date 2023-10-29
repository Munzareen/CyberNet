import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Drawer from "../components/drawer/Drawer";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  return (
    <div className="flex">
      <Navbar></Navbar>
      <Outlet />
      <Drawer></Drawer>
    </div>
  );
}
