import React from "react";
import CheckoutForm from "../CheckoutForm";

type props = {
  params: {
    cartId: string;
  };
};

export default async function checkout(props: props) {
  const params = await props.params;
  const { cartId } = params;
  return <CheckoutForm cartId={cartId} />;
}
