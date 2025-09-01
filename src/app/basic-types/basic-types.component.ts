import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-types',
  template: `
    <h2>Basic Types</h2>
    <p>{{name}} is {{age}} years old.</p>
    <p>Is student? {{isStudent}}</p>
  `
})
export class BasicTypesComponent {
  name: string = 'Deepa';
  age: number = 28;
  isStudent: boolean = true;
}
