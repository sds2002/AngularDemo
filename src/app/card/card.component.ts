import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      padding: 15px;
      border: 2px solid #ccc;
      border-radius: 8px;
      margin: 10px 0;
    }
  `]
})
export class CardComponent {}
