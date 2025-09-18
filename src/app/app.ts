import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Product } from './components/product-card/product';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [ProductCard, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // myVar: string = null; // Si la règle "strict" du fichier "tsconfig.json" est à FALSE, ça passe !
  total = signal<number>(0);

  products: WritableSignal<Product[]> = signal<Product[]>([
    {
      id: 'welsch',
      title: 'HelloWorld',
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

  addToBasket(produit: Product) {
    this.products.update((products) =>
      products.map((product) => {
        if (product.id === produit.id) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      })
    );

    this.total.update((totalActuel) => totalActuel + produit.price);
  }

  // hasProductsInStock = computed<boolean>(() => {
  // console.log("Hello");
  //   return this.products().some(({ stock }) => stock > 0);
  // });

  hasProductsInStock = computed<boolean>(() =>
    this.products().some(({ stock }) => stock > 0)
  );
}
