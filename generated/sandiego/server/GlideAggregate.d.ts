declare class GlideAggregate {
  constructor(tableName: string);
  /**
   * Adds an aggregate to a database
   * query.
   * @param agg Name of an aggregate to use.Valid values:
   * AVG
   *
   * COUNT
   *
   * MIN
   *
   * MAX
   *
   * STDDEV
   *
   * SUM
   *
   *
   *
   * @param name Optional. Name of the field to group the results of the aggregation
   * by.Default: Null
   */
  addAggregate(agg: string, name?: string): any;
  /**
   * Adds an encoded query to the other queries that may have been set for this
   * aggregate.
   * @param query An encoded query to add to the aggregate.
   */
  addEncodedQuery(query: string): any;
  /**
   * Adds a not null query to the aggregate.
   * @param fieldname The name of the field.
   */
  addNotNullQuery(fieldname: string): any;
  /**
   * Adds a null query to the aggregate.
   * @param fieldName The name of the field.
   */
  addNullQuery(fieldName: string): any;
  /**
   * Adds a query to the aggregate.
   * @param name The query to add.
   * @param operator The operator for the query.
   * @param value The list of values to include in the query.
   */
  addQuery(name: string, operator: string, value: string): any;
  /**
   * Adds a trend for a specified field.
   * @param fieldName Name of the field for which trending should occur.
   * @param timeInterval Time interval for the trend. Valid values:
   * date
   *
   * dayofweek
   *
   * hour
   *
   * minute
   *
   * quarter
   *
   * value
   *
   * week
   *
   * year
   *
   *
   *
   * @param numUnits Optional. Only valid when timeInterval =
   * minute. Number of minutes to include in the trend.Default:
   * 1
   */
  addTrend(fieldName: string, timeInterval: string, numUnits?: number): any;
  /**
   * Returns the value of an aggregate from the current record.
   * @param agg The type of the aggregate. For example, SUM or
   * COUNT.
   * @param name Name of the field on which to perform the aggregation.
   */
  getAggregate(agg: string, name: string): any;
  /**
   * Gets the query necessary to return the current aggregate.
   */
  getAggregateEncodedQuery(): any;
  /**
   * Retrieves the encoded query.
   */
  getEncodedQuery(): any;
  /**
   * Retrieves the number of rows in the GlideAggregate object.
   */
  getRowCount(): any;
  /**
   * Retrieves the table name associated with this GlideAggregate object.
   */
  getTableName(): any;
  /**
   * Returns the value of the specified field.
   * @param name Name of the field within the current table to return.
   */
  getValue(name: string): any;
  /**
   * Provides the name of a field to use in grouping the aggregates.
   * @param name Name of the field.
   */
  groupBy(name: string): any;
  /**
   * Determines if there are any more records in the GlideAggregate object.
   */
  hasNext(): any;
  /**
   * Moves to the next record in the GlideAggregate.
   */
  next(): any;
  /**
   * Orders the aggregates using the value of the specified field. The field will also be
   * added to the group-by list.
   * @param name Name of the field to order the aggregates by.
   */
  orderBy(name: string): any;
  /**
   * Orders the aggregates based on the specified aggregate and field.
   * @param agg Type of aggregation.
   * @param fieldName Name of the field to aggregate.
   */
  orderByAggregate(agg: string, fieldName: string): any;
  /**
   * Sorts the aggregates in descending order based on the specified field. The field will
   * also be added to the group-by list.
   * @param name Name of the field.
   */
  orderByDesc(name: string): any;
  /**
   * Issues the query and gets the results.
   */
  query(): any;
  /**
   * Sets whether the results are to be grouped.
   * @param b When true the results are grouped.
   */
  setGroup(b: boolean): any;
}
export { GlideAggregate };
