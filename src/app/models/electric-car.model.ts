import { Car } from './car.model';

export class ElectricCar extends Car {
  override drive(): string {
    return `${this.brand} ${this.model} is driving silently ⚡`;
  }
}
