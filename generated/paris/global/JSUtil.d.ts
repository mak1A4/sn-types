declare class JSUtil {
  /**
   * Checks if item is null or is undefined.
   * @param item The object to check
   */
  doesNotHave(item: any): any;
  /**
   * Escape ampersands commonly used to define URL attributes.
   * @param text The text
   */
  escapeAttr(text: string): any;
  /**
   * Escapes invalid XML characters such as "< > &".
   * @param text The text
   */
  escapeText(text: string): any;
  /**
   * Returns the value in a boolean GlideRecord field.
   * @param gr A GlideRecord
   * @param field The field from which to retrieve the boolean value.
   */
  getBooleanValue(gr: any, field: string): any;
  /**
   * Checks if item is not null and is not undefined.
   * @param item The Object to check
   */
  has(item: any): any;
  /**
   * Checks to see if the specified object is a member of the specified class.
   * @param item The object to check
   * @param _class The class to check
   */
  instance_of(item: any, _class: string): any;
  /**
   * Checks if the specified object is a Java class.
   * @param value The object to check
   */
  isJavaObject(value: any): any;
  /**
   * Logs all the properties in the given object: name, type, and value.
   * @param obj The object for which to enumerate properties
   * @param name Optional name for the logged object
   */
  logObject(obj: any, name?: string): any;
  /**
   * Checks if item is null, undefined, or evaluates to the empty string.
   * @param item The object to check
   */
  nil(item: any): any;
  /**
   * Checks if item is null, undefined, or evaluates to the empty string.
   * @param item The object to check
   */
  notNil(item: any): any;
  /**
   * Converts the specified object to a Boolean.
   * @param item The object to convert
   */
  toBoolean(item: any): any;
  /**
   * Determines the type of the specified object.
   * @param value The object to check
   */
  type_of(value: any): any;
  /**
   * Restore ampersands from escaped text.
   * @param text The text
   */
  unescapeAttr(text: string): any;
  /**
   * Removes escape characters.
   * @param text The text to process.
   */
  unescapeText(text: string): any;
}
export { JSUtil };
