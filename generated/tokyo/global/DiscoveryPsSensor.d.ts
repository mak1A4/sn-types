declare class DiscoveryPsSensor {
  /**
   * Returns the operating system type, either ESXi or UNIX.
   */
  getOSType(): any;
  /**
   * Maps the process status results returned from the ps command.
   * @param result The result of the ps command
   */
  mapProcesses(result: any): any;
  /**
   * Parses the column header.
   * @param line The column header to parse
   */
  parseColumnHeader(line: string): any;
  /**
   * Parses a line returned by the ps command.
   * @param line The line to parse
   */
  parseLine(line: string): any;
}
export { DiscoveryPsSensor };
