import { Container } from "@/components/ui/Container/Container";
import { CustomButton } from "@/components/ui/CustomButton/CustomButton";
import { Input } from "@/components/ui/Input/Input";
import { Separator } from "@/components/ui/Separator/Separator";
import { ChevronRight } from "lucide-react";

export default function Auth() {
  return (
    <Container className="absolute top-[50%] translate-y-[-50%]">
      <p className="font-semibold text-[20px] mb-[30px]">Enter your mobile number</p>

      <form>
        <div className="flex gap-[7px] justify-center mb-[20px] px-[30px] py-[10px] rounded-[10px] border border-solid  bg-[var(--container,rgba(0,0,0,0.5))] border-[#49499a] font-medium">
          <p>+380</p>
          <Input
            type="number"
            inputMode="numeric"
            placeholder="(50) 963-4476"
            maxLength={9}
            required
            className="max-w-[115px]"
          />
        </div>

        <CustomButton type="submit" variant="secondary" className="font-inter w-full font-medium">
          Continue
          <ChevronRight size={16} />
        </CustomButton>
      </form>

      <Separator className="mt-[30px] mb-[30px]" />

      <CustomButton className="w-full font-medium" variant="secondary">
        Continue with Goggle
      </CustomButton>
    </Container>
  );
}
