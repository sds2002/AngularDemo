import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email?: string;
}

@Component({
  selector: 'app-interface',
  template: `
    <h2>Interface Example</h2>
    <p>User: {{user.name}} (ID: {{user.id}})</p>
  `
})
export class InterfaceComponent {
  user: User = { id: 1, name: 'Deepa' };

  logUser(user: User): void {
    console.log(`User: ${user.name}, ID: ${user.id}`);
  }
}
