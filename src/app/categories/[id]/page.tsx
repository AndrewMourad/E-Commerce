import {
  getCategoryById,
  getCategorySubcategories,
} from "@/api/services/categoriesApi";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CategoryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [category, subcategories] = await Promise.all([
    getCategoryById(id),
    getCategorySubcategories(id),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link
              className="hover:text-white transition-colors"
              href="/categories"
            >
              Categories
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">{category.name}</span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden">
              <img
                alt={category.name}
                className="w-12 h-12 object-contain"
                src={category.image}
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {category.name}
              </h1>
              <p className="text-white/80 mt-1">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <Link
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6"
          href="/categories"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back to Categories</span>
        </Link>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            {subcategories.length}{" "}
            {subcategories.length === 1 ? "Subcategory" : "Subcategories"} in{" "}
            {category.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory._id}
              className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
              href={`/subcategory/${subcategory._id}`}
            >
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-green-600"
                >
                  <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
                {subcategory.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Browse Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {subcategories.length === 0 && (
          <p className="text-gray-500 text-center py-12">
            No subcategories found for {category.name} yet.
          </p>
        )}
      </div>
    </div>
  );
}
