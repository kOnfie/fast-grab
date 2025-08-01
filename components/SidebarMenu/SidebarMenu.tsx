"use client";

import cn from "classnames";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { CustomButton } from "@/components/ui/CustomButton/CustomButton";
import { useSidebarMenu } from "@/zustand/sidebarMenu.store";
import { CircleQuestionMark, Cog, Heart, House, LogOut, NotebookTabs, Search, User, X } from "lucide-react";
import { Separator } from "../ui/Separator/Separator";
import { useHandleCloseScroll } from "@/hooks/useHandleCloseScroll";

import "./SidebarMenu.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { UserProfileSkeleton } from "./components/UserProfileSkeleton/UserProfileSkeleton";

const MENU_ITEMS = [
  {
    name: "Home",
    icon: <House width={20} height={24} />,
  },
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
  {
    name: "Orders",
    icon: <NotebookTabs size={20} color="#fff" />,
  },
  {
    name: "Exit",
    icon: <LogOut size={20} color="#fff" />,
    handle: () => {
      signOut();
    },
  },
];

const SUPPORT_ITEMS = [
  {
    name: "Settings and Privacy",
    icon: <Cog width={18} height={20} color="#fff" />,
  },
  {
    name: "Help center",
    icon: <CircleQuestionMark width={17} height={20} color="#fff" />,
  },
];

export default function SidebarMenu() {
  const toggleSidebar = useSidebarMenu((state) => state.toggleSidebar);
  const sidebarIsOpen = useSidebarMenu((state) => state.sidebarIsOpen);

  const router = useRouter();

  const { data: session, status } = useSession();
  console.log("session:", session);
  console.log("status:", status);

  useHandleCloseScroll(sidebarIsOpen);

  function handleCloseToggle() {
    toggleSidebar();
  }

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/auth");
    }
  }, [session, router, status]);

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

        {status === "loading" ? (
          <UserProfileSkeleton />
        ) : (
          <div className="mt-[46px] text-center">
            <div className="w-15 h-15 rounded-[50%] bg-[#171C3B] border-1 border-solid border-[#ffffff4b] grid place-content-center m-auto mb-[13px] overflow-hidden">
              {session && session?.user ? (
                <Image src={session?.user?.image || ""} alt={session?.user?.name || ""} width={60} height={60} />
              ) : (
                <User size={28} color="#fff" />
              )}
            </div>

            <p className="font-medium text-[18px]">{session?.user?.name}</p>
            <p className="font-medium text-[12px] opacity-60">{session?.user?.email}</p>
          </div>
        )}

        <Separator className="my-5 w-full" />

        <div className="uppercase ml-[44px]">
          <p className="opacity-70 text-[13px]">MENU</p>

          <div>
            {MENU_ITEMS.map((item) => (
              <button
                onClick={item.handle}
                className={cn("relative flex items-center gap-4 py-[10px] px-5 w-full sidebar-btn")}
                key={item.name}
              >
                {item.icon}

                <p className="font-medium">{item.name}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-20 left-5 right-5">
          <Separator className="my-5 w-full" />

          <div className="">
            <p className="opacity-70 uppercase text-[13px]">Settings and Support</p>

            <div>
              {SUPPORT_ITEMS.map((item) => (
                <Link
                  href={"/"}
                  className={cn("relative flex items-center gap-[13px] py-[10px] px-5 w-full sidebar-btn")}
                  key={item.name}
                >
                  {item.icon}

                  <p className="font-medium text-[14px]">{item.name}</p>
                </Link>
              ))}
            </div>
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
