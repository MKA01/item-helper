import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';

@Component({
  selector : 'app-create-product',
  templateUrl : './create-product.component.html',
  styleUrls : [ './create-product.component.css' ]
})
export class CreateProductComponent implements OnInit {

  constructor(private _productService: ProductService) {

  }

  ngOnInit() {
  }

  createProductFromSubmitted(product: Product) {
    this._productService.addProduct(product);
  }

}
