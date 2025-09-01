import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // BehaviorSubjects to hold state
  private usersSubject = new BehaviorSubject<User[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(true);
  private errorSubject = new BehaviorSubject<string>('');

  // Expose as Observables
  users$ = this.usersSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUsers(); // Load users immediately
  }

  private loadUsers(): void {
    this.loadingSubject.next(true);
    this.http.get<User[]>(this.apiUrl).pipe(
      map(users => users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        phone: user.phone,
        website: user.website
      }))),
      tap(() => this.errorSubject.next('')), // clear error on success
      catchError(err => {
        console.error('Error fetching users:', err);
        this.errorSubject.next('Failed to load users.'); // update error state
        return of([]); // fallback to empty array
      }),
      tap(() => this.loadingSubject.next(false))
    ).subscribe(users => {
      this.usersSubject.next(users); // update state
    });
  }

  // Optional: allow manual refresh
  refreshUsers(): void {
    this.loadUsers();
  }
}
