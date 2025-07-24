import { ReactNode } from "react";
import cn from "classnames";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export function Title({ children, className }: TitleProps) {
  return <h2 className={cn("text-[17px] font-semibold mb-4", className)}>{children}</h2>;
}
