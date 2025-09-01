import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';
import { ElectricCar } from '../models/electric-car.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  cars: Car[];
  message: string = '';

  constructor(private carService: CarService) {
    this.cars = this.carService.getCars();
  }

  accelerateCar(car: Car) {
    car.drive(20);
    this.message = `${car.displayInfo()} is now at ${car.getSpeed()} km/h.`;
  }

  brakeCar(car: Car) {
    car.brake(10);
    this.message = `${car.displayInfo()} slowed down to ${car.getSpeed()} km/h.`;
  }

  chargeIfEV(car: Car) {
    if (car instanceof ElectricCar) {
      car.chargeBattery(20);
      this.message = `${car.displayInfo()} (battery charged)`;
    } else {
      this.message = `${car.displayInfo()} is not electric.`;
    }
  }
}
