import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class ProductService {
  private _wasProductsListUpdated = new EventEmitter<void>();
  private _products: Product[] = [];

  constructor(private _httpClient: HttpClient) {

  }

  get wasProductsListUpdated(): EventEmitter<void> {
    return this._wasProductsListUpdated;
  }

  get products(): Product[] {
    return this._products.slice();
  }

  addProduct(product: Product) {
    this._httpClient.post('http://localhost:8000/api/products', product)
      .subscribe((response: HttpResponse<any>) => {
        this._products.push(product);
        this._wasProductsListUpdated.emit();
      });
  }

  editProduct(product: Product, id: number) {
    return this._httpClient.put(`http://localhost:8000/api/products/${id}`, product);
  }

  deleteProduct(id: number) {
    return this._httpClient.delete(`http://localhost:8000/api/products/${id}`);
  }

  loadProducts() {
    return this._httpClient.get('http://localhost:8000/api/products');
  }

}
