import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  addToCart: number = 0;
  name: string = 'manh';
  product = {
    name: 'Laptop',
    price: 100000,
    color: 'black',
    discount: 10,
    inStock: 10,
  };
  getDiscountPrice() {
    return (
      this.product.price - this.product.price * (this.product.discount / 100)
    );
  }
  onNameChange(event: any) {
    this.name = event.target.value;
  }
  decrement() {
    if (this.addToCart == 0) {
      return;
    }
    this.addToCart--;
  }
  increment() {
    if (this.addToCart == this.product.inStock) {
      return;
    }
    this.addToCart++;
  }
}
