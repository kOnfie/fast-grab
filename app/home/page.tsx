import Image from "next/image";

import { Header } from "@/components/Header/Header";
import { SearchOrder } from "@/components/SearchOrder/SearchOrder";
import { Categories } from "@/components/Categories/Categories";
import { Discounts } from "@/components/Discounts/Discounts";
import { Footer } from "@/components/Footer/Footer";
import { Restaurants } from "@/components/Restaurants/Restaurants";

import backgroundImage from "../../public/main/bacgkround.jpg";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";

export default function Home() {
  return (
    <>
      <Image src={backgroundImage} className="absolute top-0 left-0" alt="background h-[80%] z-1" />

      <div className="relative z-50 h-[100vh] flex flex-col">
        <Header variant="primary" />

        <SidebarMenu />

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
