import { Car } from './car.model';

export class ElectricCar extends Car {
  batteryLevel: number = 100;

  constructor(brand: string, model: string, year: number) {
    super(brand, model, year);
  }

  chargeBattery(amount: number): void {
    this.batteryLevel = Math.min(100, this.batteryLevel + amount);
  }

  override displayInfo(): string {
    return `⚡ EV → ${super.displayInfo()} | Battery: ${this.batteryLevel}%`;
  }
}
