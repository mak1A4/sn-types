declare class WorkflowDuration {
  /**
   * Adds the number of seconds to the specified start date/time.
   * @param record description
   * @param amount amount
   */
  addSeconds(record: any, amount: number): any;
  /**
   * Calculates the number of seconds and the due date.
   * @param record The record that contains the fields with the schedule, timezone, and date/time
   * information. This is almost always
   * activity.vars.__var_record__.
   */
  calculate(record: any): any;
  /**
   * Calculates the number of seconds remaining to the specified end date/time.
   * @param record The record that contains the fields with the schedule, timezone, and date/time
   * information. This is almost always
   * activity.vars.__var_record__.
   */
  calculateTimeLeft(record: any): any;
  /**
   * Returns the end date/time set by a call to
   * calculate(record).
   */
  getEndDateTime(): any;
  /**
   * Returns the seconds value that was set by a call to
   * calculate(record).
   */
  getSeconds(): any;
  /**
   * Returns the totalSeconds value that was set by a call to calculate(record).
   */
  getTotalSeconds(): any;
  /**
   * Sets the end date/time to use when calculating the remaining time.
   * @param dt The end date/time to use.
   */
  setEndDateTime(dt: any): any;
  /**
   * Sets the end date/time to use when calculating the remaining time.
   * @param dt The end date/time to use.
   */
  setEndDateTime(dt: string): any;
  /**
   * Sets the start date/time to use in the calculations.
   * @param dt The start date/time to use.
   */
  setStartDateTime(dt: any): any;
  /**
   * Sets the start date/time to use in the calculations.
   * @param dt The start date/time to use, in GMT.
   */
  setStartDateTime(dt: string): any;
  /**
   * Sets the used seconds compensation, where the number of seconds is
   * the number of seconds inside of any schedule.
   * @param secs The number of used seconds to set.
   */
  setUsedSecs(secs: number): any;
  /**
   * Sets the workflow schedule/timezone.
   * Used for schedule_type
   * workflow_schedule and timezone_type workflow_timezone).
   * @param schedule The schedule to use. Usually from the workflow
   * context.schedule.
   * @param timezone The timezone to use. Usually from the workflow
   * context.timezone.
   */
  setWorkflow(schedule: any, timezone: any): any;
}
export { WorkflowDuration };
