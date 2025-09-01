import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Example data
  user = {
    name: 'Deepa Balasubramanian',
    role: 'Frontend Developer',
    description: 'Passionate about Angular and UI/UX design.'
  };

  // Toggle between templates
  showDetailed = true;

  toggleView() {
    this.showDetailed = !this.showDetailed;
  }
}
