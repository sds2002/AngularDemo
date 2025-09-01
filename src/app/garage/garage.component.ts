import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html'
})
export class GarageComponent {
  cars: Car[] = [];

  constructor(private carService: CarService) {
    // ✅ subscribe to the cars$ stream
    this.carService.cars$.subscribe(cars => {
      this.cars = cars;
    });
  }
}
