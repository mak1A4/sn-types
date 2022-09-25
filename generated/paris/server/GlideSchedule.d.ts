declare class GlideSchedule {
  constructor();
  constructor(sysID: string, timeZone?: string);
  /**
   * Adds a new schedule segment to the current schedule.
   * @param startDate The starting date of the new schedule segment.
   * @param offSet The time offset of the new schedule segment.
   */
  add(startDate: any, offSet: any): any;
  /**
   * Determines the elapsed time in the schedule between two date time values using the
   * timezone of the schedule or, if that is not specified, the timezone of the session.
   * @param startDate The starting datetime.
   * @param endDate The ending datetime.
   */
  duration(startDate: any, endDate: any): any;
  /**
   * Retrieves the schedule name.
   */
  getName(): any;
  /**
   * Determines if the specified date and time is within the current schedule.
   * @param time Date and time value to check.
   */
  isInSchedule(time: any): any;
  /**
   * Determines if the current schedule is valid. A schedule is valid if it has at least one
   * schedule span.
   */
  isValid(): any;
  /**
   * Loads a schedule with the schedule information.
   * @param sysID The system ID of the schedule.
   * @param timeZone (Optional) The timezone. If a timezone is not specified, or is nil, the current
   * session timezone is used for the schedule.
   * @param excludeSpanID Any span to exclude.
   */
  load(sysID: string, timeZone: string | undefined, excludeSpanID: string): any;
  /**
   * Sets the timezone for the current schedule.
   * @param timeZone The timezone.
   */
  setTimeZone(timeZone: string): any;
  /**
   * Determines how much time (in milliseconds) until start time of the next schedule
   * item.
   * @param time Time to be evaluated
   * @param timeZone Timezone
   */
  whenNext(time: any, timeZone: string): any;
}
export { GlideSchedule };
