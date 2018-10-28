import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product';

@Component({
  selector : 'app-product',
  templateUrl : './product.component.html',
  styleUrls : [ './product.component.css' ]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private _router: Router) {

  }

  ngOnInit() {
  }

  onProductClick() {
    this._router.navigate([ `/app/product/${this.product.id}` ]);
  }

}
