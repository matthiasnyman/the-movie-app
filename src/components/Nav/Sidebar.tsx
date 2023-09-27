"use client";

import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { MenuItems } from "./menuItems";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const Sidebar = ({ isSidebarOpen }: any) => {
  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-72 h-screen bg-neutral-900 border-r border-gray-600 flex-none transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      }`}
      aria-label="Sidebar"
    >
      <div className={"bg-neutral-900 flex-none w-74 h-screen"}>
        <h3 className=" w-full pt-8 font-semibold text-2xl text-white text-center">
          Movies
        </h3>
        <nav className="flex justify-center items-center h-screen">
          {/* nav items */}
          <ul className="py-2 flex flex-col gap-2">
            {MenuItems.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <li
                    className={classNames({
                      "text-white hover:bg-gray": true, //colors
                      "flex gap-4 items-center ": true, //layout
                      "transition-colors duration-300": true, //animation
                      "rounded-md p-2 mx-2": true, //self style
                    })}
                  >
                    {item.icon} {item.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
