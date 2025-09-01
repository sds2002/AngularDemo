import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isLoggedIn = true;
}

// Open browser dev tools → you’ll see that ng-container doesn’t appear 
// in the DOM, only the <p> is rendered.