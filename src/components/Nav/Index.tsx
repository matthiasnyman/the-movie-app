"use client";

import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Menu = (props: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex md:flex-row">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className=" bg-neutral-900 flex-1 md:flex md:ml-72 min-h-screen relative">
        <Navbar
          onSidebarToggle={handleSidebarToggle}
          isSidebarOpen={isSidebarOpen}
        />
        {props.children}
      </div>
    </div>
  );
};

export default Menu;
