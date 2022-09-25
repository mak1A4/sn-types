declare class GlideDate {
  constructor();
  /**
   * Gets the date in the specified date format.
   * @param format Desired date format using Java SimpleDateFormat. For example,
   * "dd-MM-yyyy" to get the day, month, and year, or
   * "EEEE" to get the day of the week.
   */
  getByFormat(format: string): any;
  /**
   * Gets the day of the month stored by the GlideDate object, expressed in the UTC time
   * zone.
   */
  getDayOfMonthNoTZ(): any;
  /**
   * Gets the date in the current user's display format and time zone.
   */
  getDisplayValue(): any;
  /**
   * Gets the date in the internal format (yyyy-MM-dd) and current user's timezone.
   */
  getDisplayValueInternal(): any;
  /**
   * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
   */
  getMonthNoTZ(): any;
  /**
   * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
   */
  getYearNoTZ(): any;
  /**
   * Sets a date value using the current user's display format and time zone.
   * @param asDisplayed Date in the current user's display format and time zone. Format: Must be
   * formatted using the current user's preferred display format, such as yyyy-MM-dd.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the date of the current GlideDate object in internal format (yyyy-MM-dd) and the
   * system time zone (UTC by default)..
   * @param o Date and time to set in the current GlideDate object.Format:
   * yyyy-MM-dd
   */
  setValue(o: string): any;
}
export { GlideDate };
