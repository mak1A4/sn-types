declare class NameValuePairs {
  constructor(mapForm: any);
  constructor(stringForm: string);
  /**
   * Produces this.string from this.map.
   */
  mapToString(): any;
  /**
   * If the specified value contains double quotes, equals, commas, or spaces, this method
   * surrounds the value with double quotes and doubles up any enclosed double quotes.
   * @param value The value to process
   */
  quotify(value: any): any;
  /**
   * Produces this.map from this.string.
   */
  stringToMap(): any;
}
export { NameValuePairs };
