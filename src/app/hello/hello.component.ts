import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  // username: string = 'Infotel';

  // changeName() {
  //   this.username = 'Angular Learner';
  // }

  @Input() username: string = '';
  @Output() nameChanged = new EventEmitter<string>();

  changeName() {
    this.username = 'Updated User';
    this.nameChanged.emit(this.username);
  }
}