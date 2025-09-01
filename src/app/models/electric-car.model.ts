import { Car } from './car.model';

export class ElectricCar extends Car {
  batteryLevel: number = 100;

  constructor(brand: string, model: string, year: number) {
    super(brand, model, year);
  }

  chargeBattery(amount: number): void {
    this.batteryLevel = Math.min(100, this.batteryLevel + amount);
  }

  useBattery(amount: number): void {
    this.batteryLevel = Math.max(0, this.batteryLevel - amount);
  }

  // ✅ override keyword required in TS 4.3+
  override displayInfo(): string {
    return `⚡ EV → ${super.displayInfo()} | Battery: ${this.batteryLevel}%`;
  }
}
