import { Component } from '@angular/core';
import { CartQuery } from './cart/state/cart.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'woocommerce-akita';
  itemsCount$ = this.query.selectCount();
  constructor(private readonly query: CartQuery,) {}
}
