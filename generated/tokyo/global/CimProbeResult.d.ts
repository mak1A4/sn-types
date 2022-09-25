declare class CimProbeResult {
  /**
   * Gets the named instances for the specified named queries.
   * @param namedQueries The named queries
   */
  getNamedInstances(namedQueries: string): any;
  /**
   * Gets all the queries for the current CIM probe.
   */
  getQueries(): any;
}
export { CimProbeResult };
