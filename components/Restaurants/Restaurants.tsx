import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { Title } from "@/components/ui/Title/Title";
import { RestaurantType } from "@/types/Restaurant.types";

export async function Restaurants() {
  try {
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fast-grab.vercel.app";
    const res = await fetch(`${baseUrl}/api/restaurants`);

    if (!res.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    const data = await res.json();

    return (
      <div>
        <Container>
          <Title>Fastest near you</Title>

          <div className="grid gap-4">
            {data?.restaurants?.map((restaurant: RestaurantType) => {
              return (
                <Link
                  href={`/restaurants/${restaurant.id}`}
                  className="relative h-[180px] rounded-[20px] overflow-hidden border border-solid border-[var(--border-grey)] flex flex-col justify-end"
                  key={restaurant.name}
                  style={{
                    backgroundImage: `url("${restaurant.image}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="relative z-5 mb-[30px] ml-[10px]">
                    <h3 className="text-[22px] font-bold">{restaurant.name}</h3>

                    <p className="opacity-70 text-[17px]">{restaurant.kitchen}</p>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-[180px]"
                    style={{
                      background:
                        "linear-gradient(180deg,rgba(7, 15, 40, 0) 0%, rgba(7, 15, 40, 0.4) 25%,rgba(4, 8, 22, 0.6) 46.21010422706604%,rgba(0, 0, 0, 0.9) 100%)",
                    }}
                  />

                  <div className="absolute bottom-[10px] right-[10px] z-5 w-[36px] h-[36px] bg-[#0000008a] outline outline-solid outline-[var(--border-grey)] grid place-content-center rounded-[10px]">
                    <p className="opacity-70">{restaurant.rating}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    );
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return (
      <Container>
        <div>Error loading restaurants. Please try again later.</div>
      </Container>
    );
  }
}
