declare class PredictabilityEstimateVersion {
  /**
   * Gets predictability estimate object properties and version number.
   */
  getProperties(): any;
  /**
   * Returns JSON results containing suggested input fields for an output field.
   */
  getResults(): any;
  /**
   * Gets training completion status.
   * @param includeDetails Flag that indicates whether to return status details.
   *
   * Valid values:
   * true: Return additional details.
   *
   * false: Do not return additional details.
   *
   *
   *
   *
   * Default: False
   */
  getStatus(includeDetails: boolean): any;
  /**
   * Gets the version number of a predictability estimate object.
   */
  getVersionNumber(): any;
}
export { PredictabilityEstimateVersion };
