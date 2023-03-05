import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Product } from 'src/app/products/state/product.model';
import { CartQuery } from './cart.query';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor(private cartStore: CartStore, private http: HttpClient, private cartQuery: CartQuery) {
  }

  add(product: Product, quantity: number): void {
    if(this.cartQuery.hasEntity(product.id)) {
      const cartItem = this.cartQuery.getEntity(product.id);
      const newQuantity = cartItem!.quantity + quantity;
      
      this.cartStore.update(product.id, {
        name: product.name,
        image: product.images[0].src,
        price: product.price,
        total: product.price * newQuantity,
        quantity: newQuantity,
      });
     } else {
      this.cartStore.upsert(product.id, {
        name: product.name,
        image: product.images[0].src,
        price: product.price,
        total: product.price * quantity,
        quantity
      });
     }
    
  }

  remove(productId: ID): void {
    this.cartStore.remove(productId);
  }

}
