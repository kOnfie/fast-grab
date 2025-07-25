"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container/Container";
import { CustomButton } from "@/components/ui/CustomButton/CustomButton";
import { Title } from "@/components/ui/Title/Title";
import { Plus } from "lucide-react";
import { useCart } from "@/zustand/cart.store";

const ITEMS = [
  {
    id: 1,
    name: "Udon Miso",
    description:
      "Thick handmade udon noodles in a rich miso broth, garnished with tofu, spring onions, and vegetables.",
    price: 16.0,
    image: "/restaurants/item/ramen.jpg",
  },
  {
    id: 2,
    name: "New Item",
    description:
      "Thick handmade udon noodles in a rich miso broth, garnished with tofu, spring onions, and vegetables.",
    price: 16.0,
    image: "/restaurants/item/ramen.jpg",
  },
  {
    id: 3,
    name: "Udon Miso",
    description:
      "Thick handmade udon noodles in a rich miso broth, garnished with tofu, spring onions, and vegetables.",
    price: 16.0,
    image: "/restaurants/item/ramen.jpg",
  },
  {
    id: 4,
    name: "Udon Miso",
    description:
      "Thick handmade udon noodles in a rich miso broth, garnished with tofu, spring onions, and vegetables.",
    price: 16.0,
    image: "/restaurants/item/ramen.jpg",
  },
  {
    id: 5,
    name: "Udon Miso",
    description:
      "Thick handmade udon noodles in a rich miso broth, garnished with tofu, spring onions, and vegetables.",
    price: 16.0,
    image: "/restaurants/item/ramen.jpg",
  },
];

export function RestaurantItems() {
  function formattedText(text: string) {
    return text.slice(0, 40) + "...";
  }

  const addItemToList = useCart((state) => state.addItemToList);

  return (
    <div className="pt-[90px]">
      <Container>
        <Title className="mb-4">Featured Items</Title>

        <div className="grid gap-4">
          {ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative p-5 h-[136px] rounded-[20px] overflow-hidden outline outline-solid outline-[var(--border-grey)]"
              style={{
                background: "linear-gradient(269.95deg,rgba(0, 0, 0, 1) 34%,rgba(44, 43, 106, 1) 100%)",
              }}
            >
              <h3 className="text-[17px] font-semibold mb-[6px]">{item.name}</h3>

              <p className="max-w-[166px] opacity-60">{formattedText(item.description)}</p>

              <p className="text-[var(--blue)]">${item.price}</p>

              <Image
                className="absolute top-0 right-0 h-full"
                src={item.image}
                alt={item.name}
                width={144}
                height={136}
              />

              <CustomButton
                className="absolute bottom-4 right-4 border border-solid border-[var(--violet-border-opacity)]"
                variant="mini"
                onClick={() =>
                  addItemToList({ name: item.name, price: item.price, id: item.id, quantity: 1, image: item.image })
                }
              >
                <Plus size={20} color="#fff" />
              </CustomButton>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
