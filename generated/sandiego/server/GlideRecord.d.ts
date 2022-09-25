declare class GlideRecord {
  constructor(tableName: string);
  /**
   * Adds a filter to return active records.
   */
  addActiveQuery(): any;
  /**
   * Adds an encoded query to other queries that may have been set.
   * @param query An encoded query
   * string.
   */
  addEncodedQuery(query: string): any;
  /**
   * Applies a pre-defined GlideDBFunctionBuilder object to a record.
   * @param _function GlideDBFunctionBuilder object that defines a SQL operation.
   */
  addFunction(_function: any): any;
  /**
   * Adds a filter to return records based on a relationship in a table related to the
   * current GlideRecord.
   * @param joinTable Name of table to use in the join, such as
   * 'incident'.
   * @param primaryField Optional. Name of the field in the GlideRecord to use to join the field
   * specified in the joinTableField parameter.Default:
   * sys_id
   * @param joinTableField Optional. Name of the field in the table specified in
   * joinTable to use to join the tables.Default: First field
   * in the table specified in joinTable that is a reference field
   * to the current GlideRecord table.
   */
  addJoinQuery(
    joinTable: string,
    primaryField?: string,
    joinTableField?: string,
  ): any;
  /**
   * A filter that specifies records where the value of the field passed in the parameter is
   * not null.
   * @param fieldName The name of the field to be checked.
   */
  addNotNullQuery(fieldName: string): any;
  /**
   * Adds a filter to return records where the value of the specified field is
   * null.
   * @param fieldName The name of the field to be checked.
   */
  addNullQuery(fieldName: string): any;
  /**
   * Build a search query and return the rows that match the request.
   * @param name Table field name. If you are not querying a table field, use these reserved
   * variables:
   * 123TEXTQUERY321: Adds a search term to the query. Use this option to return
   * matching values from any field in the table. Use the term you want to query as
   * the value.
   *
   * 123TEXTINDEXGROUP321: Adds a text index group to the query. Use the name of
   * the text index group from the Text Index Groups [ts_index_group] table you want
   * to query as the value. For more information about text index groups, see Configure multiple tables
   * for indexing and searching.
   *
   *
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(name: string, value: any): any;
  /**
   * Build a search query and return the rows that match the request.
   * @param name Table field name.
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
  addQuery(name: string, operator: string, value: any): any;
  /**
   * Build a search query and return the rows that match the request.
   * @param query An encoded query string
   *
   * .
   */
  addQuery(query: string): any;
  /**
   * Provides atomic add and subtract operations on a specified number field at the database
   * level for the current GlideRecord object.
   * @param field The name of the field in this GlideRecord to modify. If the associated field
   * is not a numeric type, the operation is ignored.
   * @param value The amount to add to the value when the record is saved. To perform a
   * subtraction operation, simply pass a negative value.
   */
  addValue(field: string, value: number): any;
  /**
   * Sets the values of the specified encoded query terms and applies them to the current
   * GlideRecord.
   * @param queryString Encoded query to apply to the current GlideRecord.
   */
  applyEncodedQuery(queryString: string): any;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit
   * inserting new records in this table.
   */
  canCreate(): any;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit deleting
   * records in this table.
   */
  canDelete(): any;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit reading
   * records in this table.
   */
  canRead(): any;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit editing
   * records in this table.
   */
  canWrite(): any;
  /**
   * Sets a range of rows to be returned by subsequent queries.
   * @param firstRow First row to include. Because the index starts at 0, a value of 0 returns the
   * first row.
   * @param lastRow 0-based row number of the first row NOT to return. Behaves similar to Java's
   * String.substring(a,b) method. For example, if
   * lastRow = 4 and firstRow = 2, two
   * records are returned (4-2).
   * @param forceCount Optional. Flag that indicates whether to force a row count query. In most
   * implementations of this call, the row count is performed. There are some outlying
   * cases, such as text searches, were a row count is not performed. Setting this flag
   * ensures that the row count occurs.Valid values:
   * true: Row count always occurs.
   *
   * false: Row count occurs if implemented in normal execution of method.
   *
   *
   *
   * Default: false
   */
  chooseWindow(firstRow: number, lastRow: number, forceCount?: boolean): any;
  /**
   * Deletes multiple records that satisfy the query condition.
   */
  deleteMultiple(): any;
  /**
   * Deletes the current record.
   */
  deleteRecord(): any;
  /**
   * Returns the specified record in the current GlideRecord object.
   * @param name Optional. Name of the instantiated GlideRecord column to search for the
   * specified value parameter. If only a single parameter is passed
   * in, the method assumes that this parameter is the sys_id or display value.
   * @param value Value to match.
   */
  get(name: any | undefined, value: any): any;
  /**
   * Returns the dictionary attributes for the specified field.
   * @param fieldName Field name for which to return the dictionary attributes
   */
  getAttribute(fieldName: string): any;
  /**
   * Returns the current table's label.
   */
  getClassDisplayValue(): any;
  /**
   * Retrieves the display value for the current record.
   */
  getDisplayValue(): any;
  /**
   * Returns the element's descriptor.
   */
  getED(): any;
  /**
   * Retrieves the GlideElement object for the specified field.
   * @param fieldName Column name for which to return the GlideElement object.
   */
  getElement(fieldName: string): any;
  /**
   * Returns an array of GlideElement objects. Each object describes a field in the current
   * GlideRecord.
   */
  getElements(): any;
  /**
   * Retrieves the query condition of the current result set
   * as an encoded query string.
   */
  getEncodedQuery(): any;
  /**
   * Returns the field's label.
   */
  getLabel(): any;
  /**
   * Retrieves the last error message. If there is no last error message, null is returned.
   */
  getLastErrorMessage(): any;
  /**
   * Retrieves the link to the current record.
   * @param noStack Flag indicating whether to append the sysparm_stack parameter to the returned
   * link. This parameter specifies the page to visit after closing the current link.
   * Valid values:
   * true: Do not attach the sysparm_stack parameter.
   *
   * false: Attach the sysparm_stack parameter.
   *
   *
   *
   * If true, the sysparm_stack parameter is not appended to the link.
   */
  getLink(noStack: boolean): any;
  /**
   * Retrieves the class name for the current record.
   */
  getRecordClassName(): any;
  /**
   * Retrieves the number of rows in the query result.
   */
  getRowCount(): any;
  /**
   * Retrieves the name of the table associated with the GlideRecord.
   */
  getTableName(): any;
  /**
   * Gets the primary key of the record, which is usually the sys_id unless otherwise
   * specified.
   */
  getUniqueValue(): any;
  /**
   * Retrieves the string value of an underlying element in a field.
   * @param name The name of the field to get the value from.
   */
  getValue(name: string): any;
  /**
   * Determines if there are any more records in the GlideRecord object.
   */
  hasNext(): any;
  /**
   * Creates an empty record suitable for population before an insert.
   */
  initialize(): any;
  /**
   * Inserts a new record using the field values that have been set for the current record.
   */
  insert(): any;
  /**
   * Checks to see if the current database action is to be aborted.
   */
  isActionAborted(): any;
  /**
   * Verifies whether the specified encoded query is valid.
   * @param query Encoded query to validate. See Encoded query
   * strings.
   */
  isEncodedQueryValid(query: string): any;
  /**
   * Checks if the current record is a new record that has not yet been inserted into the
   * database.
   */
  isNewRecord(): any;
  /**
   * Determines if the current table is valid or if the record was successfully
   * retrieved.
   */
  isValid(): any;
  /**
   * Determines if the specified field is defined in the current table.
   * @param columnName The name of the field.
   */
  isValidField(columnName: string): any;
  /**
   * Determines if a record was actually returned by the query/get record
   * operation.
   */
  isValidRecord(): any;
  /**
   * Creates a new GlideRecord record, sets the default values for the fields, and assigns a
   * unique ID to the record.
   */
  newRecord(): any;
  /**
   * Moves to the next record in the GlideRecord object.
   */
  next(): any;
  /**
   * Determines if an operation is insert, update, or
   * delete.
   */
  operation(): any;
  /**
   * Specifies an orderBy column.
   * @param name Column name to use to order the records in this GlideRecord object.
   */
  orderBy(name: string): any;
  /**
   * Specifies a descending orderBy column.
   * @param name Column name to use to order the records in a GlideRecord object.
   */
  orderByDesc(name: string): any;
  /**
   * Runs a query against the table based on the filters specified
   * by query methods such as addQuery() and
   * addEncodedQuery().
   * @param name Optional - must also specify value parameter. Name of the field to search for
   * the value specified in the value parameter.
   * Note: This method is typically run without arguments, but you can specify a
   * name-value pair to filter records containing the specified values. If the
   * parameters are specified, the "name=value" condition is added to the
   * query.
   *
   * @param value Optional - must also specify field parameter. Value to search for in the
   * specified field parameter.
   */
  query(name?: string, value?: string): any;
  /**
   * Sets a flag to indicate if the next database action (insert, update, delete) is to be
   * aborted. This is often used in business rules.
   * @param b True to abort the next action. False if the action is to be allowed.
   */
  setAbortAction(b: boolean): any;
  /**
   * Sets the limit for number of records are fetched by the GlideRecord query.
   * @param maxNumRecords The maximum number of records to fetch.
   */
  setLimit(maxNumRecords: number): any;
  /**
   * Sets the sys_id value for the current record.
   * @param guid GUID to assign to the current record.
   */
  setNewGuidValue(guid: string): any;
  /**
   * Sets the value of the field with the specified name to the specified value.
   * @param name Name of the field.
   * @param value Value to assign to the field.
   */
  setValue(name: string, value: any): any;
  /**
   * Enables or disables the running of business rules, script engines, and
   * audit.
   * @param enable Flag that indicates whether to enable or disable the running of business rules,
   * script engines, and audit.Valid values:
   * true: Enable the running of business rules, script engines, and audit.
   * (Default)
   *
   * false: Disable the running of business rules, script engines, and
   * audit.
   *
   *
   *
   */
  setWorkflow(enable: boolean): any;
  /**
   * Updates the GlideRecord with any changes that have been made. If the record does not
   * already exist, it is inserted.
   * @param reason Optional. Reason for the update. The reason appears in the audit
   * record.
   */
  update(reason?: string): any;
  /**
   * Updates each GlideRecord in a stated query with a specified
   * set of changes.
   */
  updateMultiple(): any;
  /**
   * Moves to the next record in the GlideRecord. Provides the same functionality as
   * next(), use this method if the GlideRecord has a column named
   * next.
   */
  _next(): any;
  /**
   * Runs a query against the table based on the filters specified
   * by query methods such as addQuery() and
   * addEncodedQuery().
   * This method is intended to be used on tables in which
   * there is a column named "query", which might cause errors running the query()
   * method.
   * @param name Optional - must also specify value parameter. Name of the field to search for
   * the value specified in the value parameter.
   * Note: This method is typically run without arguments, but you can specify a
   * name-value pair to filter records containing the specified values. If the
   * parameters are specified, the "name=value" condition is added to the
   * query.
   *
   * @param value Optional - must also specify field parameter. Value to search for in the
   * specified field parameter.
   */
  _query(name?: string, value?: string): any;
}
export { GlideRecord };
