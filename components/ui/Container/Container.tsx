import { ReactNode } from "react";

import cn from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("w-full pr-[20px] pl-[20px] m-auto mt-0 mb-0", className)}>{children}</div>;
}
