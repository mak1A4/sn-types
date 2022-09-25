declare class GlideTransformLog {
  constructor();
  /**
   * Logs a message of type Error to localhost logs.
   * @param message Transform log message.
   */
  error(message: string): any;
  /**
   * Logs a message of type Info to localhost logs.
   * @param message Transform log message.
   */
  info(message: string): any;
  /**
   * Logs a message of type Warn to localhost logs.
   * @param message Transform log message.
   */
  warn(message: string): any;
}
export { GlideTransformLog };
