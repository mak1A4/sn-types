declare class WalkWorkflow {
  constructor(workflowVersion: any);
  /**
   * Computes the full sequence for every path.
   */
  computeFullSequences(): any;
  /**
   * Computes the sequences of activities.
   */
  computeSequences(): any;
  /**
   * Outputs the internal state of this class to gs.print().
   */
  dump(): any;
  /**
   * Outputs the sequences internal to this class to
   * gs.print().
   */
  dumpSequences(): any;
  /**
   * Outputs the shortest path orders internal to this object to
   * gs.print().
   */
  dumpShortestPathOrders(): any;
  /**
   * Returns all the activities at the specified shortest path order.
   * @param order The order number the client is interested in.
   */
  getActivitiesAtOrder(order: number): any;
  /**
   * Returns the activity sequences.
   */
  getSequences(): any;
  /**
   * Walks the workflow and sets up the activity shortest path ordering.
   * @param fullSequences (Optional) If true, computes the full sequences. Default
   * is false.
   */
  walk(fullSequences?: boolean): any;
}
export { WalkWorkflow };
