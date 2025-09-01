import { Component, OnInit } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // Observable that emits every second
  counter$!: Observable<number>;

  // Observable that emits a transformed string
  message$!: Observable<string>;

  // Promise (resolves after 3 seconds)
  dataPromise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('✅ Data loaded from Promise!'), 3000);
  });

  ngOnInit() {
    // Counter observable (emits 0,1,2,3... every second)
    this.counter$ = interval(1000);

    // Transform observable values using map
    this.message$ = this.counter$.pipe(
      map((val) => `⏳ Tick #${val}`)
    );
  }
}
