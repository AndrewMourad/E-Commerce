"use server";

import { shippingData } from "@/app/checkout/CheckoutForm";
import { getTokenFun } from "@/utilites/getTokenData";

export async function payCash(cartId: string, shippingAddress: shippingData) {
  const token = await getTokenFun();
  if (!token) {
    throw new Error("Unauthorized");
  }
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
      {
        method: `POST`,
        body: JSON.stringify({
          shippingAddress: shippingAddress,
        }),
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) throw new Error("Unauthorized");
    const payload = await response.json();
    return payload;
  } catch (error) {
    throw new Error("Unauthorized");
  }
}
