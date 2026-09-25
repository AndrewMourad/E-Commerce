import { getBrands } from "@/api/services/brandsApi";
import React from "react";
import BrandCard from "../_component/BrandCard/BrandCard";

export default async function Brands() {
  const data = await getBrands();
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <a className="hover:text-white transition-colors" href="/">
              Home
            </a>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Brands</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Top Brands
              </h1>
              <p className="text-white/80 mt-1">
                Shop from your favorite brands
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {data.map((brand) => {
            return <BrandCard key={brand._id} data={brand} />;
          })}
        </div>
      </div>
    </div>
  );
}
