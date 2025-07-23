import { InputHTMLAttributes } from "react";
import cn from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
