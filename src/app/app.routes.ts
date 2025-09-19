import { Routes } from '@angular/router';
import { Basket } from './components/basket/basket';
import { Catalog } from './components/catalog/catalog';
import { ProductDetails } from './components/product-details/product-details';
import { basketGuard } from './components/basket-guard';

export const routes: Routes = [
  {
    path: 'catalog',
    component: Catalog,
  },
  {
    path: 'product/:id',
    component: ProductDetails,
  },
  {
    path: 'basket',
    component: Basket,
    canActivate: [basketGuard],
  },
  {
    path: '**',
    component: Catalog,
  },
];
