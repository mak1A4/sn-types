declare class GlideCurrencyExchangeValue {
  /**
   * Returns the currency amount after the conversion.
   */
  getAmount(): any;
  /**
   * Returns the converted to currency type.
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
   * Returns the exchange rate used during the conversion.
   */
  getRate(): any;
  /**
   * Returns the sys_id of the record in the rate table used in the currency conversion.
   */
  getRateSysId(): any;
}
export { GlideCurrencyExchangeValue };
