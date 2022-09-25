declare class GlideCurrencyConverter {
  constructor();
  constructor(from: string, to: string);
  /**
   * Executes the currency converter.
   */
  convert(): any;
  /**
   * Sets the amount of currency to convert.
   * @param amount Currency amount to convert. This value must be unformatted except for a decimal
   * point to denote fractional currency. For example, 1234.56 is valid, 1,234.56 is
   * invalid.
   */
  setAmount(amount: string): any;
  /**
   * Sets the currency conversion date and time.
   * @param date Date/time for which to calculate the currency conversion. This value determines
   * the rate that is used in the conversion.
   */
  setDateTime(date: any): any;
  /**
   * Sets the country code of the source currency.
   * @param from Three-letter ISO 3166 country code of the source currency.
   */
  setFromCurrency(from: string): any;
  /**
   * Defines the rate table to use in the currency conversion.
   * @param rateTable Name of the rate table to use in the currency conversion.
   */
  setRateTable(rateTable: string): any;
  /**
   * Sets the country code of the destination currency.
   * @param to Three-letter ISO 3166 country code of the source currency.
   */
  setToCurrency(to: string): any;
}
export { GlideCurrencyConverter };
