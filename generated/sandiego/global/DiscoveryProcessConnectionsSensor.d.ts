declare class DiscoveryProcessConnectionsSensor {
  /**
   * Adds a connection to the sensor.
   * @param dtcp The connection to add
   */
  addConnection(dtcp: any): any;
  /**
   * Adds an array of connections to the sensor.
   * @param connections An array of connections to add
   */
  addConnections(connections: any[]): any;
  /**
   * Adds a single listener.
   * @param dtcp The discovery TCP
   */
  addListener(dtcp: any): any;
  /**
   * Adds an array of listeners.
   * @param listeners An array of discovery TCPs
   */
  addListeners(listeners: any[]): any;
  /**
   * Completes a number of tasks after a connection has been reconciled, including checking
   * for a print server.
   */
  after(): any;
  /**
   * Logs the connections made by the sensor.
   */
  logConnections(): any;
  /**
   * Provide code for this method to parse the output.
   * @param output The output to parse
   */
  parse(output: any): any;
}
export { DiscoveryProcessConnectionsSensor };
