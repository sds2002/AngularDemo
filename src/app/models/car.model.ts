// src/app/models/car.model.ts
export class Car {
    brand: string;
    model: string;
    year: number;
    private speed: number = 0;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    drive(speedIncrease: number): void {
      this.speed += speedIncrease;
    }
  
    brake(speedDecrease: number): void {
      this.speed = Math.max(0, this.speed - speedDecrease);
    }
  
    getSpeed(): number {
      return this.speed;
    }
  
    displayInfo(): string {
      return `${this.year} ${this.brand} ${this.model}`;
    }
  }
  