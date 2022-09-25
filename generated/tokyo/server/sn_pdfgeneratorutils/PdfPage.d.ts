declare class PdfPage {
  constructor(pageSize: string, orientation?: string);
  /**
   * Gets the Y-coordinate of the lower edge of a PDF page.
   */
  getBottom(): any;
  /**
   * Gets the X-coordinate of the left edge of a PDF page.
   */
  getLeft(): any;
  /**
   * Gets the size of a PDF page
   */
  getPdfPageSize(): any;
  /**
   * Gets the X-coordinate of the right edge of a PDF page.
   */
  getRight(): any;
  /**
   * Gets the Y-coordinate of the upper edge of a PDF page.
   */
  getTop(): any;
  /**
   * Gets the width of a PDF page.
   */
  getWidth(): any;
}
export { PdfPage };
