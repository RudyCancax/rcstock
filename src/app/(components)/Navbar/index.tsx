"use client";

import { Bell, Menu, Settings, SlidersIcon, Sun } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="rounded-full bg-gray-100 p-3 hover:bg-blue-100"
          onClick={() => console.log("hw")}
        >
          <Menu className="h-4 w-4" />
        </button>
        <span className="text-xl font-bold ml-2">Dashboard</span>

        <div className="relative">
          <input
            type="search"
            placeholder="Search Products"
            className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-between gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={() => {}}>
              <Sun className="cursor-pinter text-gray-500" size={24} />
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs leading-none bg-red-400 rounded-full">
              3
            </span>
          </div>

          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">R.Can.</span>
          </div>

          <Link href="/settings">
            <Settings className="cursor-pointer text-gray-500" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
