'use client';

import React from "react";
import Navbar from "../(components)/navbar/page";
import Sidebar from "../(components)/sidebar/page";
import { useAppSelector } from "@/redux/store/store";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {

  // Reads State from Redux Store
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed);

  return (
    <div>
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
          }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardWrapper;