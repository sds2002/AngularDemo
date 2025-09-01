import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  username: string = 'Infotel';

  changeName() {
    this.username = 'Angular Learner';
  }
}