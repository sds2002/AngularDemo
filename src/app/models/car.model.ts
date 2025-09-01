export class Car {
  constructor(public brand: string, public model: string) {}

  drive(): string {
    return `${this.brand} ${this.model} is driving normally 🚗`;
  }
}
