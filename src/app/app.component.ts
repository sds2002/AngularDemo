import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isLoggedIn = true;
  username = 'Deepa';

  logout() {
    this.isLoggedIn = false;
  }
}
// ng-container does not create extra DOM elements.

// It’s just a logical wrapper for directives.