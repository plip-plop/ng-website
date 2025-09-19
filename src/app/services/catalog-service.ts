import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '../components/product-card/product';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  httpClient = inject(HttpClient);

  private _products = signal<Product[]>([]);

  public products = this._products.asReadonly();

  hasProductsInStock = computed<boolean>(() =>
    this._products().some(({ stock }) => stock > 0)
  );

  decreaseStock(productId: string) {
    this._products.update((products) =>
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      })
    );
  }

  fetchProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('http://localhost:8080/api/products')
      .pipe(tap((products) => this._products.set(products)));
  }
}
