import { Component } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  parentMessage = "Hello Child, this is Parent!";
  messageFromChild = '';

  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }
}
