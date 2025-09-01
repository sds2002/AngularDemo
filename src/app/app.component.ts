import { Component } from '@angular/core';
import { Car } from './models/car.model';
import { ElectricCar } from './models/electric-car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ✅ Polymorphic array (mix of Car and ElectricCar)
  cars: Car[] = [
    new Car('Toyota', 'Corolla', 2021),
    new Car('Honda', 'Civic', 2022),
    new ElectricCar('Tesla', 'Model 3', 2023),
    new ElectricCar('Nissan', 'Leaf', 2020)
  ];

  message: string = '';

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
      (car as ElectricCar).chargeBattery(20);
      this.message = `${car.displayInfo()} (battery charged)`;
    } else {
      this.message = `${car.displayInfo()} is not electric.`;
    }
  }
}
