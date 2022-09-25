declare class GlideRecord {
  constructor(tableName: string);
  /**
   * Adds a filter to return active records.
   */
  addActiveQuery(): any;
  /**
   * Changes the domain used for the query from the user's domain to the domain of the
   * provided GlideRecord.
   * @param glideRecord GlideRecord from which to obtain the domain.
   */
  addDomainQuery(glideRecord: any): any;
  /**
   * Adds an encoded query to other queries that may have been set.
   * @param query An encoded query
   * string.
   */
  addEncodedQuery(query: string): any;
  /**
   * Applies a pre-defined GlideDBFunctionBuilder object to a record.
   * @param _function A GlideDBFunctionBuilder object that defines a SQL operation.
   */
  addFunction(_function: any): any;
  /**
   * Adds a filter to return inactive records. Inactive records have the active flag set to
   * false.
   */
  addInactiveQuery(): any;
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param table Table name
   */
  addJoinQuery(table: string): any;
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param table Table name
   * @param primaryField If other than sys_id, the primary field.
   */
  addJoinQuery(table: string, primaryField: string): any;
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param table Table name
   * @param primaryField If other than sys_id, the primary field.
   * @param joinTableField If other than sys_id, the field that joins the tables
   */
  addJoinQuery(
    table: string,
    primaryField: string,
    joinTableField: string,
  ): any;
  /**
   * Adds a filter to return records where the specified field is not null.
   * @param fieldName The field name.
   */
  addNotNullQuery(fieldName: string): any;
  /**
   * Adds a filter to return records where the specified field is null.
   * @param fieldName The field name.
   */
  addNullQuery(fieldName: string): any;
  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table that match the request.
   * @param name Table field name
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
   * Apply a template record from the Template table [sys_template] to the current record.
   * If the specified template is not found, no action is taken.
   * @param template Name of a template from the Templates [sys_template] table.
   */
  applyTemplate(template: string): any;
  /**
   * Enables or disables the update to the fields sys_updated_by, sys_updated_on,
   * sys_mod_count, sys_created_by, and sys_created_on. This is often used for manually updating
   * field values on a record while leaving historical information unchanged.
   * @param e If false disables updates to sys_updated_by, sys_updated_on, sys_mod_count,
   * sys_created_by, and sys_created_on.
   */
  autoSysFields(e: boolean): any;
  /**
   * Determines if the access control rules (which includes the user's role) permit
   * inserting new records in this table.
   */
  canCreate(): any;
  /**
   * Determines if the access control rules (which includes the user's role) permit deletion
   * of records in this table.
   */
  canDelete(): any;
  /**
   * Determines if the access control rules (which includes the user's role) permit reading
   * this table.
   */
  canRead(): any;
  /**
   * Determines if the access control rules (which includes the user's role) permit updates
   * to records in this table.
   */
  canWrite(): any;
  /**
   * Determines whether any of the fields in the record have changed.
   */
  changes(): any;
  /**
   * Deletes multiple records according to the current "where" clause.
   */
  deleteMultiple(): any;
  /**
   * Deletes a single record.
   */
  deleteRecord(): any;
  /**
   * Returns true if any record has a matching value in the specified column. If found, it
   * also moves to the first record that matches, essentially executing next()
   * until the record is returned.
   * @param columnName Field name to search.
   * @param value Value to check for in the specified field.
   */
  find(columnName: string, value: string): any;
  /**
   * Returns the specified record in the current GlideRecord object.
   * @param name Optional. Name of the instantiated GlideRecord column to search for the
   * specified value parameter. If only a single parameter is passed
   * in, the method assumes that this parameter is sys_id.
   * @param value Value to match.
   */
  get(name: any | undefined, value: any): any;
  /**
   * Returns the dictionary attributes on the specified field.
   * @param fieldName Field name for which to return the dictionary attributes
   */
  getAttribute(fieldName: string): any;
  /**
   * Returns the table's label.
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
   * Retrieves the GlideElement for a specified field.
   * @param fieldName Column name for which to return the GlideElement object.
   */
  getElement(fieldName: string): any;
  /**
   * Retrieves the query condition of the current result set as an encoded query string.
   */
  getEncodedQuery(): any;
  /**
   * Retrieves the field value for the display field of the current record and adds escape
   * characters for use in Jelly scripts.
   */
  getEscapedDisplayValue(): any;
  /**
   * Retrieves a Java ArrayList of fields in the current record.
   */
  getFields(): any;
  /**
   * Retrieves the field's label.
   */
  getLabel(): any;
  /**
   * Retrieves the link for the current record.
   * @param noStack Flag that indicates whether to append the generated link to the end of the URL.
   * For example: &amp;sysparm_stack=[tablename]_list.do?
   * sysparm_query=active=true.Valid values:
   * true: Append link.
   *
   * false: Do not append link.
   *
   *
   *
   * Default: false
   */
  getLink(noStack: boolean): any;
  /**
   * Retrieves the row number of the current record within the table.
   */
  getLocation(): any;
  /**
   * Retrieves the plural label of the GlideRecord table.
   */
  getPlural(): any;
  /**
   * Retrieves the class (table) name for the current record.
   */
  getRecordClassName(): any;
  /**
   * Retrieves a list of names and display values of related lists associated with the
   * current GlideRecord.
   */
  getRelatedLists(): any;
  /**
   * Retrieves a list of names and display values of tables that are referred to by the
   * current record.
   */
  getRelatedTables(): any;
  /**
   * Retrieves the number of rows (records) in the current GlideRecord object.
   */
  getRowCount(): any;
  /**
   * Retrieves the row number set by saveLocation() or
   * setLocation().
   */
  getRowNumber(): any;
  /**
   * Retrieves the table name associated with this GlideRecord.
   */
  getTableName(): any;
  /**
   * Retrieves the string value of a specified field.
   * @param fieldName Name of a field for which to retrieve its value.
   */
  getValue(fieldName: string): any;
  /**
   * Determines if the current GlideRecord has any attachments.
   */
  hasAttachments(): any;
  /**
   * Determines if there are any more records in the GlideRecord.
   */
  hasNext(): any;
  /**
   * Creates an empty record within the current GlideRecord that is suitable for population
   * before an insert.
   */
  initialize(): any;
  /**
   * Inserts a new record with the field values that have been set for the current
   * record.
   */
  insert(): any;
  /**
   * Inserts a new record and also inserts or updates any related records with the provided
   * information.
   */
  insertWithReferences(): any;
  /**
   * Checks a table for the type\class of table.
   * @param className Name of a type or class of record.
   */
  instanceOf(className: string): any;
  /**
   * Determines whether the current record has been inserted into the database.
   */
  isNewRecord(): any;
  /**
   * Determines if the current GlideRecord table exists.
   */
  isValid(): any;
  /**
   * Determines if the specified field is defined in the current GlideRecord
   * table.
   * @param fieldName Name of a field to check.
   */
  isValidField(fieldName: string): any;
  /**
   * Determines if the current record is valid.
   */
  isValidRecord(): any;
  /**
   * Creates a GlideRecord, sets the default values for the fields, and assigns a unique ID
   * to the record.
   */
  newRecord(): any;
  /**
   * Moves to the next record in the GlideRecord.
   */
  next(): any;
  /**
   * Determines if an operation is insert, update, or
   * delete.
   */
  operation(): any;
  /**
   * Specifies a field name to use to order the query set. To order by multiple fields, call
   * this method multiple times with different field values.
   * @param fieldName Field on which to order the query set.
   */
  orderBy(fieldName: string): any;
  /**
   * Specifies the field to use to order the query set in descending order.
   * @param fieldName Name of field to use to order the query results in descending order.
   */
  orderByDesc(fieldName: string): any;
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
   * Used in domain-separated instances. Similar to query(), runs the
   * query against the table based on the filters specified by addQuery() and
   * addEncodedQuery(), but ignores domains.
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
  queryNoDomain(name?: string, value?: string): any;
  /**
   * Sets the current record to be the record that was saved with
   * saveLocation(). If saveLocation() has not been called,
   * the current record is set to the first record of the GlideRecord.
   */
  restoreLocation(): any;
  /**
   * Saves the current row number so you can return to this location using the
   * restoreLocation() method.
   */
  saveLocation(): any;
  /**
   * Sets a flag to indicate if the next database action (insert, update, delete) is to be
   * aborted.
   * @param b True to abort next action, or false to allow the next action.
   */
  setAbortAction(b: boolean): any;
  /**
   * Sets the specified field to the specified display value.
   * @param name Name of the field for which to set the display value.
   * @param value Display value for the specified field.
   */
  setDisplayValue(name: string, value: any): any;
  /**
   * Updates the record even if fields have not changed.
   * @param force True to update even if fields have not changed, otherwise false.
   */
  setForceUpdate(force: boolean): any;
  /**
   * Sets the maximum number of records to return in the GlideRecord from a
   * query.
   * @param limit Limit for records to fetch.
   */
  setLimit(limit: number): any;
  /**
   * Sets the current row location to the specified value.
   * @param rowNumber Row number to set as the current row.
   */
  setLocation(rowNumber: number): any;
  /**
   * Generates a new GUID and sets it as the unique ID (sys_id) for the current record.
   */
  setNewGuid(): any;
  /**
   * Generates a new GUID and sets it as the unique ID for the current record, when
   * inserting a new record.
   * @param guid Value for the new GUID.
   */
  setNewGuidValue(guid: string): any;
  /**
   * Enables or disables using the reference field's display name when querying a reference
   * field.
   * @param queryReferences Flag indicating what time of data to generate.Valid values:
   * true: Generate a string of display names.
   *
   * false: Generate a string of sys_ids.
   *
   *
   *
   */
  setQueryReferences(queryReferences: boolean): any;
  /**
   * Disables or enables the running of any engines (approval rules / assignment
   * rules).
   * @param e Flag that indicates whether to enable or disable the running of any
   * engines.Valid values:
   * true: Enable engines
   *
   * false: Disable engines
   *
   *
   *
   */
  setUseEngines(e: boolean): any;
  /**
   * Sets the specified field to the specified value.
   * @param name Name of the field whose value you want to set.
   * @param value Value to set in the specified field.
   */
  setValue(name: string, value: any): any;
  /**
   * Enables or disables the running of business rules that might normally be triggered by
   * subsequent actions. If the e parameter is set to false, an insert/update
   * will not be audited. Auditing only happens when the parameter is set to true for a GlideRecord
   * operation.
   * @param e Flag that indicates whether to enable or disable the running of business
   * rules.Valid values:
   * true: Enable business rules
   *
   * false: Disable business rules
   *
   *
   *
   */
  setWorkflow(e: boolean): any;
  /**
   * Updates the GlideRecord with any changes that have been made. If the record does not
   * exist, it is inserted.
   * @param reason Optional. Reason for the update. The reason appears in the audit record.
   */
  update(reason?: any): any;
  /**
   * Updates each GlideRecord in a stated query with a specified
   * set of changes.
   */
  updateMultiple(): any;
  /**
   * Updates a record and also inserts or updates any related records with the information
   * provided.
   * @param reason Reason for the updates. The reason is displayed in the audit record.
   */
  updateWithReferences(reason: any): any;
  /**
   * Moves to the next record in the GlideRecord. Provides the same functionality as
   * next(), intended to be used in cases where the GlideRecord has a column
   * named next.
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
