declare class DiscoverySchedule {
  active: boolean;
  discover: string;
  includeAlive: boolean;
  location: string;
  logStateChanges: boolean;
  maxRun: any;
  midServer: any;
  midServerID: string;
  name: string;
  ranges: any;
  sysID: string;
  constructor(source: any);
  /**
   * Adds a connection to the sensor.
   * @param dtcp The connection
   */
  addConnection(dtcp: string): any;
  /**
   * Adds an array of connections to the sensor.
   * @param connections An array of connections
   */
  addConnections(connections: any[]): any;
  /**
   * Adds an array of listeners.
   * @param listeners Discovery TCPs.
   */
  addListeners(listeners: any[]): any;
  /**
   * Determines if the current range contains the given IP address.
   * @param ip The IP address in dot-decimal notation.
   */
  contains(ip: string): any;
  /**
   * Gets the correct behavior for the specified IP address, or null if none can be
   * found.
   * @param ip The IP address in dot-decimal notation.
   */
  getBehaviorForIP(ip: string): any;
  /**
   * Retrieves the DiscoveryBehavior instance for the given range.
   * @param ipiec The IPIncludeExcludeCollection for the range.
   */
  getBehaviorForRange(ipiec: string): any;
  /**
   * Logs the connections made by the sensor.
   */
  logConnections(): any;
}
export { DiscoverySchedule };
