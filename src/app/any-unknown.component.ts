import { Component } from '@angular/core';

@Component({
  selector: 'app-any-unknown',
  template: `
    <h2>Any & Unknown</h2>
    <p>Data (any): {{data}}</p>
    <p>Info (unknown): {{info}}</p>
  `
})
export class AnyUnknownComponent {
  data: any = 10;
  info: unknown = 'Hello';

  constructor() {
    this.data = 'Now I am a string';
    if (typeof this.info === 'string') {
      console.log(this.info.toUpperCase());
    }
  }
}
