import { TaxCalculatorService } from "./services/TaxCalculatorService";

const amount = 100;
const type = "ICMS";

const calculateTaxService = new TaxCalculatorService();
const value = calculateTaxService.setTaxType(type).calculate(amount);
