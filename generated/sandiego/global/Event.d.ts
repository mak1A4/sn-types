declare class Event {
  constructor();
  /**
   * Returns the current value of the passed in event management field.
   * @param field Name of the event management field value to return.
   */
  getField(field: string): any;
  /**
   * Replaces the existing additional_info field in the associated
   * event with the passed in JSON string.
   * @param additionalInfo JSON String (key/value pairs) to save in the
   * additional_info field.Note: This parameter replaces the
   * existing information. It does not update the existing fields.
   */
  setAdditionalInfo(additionalInfo: string): any;
  /**
   * Sets the specified field in the associated event.
   * @param key Name of the key to add or update in the event. For additional information on
   * the predefined event fields, see Event field format for event
   * collection.
   * @param value Information to store in the associated event field.Note: The
   * value string is trimmed before it is stored, whereby
   * multiple spaces are replaced with a single space.
   */
  setField(key: string, value: string): any;
  /**
   * Sets the description field of the associated event to the passed
   * in value.
   * @param text Text to store in the description field of the associated
   * event.Max length: 4000 characters
   */
  setText(text: string): any;
  /**
   * Sets the time_of_event field in the associated event to the passed
   * in UTC time value.
   * @param timeOfEvent UTC time value to set in the time_of_event
   * field.Format: "yyyy-MM-dd HH:mm:ss"
   * Max length: 40 characters
   */
  setTimeOfEvent(timeOfEvent: string): any;
}
export { Event };
