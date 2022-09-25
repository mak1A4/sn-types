declare class GlideAggregate {
  /**
   * Adds an aggregate to a database
   * query.
   * @param agg Name of an aggregate to use.Valid values:
   * AVG: Average value of the expression.
   *
   * COUNT: Count of the number of non-null values.
   *
   * GROUP_CONCAT: Concatenates all non-null values of the group in ascending
   * order, joins them with a comma (‘,’), and returns the result as a String.
   *
   * GROUP_CONCAT_DISTINCT: Concatenates all non-null values of the group in
   * ascending order, removes duplicates, joins them with a comma (‘,’), and returns
   * the result as a String.
   *
   * MAX: Largest, or maximum, value.
   *
   * MIN: Minimum value.
   *
   * STDDEV: Population standard deviation.
   *
   * SUM: Sum of all values.
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
   * @param query Encoded query string to add to the aggregate.
   */
  addEncodedQuery(query: string): any;
  /**
   * Adds a "having" element to the aggregate, such as select category, count(*) from
   * incident group by category HAVING count(*) > 5.
   * @param name Aggregate to filter on. For example, COUNT.
   * @param operator Operator symbol. For example , =, !=.
   * @param value Value to query on. For example, '5'.
   */
  addHaving(name: string, operator: string, value: string): any;
  /**
   * Adds a trend for a field.
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
   * Gets the value of an aggregate from the current record.
   * @param agg Type of the aggregate.Valid values:
   * AVG: Average value of the expression.
   *
   * COUNT: Count of the number of non-null values.
   *
   * GROUP_CONCAT: Concatenates all non-null values of the group in ascending
   * order, joins them with a comma (‘,’), and returns the result as a String.
   *
   * GROUP_CONCAT_DISTINCT: Concatenates all non-null values of the group in
   * ascending order, removes duplicates, joins them with a comma (‘,’), and returns
   * the result as a String.
   *
   * MAX: Largest, or maximum, value.
   *
   * MIN: Minimum value.
   *
   * STDDEV: Population standard deviation.
   *
   * SUM: Sum of all values.
   *
   *
   *
   * @param name Name of the field to get the aggregate from.
   */
  getAggregate(agg: string, name: string): any;
  /**
   * Retrieves the query necessary to return the current aggregate.
   */
  getQuery(): any;
  /**
   * Returns the number of records by summing an aggregate.
   * @param agg Name of an aggregate to use.Valid values:
   * AVG: Average value of the expression.
   *
   * COUNT: Count of the number of non-null values.
   *
   * GROUP_CONCAT: Concatenates all non-null values of the group in ascending
   * order, joins them with a comma (‘,’), and returns the result as a String.
   *
   * GROUP_CONCAT_DISTINCT: Concatenates all non-null values of the group in
   * ascending order, removes duplicates, joins them with a comma (‘,’), and returns
   * the result as a String.
   *
   * MAX: Largest, or maximum, value.
   *
   * MIN: Minimum value.
   *
   * STDDEV: Population standard deviation.
   *
   * SUM: Sum of all values.
   *
   *
   *
   * @param name Name of the field to aggregate.
   */
  getTotal(agg: string, name: string): any;
  /**
   * Returns the value of a field.
   * @param name Name of the field.
   */
  getValue(name: string): any;
  /**
   * Provides the name of a field to use in grouping the aggregates.
   * @param name Name of the field.
   */
  groupBy(name: string): any;
  /**
   * Provides the name of a field that should be used to order the aggregates. The field
   * will also be added to the group-by list.
   * @param name Name of the field used to order the aggregates.
   */
  orderBy(name: string): any;
  /**
   * Orders the aggregates based on the specified aggregate and field.
   * @param agg Type of aggregation.Valid values:
   * AVG: Average value of the expression.
   *
   * COUNT: Count of the number of non-null values.
   *
   * GROUP_CONCAT: Concatenates all non-null values of the group in ascending
   * order, joins them with a comma (‘,’), and returns the result as a String.
   *
   * GROUP_CONCAT_DISTINCT: Concatenates all non-null values of the group in
   * ascending order, removes duplicates, joins them with a comma (‘,’), and returns
   * the result as a String.
   *
   * MAX: Largest, or maximum, value.
   *
   * MIN: Minimum value.
   *
   * STDDEV: Population standard deviation.
   *
   * SUM: Sum of all values.
   *
   *
   *
   * @param fieldName Name of the field to aggregate.
   */
  orderByAggregate(agg: string, fieldName: string): any;
  /**
   * Issues the query and gets the results.
   */
  query(): any;
  /**
   * Limits the number of rows from the table
   * to include in the aggregate query.
   * @param firstRow Zero-based index of the first row to include in the aggregate query,
   * inclusive.
   * @param lastRow Zero-based index of the last row to include in the aggregate query,
   * exclusive.
   */
  setAggregateWindow(firstRow: number, lastRow: number): any;
  /**
   * Sets whether to group the results.
   * @param b Flag that indicates whether to group the results.Valid values:
   * true: Group the results.
   *
   * false: Do not group the results.
   *
   *
   *
   */
  setGroup(b: boolean): any;
}
export { GlideAggregate };
