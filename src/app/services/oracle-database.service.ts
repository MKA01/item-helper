import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn : 'root'
})
export class OracleDatabaseService {

  // private url: String = 'jdbc:oracle:thin:@155.158.112.45:1521:oltpstud';


  constructor(private _httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>('http://localhost:8000/api/products');
  }

  getOneProduct(id: number): Observable<Product> {
    return this._httpClient.get<Product>(`http://localhost:8000/api/products/${id}`);
  }

}
