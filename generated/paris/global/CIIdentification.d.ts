declare class CIIdentification {
  constructor(ciData: string, logger: string);
  /**
   * Logs a message to the CI Identification log if debug logging is turned on.
   * @param msg The message to log
   */
  debug(msg: string): any;
  /**
   * Identifies the CI. This is the entry point for the entire CI Identification
   * process.
   */
  process(): any;
}
export { CIIdentification };
