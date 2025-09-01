import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('myInput') inputElement!: ElementRef;

  logInput() {
    console.log(this.inputElement.nativeElement.value);
  }
}
// Explanation

// #myInput → creates a reference variable for that input.

// @ViewChild('myInput') → grabs it in TypeScript.

// You can now read or manipulate DOM directly (focus(), value, etc.).