import type { TaxTypeInterface } from "../contracts/TaxTypeInterface";

export class IPI implements TaxTypeInterface {
  constructor() {}
  calculate(amount: number): number {
    return amount * 0.01;
  }
}
