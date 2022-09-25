declare class CSVParser {
  /**
   * Parses passed in CSV formatted content into an array.
   * @param csvLine CSV content to parse.
   * @param delimiter Optional. Character used to delineate the fields in the source CSV
   * content.Default: Comma ','
   * @param quoteCharacter Optional. Character used as the quote character in the source CSV content.
   * Default: Double quote '"'
   */
  parseLineToArray(
    csvLine: string,
    delimiter?: string,
    quoteCharacter?: string,
  ): any;
  /**
   * Parses passed in CSV formatted content into an object.
   * @param csvLine CSV content to parse.
   * @param headers Headers associated with the CSV content. These headers must be specified in the
   * same order as the corresponding content in csvLine. For
   * example, var headers = ['first_name', 'last_name',
   * 'address'];
   * @param delimiter Optional. Character used to delineate the fields in the source CSV
   * content.Default: Comma ','
   * @param quoteCharacter Optional. Character used as the quote character in the source CSV content.
   * Default: Double quote '"'
   */
  parseLineToObject(
    csvLine: string,
    headers: any[],
    delimiter?: string,
    quoteCharacter?: string,
  ): any;
}
export { CSVParser };
