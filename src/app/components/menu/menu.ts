import { Component, computed, inject } from '@angular/core';
import { BasketService } from '../../services/basket-service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  private _basketService = inject(BasketService);
  
  numberOfItems = computed<number>(() => this._basketService.items().length);
}
