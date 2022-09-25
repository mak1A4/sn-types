declare class DiscoveryStatus {
  constructor(statusGR: any);
  /**
   * Adds a connection to the sensor.
   * @param dtcp The connection to add
   */
  addConnection(dtcp: string): any;
  /**
   * Adds an array of connections to the sensor.
   * @param connections An array of connections
   */
  addConnections(connections: any[]): any;
  /**
   * Adds a single listener.
   * @param dtcp The discovery TCP
   */
  addListener(dtcp: string): any;
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
  parse(output: string): any;
  /**
   * Called by the Prototype JavaScript Framework during object processing. Provide a value
   * for the parameter, but do not call this method directly.
   * @param result The discovery result
   */
  process(result: string): any;
}
export { DiscoveryStatus };
