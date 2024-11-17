import { PDFCreatorNodePDFAdapter } from "./providers/pdf/PDFCreatorNodePDFAdapter";
import { PDFkitPDFAdapter } from "./providers/pdf/PDFkitPDFAdapter";
import { ReportDISCGenerator } from "./services/ReportDISCGenerator";

const pdfGenerator = new PDFkitPDFAdapter();

const reportDISCGenerator = new ReportDISCGenerator(pdfGenerator);

reportDISCGenerator.execute();
