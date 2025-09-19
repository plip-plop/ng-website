import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BasketService } from '../../services/basket-service';

@Component({
  selector: 'app-basket',
  imports: [CurrencyPipe],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket {
  private basketService = inject(BasketService);

  protected items = this.basketService.items;

  protected total = this.basketService.total;
}
