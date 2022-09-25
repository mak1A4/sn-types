declare class JSONStreamingAPI {
  /**
   * Closes the JSONStreamingAPI
   * object. Must call this method to close
   * the stream after building a JSON object.
   */
  close(): any;
  /**
   * Ends pretty print JSON formatting.
   */
  disablePrettyPrint(): any;
  /**
   * Adds pretty print formatting to a JSON object, or a section of a JSON object.
   */
  enablePrettyPrint(): any;
  /**
   * Closes an array within the parent JSON object.
   */
  endArray(): any;
  /**
   * Closes an object within the parent JSON object.
   */
  endObject(): any;
  /**
   * Returns the sys_id of the attachment record in the Streaming Attachments
   * [streaming_attachment] table that contains the JSON payload.
   */
  getAttachmentId(): any;
  /**
   * Returns the JSON object as a string.
   */
  getJSONString(): any;
  /**
   * Opens an array within the parent JSON object.
   */
  startArray(): any;
  /**
   * Creates an array within the parent JSON object.
   * @param fieldName The name of the array.
   */
  startArrayField(fieldName: string): any;
  /**
   * Opens an object within the parent JSON object.
   */
  startObject(): any;
  /**
   * Adds a Boolean value to the parent JSON object.
   * @param state The boolean value to add to the parent JSON object.Valid values:
   * true
   *
   * false
   *
   *
   *
   */
  writeBoolean(state: boolean): any;
  /**
   * Adds a Boolean field and value to the parent JSON object.
   * @param fieldName The name of the field to add to the parent JSON object.
   * @param value The boolean value to add to the parent JSON object.Valid values:
   * true
   *
   * false
   *
   *
   *
   */
  writeBooleanField(fieldName: string, value: boolean): any;
  /**
   * Adds a field name to the parent JSON object.
   * @param name Field name to add to the parent JSON object.
   */
  writeFieldName(name: string): any;
  /**
   * Adds a null value to the parent JSON object.
   */
  writeNull(): any;
  /**
   * Adds a field with a null value to the parent JSON object.
   * @param fieldName The name of the null field.
   */
  writeNullField(fieldName: string): any;
  /**
   * Adds a number field and value to the parent JSON object.
   * @param fieldName The name of the number field.
   * @param encodedValue The value of the number field.
   */
  writeNumberField(fieldName: string, encodedValue: string): any;
  /**
   * Adds a raw value to the parent JSON object.
   * @param text Raw text to add to the parent JSON object.
   */
  writeRaw(text: string): any;
  /**
   * Adds a string value to the parent JSON object.
   * @param text The string value to add to the parent JSON object.
   */
  writeString(text: string): any;
  /**
   * Adds a string field and value to the parent JSON object.
   * @param fieldName The name of the field to add to the parent JSON object.
   * @param value The value of the field.
   */
  writeStringField(fieldName: string, value: string): any;
}
export { JSONStreamingAPI };
