declare class GlideCalendarDateTime {
  constructor();
  constructor(gcDT: any);
  constructor(dateTime: string);
  /**
   * Adds a GlideTime object to the current GlideCalendarDateTime object.
   * @param time Time to add.
   */
  add(time: any): any;
  /**
   * Adds a GlideTime object to the current GlideCalendarDateTime object.
   * @param milliseconds Number of milliseconds to add
   */
  add(milliseconds: number): any;
  /**
   * Adds a specified number of days to the current GlideCalendarDateTime object. A negative
   * parameter subtracts days.
   * @param days Number of days to add. Use a negative value to subtract.
   */
  addDaysLocalTime(days: number): any;
  /**
   * Adds a specified number of days to the current GlideCalendarDateTime object. A negative
   * parameter subtracts days.
   * @param days Number of days to add. Use a negative value to subtract.
   */
  addDaysUTC(days: number): any;
  /**
   * Adds a specified number of months to the current GlideCalendarDateTime object. A
   * negative parameter subtracts months.
   * @param months Number of months to add. Use a negative value to subtract.
   */
  addMonthsLocalTime(months: number): any;
  /**
   * Adds a specified number of months to the current GlideCalendarDateTime object. A
   * negative parameter subtracts months.
   * @param months Number of months to add. Use a negative number to subtract.
   */
  addMonthsUTC(months: number): any;
  /**
   * Adds a specified number of seconds to the GlideCalendarDateTime object.
   * @param seconds Number of seconds to add
   */
  addSeconds(seconds: number): any;
  /**
   * Adds a specified number of weeks to the current GlideCalendarDateTime object. A
   * negative parameter subtracts weeks.
   * @param weeks Number of weeks to add. Use a negative number to subtract.
   */
  addWeeksLocalTime(weeks: number): any;
  /**
   * Adds a specified number of weeks to the current GlideCalendarDateTime object. A
   * negative parameter subtracts weeks.
   * @param weeks Number of weeks to add. Use a negative number to subtract.
   */
  addWeeksUTC(weeks: number): any;
  /**
   * Adds a specified number of years to the current GlideCalendarDateTime object. A
   * negative parameter subtracts years.
   * @param years Number of years to add. To subtract use a negative value.
   */
  addYearsLocalTime(years: number): any;
  /**
   * Adds a specified number of years to the current GlideCalendarDateTime object. A
   * negative parameter subtracts years.
   * @param years Number of years to add. Use a negative value to subtract.
   */
  addYearsUTC(years: number): any;
  /**
   * Compares two date and time objects to determine whether one occurs before the other or
   * if they are equivalent.
   * @param dateTime Date time in a GlideCalendarDateTime object.
   */
  compareTo(dateTime: any): any;
  /**
   * Compares an object with an existing value for equality.
   * @param GCDT Object to compare. Can be a GlideCalendarDateTime object or a valid date time
   * string.
   */
  equals(GCDT: any): any;
  /**
   * Returns the date stored by the GlideCalendarDateTime object, expressed in the standard
   * format, yyyy-MM-dd, and the system time zone, UTC by default.
   */
  getDate(): any;
  /**
   * Returns the day of the month stored by the GlideCalendarDateTime object, expressed in
   * the current user's time zone.
   */
  getDayOfMonthLocalTime(): any;
  /**
   * Gets the day of the month stored by the GlideCalendarDateTime object, expressed in the
   * UTC time zone.
   */
  getDayOfMonthUTC(): any;
  /**
   * Returns the day of the week stored by the GlideCalendarDateTime object, expressed in
   * the user's time zone.
   */
  getDayOfWeekLocalTime(): any;
  /**
   * Returns the day of the week stored by the GlideCalendarDateTime object, expressed in
   * the UTC time zone.
   */
  getDayOfWeekUTC(): any;
  /**
   * Returns the number of days in the month stored by the GlideCalendarDateTime object,
   * expressed in the current user's time zone.
   */
  getDaysInMonthLocalTime(): any;
  /**
   * Returns the number of days in the month stored by the GlideCalendarDateTime object,
   * expressed in the UTC time zone.
   */
  getDaysInMonthUTC(): any;
  /**
   * Returns the date and time value in the current user's display format and time zone.
   * Referring to the GlideCalendarDateTime object directly returns the date and time value in the
   * GMT time zone.
   */
  getDisplayValue(): any;
  /**
   * Returns the display value in the internal format (yyyy-MM-dd HH:mm:ss).
   */
  getDisplayValueInternal(): any;
  /**
   * Returns the amount of time that daylight saving time is offset.
   */
  getDSTOffset(): any;
  /**
   * Returns the current error message.
   */
  getErrorMsg(): any;
  /**
   * Returns the object's time in the local time zone and in the internal
   * format.
   */
  getInternalFormattedLocalTime(): any;
  /**
   * Returns the date stored by the GlideCalendarDateTime object, expressed in the standard
   * format, yyyy-MM-dd, and the current user's time zone.
   */
  getLocalDate(): any;
  /**
   * Returns the month stored by the GlideCalendarDateTime object, expressed in the current
   * user's time zone.
   */
  getMonthLocalTime(): any;
  /**
   * Returns the month stored by the GlideCalendarDateTime object, expressed in the UTC time
   * zone.
   */
  getMonthUTC(): any;
  /**
   * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT.
   */
  getNumericValue(): any;
  /**
   * Returns the Unix duration stamp.
   */
  getTime(): any;
  /**
   * Returns the time zone offset in milliseconds.
   */
  getTZOffset(): any;
  /**
   * Returns the object's time in local time zone in the user's format.
   */
  getUserFormattedLocalTime(): any;
  /**
   * Returns the date and time value stored by the GlideCalendarDateTime object in the
   * internal format, yyyy-MM-dd HH:mm:ss, and the system time zone; UTC by default.
   */
  getValue(): any;
  /**
   * Returns the number of the week stored by the GlideCalendarDateTime object, expressed in
   * the current user's time zone.
   */
  getWeekOfYearLocalTime(): any;
  /**
   * Returns the number of the week stored by the GlideCalendarDateTime object, expressed in
   * the UTC time zone.
   */
  getWeekOfYearUTC(): any;
  /**
   * Returns the year stored by the GlideCalendarDateTime object, expressed in the current
   * user's time zone.
   */
  getYearLocalTime(): any;
  /**
   * Returns the year stored by the GlideCalendarDateTime object, expressed in the UTC time
   * zone.
   */
  getYearUTC(): any;
  /**
   * Determines if an object's date is set.
   */
  hasDate(): any;
  /**
   * Determines if the object's time uses a daylight saving offset
   */
  isDST(): any;
  /**
   * Determines if a value is a valid date and time.
   */
  isValid(): any;
  /**
   * Sets the day of the month to a specified value in the current user's time zone.
   * @param day Day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the
   * month.
   */
  setDayOfMonthLocalTime(day: number): any;
  /**
   * Sets the day of the month to a specified value in the UTC time zone.
   * @param day Day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the
   * month.
   */
  setDayOfMonthUTC(day: number): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param asDisplayed Date and time in the current user's display format and time zone. The
   * parameter must be formatted using the current user's preferred display format,
   * such as MM-dd-yyyy HH:mm:ss.
   * To assign the current date and time to a
   * variable in a workflow script, use
   * &lt;variable&gt;.setDisplayValue(gs.nowDateTime).
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param dateTime Date and time in the current user's time zone.
   * @param format Format to use to parse the dateTime parameter.
   */
  setDisplayValue(dateTime: string, format: string): any;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param dateTime Date and time in internal format
   */
  setDisplayValueInternal(dateTime: string): any;
  /**
   * Sets the date and time of the current object using an existing GlideCalendarDateTime
   * object.
   * @param gcDT GlideCalendarDateTime object
   */
  setGlideCalendarDateTime(gcDT: any): any;
  /**
   * Sets the month stored by the GlideCalendarDateTime object to a specified value using
   * the current user's time zone.
   * @param month Month to change to.
   */
  setMonthLocalTime(month: number): any;
  /**
   * Sets the month stored by the GlideCalendarDateTime object to a specified value using
   * the UTC time zone.
   * @param month Month to change to.
   */
  setMonthUTC(month: number): any;
  /**
   * Sets the date and time of the GlideCalendarDateTime object.
   * @param dateTime Date and time to use. This parameter may be one of several types.
   * A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss:
   * sets the value of the object to the specified date and time. Using the method
   * this way is equivalent to instantiating a new GlideCalendarDateTime object using the
   * GlideCalendarDateTime(value) constructor.
   * If the date and
   * time format used does not match the internal format, the method attempts to
   * set the date and time using other available formats. Resolving the date and
   * time this way can lead to inaccurate data due to ambiguity in the day and
   * month values. When using a non-standard date and time format, use
   * setValue(dt, format) instead.
   *
   *
   * A GlideCalendarDateTime object: sets the value of the object to the date and
   * time stored by the GlideCalendarDateTime passed in the parameter. Using the
   * method this way is equivalent to instantiating a new GlideCalendarDateTime
   * object using the GlideCalendarDateTime(g)
   * constructor.
   *
   *
   * A Java Date object: sets the value of the object using the value stored by the
   * Java Date object. Using the method this way is equivalent to passing the
   * value returned by the Java Date object getTime() to the
   * GlideCalendarDateTime setNumericValue() method. This method
   * does not accept JavaScript Date objects.
   *
   *
   * A JavaScript Number: sets the value of the object using the Number value as
   * milliseconds past January 1, 1970 00:00:00 GMT. Using the method this way is
   * equivalent to the setNumericValue(milliseconds)
   * method.
   *
   *
   * A Java Integer or Long: sets the value of the object using the Integer or Long
   * value as milliseconds past January 1, 1970 00:00:00 GMT. Using the method
   * this way is equivalent to the setNumericValue(milliseconds)
   * method.
   *
   *
   *
   */
  setValue(dateTime: any): any;
  /**
   * Sets a date and time value using the UTC time zone and the specified date and time
   * format.
   * @param dateTime Date and time to use.
   * @param format Format to use.
   */
  setValueUTC(dateTime: string, format: string): any;
  /**
   * Sets the year stored by the GlideCalendarDateTime object to a specified value using the
   * current user's time zone.
   * @param year Year to change to.
   */
  setYearLocalTime(year: number): any;
  /**
   * Sets the year stored by the GlideCalendarDateTime object to a specified value using the
   * UTC time zone.
   * @param year Year to change to.
   */
  setYearUTC(year: number): any;
  /**
   * Returns the duration difference between two GlideCalendarDateTime values.
   * @param start Start value.
   * @param end End value.
   */
  subtract(start: any, end: any): any;
  /**
   * Returns the duration difference between two GlideCalendarDateTime values.
   * @param time Time to subtract.
   */
  subtract(time: any): any;
  /**
   * Returns the duration difference between two GlideCalendarDateTime values.
   * @param milliseconds Number of milliseconds to subtract.
   */
  subtract(milliseconds: number): any;
  /**
   * Returns the date and time value stored by the GlideCalendarDateTime object in the
   * internal format, yyyy-MM-dd HH:mm:ss, and the system time zone; UTC by default.
   */
  toString(): any;
}
export { GlideCalendarDateTime };
