import { NextRequest } from "next/server";

const API_URL = "https://api.bookingmood.com/v1";

export async function POST(request: NextRequest) {
  const { member_id, product_id } = await request.json();

  await fetch(`${API_URL}/revoke-member?id=${member_id}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.BOOKINGMOOD_API_KEY}` },
  });

  await fetch(`${API_URL}/delete-product?id=${product_id}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.BOOKINGMOOD_API_KEY}` },
  });

  return new Response("OK");
}
