import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CartQuery } from './state/cart.query';
import { CartService } from './state/cart.service';
import { ID } from '@datorama/akita';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzIconModule,
    NzToolTipModule,
    CurrencyPipe,
    AsyncPipe,
    NgIf,
    NgFor,
  ],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})
export class CartComponent {
  items$ = this.query.selectAll();
  total$ = this.query.selectTotal$;
  isLoading$ = this.query.selectLoading;

  constructor(
    private readonly query: CartQuery,
    private readonly cart: CartService
  ) {}

  handleRemoveCartItem(productId: ID): void {
    this.cart.remove(productId);
  }
}
