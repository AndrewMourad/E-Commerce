import { Brand } from "@/api/types/productType";
import Link from "next/link";
import React from "react";

export default function BrandCard({ data }: { data: Brand }) {
  return (
    <Link
      className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
      href={`/brands/${data._id}`}
    >
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
        <img
          alt={data.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          src={data.image}
        />
      </div>
      <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
        {data.name}
      </h3>
      <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-violet-600 flex items-center gap-1">
          View Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
