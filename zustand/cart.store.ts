import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Store = {
  cartIsOpen: boolean;
  items: CartItem[];
  toggleCart: () => void;
  addItemToList: (newItem: CartItem) => void;
  removeItemFromList: (productItem: CartItem) => void;
};

export const useCart = create<Store>()((set) => ({
  cartIsOpen: false,
  items: [],
  toggleCart: () => set((state) => ({ cartIsOpen: !state.cartIsOpen })),

  addItemToList: (newItem: CartItem) =>
    set((state) => {
      const existingItem = state.items.findIndex((item: CartItem) => item.name === newItem.name);

      if (existingItem === -1) {
        return { items: [...state.items, newItem] };
      }

      const newItems = [...state.items];
      newItems[existingItem].quantity += 1;

      return { items: newItems };
    }),

  removeItemFromList: (productItem: CartItem) =>
    set((state) => {
      const itemIndex = state.items.findIndex((item) => item.name === productItem.name);
      if (itemIndex === -1) {
        return state;
      }

      const newItems = [...state.items];
      const product = state.items[itemIndex];
      if (product.quantity > 1) {
        newItems[itemIndex].quantity -= 1;
      } else {
        newItems.splice(itemIndex, 1);
      }

      return { items: newItems };
    }),
}));
