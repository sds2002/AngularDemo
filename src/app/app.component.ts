import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // External template file
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Templates Demo';
  username = 'Deepa';
  items = ['Angular', 'React', 'Vue'];
  isLoggedIn = true;
  today: Date = new Date();
  role: string = 'admin';
  user: any;
}
