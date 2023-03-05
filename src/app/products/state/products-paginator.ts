import { inject, InjectionToken } from '@angular/core';
import { PaginatorPlugin } from '@datorama/akita';
import { ProductsQuery } from './products.query';

export const PRODUCT_PAGINATOR = 
new InjectionToken('PRODUCT_PAGINATOR', {
  providedIn: 'root',
  factory: () => {
    const contactsQuery = inject(ProductsQuery);
    return new PaginatorPlugin(contactsQuery)
            .withControls()
            .withRange();
  }
});