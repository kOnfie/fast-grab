import { Container } from "@/components/ui/Container/Container";
import { Title } from "@/components/ui/Title/Title";

export function RestaurantsSkeleton() {
  return (
    <Container>
      <Title>Fastest near you</Title>

      <div className="grid gap-4">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="relative h-[180px] rounded-[20px] overflow-hidden border border-solid border-[var(--border-grey)] flex flex-col justify-end animate-pulse bg-[var(--skeleton-bg,#181c2f)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#23293f] via-[#23293fa0] to-[#23293f58] pointer-events-none" />

            <div
              className="absolute bottom-0 left-0 right-0 h-[180px]"
              style={{
                background:
                  "linear-gradient(180deg,rgba(7, 15, 40, 0) 0%, rgba(7, 15, 40, 0.4) 25%,rgba(4, 8, 22, 0.6) 46.2%,rgba(0, 0, 0, 0.9) 100%)",
              }}
            />

            <div className="relative z-5 mb-[30px] ml-[10px]">
              <div className="h-[26px] w-[110px] bg-[#22273d] rounded-[7px] mb-2" />
              <div className="h-[18px] w-[60px] bg-[#22273d] rounded-[7px] opacity-70" />
            </div>

            <div className="absolute bottom-[10px] right-[10px] z-5 w-[36px] h-[36px] bg-[#22273dae] outline outline-solid outline-[var(--border-grey)] grid place-content-center rounded-[10px]">
              <div className="w-[22px] h-[18px] bg-[#252a40] rounded-full opacity-70" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
