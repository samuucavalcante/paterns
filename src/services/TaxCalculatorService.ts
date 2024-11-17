import type { ITaxType } from "./ITaxType";
import { TaxCalculatorFactory } from "./TaxCalculatorFactory";

export class TaxCalculatorService {
  private taxType: ITaxType = {} as ITaxType;

  public calculate(amount: number): number {
    const tax = TaxCalculatorFactory.create(this.taxType);
    const value = tax.calculate(amount);
    return value;
  }

  public setTaxType(taxType: ITaxType) {
    this.taxType = taxType;
    return this;
  }
}
