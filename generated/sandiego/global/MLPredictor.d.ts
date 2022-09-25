declare class MLPredictor {
  constructor();
  /**
   * Sets predicted values from an array of specified solutions to a specified
   * record.
   * @param now_GR The record on which to apply the array of predicted solutions.
   * @param solutions Specified solution objects associated with the GlideRecord.
   */
  applyPrediction(now_GR: any, solutions: any[]): any;
  /**
   * Applies a predicted value from a specified classification solution to the specified
   * GlideRecord.
   * @param now_GR GlideRecord object containing values on which to run a prediction and apply the
   * results.
   * @param solution Classification solution object to be executed.
   */
  applyPredictionForSolution(now_GR: any, solution: any): any;
  /**
   * Gets the solution object.
   * @param solutionName Name of the ml_solution record.
   */
  findActiveSolution(solutionName: string): any;
  /**
   * Gets active solutions for a table in a specified GlideRecord.
   * @param now_GR GlideRecord from which to collect active solution objects.
   */
  findActiveSolutionsForRecord(now_GR: any): any;
  /**
   * Gets the predicted value for a specified solution based on the specified prediction
   * outcome.
   * @param solution Solution from which to get the predicted value.
   * @param outcome Prediction outcome results for the specified solution (var outcome =
   * solution.predict(now_GR)).
   */
  getPredictedValue(solution: any, outcome: any): any;
  /**
   * Gets predictions for a specified solution.
   * @param now_GR GlideRecord to be predicted.
   * @param solution Solution object to be executed.
   * @param options Optional JSON object key value pair with the following properties:
   * options.top_n: If provided, returns results up to the expected number of
   * predictions, otherwise default is read from the
   * glide.platform_ml.max_num_predictions system property.
   *
   * options.apply_threshold: Checks the threshold value (solution threshold for
   * similarity, class level threshold for classification) for the solution and
   * applies it to the result set. Default value is true.
   *
   *
   */
  getPredictions(now_GR: any, solution: any, options?: any): any;
  /**
   * Identifies if a solution object is a classification type.
   * @param solution Name of the ML solution.
   */
  isClassificationSolution(solution: any): any;
  /**
   * Identifies if a solution object is a similarity type.
   * @param solution Name of the ML solution; for example, ml_incident_categorization.
   */
  isSimilaritySolution(solution: any): any;
  /**
   * Sets final prediction result values to a specified GlideRecord with an optionally
   * specified reason.
   * @param now_GR GlideRecord on which to set the final prediction result values.
   * @param reason Optional. Reason for applying results.
   */
  recordFinalValuesInPredictionResults(now_GR: any, reason?: string): any;
}
export { MLPredictor };
