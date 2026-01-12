import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
  ];

  getProducts() {
    return this.products;
  }

  setProduct(product: { id: number; name: string; price: number }) {
    // Logic to add or update the product
    console.log('Product saved:', product);

    this.products.push(product);
  }
}
