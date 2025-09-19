import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Product } from './components/product-card/product';
import { ProductCard } from './components/product-card/product-card';
import { BasketService } from './services/basket-service';
import { CatalogService } from './services/catalog-service';

@Component({
  selector: 'app-root',
  imports: [ProductCard, Menu, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private _catalogService = inject(CatalogService);
  private _basketService = inject(BasketService);

  total = this._basketService.total;

  products = this._catalogService.products;
  hasProductsInStock = this._catalogService.hasProductsInStock;

  ngOnInit() {
    this._catalogService.fetchProducts().subscribe();
    this._basketService.fetchBasket().subscribe();
  }

  addToBasket(produit: Product) {
    this._basketService.addItem(produit.id).subscribe({
      next: () => this._catalogService.decreaseStock(produit.id),
      error: (err) => console.log('Ca plante : ', err),
    });
  }
}
