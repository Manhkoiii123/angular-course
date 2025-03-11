import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  addToCart: number = 0;
  listOfString: string[] = ['manh', 'thang', 'tuan'];
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
