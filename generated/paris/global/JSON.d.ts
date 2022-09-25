declare class JSON {
  constructor();
  /**
   * Creates an object or primitive type from a JSON formatted string.
   * @param str A JSON formatted string.
   */
  decode(str: string): any;
  /**
   * Creates a string from a JSON object.
   * @param jsonObject The JSON object to be turned into a string.
   */
  encode(jsonObject: any): any;
  /**
   * Creates an object or primitive type from a JSON formatted string.
   * @param str A JSON formatted string.
   */
  parse(str: string): any;
  /**
   * Creates a string from a JSON object.
   * @param jsonObject JSON object to turn into a string.
   */
  stringify(jsonObject: any): any;
}
export { JSON };
