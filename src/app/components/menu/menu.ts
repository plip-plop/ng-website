import { Component, computed, inject } from '@angular/core';
import { Basket } from '../../services/basket';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private _basketService = inject(Basket);
  numberOfItems = computed<number>(() => this._basketService.items().length);
}
