import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  loadProducts,
  loadProductsFailure,
  loadsProductsSuccess,
} from './product.action';
import { productsSampleData } from './app.example';
@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        of(productsSampleData).pipe(
          map((products) => loadsProductsSuccess({ products })),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );
}
