import { getAllProducts } from "@/api/services/productApi";
import React from "react";
import ProductCard from "../_component/ProductCard/ProductCard";

export default async function Shop() {
  const data = await getAllProducts();
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
            <a className="hover:text-white transition-colors" href="/">
              Home
            </a>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">All Products</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                All Products
              </h1>
              <p className="text-white/80 mt-1">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 text-sm text-gray-500">Showing 40 products</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {data.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </div>
    </div>
  );
}
