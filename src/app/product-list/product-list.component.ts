import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  product = {
    name: 'Laptop',
    price: 100000,
    color: 'black',
    discount: 10,
    inStock: 0,
  };
  getDiscountPrice() {
    return (
      this.product.price - this.product.price * (this.product.discount / 100)
    );
  }
}
