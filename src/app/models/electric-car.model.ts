import { Car } from "./car.model";

// Child class using inheritance
export class ElectricCar extends Car {
    batteryLevel: number = 100; // Extra property for EV
  
    constructor(brand: string, model: string, year: number) {
      super(brand, model, year); // call parent constructor
    }
  
    chargeBattery(amount: number): void {
      this.batteryLevel = Math.min(100, this.batteryLevel + amount);
    }
  
    useBattery(amount: number): void {
      this.batteryLevel = Math.max(0, this.batteryLevel - amount);
    }
  
    // Overriding method
    override displayInfo(): string {
      return `⚡ EV → ${super.displayInfo()} | Battery: ${this.batteryLevel}%`;
    }
  }
  