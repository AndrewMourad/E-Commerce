import React from "react";

export default function EmptyCart() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-15"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          </div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md"></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Looks like you haven't added anything to your cart yet.
          <br />
          Start exploring our products!
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]"
        >
          Start Shopping
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-4">Popular Categories</p>

          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="/categories"
              className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
            >
              Electronics
            </a>

            <a
              href="/categories"
              className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
            >
              Fashion
            </a>

            <a
              href="/categories"
              className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
            >
              Home
            </a>

            <a
              href="/categories"
              className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
            >
              Beauty
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
