import { Component, inject } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Product } from './components/product-card/product';
import { ProductCard } from './components/product-card/product-card';
import { Basket } from './services/basket';
import { Catalog } from './services/catalog';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Menu, ProductCard, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private _catalogService = inject(Catalog);
  private _basketService = inject(Basket);

  products = this._catalogService.products;
  total = this._basketService.total;

  hasProductsInStock = this._catalogService.hasProductsInStock;

  ajouterAuPanier(product: Product) {
    this._catalogService.decreaseStock(product.id);
    this._basketService.addItem(product);
  }
}
