declare class DurationCalculator {
  constructor();
  /**
   * Calculates an end date and time based on current start date and time and passed in
   * duration (seconds).
   * @param seconds Number of seconds to add to the start date and time to compute the end date and
   * time, seconds, and total seconds values.
   */
  calcDuration(seconds: number): any;
  /**
   * Calculates the due date starting at the passed in start time and adding the number of
   * days using the current schedule and time zone.
   * @param start GlideDateTime object that contains the start date for the computation.
   * @param days Number of days to add to the start date.
   * @param endTime Time of day that the work is due on the computed due date.If blank, defaults
   * to the end of the work day.
   * Format: HH:mm:ss
   */
  calcRelativeDueDate(start: any, days: number, endTime: string): any;
  /**
   * Calculates the duration using the specified relative duration script.
   * @param relativeDurationID sys_id of relative duration schedule (table cmn_relative_duration).
   */
  calcRelativeDuration(relativeDurationID: string): any;
  /**
   * Returns the duration between the startTime and the
   * endTime within the already-specified schedule and optionally overridden
   * timezone.
   * @param startTime Optional. GlideDateTime object that contains the start time to use. Default:
   * Uses the current date and time (set using setStartDateTime()).
   * You must pass a placeholder if this parameter it not passed, such as
   * dur.calcScheduleDuration("", endDateTime);.
   * @param endTime Optional. GlideDateTime object that contains the end time to use. Default:
   * Uses the current date and time (set using
   * setEndDateTime()).
   */
  calcScheduleDuration(startTime?: any, endTime?: any): any;
  /**
   * Returns the duration between the startTime and the
   * endTime within the already-specified schedule and optionally overridden
   * timezone.
   * @param startTime Optional. Display value for the end time. Default: Uses the current date and
   * time (set using setStartDateTime()). You must pass a
   * placeholder if this parameter it not passed, such as
   * dur.calcScheduleDuration("", endDateTime);.
   * @param endTime Optional. Display value for the start time.Default: Uses the current date
   * and time (set using setEndDateTime()).
   */
  calcScheduleDuration(startTime?: string, endTime?: string): any;
  /**
   * Gets the endDateTime property that was set by
   * calcDuration/calcRelativeDuration, indicating the end
   * date and time for the duration.
   */
  getEndDateTime(): any;
  /**
   * Returns the this.seconds property that was set by
   * calcDuration/calcRelativeDuration, indicating the total
   * number of seconds of work to be performed for the duration.
   */
  getSeconds(): any;
  /**
   * Returns the totalSeconds value that was set by a call to
   * calculate(record).
   */
  getTotalSeconds(): any;
  /**
   * Compares the passed in time to the time value in the passed in GlideDateTime
   * object.
   * @param dt Either a GlideDateTime object or a display value date and time to compare to
   * the passed in tm value. If you pass a display value date and
   * time, the method converts it to a GlideDateTime object.
   * @param tm Display value for the time to compare against the time value in the
   * GlideDateTime object. Assumes same date.Format: HH:mm:ss
   */
  isAfter(dt: any, tm: string): any;
  /**
   * Sets the schedule and time zone to use for calculating the due date.
   * @param schedId Sys_id of the schedule to set. Located in the Schedule [cmn_schedule]
   * table.
   * @param timezone Optional. Time zone to set.Default: User's time zone.
   */
  setSchedule(schedId: string, timezone?: string): any;
  /**
   * Sets the start date and time for the duration calculations.
   * @param description GlideDateTime object that contains the start time in GMT for subsequent
   * calculations.
   */
  setStartDateTime(description: any): any;
  /**
   * Sets the start date and time for the duration calculations.
   * @param start Display value for the start time in GMT for subsequent calculations.
   */
  setStartDateTime(start: string): any;
  /**
   * Sets the time zone to use for calculating the due date.
   * @param timezone Value of the time zone.
   */
  setTimeZone(timezone: string): any;
}
export { DurationCalculator };
