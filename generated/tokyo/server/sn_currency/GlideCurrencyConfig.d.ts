declare class GlideCurrencyConfig {
  constructor();
  constructor(ed: any);
  /**
   * Returns the aggregation source value for an FX Currency field.
   */
  getAggregationSource(): any;
  /**
   * Returns the field used as the source of the date and time for the currency conversion.
   */
  getConversionDateSource(): any;
  /**
   * Returns the number of digits to display for an FX Currency field.
   */
  getDisplayDigits(): any;
  /**
   * Returns the currency code used to convert the FX Currency value when it appears in
   * lists and reports.
   */
  getDisplayValue(): any;
  /**
   * Returns the rate table field used as a rate table filter for an FX Currency
   * field.
   */
  getRateFilterRateTableField(): any;
  /**
   * Returns the target table field used to filter the rate table records for an FX Currency
   * field.
   */
  getRateFilterTargetTableField(): any;
  /**
   * Returns the rate table used to convert currency for an FX Currency field.
   */
  getRateTable(): any;
  /**
   * Returns the reference currency for an FX Currency field.
   */
  getReferenceCurrency(): any;
  /**
   * Returns the reference currency source for an FX Currency field.
   */
  getReferenceCurrencySource(): any;
}
export { GlideCurrencyConfig };
