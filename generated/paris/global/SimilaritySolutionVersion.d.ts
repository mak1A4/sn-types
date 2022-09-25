declare class SimilaritySolutionVersion {
  /**
   * Gets solution object
   * properties
   * and version number.
   */
  getProperties(): any;
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
   * Gets the version number of a solution object.
   */
  getVersionNumber(): any;
  /**
   * Gets the input data for a prediction.
   * @param input GlideRecord or array of JSON objects containing field names and
   * values as key-value pairs.
   * @param options Optional values for filtering prediction
   * results.{
   * "apply_threshold": Boolean,
   * "top_n": Number
   * }
   */
  predict(input: any, options?: any): any;
}
export { SimilaritySolutionVersion };
