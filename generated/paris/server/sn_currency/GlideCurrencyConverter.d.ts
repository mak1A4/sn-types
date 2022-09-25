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
   * Sets the currency type to convert from.
   * @param from Currency to convert from. Use the three-letter ISO currency code of the
   * currency.
   */
  setFromCurrency(from: string): any;
  /**
   * Defines the rate table to be used in currency conversions.
   * @param rateTable The rate table used in currency conversons, which must extend
   * fx_conversion_rate. If the value is undefined, fx_system_rate is used.
   */
  setRateTable(rateTable: string): any;
  /**
   * Sets the currency type to convert to.
   * @param to Currency to convert to. Use the three-letter ISO currency code of the
   * currency.
   */
  setToCurrency(to: string): any;
}
export { GlideCurrencyConverter };
