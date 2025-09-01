import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { ElectricCar } from '../models/electric-car.model';

@Injectable({
  providedIn: 'root' // service available app-wide
})
export class CarService {
  private cars: Car[] = [
    new Car('Toyota', 'Corolla', 2021),
    new Car('Honda', 'Civic', 2022),
    new ElectricCar('Tesla', 'Model 3', 2023),
    new ElectricCar('Nissan', 'Leaf', 2020)
  ];

  getCars(): Car[] {
    return this.cars;
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }
}
