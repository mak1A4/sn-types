declare class GlideQuery {
  constructor(table: string);
  /**
   * Aggregates a field using a specified aggregation function.
   * @param aggregateType The type of aggregation function to perform. Options include:
   *
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   * @param field Field on which to perform the operation.
   */
  aggregate(aggregateType: string, field: string): any;
  /**
   * Returns the aggregate average of a given numeric field.
   * @param field Field on which to perform the operation.
   */
  avg(field: string): any;
  /**
   * Returns the number of records that match the query.
   */
  count(): any;
  /**
   * Deletes all records in the table specified by the preceding Where clauses.
   */
  deleteMultiple(): any;
  /**
   * Disables updating system fields, or fields with a name that starts with the
   * sys prefix, such as sys_created_on, sys_updated_on, and sys_mod_count. Only
   * applies to the specified query.
   */
  disableAutoSysFields(): any;
  /**
   * Disables any business rules, flows, workflows, or audit records that would run or be
   * created as the result of the query.
   */
  disableWorkflow(): any;
  /**
   * Forces a database update even when no record changes are made. For example, you can use
   * this method to force a business rule to execute.
   */
  forceUpdate(): any;
  /**
   * Returns a single record from the query.
   * @param key Sys_id of the record to return.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  get(key: string, selectedFields?: any[]): any;
  /**
   * Returns an Optional object containing a single record based on a set of name-value
   * pairs to query by. Assumes the '=' operator for each name-value pair.
   * @param keyValues Object where the keys are the name of the fields, and the values are the values
   * to query for.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  getBy(keyValues: any, selectedFields?: any[]): any;
  /**
   * Groups the query results by a designated field or fields.
   * @param fields Field or fields to group the results by.
   */
  groupBy(fields: string): any;
  /**
   * Filters aggregate groups so that you can display only groups of results that match a
   * specified condition.
   * @param aggregateType The type of aggregation function to perform. Options include:
   *
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   * @param field Field on which to perform the operation.
   * @param operator Numeric operator to use in the operation. Options include:
   * &gt;: Greater than.
   *
   * &lt;: Less than.
   *
   * &gt;=: Greater than or equal to.
   *
   * &lt;=: Less than or equal to.
   *
   * =: Equal to.
   *
   * !=: Not equal to.
   *
   *
   *
   * @param value Number value to use in the operation.
   */
  having(
    aggregateType: string,
    field: string,
    operator: string,
    value: number,
  ): any;
  /**
   * Inserts a record and returns an Optional object containing the record.
   * @param keyValues Object containing name-value pairs to insert into the record. Unspecified
   * fields will be null.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  insert(keyValues: any, selectedFields?: any[]): any;
  /**
   * Updates an existing record, or inserts a new record if one does not already
   * exist.
   * @param changes Object containing name-value pairs to update or insert into the record.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  insertOrUpdate(changes: any, selectedFields?: any[]): any;
  /**
   * Limits the number of records returned in a query.
   * @param limit Number of records to return.
   */
  limit(limit: number): any;
  /**
   * Returns the aggregate maximum of a given field.
   * @param field Field on which to perform the operation.
   */
  max(field: string): any;
  /**
   * Returns the aggregate minimum of a given field.
   * @param field Field on which to perform the operation.
   */
  min(field: string): any;
  /**
   * Orders the returned result in ascending order by a given field.
   * @param fields Comma-delimited fields to order the result by in ascending order.
   */
  orderBy(fields: string): any;
  /**
   * Orders the returned result in descending order by a given field.
   * @param fieldOrAggregate If the query does not use the aggregate() method, pass the
   * field to order the results by. If the query uses the
   * aggregate() method, pass the type of aggregation function to
   * perform.
   * Options include:
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   * @param field Optional. Field to order the result by in descending order. Required for
   * queries using the aggregate() method.
   */
  orderByDesc(fieldOrAggregate: string, field?: string): any;
  /**
   * Adds an OR clause to a query that returns values based on a given condition.
   * @param fieldOrQuery Field or another GlideQuery object used in the where clause. If passing a
   * field, you can dot-walk to a desired value. For example,
   * 'company.name'.
   * @param operator Optional. Operator used in the OR clause. If you do not pass an argument, the
   * system uses the = operator. You do not need to include a placeholder value.
   * @param value Value used in the OR clause.
   */
  orWhere(fieldOrQuery: string, operator: string | undefined, value: any): any;
  /**
   * Adds an OR clause that returns records that do not contain a null value in a given
   * field.
   * @param field Field used in the query.
   */
  orWhereNotNull(field: string): any;
  /**
   * Adds an OR clause to a query that returns records that contain a null value in a given
   * field.
   * @param field Field used in the query.
   */
  orWhereNull(field: string): any;
  /**
   * Adds an encoded query to a new GlideQuery query.
   * @param table Table to query, such as task or incident.
   * @param encoded_query Encoded query to apply
   * to the records in the specified table.
   */
  parse(table: string, encoded_query: string): any;
  /**
   * Returns the results of the query as a Stream object containing the specified fields.
   * @param fields Optional. Fields to display in the result. You can provide any number of
   * fields as arguments, dot-walk to a desired value, or use a flag. For example:
   * select('first_name', 'location.city', 'company$DISPLAY');orselect(['first_name', 'location.city', 'company$DISPLAY']);Default:
   * The system always returns the sys_id.
   */
  select(fields?: string): any;
  /**
   * Returns the result of the query as an Optional object containing specified fields.
   * @param fields Optional. Fields to display in the result. You can provide any number of fields
   * as arguments, dot-walk to a desired value, or use a flag. For example:
   * selectOne('first_name', 'location.city', 'company$DISPLAY');orselectOne(['first_name', 'location.city', 'company$DISPLAY']);Default:
   * The system always returns the sys_id.
   */
  selectOne(fields?: string): any;
  /**
   * Returns the aggregate sum of a given numeric field.
   * @param field Field on which to perform the operation.
   */
  sum(field: string): any;
  /**
   * Returns a GlideRecord object that represents the current query. Returns a
   * GlideAggregrate object if the query uses the GlideQuery.aggregate() method.
   */
  toGlideRecord(): any;
  /**
   * Updates an existing record that matches the defined conditions.
   * @param changes Object containing name-value pairs to update in the record. Names must match
   * fields in the table.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  update(changes: any, selectedFields?: any[]): any;
  /**
   * Updates all existing records that match the defined conditions. Returns the number of
   * records updated.
   * @param changes Object containing name-value pairs to update in the record. Names must match
   * fields in the table.
   */
  updateMultiple(changes: any): any;
  /**
   * Adds a Where clause to the query that returns values based on a given
   * condition.
   * @param fieldOrQuery Field or another GlideQuery object used in the where clause. If passing a
   * field, you can dot-walk to a desired value. For example,
   * 'company.name'.
   * @param operator Optional. Operator used in the where clause. If you do not pass an argument,
   * the system uses the = operator.
   * @param value Value used in the where clause.
   */
  where(fieldOrQuery: string, operator: string | undefined, value: any): any;
  /**
   * Returns records that do not contain a null value in a given field.
   * @param field Field used in the query.
   */
  whereNotNull(field: string): any;
  /**
   * Returns records that contain a null value in a given field.
   * @param field Field used in the query.
   */
  whereNull(field: string): any;
  /**
   * Executes the query using the GlideRecordSecure API to securely query
   * the database while honoring ACLs.
   */
  withAcls(): any;
}
export { GlideQuery };
