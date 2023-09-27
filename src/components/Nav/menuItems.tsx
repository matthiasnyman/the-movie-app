import React from "react";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const MenuItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "discover",
    href: "/discover",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
];
