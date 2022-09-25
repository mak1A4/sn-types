declare class GlideRecord {
  constructor(tableName: string);
  /**
   * Adds a column to order by in the query.
   * @param column The column by which to order the result set.
   */
  addOrderBy(column: string): any;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param name Name of the field to check.
   * @param operator Query operator. The available values are dependent on the data type of the
   * value parameter.Numbers:
   * =
   *
   * !=
   *
   * &gt;
   *
   * &gt;=
   *
   * &lt;
   *
   * &lt;=
   *
   *
   *
   * Strings (must be in upper case):
   * =
   *
   * !=
   *
   * IN
   *
   * NOT IN
   *
   * STARTSWITH
   *
   * ENDSWITH
   *
   * CONTAINS
   *
   * DOES NOT CONTAIN
   *
   * INSTANCEOF
   *
   *
   *
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(name: string, operator: any, value: any): any;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param name Name of the field to check.
   * @param value Value on which to query.
   */
  addQuery(name: string, value: any): any;
  /**
   * Deletes the current record and calls the specified response function when
   * complete.
   * @param responseFunction Response function for the Ajax callback.
   */
  deleteRecord(responseFunction: any): any;
  /**
   * Executes a GlideRecord query for a record with the specified sys_id. This method is
   * expected to be used to query for single records, so a next operation is performed before
   * returning.
   * @param sys_id The sys_id of the record to be found.
   */
  get(sys_id: any): any;
  /**
   * Retrieves the query condition of the current result set as an encoded query
   * string.
   */
  getEncodedQuery(): any;
  /**
   * Returns the limit for records to be returned by the GlideRecord query.
   */
  getLimit(): any;
  /**
   * Retrieves the name of the table associated with this GlideRecord.
   */
  getTableName(): any;
  /**
   * Determines if there are any more records in the GlideRecord.
   */
  hasNext(): any;
  /**
   * Inserts a new record using the field values that have been set for the current
   * record.
   * @param responseFunction Function to execute once the record is inserted.
   */
  insert(responseFunction: any): any;
  /**
   * Moves to the next record in the GlideRecord.
   */
  next(): any;
  /**
   * Specifies an orderBy column. May be called more than once to order by multiple
   * columns.
   * @param column The column name to be used to order the result set.
   */
  orderBy(column: string): any;
  /**
   * Runs the query against the table based on the addQuery() filter. This queries the
   * GlideRecord table as well as any references of the table.
   * @param responseFunction The response function for the Ajax callback.
   */
  query(responseFunction: any): any;
  /**
   * Adds a specified encoded query string to the current query clause.
   * @param encodedQuery Encoded query string to add to the current query clause.
   */
  setEncodedQuery(encodedQuery: string): any;
  /**
   * Sets the limit for how many records are in the GlideRecord.
   * @param maxQuery The limit for the number of records to retrieve.
   */
  setLimit(maxQuery: number): any;
}
export { GlideRecord };
