"use client";

import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Search from "../search";

type Props = {
  onSidebarToggle: () => void;
  isSidebarOpen: boolean;
};

const Navbar = ({ onSidebarToggle, isSidebarOpen }: Props) => {
  return (
    <nav className={"absolute h-20 flex flex-col w-full"}>
      <div className="md:hidden w-full flex px-8 py-2 justify-between">
        <h3 className="font-semibold text-2xl text-white text-center">
          Movies
        </h3>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={onSidebarToggle}
        >
          <span className="sr-only">Open sidebar</span>
          {!isSidebarOpen ? (
            <Bars3Icon className="h-8 w-8 text-white" />
          ) : (
            <XMarkIcon className="h-8 w-8 text-white" />
          )}
        </button>
      </div>
      <div className="w-full pt-4 p-8 md:p-8">
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
