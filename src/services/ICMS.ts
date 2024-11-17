import type { TaxTypeInterface } from "../contracts/TaxTypeInterface";

export class ICMS implements TaxTypeInterface {
  constructor() {}

  calculate(amount: number): number {
    return amount * 0.1;
  }
}
