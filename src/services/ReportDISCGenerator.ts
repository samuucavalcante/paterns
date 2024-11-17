import type { PDFAdapter } from "../providers/pdf/PDFAdapter";

export class ReportDISCGenerator {
  constructor(private readonly pdfGenerator: PDFAdapter) {}
  execute() {
    const now = Date.now();
    const filename = `${now}.pdf`;
    const content = "Meu relatório DISC";
    this.pdfGenerator.generate(filename, content);
  }
}
