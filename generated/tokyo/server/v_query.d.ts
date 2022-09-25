declare class v_query {
  /**
   * Gets an encoded query string for the specified field.
   * @param field Name of the field.
   */
  getCondition(field: string): any;
  /**
   * Returns the query against a remote table as an encoded query string
   */
  getEncodedQuery(): any;
  /**
   * Gets the value of a field in an equality query condition.
   * @param field Name of the field to be queried.
   */
  getParameter(field: string): any;
  /**
   * Returns the sys_id value in a get query.
   */
  getSysId(): any;
  /**
   * Gets a text search query parameter.
   */
  getTextSearch(): any;
  /**
   * Determines if the query is a get query, that is, a query that retrieves a record by
   * sys_id.
   */
  isGet(): any;
  /**
   * Indicates if the query contains a text query parameter.
   */
  isTextSearch(): any;
  /**
   * Sets the last error message in the GlideRecord.
   * @param message Error message.
   */
  setLastErrorMessage(message: string): any;
}
export { v_query };
