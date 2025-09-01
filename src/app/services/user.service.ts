import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
    { id: 2, name: 'Bob', email: 'bob@example.com', isActive: false },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', isActive: true },
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
}
