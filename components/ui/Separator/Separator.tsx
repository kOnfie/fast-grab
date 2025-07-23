import cn from "classnames";

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return (
    <div className={cn("flex flex-row gap-3 items-center flex-shrink-0 w-full relative", className)}>
      <div className="flex-1 h-px bg-white/20" />
      <span className="text-white/60 text-[14px] leading-[130%] font-normal font-inter">or</span>
      <div className="flex-1 h-px bg-white/20" />
    </div>
  );
}
