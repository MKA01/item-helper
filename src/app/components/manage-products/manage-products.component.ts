import { Component, OnInit } from '@angular/core';
import { OracleDatabaseService } from '../../services/oracle-database.service';
import { Product } from '../../product';

@Component({
  selector : 'app-manage-products',
  templateUrl : './manage-products.component.html',
  styleUrls : [ './manage-products.component.css' ]
})
export class ManageProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private _oracleDatabase: OracleDatabaseService) {
  }

  ngOnInit() {
  }

  click() {
    this._oracleDatabase.getAllProducts()
      .subscribe((products: Product[]) => {
        // this.products = products;
        console.log('manage-product');
        console.log(products);
      });

    // console.log(this._oracleDatabase.getAllProducts());

    // console.log(this._oracleDatabase.getOneProduct('Chleb'));

    // this._oracleDatabase.getAllProducts()
    //   .subscribe((response: Product[]) => {
    //     this.products = response;
    //   });
  }

  log() {
    // this._oracleDatabase.getOneProduct(1)
    //   .subscribe((product: Product) => {
    //     console.log('one');
    //     console.log(product);
    //   });

    this._oracleDatabase.getAllProducts()
      .subscribe((products: Product[]) =>{
        console.log(products.find(el => el.id === 1));
      })
  }


}
