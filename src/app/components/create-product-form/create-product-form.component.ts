import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../product';
import { NgForm } from '@angular/forms';

@Component({
  selector : 'app-create-product-form',
  templateUrl : './create-product-form.component.html',
  styleUrls : [ './create-product-form.component.css' ]
})
export class CreateProductFormComponent implements OnInit {
  @Input() product: Product = <Product> {};
  @Output() wasCreateProductFormSubmitted = new EventEmitter<Product>();

  constructor() {

  }

  ngOnInit() {
  }

  addProduct(createProductForm: NgForm) {
    this.product.id == null ? this.createProductObject(createProductForm) : this.updateProductObject();
  }

  resetForm(createProductForm: NgForm) {
    createProductForm.reset();
  }

  private updateProductObject() {
    this.wasCreateProductFormSubmitted.emit(this.product);
  }

  private createProductObject(createProductForm: NgForm) {
    const id = new Date().getTime();
    const name = createProductForm.value.name;
    const amount = createProductForm.value.amount;
    const imageUrl = createProductForm.value.imageUrl;

    const product = {
      id : id,
      name : name,
      amount : amount,
      imageUrl : imageUrl
    };
    this.wasCreateProductFormSubmitted.emit(product);
  }
}
