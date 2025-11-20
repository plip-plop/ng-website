import { Component, computed, signal } from '@angular/core';
import { Menu } from './components/menu/menu';
import { ProductCard } from './components/product-card/product-card';
import { Product } from './components/product-card/product';

@Component({
  selector: 'app-root',
  imports: [Menu, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products = signal<Product[]>([
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

  total = signal<number>(0);

  hasProductsInStock = computed<boolean>(() =>
    this.products().some((product) => product.stock > 0)
  );

  ajouterAuPanier(product: Product) {
    this.products.update((products) =>
      products.map((item) => (item.id !== product.id ? item : { ...item, stock: item.stock - 1 }))
    );

    this.total.update((valeurActuelle) => valeurActuelle + product.price);
  }
}
