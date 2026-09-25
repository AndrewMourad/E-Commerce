"use client";
import { clearCart } from "@/api/actions/CartActions/clearCart";
import { deleteCartItem } from "@/api/actions/CartActions/deleteCartItem";
import { updateCart } from "@/api/actions/CartActions/updateCartItem";
import { cartResponseType } from "@/api/types/cartType";
import { toast } from "@/components/ui/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import EmptyCart from "../EmptyCart/EmptyCart";
import OrderSummary from "../OrderSummary/OrderSummary";

export default function CartComp() {
  const query = useQueryClient();
  const { data: cartData, isLoading } = useQuery<cartResponseType>({
    queryKey: ["getCart"],
    queryFn: async () => {
      const response = await fetch("/api/cart");
      if (!response.ok) throw new Error("Error.");
      return response.json();
    },
  });

  const { data: delData, mutate: delCartItem } = useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Product Deleted successfully",
      });
      query.invalidateQueries({ queryKey: ["getCart"] });
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Failed",
      });
    },
  });

  const { data: updateData, mutate: updateCartItem } = useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Count updated successfully",
      });
      query.invalidateQueries({ queryKey: ["getCart"] });
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Failed",
      });
    },
  });

  function handleUpdateCart(prodId: string, count: number) {
    updateCartItem({ prodId, count });
  }

  const { data: clearData, mutate: clearCartItems } = useMutation({
    mutationFn: clearCart,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Cart deleted successfully",
      });
      query.invalidateQueries({ queryKey: ["getCart"] });
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Failed",
      });
    },
  });

  function handleClearCart() {
    clearCartItems();
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const products = cartData?.data?.products ?? [];
  const totalCartPrice = cartData?.data?.totalCartPrice ?? 0;
  const numOfCartItems = cartData?.numOfCartItems ?? 0;

  if (products.length === 0) {
    return <EmptyCart />;
  }
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <a href="/" className="hover:text-green-600 transition">
                Home
              </a>
              <span>/</span>
              <span className="text-gray-900 font-medium">Shopping Cart</span>
            </nav>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="bg-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                  </span>
                  Shopping Cart
                </h1>
                <p className="text-gray-500 mt-2">
                  You have{" "}
                  <span className="font-semibold text-green-600">
                    {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"}
                  </span>{" "}
                  in your cart
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {products.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <a
                        href={`/products/${item.product.id}`}
                        className="relative shrink-0 group"
                      >
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
                          <img
                            src={item.product.imageCover}
                            alt={item.product.title}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </a>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="mb-3">
                          <a
                            href={`/products/${item.product.id}`}
                            className="group/title"
                          >
                            <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg">
                              {item.product.title}
                            </h3>
                          </a>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="inline-block px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                              {item.product.category.name}
                            </span>
                          </div>
                        </div>
                        <div className="mb-4">
                          <span className="text-green-600 font-bold text-lg">
                            {item.price} EGP
                          </span>
                        </div>
                        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                          {/* Quantity */}
                          <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                            <button
                              onClick={() => {
                                handleUpdateCart(
                                  item.product._id,
                                  item.count - 1,
                                );
                              }}
                              disabled={item.count === 1}
                              className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 12h14"
                                />
                              </svg>
                            </button>

                            <span className="w-12 text-center font-bold text-gray-900">
                              {item.count}
                            </span>

                            <button
                              className="h-8 w-8 rounded-lg bg-green-600 shadow-sm flex items-center justify-center text-white hover:bg-green-700 transition-all"
                              onClick={() => {
                                handleUpdateCart(
                                  item.product._id,
                                  item.count + 1,
                                );
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-xs text-gray-400 mb-0.5">
                                Total
                              </p>

                              <p className="text-xl font-bold text-gray-900">
                                {item.price * item.count}{" "}
                                <span className="text-sm font-medium text-gray-400">
                                  EGP
                                </span>
                              </p>
                            </div>

                            <button
                              onClick={() => {
                                delCartItem(item.product._id);
                              }}
                              className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200"
                              title="Remove item"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <a
                  href="/"
                  className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2"
                >
                  <span>←</span>
                  Continue Shopping
                </a>

                <button
                  onClick={() => {
                    handleClearCart();
                  }}
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 group-hover:scale-110 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  <span>Clear all items</span>
                </button>
              </div>
            </div>
            <OrderSummary
              totalCartPrice={totalCartPrice}
              numOfCartItems={numOfCartItems}
              cartId={cartData?.cartId ?? ""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
