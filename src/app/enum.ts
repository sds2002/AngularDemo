import { Component } from '@angular/core';

enum Color {
  Red,
  Green,
  Blue
}

@Component({
  selector: 'app-enum',
  template: `
    <h2>Enum Example</h2>
    <p>Favorite color: {{favoriteColor}}</p>
  `
})
export class EnumComponent {
  favoriteColor: Color = Color.Green;
}
