import { getShopCategories } from "@/api/services/categoriesApi";
import Image from "next/image";
import React from "react";

export default async function ShopCategory() {
  const data = await getShopCategories();

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold my-2 p-3 text-green-600 border-l-4 border-l-black">
        Shop By Category
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {data.map((category) => {
          return (
            <div
              className="flex justify-center items-center shadow p-3 hover:shadow-md hover:cursor-pointer"
              key={category._id}
            >
              <div className="flex justify-between flex-col items-center">
                <Image
                  className="w-25 h-25 rounded-full object-cover"
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                />
                <h4 className="py-2 font-semibold">{category.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
