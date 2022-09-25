declare class GlideAggregate {
  /**
   * Adds an aggregate to a database query.
   * @param agg Name of an aggregate to include in a database query.Valid values:
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
   * @param query An encoded query string to add to the aggregate.
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
   */
  addTrend(fieldName: string, timeInterval: string): any;
  /**
   * Gets the value of an aggregate from the current record.
   * @param agg Type of the aggregate.Valid values:
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
   * @param agg Type of aggregation, for example SUM, COUNT, MIN, MAX.
   * @param fieldName Name of the field to aggregate.
   */
  orderByAggregate(agg: string, fieldName: string): any;
  /**
   * Issues the query and gets the results.
   */
  query(): any;
  /**
   * Sets whether the results are to be grouped.
   * @param b Set to true if grouping is true, otherwise set to false.
   */
  setGroup(b: boolean): any;
}
export { GlideAggregate };
