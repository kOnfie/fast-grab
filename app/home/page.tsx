import Image from "next/image";

import { Header } from "@/pages/Home/Header/Header";
import { SearchOrder } from "@/pages/Home/SearchOrder/SearchOrder";
import { Categories } from "@/pages/Home/Categories/Categories";
import { Discounts } from "@/pages/Home/Discounts/Discounts";
import { Footer } from "@/pages/Home/Footer/Footer";
import { Restaurants } from "@/pages/Home/Restaurants/Restaurants";

import backgroundImage from "../../public/main/bacgkround.jpg";

export default function Home() {
  return (
    <>
      <Image src={backgroundImage} className="absolute top-0 left-0" alt="background h-[80%] z-1" />

      <div className="relative z-50 h-[100vh] flex flex-col">
        <Header variant="primary" />

        <main className="bg-[#0000008f] backdrop-blur-xl relative flex-1 pb-[115px]">
          <SearchOrder />

          <Categories />

          <Discounts />

          <Restaurants />
        </main>

        <Footer />
      </div>
    </>
  );
}
