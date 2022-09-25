declare class DiscoveryBehavior {
  constructor();
  /**
   * Starts the basic functionality probe for the specified MID server.
   * @param defaultMID The MID server
   */
  fireBasicFunctionality(defaultMID: string): any;
  /**
   * Starts the behavior functionality probe and logs the event.
   */
  fireBehaviorFunctionality(): any;
  /**
   * Starts the first Discovery execution phase for the specified MID server.
   * @param defaultMID The MID server
   */
  fireFirstPhase(defaultMID: string): any;
  /**
   * Starts the next Discovery execution phase.
   */
  fireNextPhase(): any;
  /**
   * Gets an array of hashmaps of the discovery_functionality table with all the instances
   * in the next phase, and updates the scratchpad.last_phase entry.
   */
  getFunctionality(): any;
  /**
   * Retrieves the current Discovery Behavior ID.
   */
  getId(): any;
  /**
   * Gets the MID server Windows domain for the specified Discovery function.
   * @param dis_Function The discovery function
   */
  getMidWinDomain(dis_Function: string): any;
  /**
   * Determines if the current device has unscanned ports.
   */
  haveUnscannedPorts(): any;
  /**
   * Determines if the current device ID is valid.
   */
  isValid(): any;
  /**
   * Determines if there are functionality criteria for the given discovery_functionality
   * record.
   * @param dis_function The discovery function
   */
  meetsCriteria(dis_function: string): any;
  /**
   * Coverts a string to lowercase.
   * @param str The string to convert
   */
  safeLower(str: string): any;
  /**
   * Starts a Discovery scan for the specified MID server and ports.
   * @param mid The name of the MID server
   * @param ports The ports to scan
   */
  triggerPortScanner(mid: string, ports: string): any;
}
export { DiscoveryBehavior };
