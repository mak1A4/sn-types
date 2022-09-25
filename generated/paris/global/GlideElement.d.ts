declare class GlideElement {
  /**
   * Determines if the user's role permits the creation of new records in this
   * field.
   */
  canCreate(): any;
  /**
   * Determines whether the user's role permits them to read the associated
   * GlideRecord.
   */
  canRead(): any;
  /**
   * Determines whether the user's role permits them to write to the associated
   * GlideRecord.
   */
  canWrite(): any;
  /**
   * Determines if the current field has been modified. This functionality is available for
   * all available data types, except Journal fields.
   */
  changes(): any;
  /**
   * Determines if the previous value of the current field matches the specified
   * object.
   * @param value An object value to check against the previous value of the current
   * field.
   */
  changesFrom(value: any): any;
  /**
   * Determines if the new value of a field, after a change, matches the specified
   * object.
   * @param value An object value to check against the new value of the current field.
   */
  changesTo(value: any): any;
  /**
   * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration
   * field. Does not require the creation of a GlideDateTime object because the duration field is
   * already a GlideDateTime object.
   */
  dateNumericValue(): any;
  /**
   * Debugs the object and adds debug messages using
   * setError(String).
   * @param o An object to debug.
   */
  debug(o: any): any;
  /**
   * Returns the value of the specified attribute from the dictionary.
   * @param attributeName Attribute name
   */
  getAttribute(attributeName: string): any;
  /**
   * Gets the base table of the field.
   */
  getBaseTableName(): any;
  /**
   * Returns the Boolean value of the specified attribute from the dictionary.
   * @param attributeName Attribute name
   */
  getBooleanAttribute(attributeName: string): any;
  /**
   * Generates a choice list for a field. Returns the choice values from the base table
   * only, not from the extended table.
   * @param dependent Optional. Field within the associated record on which the choice list field
   * depends.
   */
  getChoices(dependent?: string): any;
  /**
   * Gets the choice label for the current choice value.
   */
  getChoiceValue(): any;
  /**
   * Gets the number of debug messages logged by debug().
   */
  getDebugCount(): any;
  /**
   * Returns the field (element) that a specified field is dependent on.
   */
  getDependent(): any;
  /**
   * Gets the table that the current table depends on.
   */
  getDependentTable(): any;
  /**
   * Gets the formatted display value of the field.
   * @param maxChar Optional, maximum number of characters to return.
   */
  getDisplayValue(maxChar?: number): any;
  /**
   * Gets the formatted display value of a field, or a specified substitute value if the
   * display value is null or empty.
   * @param maxChar Optional, the maximum number of characters to be returned.
   * @param nullSub The value to return if the display value is null or empty.
   */
  getDisplayValueExt(maxChar: number | undefined, nullSub: string): any;
  /**
   * Returns an element descriptor.
   */
  getED(): any;
  /**
   * Returns the value for the specified element.
   * @param value Element whose value you want returned.
   */
  getElementValue(value: string): any;
  /**
   * Returns any error message associated with the specified element.
   */
  getError(): any;
  /**
   * Gets the escaped value for the current element.
   */
  getEscapedValue(): any;
  /**
   * Gets the CSS style for the field.
   */
  getFieldStyle(): any;
  /**
   * Gets a glide object.
   */
  getGlideObject(): any;
  /**
   * Gets a glide record.
   */
  getGlideRecord(): any;
  /**
   * Returns the HTML value of a field.
   * @param maxChars Optional. Maximum number of characters to return.
   */
  getHTMLValue(maxChars?: number): any;
  /**
   * Returns the HTML value of a field, or a specified substitute value if the HTML value is
   * null or empty.
   * @param maxChar The maximum number of characters to return.
   * @param nullSub The value to return if the HTML value is null or empty.
   */
  getHTMLValueExt(maxChar: number, nullSub: string): any;
  /**
   * Returns either the most recent journal entry or all journal entries.
   * @param mostRecent If 1, returns the most recent entry. If -1, returns all journal
   * entries.
   */
  getJournalEntry(mostRecent: number): any;
  /**
   * Returns the object's label.
   */
  getLabel(): any;
  /**
   * Returns the name of the field.
   */
  getName(): any;
  /**
   * Returns a GlideRecord object for a given reference element.
   */
  getRefRecord(): any;
  /**
   * Get the CSS style for the value.
   */
  getStyle(): any;
  /**
   * Returns the name of the field's table.
   */
  getTableName(): any;
  /**
   * Retrieves the value and escapes the HTML.
   */
  getTextAreaDisplayValue(): any;
  /**
   * Retrieves the XHTML value of a field.
   */
  getXHTMLValue(): any;
  /**
   * Gets the XML value of a field as a string.
   */
  getXMLValue(): any;
  /**
   * Determines whether a field has a particular attribute.
   * @param attributeName The attribute to check for
   */
  hasAttribute(attributeName: string): any;
  /**
   * Determines if the user has the right to perform a particular operation.
   * @param operationName Name of the operation to check for
   */
  hasRightsTo(operationName: string): any;
  /**
   * Determines if the field has a value.
   */
  hasValue(): any;
  /**
   * Determines whether the field is null.
   */
  nil(): any;
  /**
   * Sets the duration field to a number of milliseconds since January 1, 1970, 00:00:00 GMT
   * for a duration field. Does not require the creation of a GlideDateTime object because the
   * duration field is already a GlideDateTime object.
   * @param milliseconds Number of milliseconds spanned by the duration.
   */
  setDateNumericValue(milliseconds: number): any;
  /**
   * Sets the display value of the field.
   * @param displayValue Value to be displayed.
   */
  setDisplayValue(displayValue: any): any;
  /**
   * Adds an error message to the associated field (element).
   */
  setError(): any;
  /**
   * Sets the initial value of a field.
   * @param value Initial value for the field.
   */
  setInitialValue(value: any): any;
  /**
   * Adds a journal entry and author as a work note or comment field.
   * @param entry Content of the journal entry.
   * @param userName Optional. The user to attribute the journal entry to. Does not set the journal
   * entry's created by field.
   */
  setJournalEntry(entry: string, userName?: string): any;
  /**
   * Sets the value of a field.
   * @param value The value the field is to be set to.
   */
  setValue(value: any): any;
  /**
   * Converts the field's value to a string.
   */
  toString(): any;
}
export { GlideElement };
