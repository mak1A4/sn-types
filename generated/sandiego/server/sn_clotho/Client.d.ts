declare class Client {
  constructor();
  /**
   * Accumulates metric values at specified timestamp and saves the
   * result to the database rather than overwriting the value.
   * @param now_GR Name of the series GlideRecord from which to obtain the accumulated
   * value.See also: getSeries()
   * @param default_value Optional. Default value for accumulation at a given
   * timestamp. Used only during the first call to accumulate if a value is unavailable
   * for a given timestamp.A use case could be accumulating a watts
   * metric for a total_power. You want to accumulate watts for a router connected to an
   * outlet without a power meter to measure it. If you know the consumption value and it
   * is constant), you can use the constant value as a default value to accumulate
   * total_power. For example, you would use 20 if the router is constantly plugged in
   * and consumes 20 Watts.
   * The timestamp value can be provided using the DataBuilder API.
   * Default: 0
   */
  accumulate(now_GR: any, default_value?: number): any;
  /**
   * Remove a specified metric from a specified table in the MetricBase
   * database
   * @param tableName The name of the table whose specified metric is to be deleted.
   * @param metricName The name of the metric.
   */
  deleteMetric(tableName: string, metricName: string): any;
  /**
   * Remove the data in the MetricBase database associated with
   * the specified metric in the specified GlideRecord. Use this method for removing test data.
   * @param now_GR The records whose time series data for the specified metric is to be
   * deleted.
   * @param metric The name of the metric.
   */
  deleteSeries(now_GR: any, metric: string): any;
  /**
   * Get all series from a specific dimension.
   * @param now_GR The record from which to obtain the series.
   * @param metric The name of the metric.
   * @param lastUpdateBefore Optional. Date in the future representing the end of the period to be
   * evaluated.
   */
  getSeries(now_GR: any, metric: string, lastUpdateBefore?: any): any;
  /**
   * Saves metric data to the MetricBase database.
   * @param metricData One of the following:
   * DataBuilder object containing metric data.
   *
   * Array of DataBuilder objects containing metric data.
   *
   *
   */
  put(metricData: any): any;
}
export { Client };
