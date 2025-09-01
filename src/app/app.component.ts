import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Flag to control login state
  isLoggedIn = false;

  // Method to toggle login/logout
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}