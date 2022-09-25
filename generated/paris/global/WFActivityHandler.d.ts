declare class WFActivityHandler {
  /**
   * Logs a debug message.
   * @param msg Message to send to the log.
   * @param args Array of values to send to the log
   */
  debug(msg: string, args: any[]): any;
  /**
   * Logs a debug message.
   * @param msg Message to send to the log.
   * @param args String to send to the log
   */
  debug(msg: string, args: string): any;
  /**
   * Generates approvals and tasks before the activity runs for a preview of upcoming
   * work.
   * @param activityId Sys_id of this running activity. Located in the Workflow Activities
   * [wf_activity] table.
   * @param order The order number associated with the task or approval.
   * @param startAtDspValue The starting time for the task or approval in GlideDateTime
   * format.
   * @param noCreateFlag Flag that indicates whether to skip creating an approval record.
   *
   * Valid values:
   * true: Do not create an approval record.
   *
   * false: Create an approval record.
   *
   *
   *
   *
   * Default: True
   */
  generate(
    activityId: string,
    order: string,
    startAtDspValue: string,
    noCreateFlag: boolean,
  ): any;
  /**
   * Logs an information message.
   * @param msg Message to send to the log.
   * @param args Array of values to send to the log
   */
  info(msg: string, args: any[]): any;
  /**
   * Logs an information message.
   * @param msg Message to send to the log.
   * @param args String to send to the log.
   */
  info(msg: string, args: string): any;
  /**
   * Evaluates activity variables in the script.
   * @param str String that possibly contains embeded el.
   */
  js(str: string): any;
  /**
   * Event handler for cancel event.
   */
  onCancel(): any;
  /**
   * Virtual method. Activity subclasses must override this method to perform work appropriate to the activity.
   */
  onExecute(): any;
  /**
   * Enables activities to run a script contained in an activity variable of type script.
   * @param script String containing valid Javascript.
   */
  runScript(script: string): any;
  /**
   * Sets the activity output property.
   */
  setActivityOutput(): any;
  /**
   * Sets the activity result as failed with an optional reason string.
   * @param reason (Optional) Description of the reason this activity failed.
   */
  setResultFailed(reason?: string): any;
  /**
   * Sets the result of this activity as successful.
   */
  setResultSucceeded(): any;
  /**
   * Logs a warning message.
   * @param msg Message to send to the log.
   * @param args Array of values to send to the log
   */
  warn(msg: string, args: any[]): any;
  /**
   * Logs a warning message.
   * @param msg Message to send to the log.
   * @param args String to send to the log
   */
  warn(msg: string, args: string): any;
}
export { WFActivityHandler };
