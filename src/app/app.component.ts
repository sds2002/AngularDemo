import { Component } from '@angular/core';
import { Car } from './models/car.model';
import { ElectricCar } from './models/electric-car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Normal Car
  car1 = new Car('Toyota', 'Corolla', 2021);

  // Electric Car (inherits from Car)
  ev1 = new ElectricCar('Tesla', 'Model 3', 2023);

  message: string = '';

  accelerateCar(car: Car) {
    car.drive(20);
    this.message = `${car.displayInfo()} is now at ${car.getSpeed()} km/h.`;
  }

  brakeCar(car: Car) {
    car.brake(10);
    this.message = `${car.displayInfo()} slowed down to ${car.getSpeed()} km/h.`;
  }

  chargeEV(ev: ElectricCar) {
    ev.chargeBattery(20);
    this.message = `${ev.displayInfo()} (charged battery)`;
  }
}
