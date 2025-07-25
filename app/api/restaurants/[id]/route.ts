import { NextResponse } from "next/server";

import { RESTAURANTS_BY_ID } from "@/lib/restaurant.const";
import { RestaurantType } from "@/types/Restaurant.types";

export async function GET(_: unknown, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const restaurant = RESTAURANTS_BY_ID.filter((restaurant: RestaurantType) => restaurant.id === +id);

  if (!restaurant) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(restaurant[0]);
}
