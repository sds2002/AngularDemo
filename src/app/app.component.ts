import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  user = {
    name: 'Deepa',
    address: {
      city: 'Chennai'
    }
  };

  nullUser: any = null;
}
