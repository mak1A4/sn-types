declare class MLSolutionUtil {
  constructor();
  /**
   * Gets predictions for one or more specified solutions.
   * @param input GlideRecord or
   * array
   * of JSON objects as key-value pairs.
   * @param solutionNames Array of solution names to retrieve predictions from.
   * @param options Optional. JSON object key-value pair with the following properties:
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
  getPredictions(input: any, solutionNames: any[], options?: any): any;
}
export { MLSolutionUtil };
