import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../app/product.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  providers: [ProductService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  name: string = '';
  id: number = Math.floor(Math.random() * 1000);
  price: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log(
      'Contact Component Initialized',
      this.productService.getProducts()
    );
  }

  submitForm() {
    console.log('Form Submitted!');
    console.log('Name:', this.name);
    console.log('Id:', this.id);
    console.log('Price:', this.price);
  }

  submitNgForm(data: any) {
    this.productService.setProduct({
      id: Math.floor(Math.random() * 1000),
      name: data.value.name,
      price: data.value.price,
    });
    console.log('Form Submitted!', data.value);
    console.log(this.productService.getProducts());
  }
}
