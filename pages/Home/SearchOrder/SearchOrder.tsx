import { Container } from "@/components/ui/Container/Container";

import { Search } from "lucide-react";

export function SearchOrder() {
  return (
    <div className="absolute top-[-27px] left-0 w-full">
      <Container>
        <div
          className="border border-solid border-[var(--border-grey)] rounded-[10px] py-3 px-5 flex gap-3 "
          style={{
            backgroundImage: "var(--bg-input-gradient)",
            boxShadow:
              "0px 10px 10px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Search />

          <input type="text" placeholder="Your order?" className="focus:outline-none font-sfpro" />
        </div>
      </Container>
    </div>
  );
}
