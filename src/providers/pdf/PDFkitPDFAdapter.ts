import type { PDFAdapter } from "./PDFAdapter";
import PDFDocument from "pdfkit";
import fs from "fs";

export class PDFkitPDFAdapter implements PDFAdapter {
  generate(filename: string, content: string) {
    const doc = new PDFDocument();
    const fileStream = fs.createWriteStream("PDFkit" + "-" + filename);
    doc.pipe(fileStream);
    doc.text(content + " " + "PDFkit");
    doc.end();
  }
}
