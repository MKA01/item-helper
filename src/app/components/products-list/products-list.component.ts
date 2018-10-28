import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';

@Component({
  selector : 'app-products-list',
  templateUrl : './products-list.component.html',
  styleUrls : [ './products-list.component.css' ]
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  message: string;

  constructor(private _productService: ProductService) {

  }

  ngOnInit() {
    this.message = 'Shopping list is empty';
    this.updateProducts();

    this._productService.wasProductsListUpdated
      .subscribe(() => {
        this.updateProducts();
      });
  }

  private updateProducts() {
    this._productService.loadProducts()
      .subscribe((response: Product[]) => {
        this.products = response;
      });
  }
}
