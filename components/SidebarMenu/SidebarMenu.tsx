"use client";

import cn from "classnames";

import { CustomButton } from "@/components/ui/CustomButton/CustomButton";
import { useSidebarMenu } from "@/zustand/sidebarMenu.store";
import { Heart, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "../ui/Separator/Separator";
import { useHandleCloseScroll } from "@/hooks/useHandleCloseScroll";

const MENU_ITEMS = [
  {
    name: "Profile",
    icon: <User size={20} color="#fff" />,
  },
  {
    name: "Search",
    icon: <Search size={20} color="#fff" />,
  },
  {
    name: "Favourite",
    icon: <Heart size={20} color="#fff" />,
  },
];

export default function SidebarMenu() {
  const [activeItem, setActiveItem] = useState<string>("Profile");
  console.log("activeItem:", activeItem);

  const toggleSidebar = useSidebarMenu((state) => state.toggleSidebar);
  const sidebarIsOpen = useSidebarMenu((state) => state.sidebarIsOpen);

  useHandleCloseScroll(sidebarIsOpen);

  function handleCloseToggle() {
    toggleSidebar();
  }

  return (
    <div
      className={cn(
        "absolute left-[-100%] top-0 bottom-0 z-1000 w-full h-[100vh] transition-all",
        sidebarIsOpen && "left-[0]"
      )}
    >
      <div className="absolute left-[0%] top-0 bottom-0 z-10 w-[288px] h-full bg-[var(--black-opacity-1)] backdrop-blur-[50px] p-5 border-r border-solid border-[var(--border-grey)] rounded-[20px]">
        <CustomButton onClick={handleCloseToggle} variant="mini" className="rounded-[50%] absolute top-5 right-5">
          <X size={30} color="#fff" />
        </CustomButton>

        <div className="mt-[46px] text-center">
          <div className="w-15 h-15 rounded-[50%] bg-[#171C3B] border-1 border-solid border-[#ffffff4b] grid place-content-center m-auto mb-[13px]">
            <User size={28} color="#fff" />
          </div>

          <p className="font-medium text-[18px]">Firstname Surname</p>
          <p className="font-medium text-[18px]">+380 (50) 963-4476</p>
        </div>

        <Separator className="my-5" />

        <div className="">
          <p className="opacity-70">MENU</p>

          <div>
            {MENU_ITEMS.map((item) => (
              <button
                onClick={() => setActiveItem(item.name)}
                className={cn(
                  "relative flex items-center gap-4 py-[10px] px-5 ",
                  activeItem === item.name && "border-l-[#2670e9]"
                )}
                key={item.name}
                style={{ background: activeItem === item.name ? "var(--bg-blue-gradient)" : "" }}
              >
                {activeItem === item.name && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] h-[44px] bg-[#3079ef] blur-[5px]" />
                )}

                {item.icon}

                <p className="font-medium">{item.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "bg-[var(--black-opacity-1)] backdrop-blur-[20px] absolute top-0 bottom-0 right-0 h-full w-full scale-0",
          sidebarIsOpen && "scale-100"
        )}
        onClick={toggleSidebar}
      />
    </div>
  );
}
