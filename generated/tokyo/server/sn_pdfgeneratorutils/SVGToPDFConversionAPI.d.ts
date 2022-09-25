declare class SVGToPDFConversionAPI {
  constructor();
  /**
   * Adds an SVG image to a PDF on a specified page with image size and location
   * coordinates.
   * @param svg SVG to convert to a PDF document.
   * @param inputPdfSysId Sys_id of the target PDF in which to create a copy of with an SVG. The target
   * PDF is in the Attachments [sys_attachment] table.
   * @param targetTable Name of the table containing the record to which the PDF
   * is attached. You can find this value in the same row as the attachment listed in the
   * Attachments [sys_attachment] table.
   * @param targetTableSysId Sys_id of the record to which the PDF is attached. You can
   * find this value in the same row as the attachment listed in the Attachments
   * [sys_attachment] table.
   * @param targetTable Name of the table on which to attach the
   * converted PDF.
   * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
   * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
   * [sys_attachment] table.
   * @param pageNo Page number in the attached PDF on which to place the SVG.
   * @param x Horizontal position of the SVG in the page. Value is in points.
   * @param y Vertical position of the SVG in the page. Value is in points.
   * @param svgImgWidth Width of the SVG image in pixels.
   * @param svgImgHeight Height of the SVG image in pixels.
   */
  addSVGToPDF(
    svg: string,
    inputPdfSysId: string,
    targetTable: string,
    targetTableSysId: string,
    pdfName: string,
    pageNo: number,
    x: number,
    y: number,
    svgImgWidth: number,
    svgImgHeight: number,
  ): any;
  /**
   * Converts an SVG provided as string to PDF.
   * @param svg SVG to convert to a PDF document.
   * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
   * [sys_attachment] table.
   * @param targetTable Name of the table on which to attach the
   * converted PDF.
   * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
   */
  convertSVGToPDF(
    svg: string,
    pdfName: string,
    targetTable: string,
    targetTableSysId: string,
  ): any;
  /**
   * Converts an SVG provided as string to PDF with image width and height
   * values.
   * @param svg SVG to convert to a PDF document.
   * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
   * [sys_attachment] table.
   * @param targetTable Name of the table on which to attach the
   * converted PDF.
   * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
   * @param svgImgWidth Width of the SVG image in pixels.
   * @param svgImgHeight Height of the SVG image in pixels.
   */
  convertSVGToPDFWithSize(
    svg: string,
    pdfName: string,
    targetTable: string,
    targetTableSysId: string,
    svgImgWidth: number,
    svgImgHeight: number,
  ): any;
}
export { SVGToPDFConversionAPI };
