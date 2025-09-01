import { Component } from '@angular/core';

type ID = string | number;

@Component({
  selector: 'app-type-alias',
  template: `
    <h2>Type Alias & Union Types</h2>
    <p>User ID: {{userId}}</p>
  `
})
export class TypeAliasComponent {
  userId: ID = 123;

  constructor() {
    this.userId = 'abc123';
  }
}
