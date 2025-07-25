"use client";

import { Container } from "@/components/ui/Container/Container";
import { CustomButton } from "@/components/ui/CustomButton/CustomButton";
import { Separator } from "@/components/ui/Separator/Separator";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./phoneInput.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

import googleIcon from "../../public/auth/google.svg";

export default function Auth() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  function validateUserPhone() {
    console.log("phone:", phone);

    router.push("/");
  }

  return (
    <Container className="absolute top-[50%] translate-y-[-50%]">
      <p className="font-semibold text-[20px] mb-[30px]">Enter your mobile number</p>

      <PhoneInput
        country={"ua"}
        value={phone}
        onChange={setPhone}
        onlyCountries={["ua"]}
        masks={{ ua: "(..) ...-...." }}
        inputClass="custom-phone-input"
        buttonClass="custom-phone-flag"
        placeholder="(50) 963-4476"
        disableDropdown={false} // true якщо не потрібен вибір країни
        disableCountryCode={false} // якщо хочеш показати код
        countryCodeEditable={true}
      />

      <CustomButton
        type="button"
        onClick={validateUserPhone}
        variant="secondary"
        className="font-inter w-full font-medium"
      >
        Continue
        <ChevronRight size={16} />
      </CustomButton>

      <Separator variant="secondary" className="mt-[30px] mb-[30px]" />

      <CustomButton className="w-full font-medium" variant="secondary">
        <Image src={googleIcon.src} width={23} height={23} alt="Google" />
        Continue with Goggle
      </CustomButton>
    </Container>
  );
}
