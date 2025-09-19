import { Component, inject, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket-service';
import { CatalogService } from '../../services/catalog-service';
import { Product } from '../product-card/product';
import { ProductCard } from '../product-card/product-card';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [ProductCard, CurrencyPipe, RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog implements OnInit {
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
