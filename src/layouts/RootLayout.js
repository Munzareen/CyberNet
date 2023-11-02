import React from "react";
import { Outlet } from "react-router-dom";
import { MyContext } from "../MyContext";
import { useState } from "react";
export default function RootLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  return (
    <div>
      <MyContext.Provider
        value={{ isOpen, setIsOpen, isSupportOpen, setIsSupportOpen }}
      >
        <Outlet />
      </MyContext.Provider>
    </div>
  );
}
