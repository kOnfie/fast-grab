import { DISCOUNTS } from "./Discounts.consts";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { CustomLink } from "@/components/ui/CustomLink/CustomLink";

export function Discounts() {
  return (
    <div
      className="px-5 h-[193px] flex gap-4 overflow-x-scroll mb-5"
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {DISCOUNTS.map((discount) => {
        return (
          <div
            className="bg-[var(--black-opacity-50)] min-w-[320px] w-[320px] h-full relative overflow-hidden rounded-[10px] border border-solid border-[var(--border-grey)]"
            key={discount.title}
          >
            <Image
              src={`/discounts/${discount.icon}`}
              alt={discount.icon}
              width={272}
              height={272}
              className={
                discount.type === "primary"
                  ? "absolute right-[-60px] bottom-[-40px] z-1"
                  : "absolute right-[-80px] bottom-[-110px] z-1"
              }
            />

            {discount.type === "primary" ? (
              <div
                className="rounded-[50%] w-[145px] h-[151px] absolute right-0 bottom-0"
                style={{
                  background:
                    "linear-gradient(110.71deg,rgba(255, 32, 32, 0.6) 0%,rgba(239, 50, 95, 0.6) 49.14666712284088%,rgba(89, 36, 138, 0.6) 100%)",
                  filter: "blur(30px)",
                }}
              />
            ) : (
              <div
                className="rounded-[50%] w-[145px] h-[151px] absolute right-0 bottom-0"
                style={{
                  background:
                    "linear-gradient(110.71deg,rgba(196, 107, 226, 0.6) 0%,rgba(168, 88, 195, 0.6) 49.14666712284088%,rgba(143, 72, 167, 0.6) 100%)",
                  filter: "blur(30px)",
                }}
              />
            )}

            <div className="relative z-5 h-full ml-5 flex flex-col justify-center">
              <div
                className="w-[199px] h-[72px] absolute left-[-14px] bottom-5"
                style={{
                  background: "linear-gradient(182deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.8) 100%)",
                  filter: "blur(30px)",
                }}
              />

              <h5 className="mb-2 text-[24px] font-medium text-[var(--light-grey)]">{discount.title}</h5>
              <p className="text-[14px] font-regular text-[var(--white-opacity-70)] max-w-[178px] mb-5">
                {discount.subtitle}
              </p>

              <CustomLink href="/" variant="primary" className="w-[157px] h-[36px] ">
                <div className="flex items-center gap-2">
                  Order now <ChevronRight size={16} />
                </div>
              </CustomLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
