"use client";

import { useSidebarMenu } from "@/zustand/sidebarMenu.store";

export default function Burger() {
  const toggleSidebar = useSidebarMenu((state) => state.toggleSidebar);

  return (
    <button
      onClick={toggleSidebar}
      className="flex flex-col gap-1.5 justify-center items-center w-[23px] h-[18px] cursor-pointer"
    >
      <span className="block w-full h-0.5 bg-white rounded-sm"></span>
      <span className="block w-full h-0.5 bg-white rounded-sm"></span>
      <span className="block w-full h-0.5 bg-white rounded-sm"></span>
    </button>
  );
}
