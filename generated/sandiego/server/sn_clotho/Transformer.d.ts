declare class Transformer {
  constructor(sourceRecords: any);
  /**
   * Run the transform.
   * @param start The beginning of the period to be evaluated.
   * @param end The end of the period to be evaluated.
   */
  execute(start: any, end: any): any;
  /**
   * Specify a field to be used to group the data.
   * @param field A field in the table to be used to group the transform results.
   */
  groupBy(field: string): any;
  /**
   * Specify the metric field to be used in the transform.
   * @param metricName Name of the metric field.
   */
  metric(metricName: string): any;
}
export { Transformer };
