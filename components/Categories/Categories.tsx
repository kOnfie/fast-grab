import Image from "next/image";
import { CATEGORIES } from "./Categories.const";
import { Container } from "@/components/ui/Container/Container";
import { Title } from "@/components/ui/Title/Title";

export function Categories() {
  return (
    <div className="pt-9 mb-[17px]">
      <Container>
        <Title>Categories</Title>
      </Container>

      <div
        className="flex gap-4 px-5 overflow-x-scroll"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {CATEGORIES.map((category) => {
          return (
            <div key={category.icon}>
              <div className="w-20 h-20 bg-[#0000007b] rounded-[10px] grid place-content-center py-[10px] px-[12px] mb-2 border border-solid border-[var(--border-grey)]">
                <Image
                  src={`/categories/${category.icon}`}
                  alt={category.name}
                  className="w-full"
                  width={55}
                  height={55}
                />
              </div>

              <p className="text-[17px] font-semibold text-center">{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
