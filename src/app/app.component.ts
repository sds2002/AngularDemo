import { Component } from '@angular/core';
import { Car } from './models/car.model';
import { ElectricCar } from './models/electric-car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars: Car[] = [
    new Car('Toyota', 'Corolla'),
    new ElectricCar('Tesla', 'Model 3')
  ];

  message: string = '';

  testDrive(car: Car) {
    // 🔹 At runtime, the correct drive() method is chosen
    this.message = car.drive();
  }
}
