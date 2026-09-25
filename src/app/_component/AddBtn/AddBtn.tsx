"use client";

import { addToCart } from "@/api/actions/CartActions/addToCart";
import React, { ReactNode } from "react";
import { toast } from "@/components/ui/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddBtn({
  cls,
  child,
  prodId,
}: {
  cls: string;
  child: ReactNode;
  prodId: string;
}) {
  const query = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addToCart,

    onSuccess: (data) => {
      toast.add({
        type: "success",
        description: data.message,
      });
      query.invalidateQueries({ queryKey: ["getCart"] });
    },

    onError: () => {
      toast.add({
        type: "error",
        description: "Error.",
      });
    },
  });

  function handleAddToCart() {
    mutate(prodId);
  }

  return (
    <button onClick={handleAddToCart} className={cls}>
      {child}
    </button>
  );
}
