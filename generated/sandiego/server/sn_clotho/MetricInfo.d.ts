declare class MetricInfo {
  constructor(table: string, metric: string);
  /**
   * Gets the retention policy schedules of the specified metric.
   */
  getRetentionSchedulesInMinutes(): any;
  /**
   * Indicates whether the specified metric is mapped to the table defined in a
   * MetricInfo object.
   */
  isValid(): any;
}
export { MetricInfo };
