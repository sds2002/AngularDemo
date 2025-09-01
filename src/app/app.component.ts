import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' }
  ];

  // trackBy function
  trackByFn(index: number, item: any): number {
    return item.id; // unique identifier
  }

  updateList() {
    this.items = [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'React (updated)' },
      { id: 3, name: 'Vue' },
      { id: 4, name: 'Svelte' }
    ];
  }
}
