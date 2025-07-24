import Image from "next/image";

interface RestaurantInfoProps {
  name: string;
  address: string;
  price: number;
  time: number;
  rating: number;
  reviews: number;
  icon: string;
}

export function RestaurantInfo({ name, address, price, time, rating, reviews, icon }: RestaurantInfoProps) {
  return (
    <div className="absolute top-[244px] right-5 left-5 backdrop-blur-[5px]">
      <div
        className="border border-solid border-[var(--border-grey)] rounded-[20px] px-4 py-6"
        style={{
          background:
            "linear-gradient(180deg,rgba(23, 26, 73, 0) 0%,rgba(43, 42, 109, 1) 55.5569589138031%,rgba(0, 0, 0, 0) 55.806803703308105%,rgba(0, 0, 0, 0.5) 100%)",
        }}
      >
        <div className="flex gap-4 mb-5">
          <div
            className="w-15 h-15 border border-solid border-[var(--border-grey)] rounded-[50%] overflow-hidden"
            style={{
              backgroundImage: `url(${icon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="flex flex-col justify-between">
            <h3 className="text-[22px] font-bold">{name}</h3>
            <p className="opacity-60 text-[15px]">{address}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="inline-block">
            <p className="text-[13px]">Delivery Free</p>
            <p className="text-[15px] text-[var(--blue)]">${price}</p>
          </div>

          <div className="w-[1px] h-[30px] bg-white opacity-10" />

          <div className="inline-block">
            <p className="text-[13px]">Delivery Time</p>
            <p className="text-[15px] text-[var(--blue)]">{time} min</p>
          </div>

          <div className="w-[1px] h-[30px] bg-white opacity-10" />

          <div className="inline-block">
            <p className="text-[13px]">Rating/Review</p>
            <p className="text-[15px] text-[var(--blue)]">
              {rating}({reviews})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
