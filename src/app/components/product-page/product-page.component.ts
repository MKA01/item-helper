import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector : 'app-product-page',
  templateUrl : './product-page.component.html',
  styleUrls : [ './product-page.component.css' ]
})
export class ProductPageComponent implements OnInit {
  product: Product = <Product>{};

  constructor(private _activatedRoute: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router) {

  }

  ngOnInit() {
    this.downloadData();
  }

  deleteProduct() {
    this._productService.deleteProduct(this.product.id)
      .subscribe(() => {
        this._router.navigate([ '/app/main' ]);
      });
  }

  onFormSubmit(product: Product) {
    this._productService.editProduct(product, this.product.id)
      .subscribe(() => {
        this._router.navigate([ 'app/main' ]);
      });
  }

  private downloadData() {
    this._productService.loadProducts()
      .subscribe((products: Product[]) => {
        this.product = products.find(el => el.id === +this._activatedRoute.snapshot.params[ 'id' ]);
      });
  }
}
