import { CustomLink } from "@/components/ui/CustomLink/CustomLink";

import { ChevronRight } from "lucide-react";

export default function Welcome() {
  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-[-50%]">
        <h1 className="text-[60px] font-semibold text-center">FastGrab</h1>
      </div>

      <div className="absolute bottom-[94px] left-[21px] right-[21px]">
        <p className="font-bold text-[28px] mb-[24px]">Get Started with FastGrab</p>

        <CustomLink variant="primary" href="/home" className="w-full">
          <div className="flex items-center gap-[12px]">
            Continue
            <ChevronRight size={16} />
          </div>
        </CustomLink>
      </div>
    </>
  );
}
