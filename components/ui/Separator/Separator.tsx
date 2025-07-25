import cn from "classnames";

interface SeparatorProps {
  className?: string;

  variant?: "primary" | "secondary";
}

export function Separator({ className, variant = "primary" }: SeparatorProps) {
  switch (variant) {
    case "primary":
      return (
        <div
          className={cn("w-[220px] h-[1px]", className)}
          style={{
            background: "radial-gradient(closest-side,rgba(255, 255, 255, 0.2) 0%,rgba(255, 255, 255, 0) 100%)",
          }}
        />
      );

    case "secondary":
      return (
        <div className={cn("flex flex-row gap-3 items-center flex-shrink-0 w-full relative", className)}>
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-white/60 text-[14px] leading-[130%] font-normal font-inter">or</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>
      );

    default:
      return null;
  }
}
