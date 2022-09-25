declare class RecordToHTML {
  constructor(table: string, sys_id: string, pattern: string, link: boolean);
  /**
   * Sets the specified field to the specified value.
   * @param fieldName Name of the field to change.
   * @param value Value to set the field to.
   */
  setValue(fieldName: string, value: string): any;
  /**
   * Converts the record to a string.
   */
  toString(): any;
}
export { RecordToHTML };
