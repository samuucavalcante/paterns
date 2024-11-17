import type { TaxTypeInterface } from "../contracts/TaxTypeInterface";
import { ICMS } from "./ICMS";
import { IPI } from "./IPI";
import { ISS } from "./ISS";
import type { ITaxType } from "./ITaxType";

export class TaxCalculatorFactory {
  static create(_taxType: ITaxType): TaxTypeInterface {
    const taxTypesInstance: Record<ITaxType, TaxTypeInterface> = {
      ICMS: new ICMS(),
      ISS: new ISS(),
      IPI: new IPI(),
    };

    const Tax = taxTypesInstance[_taxType];

    return Tax;
  }
}
