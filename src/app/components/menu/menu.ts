import { Component, computed, inject } from '@angular/core';
import { BasketService } from '../../services/basket-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private _basketService = inject(BasketService);

  numberOfItems = computed<number>(() => this._basketService.items().length);
}
