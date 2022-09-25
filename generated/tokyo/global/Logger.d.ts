declare class Logger {
  /**
   * Appends the specified message to the email log.
   * @param msg Text to append to the email log. These should be information type
   * messages.
   */
  log(msg: string): any;
  /**
   * Appends the specified error message to the email log file.
   * @param msg Error message to append to the email log
   */
  logError(msg: string): any;
  /**
   * Appends the specified warning message to the email log file.
   * @param msg Warning message to append to the email log
   */
  logWarning(msg: string): any;
}
export { Logger };
