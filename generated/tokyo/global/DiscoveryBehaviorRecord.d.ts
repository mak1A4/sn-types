declare class DiscoveryBehaviorRecord {
  constructor(source: any, discover: string);
  /**
   * Starts the first discovery execution phase for the specified MID server.
   */
  firstPhase(): any;
  /**
   * Returns the functionality for this phase.
   * @param phase The phase
   */
  getPhase(phase: string): any;
  /**
   * Gets the port probes for the specified stage and status.
   * @param phase The current probe phase
   * @param status The current probe status
   */
  getPortProbesForPhase(phase: string, status: string): any;
  /**
   * Gets a hashmap of information from this behavior if we can find a port probe that
   * probes the given service name and for which the functionality criteria are met with the given
   * left-hand values and right-hand values. Returns null if no such port probe exists.
   * @param result The ShazzamResult instance for the device being processed.
   * @param scanner The ShazzamScanner instance for the scanner being processed.
   * @param phase The current phase of the behavior.
   * @param midServer The MIDserver instance for the MID server whose Shazzam results are being
   * processed.
   * @param status The DiscoveryStatus instance for the current discover.
   */
  getStuffForResult(
    result: string,
    scanner: string,
    phase: string,
    midServer: string,
    status: string,
  ): any;
  /**
   * Starts the next discovery execution phase.
   * @param prevPhase The last completed execution phase.
   */
  nextPhase(prevPhase: string): any;
}
export { DiscoveryBehaviorRecord };
