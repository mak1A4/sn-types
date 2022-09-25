declare class GlideDateTime {
  constructor();
  constructor(gdt: any);
  constructor(dateTime: string);
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param time GlideTime object whose time value to add to the specified GlideDateTime
   * object.
   */
  add(time: any): any;
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param milliseconds The number of milliseconds to add
   */
  add(milliseconds: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days.
   * @param days The number of days to add. Use a negative number to subtract.
   */
  addDays(days: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days.
   * @param days The number of days to add. Use a negative value to subtract.
   */
  addDaysLocalTime(days: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days.
   * @param days The number of days to add. Use a negative value to subtract.
   */
  addDaysUTC(days: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months.
   * @param months The number of months to add. Use a negative number to subtract.
   */
  addMonths(months: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months.
   * @param months The number of months to add. Use a negative value to subtract.
   */
  addMonthsLocalTime(months: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months.
   * @param months The number of months to add. Use a negative number to subtract.
   */
  addMonthsUTC(months: number): any;
  /**
   * Adds a specified number of seconds to the GlideDateTime object.
   * @param seconds The number of seconds to add
   */
  addSeconds(seconds: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks.
   * @param weeks The number of weeks to add. Use a negative number to subtract.
   */
  addWeeks(weeks: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks.
   * @param weeks The number of weeks to add. Use a negative number to subtract.
   */
  addWeeksLocalTime(weeks: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks.
   * @param weeks The number of weeks to add. Use a negative number to subtract.
   */
  addWeeksUTC(weeks: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years.
   * @param years The number of years to add. Use a negative value to subtract.
   */
  addYears(years: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years.
   * @param years The number of years to add. To subtract use a negative value.
   */
  addYearsLocalTime(years: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years.
   * @param years The number of years to add. Use a negative value to subtract.
   */
  addYearsUTC(years: number): any;
  /**
   * Compares two date and time objects to determine whether one occurs before the other or
   * if they are equivalent.
   * @param dateTime Date time in a GlideDateTime object
   */
  compareTo(dateTime: any): any;
  /**
   * Compares an object with an existing value for equality.
   * @param GDT The object to compare. Can be a GlideDateTIme object or a valid date time
   * string.
   */
  equals(GDT: any): any;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the system time zone, UTC by default.
   */
  getDate(): any;
  /**
   * Gets the current day of the month in the UTC time zone.
   */
  getDayOfMonth(): any;
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
   * Retrieves the day of the week stored by the GlideDateTime object, expressed in the
   * user's time zone.
   */
  getDayOfWeek(): any;
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
   * the Java Virtual Machine time zone.
   */
  getDaysInMonth(): any;
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
   * Returns the display value in the internal format (yyyy-MM-dd HH:mm:ss). This method is
   * useful for date/time fields, but not for date fields.
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
   * Returns a date and time object set to midnight of a specified day using
   * UTC.
   * @param dayOfTheWeek The day of the week for which to return the date/time object.
   */
  getInternalMidnight(dayOfTheWeek: number): any;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the current user's time zone.
   */
  getLocalDate(): any;
  /**
   * Gets the time in the user's time zone.
   */
  getLocalTime(): any;
  /**
   * Retrieves the month stored by the GlideDateTime object, expressed in Java Virtual
   * Machine time zone.
   */
  getMonth(): any;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getMonthLocalTime(): any;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getMonthUTC(): any;
  /**
   * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
   */
  getNumericValue(): any;
  /**
   * Retrieves the amount of time elapsed since the midnight of a specified day to the
   * current time.
   * @param dayOfWeek Day of week value from 1 to 7. 1 = Monday, 7=Sunday.
   */
  getSpanTime(dayOfWeek: number): any;
  /**
   * Gets the Unix duration stamp.
   */
  getTime(): any;
  /**
   * Gets the time zone offset in milliseconds.
   */
  getTZOffset(): any;
  /**
   * Returns the object's time in local time zone in the user's format.
   */
  getUserFormattedLocalTime(): any;
  /**
   * Retrieves the time zone for the current user session.
   */
  getUserTimeZone(): any;
  /**
   * Retrieves a GlideDateTime object with the time set to midnight using the UTC time zone.
   * @param dayOfTheWeek The day of the week, from 1 to 7. Monday=1, Sunday=7. Do not enter 0 in this
   * parameter.
   */
  getUTCMidnight(dayOfTheWeek: number): any;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
   */
  getValue(): any;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the
   * current user's time zone.
   */
  getWeekOfYearLocalTime(): any;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC
   * time zone.
   */
  getWeekOfYearUTC(): any;
  /**
   * Retrieves the year stored by the GlideDateTime object, expressed in the Java Virtual
   * Machine time zone.
   */
  getYear(): any;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getYearLocalTime(): any;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the UTC time
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
   * Sets the day of the month to a specified value.
   * @param day Day of the month, from 1 to 31.
   */
  setDayOfMonth(day: number): any;
  /**
   * Sets the day of the month to a specified value in the current user's time zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the
   * month.
   */
  setDayOfMonthLocalTime(day: number): any;
  /**
   * Sets the day of the month to a specified value in the UTC time zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the
   * month.
   */
  setDayOfMonthUTC(day: number): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param asDisplayed The date and time in the current user's display format and time zone. The
   * parameter must be formatted using the current user's preferred display format, such
   * as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a
   * workflow script, use
   * &lt;variable&gt;.setDisplayValue(gs.nowDateTime);.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param dateTime The date and time in the current user's time zone.
   * @param format The format to use to parse the dateTime parameter.
   */
  setDisplayValue(dateTime: string, format: string): any;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param dateTime The date and time in internal format
   */
  setDisplayValueInternal(dateTime: string): any;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param dateTime The date and time in internal format.
   */
  setDisplayValueInternalWithAlternates(dateTime: string): any;
  /**
   * Sets the date and time of the current object using an existing GlideDateTime object.
   * @param gDT A GlideDateTime object
   */
  setGlideDateTime(gDT: any): any;
  /**
   * Sets the date and time.
   * @param dateTime The date and time to use. Accepts either a string in the GMT time zone in the
   * internal format, or a GlideDateTime object.
   */
  setInitialValue(dateTime: string): any;
  /**
   * Sets the month stored by the GlideDateTime object to a specified value using the Java
   * Virtual Machine time zone.
   * @param month The month to change to.
   */
  setMonth(month: number): any;
  /**
   * Sets the month stored by the GlideDateTime object to a specified value using the
   * current user's time zone.
   * @param month The month to change to.
   */
  setMonthLocalTime(month: number): any;
  /**
   * Sets the month stored by the GlideDateTime object to a specified value using the UTC
   * time zone.
   * @param month The month to change to.
   */
  setMonthUTC(month: number): any;
  /**
   * Sets the date and time to the number of milliseconds since January 1, 1970 00:00:00
   * GMT.
   * @param milliseconds Number of milliseconds
   */
  setNumericValue(milliseconds: number): any;
  /**
   * Sets the time zone of the GlideDateTime object to be the specified time
   * zone.
   * @param timeZone A time zone object
   */
  setTZ(timeZone: any): any;
  /**
   * Sets the date and time of the GlideDateTime object.
   * @param dateTime The date and time to use. This parameter may be one of several types.
   * A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss:
   * Sets the value of the object to the specified date and time. Using the method
   * this way is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(value) constructor. If the date and time format
   * used does not match the internal format, the method attempts to set the date and
   * time using other available formats. Resolving the date and time this way can
   * lead to inaccurate data due to ambiguity in the day and month values. When using
   * a non-standard date and time format, use setValueUTC(dateTime,
   * format) instead.
   *
   * A GlideDateTime object: Sets the value of the object to the date and time
   * stored by the GlideDateTime passed in the parameter. Using the method this way
   * is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(g) constructor.
   *
   * A Java Date object: Sets the value of the object using the value stored by the
   * Java Date object. Using the method this way is equivalent to passing the value
   * returned by the Java Date object getTime() to the
   * GlideDateTime setNumericValue() method. This method does not
   * accept JavaScript Date objects.
   *
   * A JavaScript Number: Sets the value of the object using the Number value as
   * milliseconds past January 1, 1970 00:00:00 GMT. Using the method this way is
   * equivalent to the setNumericValue(milliseconds) method.
   *
   * A Java Integer or Long: Sets the value of the object using the Integer or Long
   * value as milliseconds past January 1, 1970 00:00:00 GMT. Using the method this
   * way is equivalent to the setNumericValue(milliseconds)
   * method.
   *
   *
   */
  setValue(dateTime: any): any;
  /**
   * Sets a date and time value using the UTC time zone and the specified date and time
   * format.
   * @param dateTime The date and time to use.
   * @param format The format to use.
   */
  setValueUTC(dateTime: string, format: string): any;
  /**
   * Sets the year stored by the GlideDateTime object to a specified value using the Java
   * Virtual Machine time zone.
   * @param year The year to change to.
   */
  setYear(year: number): any;
  /**
   * Sets the year stored by the GlideDateTime object to a specified value using the current
   * user's time zone.
   * @param year The year to change to.
   */
  setYearLocalTime(year: number): any;
  /**
   * Sets the year stored by the GlideDateTime object to a specified value using the UTC
   * time zone.
   * @param year The year to change to.
   */
  setYearUTC(year: number): any;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param start The start value
   * @param end The end value
   */
  subtract(start: any, end: any): any;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param time The time to subtract
   */
  subtract(time: any): any;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param milliseconds The number of milliseconds to subtract
   */
  subtract(milliseconds: number): any;
  /**
   * Returns the date and time value stored by the GlideDateTime object in the internal
   * format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
   */
  toString(): any;
}
export { GlideDateTime };
