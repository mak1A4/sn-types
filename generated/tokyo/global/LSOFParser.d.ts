declare class LSOFParser {
  /**
   * Generates the specified error message.
   * @param msg The error message
   */
  error(msg: string): any;
  /**
   * Initializes the file descriptor process.
   */
  initFileDescriptor(): any;
  /**
   * Initializes the parser process.
   */
  initProcess(): any;
  /**
   * Sets the current command.
   * @param line The command
   */
  on_c(line: string): any;
  /**
   * Closes the file descriptor process.
   */
  on_endFileDescriptor(): any;
  /**
   * Closes the parser process.
   */
  on_endProcess(): any;
  /**
   * Sets the current file descriptor.
   * @param line The file descriptor
   */
  on_f(line: string): any;
  /**
   * Sets the current address.
   * @param line The address
   */
  on_n(line: string): any;
  /**
   * Sets the current PID.
   * @param line The PID
   */
  on_p(line: string): any;
  /**
   * Sets the current state.
   * @param line The state
   */
  on_T(line: string): any;
  /**
   * Parses the specified lsof output.
   * @param lsofOutput The lsof output
   */
  parse(lsofOutput: string): any;
}
export { LSOFParser };
