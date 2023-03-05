import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs';
import { CartItem } from './cart.model';
import { CartStore, CartState } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartQuery extends QueryEntity<CartState> {
  selectTotal$ = this.selectAll().pipe(
    map((items: CartItem[]) => items.reduce((acc, item) => acc + item.total, 0))
  )
  constructor(protected override store: CartStore) {
    super(store);
  }
  

}
