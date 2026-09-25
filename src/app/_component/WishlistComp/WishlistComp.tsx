"use client";

import { wishlistType } from "@/api/types/wishlistType";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import EmptyWishlist from "../EmptyWishlist/EmptyWishlist";
import Link from "next/link";
import WishlistCard from "./../wishlistCard/wishlistCard";

export default function WishlistComp() {
  const { data: wishlistData, isLoading } = useQuery<wishlistType>({
    queryKey: ["getWishlist"],

    queryFn: async () => {
      const response = await fetch("/api/wishlist");

      if (!response.ok) {
        throw new Error("Error.");
      }

      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const products = wishlistData?.data ?? [];

  if (products.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link className="hover:text-green-600 transition-colors" href="/">
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-900 font-medium">Wishlist</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-red-500"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>

              <p className="text-gray-500 text-sm">
                {products.length} {products.length === 1 ? "item" : "items"}{" "}
                saved
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
            <div className="col-span-6">Product</div>

            <div className="col-span-2 text-center">Price</div>

            <div className="col-span-2 text-center">Status</div>

            <div className="col-span-2 text-center">Actions</div>
          </div>

          <div className="divide-y divide-gray-100">
            {products.map((product) => (
              <WishlistCard key={product._id} product={product} />
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <Link
            className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors"
            href="/shop"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
