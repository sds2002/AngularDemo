import { Component } from '@angular/core';

@Component({
  selector: 'app-function-types',
  template: `
    <h2>Function Types</h2>
    <p>Sum: {{add(5, 10)}}</p>
    <p>{{ greet('Infotel') }}
  `
})
export class FunctionTypesComponent {
  add(a: number, b: number): number {
    return a + b;
  }

  greet(name: string): void {
    console.log(`Hello, ${name}`);
  }
}
