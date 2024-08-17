import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import {
  addProduct,
  deleteProduct,
  loadProducts,
} from './store/product.action';
import { AppState } from './store/product.state';
import { productSelector } from './store/product.selector';
import { Observable } from 'rxjs';
import { Product } from './store/product.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productForm!: FormGroup;
  products$: Observable<Product[]>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.products$ = this.store.select(productSelector);
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [0],
      name: [''],
      color: [''],
      price: [0],
    });
  }
  onfetchProduct(): void {
    this.store.dispatch(loadProducts());
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      this.store.dispatch(addProduct(this.productForm.value));
      this.productForm.reset();
    }
  }

  onDeleteProduct(id: number): void {
    this.store.dispatch(deleteProduct({ id }));
  }
}
