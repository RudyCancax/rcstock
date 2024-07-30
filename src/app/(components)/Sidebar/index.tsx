"use client";

import { Menu } from "lucide-react";

export const Sidebar = () => {
  return (
    <div>
      {/* TOP SECTION */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">STOCK</h1>
        <button
          className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {/* links */}
      <div className="flex-grow mt-8"></div>

      {/* Footer */}
      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2024 R.Can</p>
      </div>
    </div>
  );
};
