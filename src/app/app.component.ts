import { Component } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  searchText: string = '';

  users = [
    { name: 'Deepa', role: 'Developer' },
    { name: 'Arun', role: 'Designer' },
    { name: 'Priya', role: 'Manager' },
    { name: 'Vikram', role: 'Tester' },
    { name: 'Rajesh', role: 'Developer' }
  ];
}
