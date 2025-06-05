import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, range, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  time$: Observable<string>;
  numPublisher!: Observable<number>;

  constructor(private httpClient: HttpClient) {
    // Live clock observable
    this.time$ = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
    });
  }

  ngOnInit() {
    this.interval_demo(); // Initializes numPublisher
    this.range_demo();    // For console logs only
  }

  interval_demo() {
    this.numPublisher = interval(1000);
  }

  range_demo() {
    let publisher_1_10 = range(1, 10);

    publisher_1_10.pipe(take(5)).subscribe(val => console.log('First 5:', val));
    publisher_1_10.pipe(map(ele => ele * ele)).subscribe(val => console.log('Squares:', val));
    publisher_1_10.pipe(filter(ele => ele % 2 === 0)).subscribe(val => console.log('Even numbers:', val));
  }
}
