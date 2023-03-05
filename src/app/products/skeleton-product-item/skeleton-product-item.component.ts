import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  standalone: true,
  imports: [
    NzCardModule,
    NzSkeletonModule,
  ],
  selector: 'app-skeleton-product-item',
  templateUrl: './skeleton-product-item.component.html',
  styleUrls: ['./skeleton-product-item.component.less']
})
export class SkeletonProductItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
