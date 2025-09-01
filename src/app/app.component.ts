import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { name: 'Deepa', role: 'Frontend Developer' },
    { name: 'Arun', role: 'Backend Developer' },
    { name: 'Priya', role: 'Fullstack Engineer' }
  ];
}
