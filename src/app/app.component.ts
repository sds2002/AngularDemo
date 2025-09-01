import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Pipes Demo';

  // Sample data
  name: string = 'deepa balasubramanian';
  today: Date = new Date();
  price: number = 1234.56;
  percentage: number = 0.8756;
  items: string[] = ['Angular', 'React', 'Vue', 'Svelte'];

  // For async pipe (Observable)
  dataObservable: Observable<string> = of('Hello from Observable!');

  // For async pipe (Promise)
  dataPromise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('Hello from Promise!'), 3000);
  });
}
