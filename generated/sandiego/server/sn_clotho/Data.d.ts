declare class Data {
  /**
   * Returns the end time for data in the Data object.
   */
  getEnd(): any;
  /**
   * Returns the label assigned by the
   * sn_clotho.ClothoTransform.label() method.
   */
  getLabel(): any;
  /**
   * Returns the name of the metric of the data series. Returns null when the data object is
   * associated with multiple data series.
   */
  getMetricName(): any;
  /**
   * Returns the time period in milliseconds.
   */
  getPeriod(): any;
  /**
   * Returns the start time for data in the Data object.
   */
  getStart(): any;
  /**
   * Returns the subject of the data series. Returns null when the data object is associated
   * with multiple data series.
   */
  getSubject(): any;
  /**
   * Returns the name of the table assigned in the DataSelector class constructor. Returns
   * null when the data object is associated with multiple data series.
   */
  getTableName(): any;
  /**
   * Returns an array of values.
   */
  getValues(): any;
  /**
   * Returns the number of values in the Data object.
   */
  size(): any;
}
export { Data };
