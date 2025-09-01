import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // 1. Receive data from parent
  @Input() messageFromParent: string = '';

  // 2. Send data/event to parent
  @Output() messageEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageEvent.emit("Hello Parent, this is Child!");
  }
}
