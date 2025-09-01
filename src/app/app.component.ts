import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  data: string | null = null;

  loadData() {
    setTimeout(() => {
      this.data = 'Fetched data from server!';
    }, 2000);
  }
}
// <ng-template> is hidden until used.

// *ngIf="data; else loading" → shows loading template when data is null.