declare class DiscoveryAPDSensor {
  /**
   * Determines if the application file has valid content.
   * @param result The application file
   */
  hasValidContent(result: any): any;
  /**
   * Processes a custom application.
   * @param dcaGR The application record
   * @param versionResult The application version
   * @param envResult The environment file
   */
  processCustom(dcaGR: any, versionResult: string, envResult: any): any;
  /**
   * Processes a part of the service provided by the current application.
   */
  processPartOfService(): any;
  /**
   * Processes the result. UNIX-based results must be converted to a JavaScript
   * object.
   * @param result The application file
   */
  processResult(result: any): any;
  /**
   * Processes the services the current application consumes from other
   * applications.
   */
  processServicesConsumed(): any;
  /**
   * Processes the services provided by the current application.
   */
  processServicesProvided(): any;
}
export { DiscoveryAPDSensor };
