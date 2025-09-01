import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // app.component.ts
users = [
  { name: 'Deepa', role: 'admin' },
  { name: 'Arun', role: 'user' },
  { name: 'Priya', role: 'guest' }
];

}