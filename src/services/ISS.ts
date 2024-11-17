import type { TaxTypeInterface } from "../contracts/TaxTypeInterface";

export class ISS implements TaxTypeInterface {
  public calculate(amount: number): number {
    return amount * 0.5;
  }
}
