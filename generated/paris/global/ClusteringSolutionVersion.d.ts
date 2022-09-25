declare class ClusteringSolutionVersion {
  /**
   * Cancels an update job on a trainer.
   */
  cancelUpdateJob(): any;
  /**
   * Deletes cluster assignments from rows by position in table sequence or
   * GlideDateTime.
   * @param options Object defining one option for deleting cluster assignments.Note: Only one
   * delete option is valid.
   */
  deleteClusterAssignments(options: any): any;
  /**
   * Gets assignments for a clustering
   * solution.
   * @param options Values to use to narrow down the returned results by group, level, system
   * update times, and table row number within a clustering solution. Minimum of one
   * argument must be
   * specified.{
   * "cluster_id" : "String",
   * "group_by" : "String",
   * "limit" : "String",
   * "sequenceSince" : "String",
   * "sequenceUntil" : "String",
   * "topNPerCluster" : "String",
   * "updatedSince" : "String",
   * "updatedUntil" : "String"
   * }
   */
  getClusterAssignments(options: any): any;
  /**
   * Gets information for a specified clustering
   * solution in the store.
   * @param options Optional. Object containing properties that enable filtering results within a
   * clustering solution.Default: Return cluster memberships for all
   * clusters.
   * {
   * "clusterId" : "String",
   * "groupBy" : "String",
   * "limit" : "String",
   * "sequenceSince" : "String",
   * "updatedSince" : "String",
   * "updatedUntil" : "String"
   * }
   */
  getClusterInfo(options?: any): any;
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
   * Gets the status of the most recent clustering solution update job.
   */
  getUpdateStatus(): any;
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
   * Submits clustering update jobs with options to narrow results to a specific table and
   * filter for matching records.
   * @param options JavaScript object containing options on which to base a clustering solution
   * update.{
   * "filter" : "String",
   * "table" : "String"
   * }
   */
  submitUpdateJob(options: any): any;
}
export { ClusteringSolutionVersion };
