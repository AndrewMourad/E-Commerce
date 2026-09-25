import { Category, Subcategory } from "../types/productType";

export async function getShopCategories(): Promise<Category[]> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
    );
    if (!response.ok) {
      throw new Error("Api Error");
    }
    const payload = await response.json();
    return payload.data;
  } catch (error) {
    throw new Error("Api Error");
  }
}

export async function getCategoryById(id: string): Promise<Category | null> {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }

  const payload = await response.json();
  return payload.data;
}

export async function getCategorySubcategories(
  id: string,
): Promise<Subcategory> {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subcategories");
  }

  const payload = await response.json();

  return payload.data;
}

export async function getSubcategory(id: string): Promise<Subcategory> {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/subcategories/${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subcategories");
  }

  const payload = await response.json();

  return payload.data;
}
