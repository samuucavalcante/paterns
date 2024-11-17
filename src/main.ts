import type { TaxTypeInterface } from "./contracts/TaxTypeInterface";
import { ICMS } from "./services/ICMS";
import { IPI } from "./services/IPI";
import { ISS } from "./services/ISS";
import type { ITaxType } from "./services/ITaxType";
import { TaxCalculatorService } from "./services/TaxCalculatorService";

const amount = 100;
const type = "ICMS";

const calculateTaxService = new TaxCalculatorService();

const taxTypesInstance: Record<ITaxType, TaxTypeInterface> = {
  ICMS: new ICMS(),
  ISS: new ISS(),
  IPI: new IPI(),
};

const taxType = taxTypesInstance[type];

const value = calculateTaxService.setTaxType(taxType).calculate(amount);
