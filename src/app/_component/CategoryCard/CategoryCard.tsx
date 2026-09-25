import { Category } from "@/api/types/productType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryCard({ data }: { data: Category }) {
  return (
    <Link
      className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
      href={`/categories/${data._id}`}
    >
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
        <Image
          alt={data.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={data.image}
          width={300}
          height={300}
        />
      </div>

      <h3 className="font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors">
        {data.name}
      </h3>

      <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-green-600 flex items-center gap-1">
          View Subcategories
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
