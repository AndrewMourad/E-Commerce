import { ProductType } from "../types/productType";

export async function getAllProducts(): Promise<ProductType[]> {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products",
    );
    if (!response.ok) {
      throw new Error("API Error");
    }
    const payload = await response.json();
    return payload.data;
  } catch (error) {
    throw new Error("API Error");
  }
}
export async function getSingleProducts(prodId: string): Promise<ProductType> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${prodId}`,
    );
    if (!response.ok) {
      throw new Error("API Error");
    }
    const payload = await response.json();
    return payload.data;
  } catch (error) {
    throw new Error("API Error");
  }
}

export async function getProductsByBrand(brandId: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: { data: ProductType[] } = await response.json();

  return data.data;
}

export async function getProductsBySubCategory(
  subCategoryId: string,
): Promise<ProductType[]> {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?subcategory=${subCategoryId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: { data: ProductType[] } = await response.json();

  return data.data;
}
