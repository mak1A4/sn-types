declare class DataBuilder {
  constructor(glideRecord: any, subject: string, metric: string);
  /**
   * Add a series of data points to the DataBuilder object. Each data point is a time stamp
   * and a value.
   * @param start The time stamp for the first data point. Subsequent time stamps are calculated
   * using the retention policy collection period.
   * @param value An array of numbers.
   */
  add(start: any, value: any[]): any;
  /**
   * Add a series of data points to the DataBuilder object. Each data point is a time stamp
   * and a value.
   * @param start The time stamp for the data point.
   * @param value The value of the data point.
   */
  add(start: any, value: number): any;
}
export { DataBuilder };
