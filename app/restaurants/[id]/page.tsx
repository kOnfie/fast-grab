import { Header } from "@/pages/Home/Header/Header";
import { RestaurantInfo } from "@/pages/Restaurant/RestaurantInfo/RestaurantInfo";
import { RestaurantItems } from "@/pages/Restaurant/RestaurantItems/RestaurantItems";

export default async function RestaurantById({ params }: { params: { id: string } }) {
  try {
    const { id } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/restaurants/${id}`);

    const restaurant = await res.json();

    return (
      <>
        <Header variant="secondary" />

        <main className="pb-4">
          <div
            className="w-full h-[340px]"
            style={{
              backgroundImage: `url(${restaurant.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <RestaurantInfo
            name={restaurant.name}
            address={restaurant.address}
            price={restaurant.delivery.price}
            time={restaurant.delivery.time}
            rating={restaurant.rating}
            reviews={restaurant.reviews}
            icon={restaurant.icon}
          />

          <RestaurantItems />
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return <div>Error loading restaurant data. Please try again later.</div>;
  }
}
