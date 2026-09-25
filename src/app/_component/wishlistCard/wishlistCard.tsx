"use client";

import { Data } from "@/api/types/wishlistType";
import { cartResponseType, Product } from "@/api/types/cartType";
import { deleteWishlistItem } from "@/api/actions/wishlistActions/deleteWishlistItem";
import { toast } from "@/components/ui/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function WishlistCard({ product }: { product: Data }) {
  const queryClient = useQueryClient();
  const { data: cartData } = useQuery<cartResponseType>({
    queryKey: ["getCart"],
    queryFn: async () => {
      const response = await fetch("/api/cart");

      if (!response.ok) {
        throw new Error("Error.");
      }

      return response.json();
    },
  });
  const isInCart = cartData?.data?.products?.some(
    (item: Product) => item.product._id === product._id,
  );
  const { mutate: deleteItem, isPending } = useMutation({
    mutationFn: deleteWishlistItem,

    onSuccess: (data) => {
      toast.add({
        type: "success",
        description: data.message || "Product deleted successfully",
      });

      queryClient.invalidateQueries({
        queryKey: ["getWishlist"],
      });
    },

    onError: () => {
      toast.add({
        type: "error",
        description: "Failed to delete product",
      });
    },
  });
  const price = product.priceAfterDiscount ?? product.price;
  const hasDiscount = product.priceAfterDiscount !== undefined;
  const isInStock = product.quantity > 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
      <div className="md:col-span-6 flex items-center gap-4">
        <Link
          className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
          href={`/productdetails/${product._id}`}
        >
          <img
            alt={product.title}
            className="w-full h-full object-contain p-2"
            src={product.imageCover}
          />
        </Link>

        <div className="min-w-0">
          <Link
            className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2"
            href={`/productdetails/${product._id}`}
          >
            {product.title}
          </Link>

          <p className="text-sm text-gray-400 mt-1">
            {product.subcategory[0]?.name}
          </p>
        </div>
      </div>
      <div className="md:col-span-2 flex md:justify-center items-center gap-2">
        <span className="md:hidden text-sm text-gray-500">Price:</span>

        <div className="text-right md:text-center">
          <div className="font-semibold text-gray-900">
            {price.toLocaleString()} EGP
          </div>

          {hasDiscount && (
            <div className="text-sm text-gray-400 line-through">
              {product.price.toLocaleString()} EGP
            </div>
          )}
        </div>
      </div>
      <div className="md:col-span-2 flex md:justify-center">
        <span className="md:hidden text-sm text-gray-500 mr-2">Status:</span>

        {isInCart ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-3"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            In Cart
          </span>
        ) : isInStock ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            In Stock
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Out of Stock
          </span>
        )}
      </div>
      <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
        {isInCart ? (
          <Link
            href="/cart"
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M2.25 2.25a.75.75 0 0 1 .75-.75h1.386a1.875 1.875 0 0 1 1.812 1.392l.232.867a60.864 60.864 0 0 1 15.847 1.877.75.75 0 0 1 .525.965 60.358 60.358 0 0 1-2.96 7.228.75.75 0 0 1-.674.421H7.5a2.25 2.25 0 0 0-2.122 1.5h15.372a.75.75 0 0 1 0 1.5H5.1a.75.75 0 0 1-.75-.75 3.752 3.752 0 0 1 2.806-3.63L4.598 4.028a.375.375 0 0 0-.362-.278H3a.75.75 0 0 1-.75-.75v-.75ZM3.75 20.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM16.5 20.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
            </svg>

            <span className="md:hidden lg:inline">View Cart</span>
          </Link>
        ) : isInStock ? (
          <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-green-600 text-white hover:bg-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>

            <span className="md:hidden lg:inline">Add to Cart</span>
          </button>
        ) : null}
        <button
          onClick={() => deleteItem(product._id)}
          disabled={isPending}
          className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50"
          title="Remove"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 1 0 1.5.058l.345-9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
