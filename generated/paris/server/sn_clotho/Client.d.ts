declare class Client {
  constructor();
  /**
   * Remove the data in the MetricBase database associated with
   * the specified metric in the specified GlideRecord. Use this method for removing test data.
   * @param gr The records whose time series data for the specified metric is to be
   * deleted.
   * @param metric The name of the metric.
   */
  deleteSeries(gr: any, metric: string): any;
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
