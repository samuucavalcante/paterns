export interface PDFAdapter {
  generate(filename: string, content: string): void;
}
