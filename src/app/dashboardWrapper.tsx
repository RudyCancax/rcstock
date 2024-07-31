"use client";

import Navbar from "@/app/(components)/Navbar";
import { Sidebar } from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";
import state from "@/state";
import { useEffect } from "react";

export const DashboardLayer = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCoillapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  });

  return (
    <div
      className={`flex bg-gray-50 text-gray-900 w-full min-h-screen ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCoillapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export const DashboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StoreProvider>
      <DashboardLayer>{children}</DashboardLayer>
    </StoreProvider>
  );
};
