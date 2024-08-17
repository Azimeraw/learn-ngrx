import { createAction, props } from '@ngrx/store';
import { Product } from './product.reducer';

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ id: number; name: string; color: string; price: number }>()
);
export const loadProducts = createAction('[Product] load Product');

export const loadsProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

export const deleteProduct = createAction(
  '[Product] delete Product',
  props<{ id: number }>()
);
