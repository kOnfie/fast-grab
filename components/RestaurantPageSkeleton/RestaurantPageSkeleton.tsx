import { Header } from "@/components/Header/Header";
import { Container } from "@/components/ui/Container/Container";
import { Title } from "@/components/ui/Title/Title";

export function RestaurantPageSkeleton() {
  return (
    <>
      <Header variant="secondary" />

      <main className="pb-4">
        {/* Skeleton background */}
        <div
          className="
            w-full h-[340px]
            bg-[linear-gradient(90deg,_rgba(30,40,90,0.7)_0%,_rgba(40,55,98,0.4)_100%)]
            relative overflow-hidden
          "
          style={{
            backgroundAttachment: "fixed",
            backgroundSize: "123%",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Можна додати shimmer-ефект */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c2fff] via-[#23293fa9] to-transparent animate-pulse" />
        </div>

        {/* Skeleton RestaurantInfo */}
        <div className="absolute top-[244px] right-5 left-5 z-30">
          <div
            className="
              border border-solid border-[var(--border-grey)] rounded-[20px] px-4 py-6
              animate-pulse
              bg-[linear-gradient(180deg,_rgba(23,26,73,0)_0%,rgba(43,42,109,1)_56%,rgba(0,0,0,0.5)_100%)]
            "
          >
            <div className="flex gap-4 mb-5">
              {/* Іконка ресторану */}
              <div className="w-15 h-15 border border-solid border-[var(--border-grey)] rounded-full bg-[#242948] flex-shrink-0" />
              <div className="flex flex-col justify-between">
                <div className="h-[26px] w-[115px] rounded-md bg-[#2a3053] mb-2" />
                <div className="h-[18px] w-[85px] rounded bg-[#2a3053] opacity-60" />
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <div className="h-4 w-[70px] rounded bg-[#23273f] mb-1" />
                <div className="h-5 w-[40px] rounded bg-[#3079ef33]" />
              </div>
              <div className="w-[1px] h-[30px] bg-white opacity-10" />
              <div>
                <div className="h-4 w-[74px] rounded bg-[#23273f] mb-1" />
                <div className="h-5 w-[46px] rounded bg-[#3079ef33]" />
              </div>
              <div className="w-[1px] h-[30px] bg-white opacity-10" />
              <div>
                <div className="h-4 w-[90px] rounded bg-[#23273f] mb-1" />
                <div className="h-5 w-[52px] rounded bg-[#3079ef33]" />
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton Items */}
        <div className="pt-[90px]">
          <Container>
            <Title className="mb-4">Featured Items</Title>
            <div className="grid gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="relative p-5 h-[136px] rounded-[20px] overflow-hidden outline outline-solid outline-[var(--border-grey)] animate-pulse
                  bg-[linear-gradient(269.95deg,rgba(0,0,0,1)_34%,rgba(44,43,106,1)_100%)]
                  "
                >
                  {/* Назва */}
                  <div className="h-[20px] w-[90px] bg-[#23273f] rounded mb-2" />
                  {/* Опис */}
                  <div className="h-[14px] w-[160px] bg-[#23273f] rounded mb-2 opacity-60" />
                  {/* Ціна */}
                  <div className="h-[15px] w-[29px] bg-[#3079ef33] rounded" />
                  {/* Фото страви */}
                  <div className="absolute top-0 right-0 h-full w-[144px] bg-[#252a40] rounded-l-[20px]" />
                  {/* Кнопка добавити */}
                  <div className="absolute bottom-4 right-4 w-[36px] h-[36px] bg-[#252a4085] rounded-[10px] border border-solid border-[var(--violet-border-opacity)]" />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
