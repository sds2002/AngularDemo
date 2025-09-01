import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';
import { ElectricCar } from '../models/electric-car.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  cars: Car[] = [];
  message: string = '';

  constructor(private carService: CarService) {
    // ✅ subscribe to cars$ → auto-updates when service changes
    this.carService.cars$.subscribe(cars => {
      this.cars = cars;
    });
  }

  accelerateCar(car: Car) {
    car.drive(20);
    this.message = `${car.displayInfo()} is now at ${car.getSpeed()} km/h.`;
    this.carService.updateCars(); // 🔔 notify Garage too
  }

  brakeCar(car: Car) {
    car.brake(10);
    this.message = `${car.displayInfo()} slowed down to ${car.getSpeed()} km/h.`;
    this.carService.updateCars();
  }

  chargeIfEV(car: Car) {
    if (car instanceof ElectricCar) {
      car.chargeBattery(20);
      this.message = `${car.displayInfo()} (battery charged)`;
      this.carService.updateCars();
    } else {
      this.message = `${car.displayInfo()} is not electric.`;
    }
  }

  addNewCar() {
    const newCar = new Car('Ford', 'Focus', 2024);
    this.carService.addCar(newCar);
    this.message = `${newCar.displayInfo()} added to garage.`;
  }
}
