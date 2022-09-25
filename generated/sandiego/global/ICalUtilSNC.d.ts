declare class ICalUtilSNC {
  /**
   * Generates a formatted VCALENDAR component.
   * @param arrEvents Contains the properties that make up a  VCALENDAR component.
   */
  formatICalComponent(arrEvents: any[]): any;
  /**
   * Generates a formatted VEVENT.
   * @param arrEvent Contains the individual properties that make up a VEVENT.
   * @param useAlarm If true, adds a VALARM to the VEVENT.
   */
  formatICalEvent(arrEvent: any[], useAlarm: boolean): any;
  /**
   * Formats the RRULE property for a VEVENT.
   * @param ruleObj Contains the properties for the RRULE property.
   */
  formatRecurringRule(ruleObj: any): any;
  /**
   * Returns the date from the GlideScheduleDateTime.
   * @param scheduleDateTime A GlideScheduleDateTime representation of the date and time.
   */
  getDateFromScheduleDateTime(scheduleDateTime: any): any;
  /**
   * If provided with a formatted date time string, it returns a GlideScheduleDateTime
   * object.
   * @param sdtStr Formatted ScheduleDateTime.
   * @param timeZone If provided, will be used for the generated GlideScheduleDateTime.
   */
  getSDT(sdtStr: string, timeZone: string): any;
  /**
   * Returns the time from the GlideScheduleDateTime.
   * @param scheduleDateTime A GlideScheduleDateTime representation of the date and time.
   */
  getTimeFromScheduleDateTime(scheduleDateTime: any): any;
}
export { ICalUtilSNC };
