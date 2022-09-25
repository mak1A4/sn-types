declare class XMLUtilJS {
  /**
   * Provides escape text for a given string.
   * @param text The text to format.
   */
  escapeForXMLText(text: string): any;
  /**
   * Converts a string to an XML value.
   * @param str The string to convert
   */
  stringToValue(str: string): any;
  /**
   * Provides un-escaped XML for a given string.
   * @param text The XML text to clean up.
   */
  unescapeForXMLText(text: string): any;
  /**
   * Converts an XML value to a string.
   * @param XMLvalue The XML to convert
   */
  valueToString(XMLvalue: string): any;
}
export { XMLUtilJS };
