declare class StopWatch {
  constructor();
  constructor(initialDate: any);
  /**
   * Returns the number of milliseconds since the timer started.
   */
  getTime(): any;
  /**
   * Resets the timer to the current time.
   */
  restart(): any;
  /**
   * The elapsed time as HH:MM:SS.SSS.
   */
  toString(): any;
}
export { StopWatch };
