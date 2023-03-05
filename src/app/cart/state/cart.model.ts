import { ID } from "@datorama/akita";

export interface CartItem {
  productId: ID;
  quantity: number;
  name: string;
  image: string;
  price: number;
  total: number;
}

export function createCart(params: Partial<CartItem>) {
  return {

  } as CartItem;
}
