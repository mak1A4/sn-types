declare class GlideExcelParser {
  constructor();
  /**
   * Close the connection to the input stream and release the document.
   */
  close(): any;
  /**
   * Returns a list of column headers from the parsed document.
   */
  getColumnHeaders(): any;
  /**
   * Returns the error message when the parse() method fails.
   */
  getErrorMessage(): any;
  /**
   * Get the current row values and headers.
   */
  getRow(): any;
  /**
   * Gets table column types and max character length from a spreadsheet or CSV
   * attachment.
   */
  getTableInfo(): any;
  /**
   * Moves to the next row.
   */
  next(): any;
  /**
   * Parse an XLSX formatted Excel document.
   * @param inputStream The Excel document to be parsed.
   */
  parse(inputStream: any): any;
  /**
   * Set the number of the header row to be retrieved.
   * @param headerRowNumber The header row to be retrieved.
   */
  setHeaderRowNumber(headerRowNumber: number): any;
  /**
   * Return an empty value instead of null when an Excel cell is not present.
   * @param empty When true, cells that are not present return an empty value. When false, cells
   * that are not present return null.
   */
  setNullToEmpty(empty: boolean): any;
  /**
   * Set the name of the sheet to be retrieved.
   * @param sheetName The name of the sheet to be retrieved.
   */
  setSheetName(sheetName: string): any;
  /**
   * Set the number of the Excel sheet to be retrieved.
   * @param sheetNumber The Excel sheet number to retrieve.
   */
  setSheetNumber(sheetNumber: number): any;
}
export { GlideExcelParser };
