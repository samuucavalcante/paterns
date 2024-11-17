import type { PDFAdapter } from "./PDFAdapter";
// @ts-ignore
import pdf from "pdf-creator-node";
import fs from "fs";

export class PDFCreatorNodePDFAdapter implements PDFAdapter {
  generate(filename: string, content: string) {
    const document = {
      html: `<html>${content} PDFCreatorNode</html>`,
      path: "PDFCreatorNode" + "-" + filename,
    };
    const options = {
      format: "A3",
    };

    pdf.create(document).catch((err: unknown) => err);
  }
}
