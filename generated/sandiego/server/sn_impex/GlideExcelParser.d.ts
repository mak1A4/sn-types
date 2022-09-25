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
   * Gets a list of all worksheet names in an Excel workbook.
   */
  getSheetNames(): any;
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
   * Parses an XLSX-formatted Excel document.
   * @param inputStream Excel
   * document provided as an input stream. Note: Do not set this value
   * if using the setSource() method to parse
   * the same source multiple times.
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
  /**
   * Defines an input source for parsing multiple times or parsing each worksheet in an
   * Excel file.
   * @param inputStream Excel document provided as an input stream.
   */
  setSource(inputStream: any): any;
}
export { GlideExcelParser };
