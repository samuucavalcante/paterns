import type { TaxTypeInterface } from "../contracts/TaxTypeInterface";

export class TaxCalculatorService {
  private taxType: TaxTypeInterface = {} as TaxTypeInterface;

  public calculate(amount: number): number {
    const value = this.taxType.calculate(amount);
    return value;
  }

  public setTaxType(taxType: TaxTypeInterface): this {
    this.taxType = taxType;
    return this;
  }
}
