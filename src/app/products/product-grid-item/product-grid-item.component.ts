import { Component, Input, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CartService } from 'src/app/cart/state/cart.service';
import { Product } from '../state/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [NzCardModule, NzIconModule, NzToolTipModule, CurrencyPipe],
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.less']
})
export class ProductGridItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private cartService: CartService, private message: NzMessageService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.cartService.add(this.product, 1);
    this.message.success('Successfully added product to cart');
  }

}
