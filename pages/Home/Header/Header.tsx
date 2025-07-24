import { Container } from "@/components/ui/Container/Container";
import { Burger } from "./components/Burger/Burger";
import { CustomButton } from "@/components/ui/CustomButton/CustomButton";
import { ChevronLeft, Ellipsis } from "lucide-react";
import { CustomLink } from "@/components/ui/CustomLink/CustomLink";

interface HeaderProps {
  variant: "primary" | "secondary";
}

export function Header({ variant }: HeaderProps) {
  switch (variant) {
    case "primary":
      return (
        <header className="pt-2 pl-3 pb-[38px] bg-[#00000031]">
          <Container>
            <div className="flex gap-[28px] items-center">
              <Burger />

              <div className="">
                <p className="font-regular text-[15px] text-white opacity-70">Deliver now</p>
                <h6 className="text-white text-[20px] font-semibold">Maplewood Suites</h6>
              </div>
            </div>
          </Container>
        </header>
      );

    case "secondary":
      return (
        <header className="fixed top-0 right-0 left-0 z-50 bg-[var(--black-opacity-1)] backdrop-blur-[20px] pt-2">
          <Container>
            <div className="flex justify-between">
              <CustomLink href="/home" variant="mini">
                <ChevronLeft size={20} color="#fff" strokeWidth={1.25} />
              </CustomLink>

              <CustomButton variant="mini">
                <Ellipsis size={20} color="#fff" />
              </CustomButton>
            </div>
          </Container>
        </header>
      );

    default:
      return null;
  }
}
