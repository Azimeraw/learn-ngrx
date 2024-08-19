import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  deleteProduct,
  loadProductsFailure,
  loadsProductsSuccess,
} from './product.action';

export interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
}

export interface ProductState {
  products: Product[];
}

export const initialProductState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialProductState,
  on(loadsProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, error })),

  on(addProduct, (state, { id, name, color, price }) => ({
    ...state,
    products: [...state.products, { id, name, color, price }],
  })),
  on(deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== id),
  }))
);
