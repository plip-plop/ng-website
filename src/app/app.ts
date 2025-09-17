import { Component } from '@angular/core';
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
  protected title = 'zenika-ng-website';
  // myVar: string = null; // Si la règle "strict" du fichier "tsconfig.json" est à FALSE, ça passe !
  protected total = 0;

  protected products: Product[] = [
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
  ];

  protected calculerTotal(produit: Product) {
    this.total += produit.price;
  }
}
