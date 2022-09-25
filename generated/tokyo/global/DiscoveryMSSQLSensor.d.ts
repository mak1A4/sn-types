declare class DiscoveryMSSQLSensor {
  /**
   * Parses the data fetched from the probe.
   * @param result The data fetched from the probe
   */
  parseResult(result: any): any;
  /**
   * Populates the database catalogs with the data fetched from the probe.
   * @param result The data fetched from the probe
   */
  populateDBCatalogs(result: any): any;
  /**
   * Does nothing if there is no data fetched from the probe.
   */
  zeroResults(): any;
}
export { DiscoveryMSSQLSensor };
