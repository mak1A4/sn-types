declare class GlideCurrencyValue {
  /**
   * Returns the currency amount originally passed into the associated
   * GlideCurrencyParser.parse() call.
   */
  getAmount(): any;
  /**
   * Returns the currency code used to parse the currency in the associated
   * GlideCurrencyParser.parse() call.
   */
  getCurrencyCode(): any;
}
export { GlideCurrencyValue };
