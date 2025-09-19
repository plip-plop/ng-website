import { CanActivateFn } from '@angular/router';
import { BasketService } from '../services/basket-service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const basketGuard: CanActivateFn = (route, state) => {
  const basketService = inject(BasketService);
  return basketService.fetchBasket().pipe(map((basket) => basket.length > 0));
};
