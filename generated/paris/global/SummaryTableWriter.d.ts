declare class SummaryTableWriter {
  constructor(tableName: string, columnName: string);
  /**
   * Creates the summary set of records for reports.
   */
  generate(): any;
  /**
   * Defines the query to use to load the data for the summary record set.
   * @param query Query to use to load the summary data.
   */
  setQuery(query: string): any;
  /**
   * Defines the column on which to stack the incident records.
   * @param column Column that is used to stack the incident records.
   */
  setStackOn(column: string): any;
  /**
   * Sets the title of the summary set, which is also the chart title.
   * @param title Title given to the summary set that is used as the chart title. Also used as
   * the key field for chart generators to determine whether the data was
   * generated.
   */
  setTitle(title: string): any;
  /**
   * Sets the time field used for the X axis or stacking field; can also set the time
   * interval used to calculate the trend.
   * @param field Time field that is used for X axis values if grouping is not used. If grouping
   * is used, then this is the stacking field.
   * @param interval Time interval that is used to calculate the trend.
   */
  setTrend(field: string, interval: string): any;
}
export { SummaryTableWriter };
