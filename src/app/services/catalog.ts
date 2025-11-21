import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../components/product-card/product';

@Injectable({
  providedIn: 'root',
})
export class Catalog {
  private _products = signal<Product[]>([
    {
      id: 'welsch',
      title: 'Coding the welsch',
      description: 'Tee-shirt col rond - Homme',
      photo: '/assets/coding-the-welsch.jpg',
      price: 20,
      stock: 2,
    },
    {
      id: 'world',
      title: 'Coding the world',
      description: 'Tee-shirt col rond - Homme',
      photo: '/assets/coding-the-world.jpg',
      price: 18,
      stock: 1,
    },
    {
      id: 'vador',
      title: 'Duck Vador',
      description: 'Tee-shirt col rond - Femme',
      photo: '/assets/coding-the-stars.jpg',
      price: 21,
      stock: 2,
    },
    {
      id: 'snow',
      title: 'Coding the snow',
      description: 'Tee-shirt col rond - Femme',
      photo: '/assets/coding-the-snow.jpg',
      price: 19,
      stock: 2,
    },
  ]);

  products = this._products.asReadonly();

  hasProductsInStock = computed<boolean>(() =>
    this.products().some((product) => product.stock > 0)
  );

  decreaseStock(productId: string) {
    this._products.update((products) =>
      products.map((item) => (item.id !== productId ? item : { ...item, stock: item.stock - 1 }))
    );
  }
}
