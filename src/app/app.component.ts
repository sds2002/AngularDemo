// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { User } from './models/user.model';
import { GenericApiService } from './services/generic-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // External template file
  styleUrls: ['./app.component.css']   // Optional styles file
})
export class AppComponent implements OnInit {
  users: User[] = [];
  products: Product[] = [];

  constructor(private api: GenericApiService) {}

  ngOnInit() {
    // Fetch users
    this.api.getData<User>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data);

    // Fetch products
    this.api.getData<Product>('https://fakestoreapi.com/products')
      .subscribe(data => this.products = data);
  }
}
