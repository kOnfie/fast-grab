"use client";
import Image from "next/image";

import cn from "classnames";

import { ChevronRight, X } from "lucide-react";
import { CustomButton } from "../ui/CustomButton/CustomButton";
import { useCart } from "@/zustand/cart.store";
import { Separator } from "../ui/Separator/Separator";
import { useHandleCloseScroll } from "@/hooks/useHandleCloseScroll";
import { Counter } from "../Counter/Counter";

export function Cart() {
  const cartIsOpen = useCart((state) => state.cartIsOpen);
  const toggleCart = useCart((state) => state.toggleCart);

  const items = useCart((state) => state.items);
  const addItemToList = useCart((state) => state.addItemToList);
  const removeItemFromList = useCart((state) => state.removeItemFromList);

  useHandleCloseScroll(cartIsOpen);

  console.log("items:", items);

  const subTotal = items.reduce((prevValue, item) => prevValue + item.price * item.quantity, 0);

  return (
    <div
      className={cn(
        "fixed bottom-[-100%] left-0 right-0 w-full bg-[var(--white-opacity-10)] z-100 border border-solid border-[var(--border-grey)] rounded-t-[30px] p-5 pb-[10px] backdrop-blur-[10px] transition-all",
        cartIsOpen && "bottom-[0%]"
      )}
      style={{
        boxShadow:
          " 0px 10px 10px 0px rgba(0, 0, 0, 0.1),0px 4px 4px 0px rgba(0, 0, 0, 0.05),0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex items-center gap-[12px] mb-6">
        <CustomButton onClick={toggleCart} variant="mini" className="rounded-[10px]">
          <X size={30} color="#fff" />
        </CustomButton>

        <div className="flex flex-col justify-between">
          <h3 className="text-[18px] font-medium">Cart</h3>
          {/* <p className="opacity-60">1532 Rue Saint-Laurent, Montreal</p> */}
        </div>
      </div>

      <div className="pb-[100px]">
        <p className="text-[15px] opacity-60 mb-[11px]">{items.length} items</p>

        <Separator className="w-full" />

        <div>
          {items.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-center text-[17px] font-semibold py-[10px]">
                <p>{item.name}</p>
                <Image className="rounded-[10px]" src={item.image} width={60} height={60} alt={item.name} />
              </div>

              <div className="flex justify-between items-center">
                <Counter
                  count={item.quantity}
                  handlePlusAction={() =>
                    addItemToList({ name: item.name, price: item.price, id: item.id, quantity: 1, image: item.image })
                  }
                  handleMinusAction={() =>
                    removeItemFromList({
                      name: item.name,
                      price: item.price,
                      id: item.id,
                      quantity: 1,
                      image: item.image,
                    })
                  }
                />

                <p className="opacity-60 text-[17px]">${item.quantity * item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="w-full mt-5" />

        <input
          className="w-full bg-[var(--black-opacity-20)] text-[17px] py-[21px] px-5 mt-5 rounded-[10px] focus:outline focus:outline-solid focus:outline-[var(--border-grey)]"
          type="text"
          placeholder="Add a note to the order"
        />

        <div className="flex justify-between mt-5">
          <h3 className="text-[20px] font-semibold">Subtotal</h3>

          <p className="opacity-60 text-[17px]">${subTotal}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[var(--black-opacity-60)] px-[21.5px] pt-[30px] pb-[10px]">
        <CustomButton variant="primary" className="w-full">
          <div className="flex items-center gap-4">
            Checkout
            <ChevronRight size={16} />
          </div>
        </CustomButton>
      </div>
    </div>
  );
}
