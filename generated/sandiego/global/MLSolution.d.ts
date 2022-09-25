declare class MLSolution {
  /**
   * Gets the prediction result for a classification solution and applies it to the input
   * GlideRecord if the confidence value is higher than the threshold.
   * @param now_GR GlideRecord object containing values on which to run a prediction and apply the
   * results.
   */
  applyPrediction(now_GR: any): any;
  /**
   * Gets the capability information of a trained solution.
   */
  getCapability(): any;
  /**
   * Gets assignments for a clustering
   * solution.
   * @param options Optional. Values to use to narrow down the returned results by group and level
   * within a clustering solution. Default: Return cluster memberships for all
   * clusters.
   */
  getClusterAssignments(options?: any): any;
  /**
   * Gets the cluster information for a clustering solution.
   * @param now_GR Name of the input GlideRecord.
   */
  getClusterForRecord(now_GR: any): any;
  /**
   * Gets information for a specified clustering
   * solution.
   * @param options Optional. Narrows down the returned results by group and level within a
   * clustering solution. Default: Return cluster memberships for all
   * clusters.
   */
  getClusterInfo(options?: any): any;
  /**
   * Gets the version of the active solution.
   */
  getVersion(): any;
  /**
   * Determines if a solution is active.
   */
  isActive(): any;
  /**
   * Gets the prediction results from the prediction server given a GlideRecord or an array
   * of key-value pairs.
   * @param input GlideRecord or array of JSON objects containing field names and
   * values as key-value pairs.
   * @param options Optional. JSON key-value pair with the following properties:
   * top_n: Number. If provided, returns the top
   * results, up to the specified number of predictions.
   *
   * apply_threshold: Boolean. Checks the
   * threshold value for the solution and applies it to the result set. The
   * threshold value is solution threshold for similarity or class-level threshold
   * for classification. Default value is true.
   *
   * custom_results_filter: String. Similarity solutions only. Specifies the allowed set from which results
   * are returned using an encoded query.
   *
   *
   */
  predict(input: any, options?: any): any;
}
export { MLSolution };
