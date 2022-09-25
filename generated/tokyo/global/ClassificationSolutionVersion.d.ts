declare class ClassificationSolutionVersion {
  /**
   * Calculates solution precision and coverage.
   * @param options Selects a metric to retrieve within a span of dates.  For more information, see
   * Configuring target
   * metrics.{
   * "metricName" : "String",
   * "fromDate" : "String",
   * "toDate" : "String"
   * }
   */
  getPredictionPerformance(options: any): any;
  /**
   * Gets estimated precision, estimated coverage, estimated recall values from the ML
   * Solutions [ml_solution] table and records from the Class Confidence [ml_class]
   * table.
   */
  getPredictionSettings(): any;
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
   * Gets all the training statistics for a given solution.
   */
  getTrainingStatistics(): any;
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
  /**
   * Sets precision, coverage, or recall values at solution level or class
   * level.
   * @param options Metric configuration values. For information about these features, see Configuring target
   * metrics.{
   * "metricName" : "String",
   * "metricValue" : "String",
   * "className" : "String"
   * }
   */
  setPredictionSettings(options: any): any;
}
export { ClassificationSolutionVersion };
