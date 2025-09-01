export class Car {
  private speed: number = 0;

  constructor(public brand: string, public model: string, public year: number) {}

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
