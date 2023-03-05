import { Component, Input, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Product } from '../state/product.model';

@Component({
  standalone: true,
  imports: [NzCardModule, NzIconModule,],
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.less']
})
export class ProductGridItemComponent implements OnInit {
  @Input() product!: Product;
  constructor() { }

  ngOnInit() {
  }

}
