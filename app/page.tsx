"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { CustomButton } from "@/components/ui/CustomButton/CustomButton";

export default function Welcome() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleRedirectToNextPage = () => {
    if (!session) {
      router.push("/auth");
      return;
    }

    router.push("/home");
  };

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
          <CustomButton onClick={handleRedirectToNextPage} variant="primary" className="w-full">
            <div className="flex items-center gap-[12px]">
              Continue
              <ChevronRight size={16} />
            </div>
          </CustomButton>
        </motion.div>
      </div>
    </>
  );
}
