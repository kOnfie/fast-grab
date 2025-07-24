import { NextResponse } from "next/server";

import { RESTAURANTS } from "@/lib/restaurant.const";

export function GET() {
  return NextResponse.json({ restaurants: RESTAURANTS });
}
