"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import cn from "classnames";

import { CustomButton } from "../ui/CustomButton/CustomButton";

import googleIcon from "../../public/auth/google.svg";

interface GoogleAuthProps {
  className?: string;
}

export const GoogleAuth = ({ className }: GoogleAuthProps) => {
  const handleSinginToApp = () => {
    signIn("google", { callbackUrl: "/home" });
  };

  return (
<CustomButton onClick={handleSinginToApp} className={cn("w-full font-medium", className)} variant="secondary">
      <Image src={googleIcon.src} width={23} height={23} alt="Google" />
      Continue with Goggle
    </CustomButton>
  );
};
