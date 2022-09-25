declare class GSLog {
  constructor();
  /**
   * Determines if debug is turned on.
   */
  debugOn(): any;
  /**
   * Returns the log level.
   * @param level Optional. Log level.
   */
  getLevel(level?: string): any;
  /**
   * Called by the Prototype JavaScript Framework during object creation to initialize a new
   * instance of this class. Provide the input parameters, but do not call this method
   * directly.
   * @param traceProperty System property that contains a value indicating the level at or above which
   * messages will be written to the log.
   * @param caller Name of the script calling the logger.
   */
  initialize(traceProperty: string, caller: string): any;
  /**
   * Logs a message at the specified level.
   * @param level Log level.
   * @param msg Message to write to the log.
   */
  log(level: string, msg: string): any;
  /**
   * Logs alert events.
   * @param msg Message to write to the log.
   */
  logAlert(msg: string): any;
  /**
   * Logs critical events.
   * @param msg Message to write to the log.
   */
  logCrit(msg: string): any;
  /**
   * Logs debug events.
   * @param msg Message to write to the log.
   */
  logDebug(msg: string): any;
  /**
   * Logs emergency events.
   * @param msg Message to write to the log.
   */
  logEmerg(msg: string): any;
  /**
   * Logs error events.
   * @param msg Message to write to the log.
   */
  logErr(msg: string): any;
  /**
   * Logs information events.
   * @param msg Message to write to the log.
   */
  logInfo(msg: string): any;
  /**
   * Logs notice events.
   * @param msg Message to write to the log.
   */
  logNotice(msg: string): any;
  /**
   * Logs warning events.
   * @param msg Message to write to the log.
   */
  logWarning(msg: string): any;
  /**
   * Sets the log level.
   * @param level Log level to set.
   */
  setLevel(level: string): any;
}
export { GSLog };
