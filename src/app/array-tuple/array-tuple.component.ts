import { Component } from '@angular/core';

@Component({
  selector: 'app-array-tuple',
  template: `
    <h2>Arrays & Tuples</h2>
    <p>Fruits: {{fruits.join(', ')}}</p>
    <p>Scores: {{scores.join(', ')}}</p>
    <p>Person: {{person[0]}} ({{person[1]}} years old)</p>
  `
})
export class ArrayTupleComponent {
  fruits: string[] = ['Apple', 'Banana', 'Mango'];
  scores: number[] = [90, 85, 70];
  person: [string, number] = ['Deepa', 28];
}
