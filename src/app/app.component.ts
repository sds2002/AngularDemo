import { Component } from '@angular/core';
import { Car } from './models/car.model';  // ✅ Import your Car class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ✅ Properties used in template
  car1 = new Car('Toyota', 'Corolla', 2021);
  car2 = new Car('Tesla', 'Model 3', 2023);
  message: string = '';

  // ✅ Methods used in template
  accelerateCar(car: Car) {
    car.drive(20);
    this.message = `${car.displayInfo()} is now at ${car.getSpeed()} km/h.`;
  }

  brakeCar(car: Car) {
    car.brake(10);
    this.message = `${car.displayInfo()} slowed down to ${car.getSpeed()} km/h.`;
  }
}
