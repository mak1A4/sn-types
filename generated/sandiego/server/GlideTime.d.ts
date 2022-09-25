declare class GlideTime {
  constructor();
  constructor(milliseconds: number);
  /**
   * Returns the time in the specified format.
   * @param format String to use to format the time.For example, if the current time is
   * 10:30:20 then:
   * hh:mm:ss = 10:30:20
   *
   * HH = 10
   *
   * HH –- ss = 10 –- 20
   *
   * hh a = 10 AM
   *
   * s:m:H ss:mm:hh = 20:30:10 20:30:10
   *
   * HH:mm:ss.SSSZ = 10:30:20.000+0000
   *
   * HH/mm/ss = 10/30/20
   *
   *
   *
   */
  getByFormat(format: string): any;
  /**
   * Gets the time in the current user's display format and time zone.
   */
  getDisplayValue(): any;
  /**
   * Gets the display value in the current user's time zone and the internal format
   * (HH:mm:ss).
   */
  getDisplayValueInternal(): any;
  /**
   * Returns the hours part of the time using the local time zone.
   */
  getHourLocalTime(): any;
  /**
   * Returns the hours part of the time using the local time zone. The number of hours is
   * based on a 24 hour clock.
   */
  getHourOfDayLocalTime(): any;
  /**
   * Returns the hours part of the time using the UTC time zone. The number of hours is
   * based on a 24 hour clock.
   */
  getHourOfDayUTC(): any;
  /**
   * Returns the hours part of the time using the UTC time zone. The number of hours is
   * based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
   */
  getHourUTC(): any;
  /**
   * Returns the number of minutes using the local time zone.
   */
  getMinutesLocalTime(): any;
  /**
   * Returns the number of minutes in the hour based on the UTC time zone.
   */
  getMinutesUTC(): any;
  /**
   * Returns the number of seconds in the current minute.
   */
  getSeconds(): any;
  /**
   * Gets the time value stored in the database by the GlideTime object in the internal
   * format, HH:mm:ss, and the system time zone.
   */
  getValue(): any;
  /**
   * Sets a time value using the current user's display format and time zone.
   * @param asDisplayed The time in the current user's display format and time zone. The parameter must
   * be formatted using the current user's preferred display format, such as HH:mm:ss.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the time of the GlideTime object in the internal time zone.
   * @param o The time in hh:mm:ss format.
   */
  setValue(o: string): any;
  /**
   * Gets the duration difference between two GlideTime object values.
   * @param startTime The start value.
   * @param endTime The end value.
   */
  subtract(startTime: any, endTime: any): any;
}
export { GlideTime };
