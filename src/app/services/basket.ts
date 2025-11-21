import { computed, Injectable, signal } from '@angular/core';
import { BasketItem } from '../types/basket-item';

@Injectable({
  providedIn: 'root',
})
export class Basket {
  private _items = signal<BasketItem[]>([]);
  items = this._items.asReadonly();

  total = computed(() => this._items().reduce((prev, { price }) => prev + price, 0));

  addItem(item: BasketItem): void {
    this._items.update((items) => [...items, item]);
  }
}
