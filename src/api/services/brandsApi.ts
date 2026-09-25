import { Brand } from "../types/productType";

export async function getBrands(): Promise<Brand[]> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands`,
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

export async function getSingleBrand(brandId: string): Promise<Brand> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`,
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
