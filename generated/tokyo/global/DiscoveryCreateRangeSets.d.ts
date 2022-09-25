declare class DiscoveryCreateRangeSets {
  constructor(statusID: string);
  /**
   * Increments the number of sensor records that were processed by one.
   */
  bumpStatusCompleted(): any;
  /**
   * Creates a range item.
   * @param subnet The subnet range
   */
  createRangeItem(subnet: string): any;
  /**
   * Ensures a range is set for a specified router.
   * @param routerID The router ID
   */
  ensureRangeSet(routerID: string): any;
  /**
   * Processes the specified network.
   * @param netGR The network to process
   */
  processNetwork(netGR: any): any;
  /**
   * Processes all of the current networks.
   */
  processNetworks(): any;
  /**
   * Ensures that an item exists in a specified subnet.
   * @param subnet The subnet range
   */
  rangeItemExists(subnet: string): any;
  /**
   * Updates the number of probe messages sent to by the specified number.
   * @param startCount The number to increment
   */
  updateStatusStarted(startCount: number): any;
}
export { DiscoveryCreateRangeSets };
