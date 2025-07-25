"use client";

import { motion } from "framer-motion";

import { CustomLink } from "@/components/ui/CustomLink/CustomLink";

import { ChevronRight } from "lucide-react";

export default function Welcome() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[50%] left-[50%] translate-[-50%]"
      >
        <h1 className="text-[60px] font-semibold text-center">FastGrab</h1>
      </motion.div>

      <div className="absolute bottom-[94px] left-[21px] right-[21px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold text-[28px] mb-[24px]"
        >
          Get Started with FastGrab
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <CustomLink variant="primary" href="/home" className="w-full">
            <div className="flex items-center gap-[12px]">
              Continue
              <ChevronRight size={16} />
            </div>
          </CustomLink>
        </motion.div>
      </div>
    </>
  );
}
