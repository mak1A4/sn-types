declare class GlideDateTime {
  constructor();
  constructor(g: any);
  constructor(value: string);
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param gd GlideTime object whose time value to add to the specified GlideDateTime
   * object.
   */
  add(gd: any): any;
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param milliseconds The number of milliseconds to add.
   */
  add(milliseconds: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts days using the local date and time
   * values.
   * @param days The number of days to add. Use a negative value to subtract.
   */
  addDaysLocalTime(days: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts days using the UTC date and time
   * values.
   * @param days The number of days to add. Use a negative number to subtract.
   */
  addDaysUTC(days: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months. The method determines the local date and time equivalent to the
   * value stored by the GlideDateTime object, then adds or subtracts months using the local date and
   * time values.
   * @param months The number of months to add. use a negative value to subtract.
   */
  addMonthsLocalTime(months: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts months using the UTC date and time
   * values.
   * @param months The number of months to add. Use a negative value to subtract.
   */
  addMonthsUTC(months: number): any;
  /**
   * Adds the specified number of seconds to the current GlideDateTime object.
   * @param seconds The number of seconds to add.
   */
  addSeconds(seconds: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts weeks using the local date and time
   * values.
   * @param weeks The number of weeks to add. Use a negative value to subtract.
   */
  addWeeksLocalTime(weeks: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts weeks using the UTC date and time
   * values.
   * @param weeks The number of weeks to add. Use a negative value to subtract.
   */
  addWeeksUTC(weeks: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts years using the local date and time
   * values.
   * @param years The number of years to add.  Use a negative value to subtract.
   */
  addYearsLocalTime(years: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years. The date and time value stored by GlideDateTime object is interpreted
   * as being in the UTC time zone.
   * @param years The number of years to add. Use a negative value to subtract.
   */
  addYearsUTC(years: number): any;
  /**
   * Determines if the GlideDateTime object occurs after the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  after(gdt: any): any;
  /**
   * Determines if the GlideDateTime object occurs before the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  before(gdt: any): any;
  /**
   * Compares two date and time objects to determine whether they are equivalent or one
   * occurs before or after the other.
   * @param o Date and time object in GlideDateTime format
   */
  compareTo(o: any): any;
  /**
   * Compares a datetime with an existing value for equality.
   * @param dateTime The datetime to compare.
   */
  equals(dateTime: any): any;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the system time zone, UTC by default.
   */
  getDate(): any;
  /**
   * Gets the day of the month stored by the GlideDateTime object, expressed in the current
   * user's time zone.
   */
  getDayOfMonthLocalTime(): any;
  /**
   * Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getDayOfMonthUTC(): any;
  /**
   * Gets the day of the week stored by the GlideDateTime object, expressed in the user's
   * time zone.
   */
  getDayOfWeekLocalTime(): any;
  /**
   * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getDayOfWeekUTC(): any;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the current user's time zone.
   */
  getDaysInMonthLocalTime(): any;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the UTC time zone.
   */
  getDaysInMonthUTC(): any;
  /**
   * Gets the date and time value in the current user's display format and time
   * zone.
   */
  getDisplayValue(): any;
  /**
   * Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).
   */
  getDisplayValueInternal(): any;
  /**
   * Gets the amount of time that daylight saving time is offset.
   */
  getDSTOffset(): any;
  /**
   * Gets the current error message.
   */
  getErrorMsg(): any;
  /**
   * Returns the object's time in the local time zone and in the internal
   * format.
   */
  getInternalFormattedLocalTime(): any;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the current user's time zone.
   */
  getLocalDate(): any;
  /**
   * Returns a GlideTime object that represents the time portion of the GlideDateTime object
   * in the user's time zone.
   */
  getLocalTime(): any;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getMonthLocalTime(): any;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the UTC time zone.
   */
  getMonthUTC(): any;
  /**
   * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
   */
  getNumericValue(): any;
  /**
   * Returns a GlideTime object that represents the time portion of the GlideDateTime
   * object.
   */
  getTime(): any;
  /**
   * Gets the time zone offset in milliseconds.
   */
  getTZOffset(): any;
  /**
   * Returns the object's time in the local time zone and in the user's format.
   */
  getUserFormattedLocalTime(): any;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
   */
  getValue(): any;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the
   * current user's time zone. All weeks begin on Sunday. The first week of the year is the week that
   * contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered
   * the first week of 2016 as that week contains January 1 and 2.
   */
  getWeekOfYearLocalTime(): any;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC
   * time zone. All weeks begin on Sunday. The first week of the year is the week that contains at
   * least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week
   * of 2016 as that week contains January 1 and 2.
   */
  getWeekOfYearUTC(): any;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getYearLocalTime(): any;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.
   */
  getYearUTC(): any;
  /**
   * Determines if an object's date is set.
   */
  hasDate(): any;
  /**
   * Determines if an object's time uses a daylight saving offset.
   */
  isDST(): any;
  /**
   * Determines if a value is a valid date and time.
   */
  isValid(): any;
  /**
   * Determines if the GlideDateTime object occurs on or after the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  onOrAfter(gdt: any): any;
  /**
   * Determines if the GlideDateTime object occurs on or before the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  onOrBefore(gdt: any): any;
  /**
   * Sets the day of the month to a specified value in the current user's time
   * zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the month.
   */
  setDayOfMonthLocalTime(day: number): any;
  /**
   * Sets the day of the month to a specified value in the UTC time zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the month.
   */
  setDayOfMonthUTC(day: number): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param asDisplayed The date and time in the current user's display format and time zone. The
   * parameter must be formatted using the current user's preferred display format, such
   * as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a
   * workflow script, use
   * variable.setDisplayValue(gs.nowDateTime);.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param value Date and time in the current user's time zone.
   * @param format Date and time format to use to parse the value parameter.
   * Use the following values to describe the value
   * parameter:
   * dd: Day of the month
   *
   * MM: Month of the year
   *
   * yyyy: Year
   *
   * HH: Hour
   *
   * mm: Minutes
   *
   * ss: Seconds
   *
   *
   *
   * For example: "dd-MM-yyyy HH:mm:ss" or "MM-dd-yyyy HH:mm".
   */
  setDisplayValue(value: string, format: string): any;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param value The date and time in internal format.
   */
  setDisplayValueInternal(value: string): any;
  /**
   * Sets the date and time of the current object using an existing GlideDateTime object.
   * This method is equivalent to instantiating a new object with a GlideDateTime
   * parameter.
   * @param g The object to use for setting the datetime value.
   */
  setGlideDateTime(g: any): any;
  /**
   * Sets the month stored by the GlideDateTime object to the specified value using the
   * current user's time zone.
   * @param month The month to change to.
   */
  setMonthLocalTime(month: number): any;
  /**
   * Sets the month stored by the GlideDateTime object to the specified value using the UTC
   * time zone.
   * @param month The month to change to.
   */
  setMonthUTC(month: number): any;
  /**
   * Sets the date and time of the GlideDateTime object.
   * @param o The date and time to use. This parameter may be one of several types:
   * A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss.
   * Sets the value of the object to the specified date and time. Using the method
   * this way is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(String value) constructor. If the date and time
   * format used does not match the internal format, the method attempts to set the
   * date and time using other available formats. Resolving the date and time this
   * way can lead to inaccurate data due to ambiguity in the day and month values.
   * When using a non-standard date and time format, use
   * setValueUTC(String dt, String format) instead.
   *
   * A GlideDateTime object. Sets the value of the object to the date and time
   * stored by the GlideDateTime passed in the parameter. Using the method this way
   * is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(GlideDateTime g) constructor.
   *
   * A JavaScript Number. Sets the value of the object using the Number value as
   * milliseconds past January 1, 1970 00:00:00 GMT.
   *
   *
   */
  setValue(o: string): any;
  /**
   * Sets a date and time value using the UTC time zone and the specified date and time
   * format. This method throws a runtime exception if the date and time format used in the
   * dt parameter does not match the format parameter.
   * You can retrieve the error message by calling getErrorMsg() on the
   * GlideDateTime object after the exception is caught.
   * @param dt The date and time to use.
   * @param format The date and time format to use.
   */
  setValueUTC(dt: string, format: string): any;
  /**
   * Sets the year stored by the GlideDateTime object to the specified value using the
   * current user's time zone.
   * @param year The year to change to.
   */
  setYearLocalTime(year: number): any;
  /**
   * Sets the year stored by the GlideDateTime object to the specified value using the UTC
   * time zone.
   * @param year The year to change to.
   */
  setYearUTC(year: number): any;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param Start The start value.
   * @param End The end value.
   */
  subtract(Start: any, End: any): any;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param time The time value to subtract.
   */
  subtract(time: any): any;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param milliseconds The number of milliseconds to subtract.
   */
  subtract(milliseconds: number): any;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default. This method is equivalent to
   * getValue().
   */
  toString(): any;
}
export { GlideDateTime };
