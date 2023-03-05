export interface Product {
  id: number | string;
  name: string;
  price: number;
  sale_price: number;
  images: ImageProduct[];
}

export interface ImageProduct {
  id: number;
  name: string;
  src: string;
}

export function createProduct(params: Partial<Product>) {
  return {

  } as Product;
}
