import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users$: Observable<User[]>; // Observable instead of array
  error: string = '';

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }

}
