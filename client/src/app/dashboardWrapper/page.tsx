'use client';

import React, { useEffect } from "react";
import Navbar from "../(components)/navbar/page";
import Sidebar from "../(components)/sidebar/page";
import { useAppSelector } from "@/redux/store/store";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {

  // Reads State from Redux Store
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed);

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);


  //  This effect runs on each render.
  //  It adds a dark or light class to the <html> tag.
  //  This allows Tailwind CSS to apply the correct theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);


  return (
    <div className={`${isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
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