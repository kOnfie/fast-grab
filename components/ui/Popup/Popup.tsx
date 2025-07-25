"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

interface PopupProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export function Popup({ isVisible, setIsVisible }: PopupProps) {
  const [isActive, setIsActive] = useState<boolean>(isVisible);

  useEffect(() => {
    setIsActive(isVisible);

    const timer = setTimeout(() => {
      setIsActive(false);
      setIsVisible(false);
    }, 750);

    console.log("render");

    return () => clearTimeout(timer);
  }, [isVisible, setIsVisible]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="fixed bottom-10 right-20 left-20 bg-[var(--bg-black-opacity-10)] p-4 rounded-[20px] border border-solid border-[var(--border-grey)] backdrop-blur-[10px]"
        >
          <p className="text-center font-bold text-[18px]">Item added to cart</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
