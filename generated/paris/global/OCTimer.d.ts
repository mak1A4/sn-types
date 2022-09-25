declare class OCTimer {
  /**
   * Logs the entry based on the function name.
   * @param name Function name.
   * @param entry Text that will be part of the output in the log.
   */
  log(name: string, entry: string): any;
  /**
   * Takes a millisecond value and returns a formatted duration.
   * @param millis Duration in miliseconds.
   */
  millisToTime(millis: number): any;
  /**
   * Calculates the time taken for each function registered.
   */
  result(): any;
  /**
   * Initializes a timer based on the name provided.
   * @param name Function name.
   */
  start(name: string): any;
  /**
   * Registers the end of the timer for the provided name.
   * @param name Function name.
   */
  stop(name: string): any;
}
export { OCTimer };
