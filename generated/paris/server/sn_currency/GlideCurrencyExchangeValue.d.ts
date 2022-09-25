declare class GlideCurrencyExchangeValue {
  /**
   * Returns the amount after conversion.
   */
  getAmount(): any;
  /**
   * Returns the currency type converted to.
   */
  getCurrency(): any;
  /**
   * Returns the original, pre-conversion currency type.
   */
  getOriginalCurrency(): any;
  /**
   * Returns the original, pre-conversion amount.
   */
  getOriginalValue(): any;
  /**
   * Returns the currency conversion rate used to create the GlideCurrencyExchangeValue
   * object.
   */
  getRate(): any;
  /**
   * Returns the sys_id of the record in the rate table used in the currency conversion.
   */
  getRateSysId(): any;
}
export { GlideCurrencyExchangeValue };
