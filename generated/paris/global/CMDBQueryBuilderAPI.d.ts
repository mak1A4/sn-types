declare class CMDBQueryBuilderAPI {
  /**
   * Returns the execution details for a specified CMDB Query Builder saved
   * query.
   * @param executeQuery Optional. Flag that indicates whether to execute the specified query or
   * not.Valid values:
   *
   * true: Execute the specified query and return its execution details.
   *
   * false: Do not execute the specified query. Return the most recent execution
   * details of the query.
   *
   *
   * Default: False
   * @param savedQueryName Name of the CMDB Query Builder saved query for which to return query execution
   * details.
   * @param timeout Optional. Integer value that overrides the default query execution timeout
   * limit of five minutes.Unit: Seconds
   * Default: Five minutes
   */
  getSavedQueryExecutionDetails(
    executeQuery: boolean | undefined,
    savedQueryName: string,
    timeout?: number,
  ): any;
}
export { CMDBQueryBuilderAPI };
