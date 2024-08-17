import { createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';
import { AppState } from './product.state';

export const selectProductState = (state: AppState) => state.product;

export const productSelector = createSelector(
    selectProductState,
    (state: ProductState) => state.products
);
