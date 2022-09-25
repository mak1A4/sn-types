declare class GlideDuration {
  constructor();
  constructor(another: any);
  constructor(milliseconds: number);
  constructor(displayValue: string);
  /**
   * Adds the duration of the specified GlideDuration object to the current GlideDuration
   * object.
   * @param duration GlideDuration object that contains the duration value to add to the current
   * GlideDuration object.
   */
  add(duration: any): any;
  /**
   * Returns the duration value in the specified format.
   * @param format Duration format.Format: Global date and time field format
   */
  getByFormat(format: string): any;
  /**
   * Returns the number of days.
   */
  getDayPart(): any;
  /**
   * Returns the display value of the duration in number of days, hours, and
   * minutes.
   */
  getDisplayValue(): any;
  /**
   * Returns the duration value in "d HH:mm:ss" format.
   */
  getDurationValue(): any;
  /**
   * Returns the rounded number of days. If the time part is more than 12 hours, the return
   * value is rounded up. Otherwise, it is rounded down.
   */
  getRoundedDayPart(): any;
  /**
   * Returns the internal date/time value of the current GlideDuration object.
   */
  getValue(): any;
  /**
   * Sets the duration display value.
   * @param asDisplayed Display duration value to set.Format: d HH:mm:ss where "d" is number of
   * days
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the internal date/time value of the GlideDuration object.
   * @param o Date and time to use as the endpoint for the calculated duration time.
   * Format: YYYY-MM-DD HH:mm:ss
   */
  setValue(o: any): any;
  /**
   * Subtracts the duration of the specified GlideDuration object to the current
   * GlideDuration object.
   * @param duration GlideDuration object that contains the duration value to subtract from the
   * current GlideDuration object.
   */
  subtract(duration: any): any;
}
export { GlideDuration };
