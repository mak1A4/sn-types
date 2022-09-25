declare class DiscoveryAPDVersionSensor {
  /**
   * Finds the record for the specified application or, if not found, creates
   * one.
   * @param dcaGR The application classification
   */
  findOrCreateApplication(dcaGR: any): any;
  /**
   * Processes the application.
   */
  processApplication(): any;
  /**
   * Creates an application-to-system relation.
   * @param dcaGR The application record
   */
  processAppToSystemRelation(dcaGR: any): any;
  /**
   * Processes the environment.
   */
  processEnv(): any;
  /**
   * Processes the XML files.
   */
  processXML(): any;
  /**
   * Starts processing the application discovery version file.
   * @param result The application file
   */
  start(result: any): any;
}
export { DiscoveryAPDVersionSensor };
