"use server";

import { getTokenFun } from "@/utilites/getTokenData";

export async function deleteCartItem(prodID: string) {
  const token = await getTokenFun();
  if (!token) {
    throw new Error("Unauthorized");
  }
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v2/cart/${prodID}`,
      {
        method: `DELETE`,
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
