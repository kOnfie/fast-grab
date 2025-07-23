import { AnchorHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import Link from "next/link";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;

  variant: "primary" | "secondary";
}

export function CustomLink({ children, className, href, variant, ...props }: CustomLinkProps) {
  switch (variant) {
    case "primary":
      return (
        <Link
          href={href}
          className={cn(
            "relative px-[30px] py-[10px] rounded-[10px] flex flex-row gap-3 items-center justify-center overflow-hidden transition",
            "border border-[var(--button-border-gradient)]",
            className
          )}
          style={{
            background: "var(--button-border-gradient) padding-box, var(--button-bg) border-box",
            boxShadow: "var(--button-box-shadow)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            backgroundClip: "padding-box, border-box",
            backgroundOrigin: "padding-box, border-box",
          }}
          {...props}
        >
          <span
            className="absolute inset-0 rounded-[10px] pointer-events-none"
            style={{
              background: "var(--button-glow2)",
              border: "1px solid rgba(255,255,255,0.1)",
              filter: "blur(30px)",
            }}
          />
          <span
            className="relative text-[14px] leading-[20px] font-medium"
            style={{
              color: "var(--foreground-primary)",
            }}
          >
            {children}
          </span>
        </Link>
      );

    case "secondary":
      return (
        <Link
          href={href}
          className={cn(
            "relative flex flex-row items-center justify-center gap-[12px] px-[30px] py-[10px] rounded-[10px] border border-solid flex-shrink-0 bg-[var(--container,rgba(0,0,0,0.5))] border-[#49499a]",
            className
          )}
        >
          {children}
        </Link>
      );

    default:
      return null;
  }
}
