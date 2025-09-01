import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.model';
import { ElectricCar } from '../models/electric-car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // private store of cars
  private carsData: Car[] = [
    new Car('Toyota', 'Corolla', 2021),
    new Car('Honda', 'Civic', 2022),
    new ElectricCar('Tesla', 'Model 3', 2023),
    new ElectricCar('Nissan', 'Leaf', 2020)
  ];

  // BehaviorSubject → keeps latest state + notifies subscribers
  private carsSubject = new BehaviorSubject<Car[]>(this.carsData);
  cars$ = this.carsSubject.asObservable(); // expose as observable

  // Methods
  getCars(): Car[] {
    return this.carsData;
  }

  addCar(car: Car): void {
    this.carsData.push(car);
    this.carsSubject.next(this.carsData); // 🔔 notify subscribers
  }

  updateCars(): void {
    this.carsSubject.next(this.carsData); // 🔔 force emit (for UI updates after edits)
  }
}
