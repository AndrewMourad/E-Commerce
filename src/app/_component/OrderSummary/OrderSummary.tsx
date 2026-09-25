"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const FREE_SHIPPING_THRESHOLD = 500;
const SHIPPING_FEE = 50;

type OrderSummaryProps = {
  totalCartPrice: number;
  numOfCartItems: number;
  cartId: string;
};

export default function OrderSummary({
  totalCartPrice,
  numOfCartItems,
  cartId,
}: OrderSummaryProps) {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <LoggedInSummary
        totalCartPrice={totalCartPrice}
        numOfCartItems={numOfCartItems}
        cartId={cartId}
      />
    );
  }

  return (
    <GuestSummary
      totalCartPrice={totalCartPrice}
      numOfCartItems={numOfCartItems}
      cartId={cartId}
    />
  );
}

function GuestSummary({
  totalCartPrice,
  numOfCartItems,
  cartId,
}: OrderSummaryProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-4">
        <div className="bg-gray-900 p-5">
          <h2 className="text-white font-bold text-lg">Order Summary</h2>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({numOfCartItems} items)</span>
            <span className="font-semibold">{totalCartPrice} EGP</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">
              Calculated at checkout
            </span>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between text-lg font-bold">
            <span>Estimated Total</span>
            <span className="text-green-600">{totalCartPrice} EGP</span>
          </div>

          <div className="pt-4 space-y-3">
            <Link
              href="/login?redirect=/cart"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-semibold hover:bg-green-700 transition-all"
            >
              <svg
                data-prefix="fas"
                data-icon="user"
                className="svg-inline--fa fa-user h-4 w-4"
                role="img"
                viewBox="0 0 448 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"
                />
              </svg>
              Login to Checkout
            </Link>
            <p className="text-xs text-gray-400 text-center">
              Don't have an account?{" "}
              <Link
                href="/signup?redirect=/cart"
                className="text-green-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-2">
            <p className="text-xs text-gray-500">
              ✓ Your cart items will be saved
            </p>
            <p className="text-xs text-gray-500">✓ Track your orders easily</p>
            <p className="text-xs text-gray-500">
              ✓ Access exclusive member deals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoggedInSummary({
  totalCartPrice,
  numOfCartItems,
  cartId,
}: OrderSummaryProps) {
  const remainingForFreeShipping = Math.max(
    FREE_SHIPPING_THRESHOLD - totalCartPrice,
    0,
  );
  const progressPercent = Math.min(
    (totalCartPrice / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  );
  const hasFreeShipping = remainingForFreeShipping === 0;
  const total = totalCartPrice + (hasFreeShipping ? 0 : SHIPPING_FEE);

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
        <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-white"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
            Order Summary
          </h2>
          <p className="text-green-100 text-sm mt-1">
            {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"} in your
            cart
          </p>
        </div>

        <div className="p-6 space-y-5">
          {hasFreeShipping ? (
            <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-green-600"
                >
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-green-700">Free Shipping!</p>
                <p className="text-sm text-green-600">
                  You qualify for free delivery
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-orange-500"
                >
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>

                <span className="text-sm font-medium text-gray-700">
                  Add {remainingForFreeShipping} EGP for free shipping
                </span>
              </div>
              <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">
                {totalCartPrice} EGP
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="font-medium text-gray-900">
                {hasFreeShipping ? "Free" : `${SHIPPING_FEE} EGP`}
              </span>
            </div>
            <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
              <div className="flex justify-between items-baseline">
                <span className="text-gray-900 font-semibold">Total</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900">
                    {total}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">EGP</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-sm font-medium">Apply Promo Code</span>
          </button>

          <Link
            href={`/checkout/${cartId}`}
            className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 active:scale-[0.98]"
          >
            <svg
              data-prefix="fas"
              data-icon="lock"
              className="svg-inline--fa fa-lock h-4 w-4"
              role="img"
              viewBox="0 0 384 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
              />
            </svg>
            <span>Secure Checkout</span>
          </Link>

          <div className="flex items-center justify-center gap-4 py-2">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 text-blue-500"
              >
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>

              <span>Fast Delivery</span>
            </div>
          </div>

          <Link
            href="/"
            className="block text-center text-green-600 hover:text-green-700 text-sm font-medium py-2"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
