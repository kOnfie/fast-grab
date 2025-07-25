"use client";

import { useCart } from "@/zustand/cart.store";
import { House, NotebookTabs, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export const ITEMS = [
  {
    name: "Home",
    icon: <House width={29} height={24} />,
  },
  {
    name: "Cart",
    icon: <ShoppingCart width={25} height={24} />,
  },
  {
    name: "Orders",
    icon: <NotebookTabs width={29} height={24} />,
  },
  {
    name: "Account",
    icon: <User width={23} height={24} />,
  },
];

export function Footer() {
  const [activeParam, setActiveParam] = useState("Home");

  const cartIsOpen = useCart((state) => state.cartIsOpen);
  const toggleCart = useCart((state) => state.toggleCart);

  function handleChangeActiveParam(param: string) {
    if (param === "Cart") {
      toggleCart();
      return;
    }

    setActiveParam(param);
  }

  return (
    <footer
      className="fixed bottom-[5px] right-[10px] left-[10px] z-10 mb-4 bg-black rounded-[30px] border border-solid border-[var(--border-grey)] overflow-hidden"
      style={{
        boxShadow: "inset 0px 2px 12px #403aa2",
      }}
    >
      <div className="flex items-center justify-between py-[14px] px-[26px]">
        {ITEMS.map((item) => {
          return (
            <button
              className={`relative w-[49px] h-[49px] flex flex-col items-center justify-center ${activeParam !== item.name && "opacity-60"}`}
              key={item.name}
              onClick={() => handleChangeActiveParam(item.name)}
            >
              {item.icon}
              <p className="text-[10px] font-medium mt-[2px]">{item.name}</p>

              {activeParam === item.name && (
                <div
                  className="rounded-[50%] w-[39px] h-[34px] absolute top-[0px] left-[5px]"
                  style={{ background: "rgba(50, 136, 244, 0.46)", filter: "blur(10px)" }}
                />
              )}
            </button>
          );
        })}
      </div>
    </footer>
  );
}
