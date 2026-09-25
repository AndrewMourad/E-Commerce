"use client";

import React, { ReactNode } from "react";
import { toast } from "@/components/ui/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist } from "@/api/actions/wishlistActions/addToWishlist";

export default function AddWishlistBtn({
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
    mutationFn: addToWishlist,

    onSuccess: (data) => {
      toast.add({
        type: "success",
        description: data.message,
      });
      query.invalidateQueries({ queryKey: ["getWishlist"] });
    },

    onError: () => {
      toast.add({
        type: "error",
        description: "Error.",
      });
    },
  });

  function handleAddToWishlist() {
    mutate(prodId);
  }
  return (
    <button onClick={handleAddToWishlist} className={cls}>
      {child}
    </button>
  );
}
