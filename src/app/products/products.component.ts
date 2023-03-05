import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PaginationResponse, PaginatorPlugin } from '@datorama/akita';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { Observable, switchMap } from 'rxjs';

import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { SkeletonProductItemComponent } from './skeleton-product-item/skeleton-product-item.component';
import { Product } from './state/product.model';
import { PRODUCT_PAGINATOR } from './state/products-paginator';
import { ProductsQuery } from './state/products.query';
import { ProductsService } from './state/products.service';
import { ProductsState } from './state/products.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NzGridModule,
    NzPaginationModule,
    NgFor,
    AsyncPipe,
    NgIf,
    ProductGridItemComponent,
    SkeletonProductItemComponent,
  ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit, OnDestroy {
  arraySkeleton = Array.from(Array(8+1).keys()).slice(1);
  pagination$!: Observable<PaginationResponse<Product>>;
  perPage = 8;
  constructor(@Inject(PRODUCT_PAGINATOR) 
  public paginatorRef: PaginatorPlugin<ProductsState>, private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.get().subscribe();
    this.pagination$ = this.paginatorRef.pageChanges.pipe(
      switchMap(( page ) => {
        const reqFn = () => this.productsService.getProducts(
          page,
          this.perPage,
        );
        return this.paginatorRef.getPage(reqFn);
      })
    );
  }

  handlePageChange(page: any) {
    this.paginatorRef.setPage(page);
  }

  ngOnDestroy() {
    this.paginatorRef.destroy();
  }

}
