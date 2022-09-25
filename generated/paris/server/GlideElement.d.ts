declare class GlideElement {
  /**
   * Determines if the user's role permits the creation of new records in this
   * field.
   */
  canCreate(): any;
  /**
   * Indicates whether the user's role permits them to read the associated
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
   * @param o An object value to check against the previous value of the current
   * field.
   */
  changesFrom(o: any): any;
  /**
   * Determines if the new value of a field, after a change, matches the specified
   * object.
   * @param o An object value to check against the new value of the current field.
   */
  changesTo(o: any): any;
  /**
   * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration
   * field. Does not require the creation of a GlideDateTime object because the duration field is
   * already a GlideDateTime object.
   */
  dateNumericValue(): any;
  /**
   * Returns the value of the specified attribute from the dictionary.
   * @param attributeName Attribute name
   */
  getAttribute(attributeName: string): any;
  /**
   * Returns the Boolean value of the specified attribute from the dictionary.
   * @param attributeName Attribute name
   */
  getBooleanAttribute(attributeName: string): any;
  /**
   * Returns the choice list for a specified field.
   * @param dependent Optional. Field within the associated record on which the choice list field
   * depends.
   */
  getChoices(dependent?: string): any;
  /**
   * Returns the choice label for the current choice.
   */
  getChoiceValue(): any;
  /**
   * Returns the clear text value for Password (2 way encrypted) fields in scoped
   * applications.
   */
  getDecryptedValue(): any;
  /**
   * Gets the formatted display value of the field.
   * @param maxCharacters Optional: Maximum characters desired
   */
  getDisplayValue(maxCharacters?: number): any;
  /**
   * Returns the field's element descriptor.
   */
  getED(): void;
  /**
   * Returns the phone number in international format.
   */
  getGlobalDisplayValue(): any;
  /**
   * Returns the HTML value of a field.
   * @param maxChars Optional. Maximum number of characters to return.
   */
  getHTMLValue(maxChars?: number): any;
  /**
   * Returns either the most recent journal entry or all journal entries.
   * @param mostRecent If 1, returns the most recent entry. If -1, returns all journal
   * entries.
   */
  getJournalEntry(mostRecent: number): any;
  /**
   * Returns the object label.
   */
  getLabel(): any;
  /**
   * Returns the name of the field.
   */
  getName(): any;
  /**
   * Gets the table name for a reference element.
   */
  getReferenceTable(): any;
  /**
   * Returns a GlideRecord object for a given reference element.
   */
  getRefRecord(): any;
  /**
   * Returns the name of the table on which the field resides.
   */
  getTableName(): any;
  /**
   * Determines if a field is null.
   */
  nil(): any;
  /**
   * Sets the value of a date/time element to the specified number of milliseconds since
   * January 1, 1970 00:00:00 GMT.
   * @param milliseconds Number of milliseconds since 1/1/1970
   */
  setDateNumericValue(milliseconds: number): any;
  /**
   * Sets the display value of the field.
   * @param value The value to set for the field.
   */
  setDisplayValue(value: any): any;
  /**
   * Adds an error message. Available in Fuji patch 3.
   * @param errorMessage The error message.
   */
  setError(errorMessage: string): any;
  /**
   * Sets the field to the specified phone number.
   * @param phoneNumber The phone number to set. This can be in either the international or local
   * format.
   * @param strict When true, specifies that the number specified must match the correct format.
   * When false, the system attempts to correct an improperly formatted phone
   * number.
   */
  setPhoneNumber(phoneNumber: any, strict: boolean): any;
  /**
   * Sets the value of a field.
   * @param value Object value to set the field to.
   */
  setValue(value: any): any;
  /**
   * Converts the value of a GlideRecord field to a string.
   */
  toString(): any;
}
export { GlideElement };
