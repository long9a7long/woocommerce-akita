import { Injectable } from '@angular/core';
import { PaginationResponse } from '@datorama/akita';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map, Observable, switchMap } from 'rxjs';
import { Product } from './product.model';
import { ProductsStore, ProductsState } from './products.store';

@NgEntityServiceConfig({
  resourceName: 'products',
})
@Injectable({ providedIn: 'root' })
export class ProductsService extends NgEntityService<ProductsState> {
  constructor(protected override store: ProductsStore, private message: NzMessageService) {
    super(store);
  }

  override handleError() {
    this.message.error('Server Error!');
  }

  getProducts(page: number, perPage: number): Observable<PaginationResponse<Product>> {
    const url = `${this.baseUrl}/products?page=${page}&per_page=${perPage}`;
    return this.getHttp().get(url, {observe: 'response'}).pipe(map(res => {
      const resModel = {
        currentPage: page,
        perPage: perPage,
        lastPage: page === 1? 1 : page - 1,
        data: res.body,
        total: res?.headers?.get('x-wp-total') ?? 0,
      } as PaginationResponse<Product>;
      return resModel;
    }));
  }
}
