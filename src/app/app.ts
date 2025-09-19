import { Component, inject, signal } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Product } from './components/product-card/product';
import { ProductCard } from './components/product-card/product-card';
import { CatalogService } from './services/catalog-service';
import { BasketService } from './services/basket-service';
import { BasketItem } from './services/basket-item';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductCard, Menu, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private _catalogService = inject(CatalogService);
  private _basketService = inject(BasketService);

  total = this._basketService.total;

  products = this._catalogService.products;
  hasProductsInStock = this._catalogService.hasProductsInStock;

  addToBasket(produit: Product) {
    this._catalogService.decreaseStock(produit.id);

    const itemAjoute: BasketItem = {
      id: produit.id,
      title: produit.title,
      price: produit.price,
    };

    this._basketService.addItem(itemAjoute);
  }
}
