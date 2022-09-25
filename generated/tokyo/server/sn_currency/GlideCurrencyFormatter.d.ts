declare class GlideCurrencyFormatter {
  constructor(formatString?: string);
  /**
   * Formats a specified currency value using the specified currency code.
   * @param value Currency amount to format. The amount can only contain a decimal point to
   * denote the fractional amount, commas are not supported. Valid values: 123.45 or
   * 2436.23
   * Invalid values 123,45 or 2,134.56
   * @param currencyCode Three-letter ISO currency code to use when formatting the currency.
   */
  format(value: string, currencyCode: string): any;
  /**
   * Sets the default language and country, which constitutes the locale, for the currency
   * formatter.
   * @param language Two-letter ISO 639 language code, such as en, sp, and fr.
   * @param country Two-letter ISO 3166 country code, such as US, ES, and FR.
   */
  setLocale(language: string, country: string): any;
  /**
   * Sets the maximum number of digits to the right of the decimal point/decimal comma to
   * return.
   * @param maxFractionDigits Maximum number of fraction digits to return. If this value is set to something
   * less than the minFractionDigits value, it is overridden by
   * minFractionDigits.
   */
  setMaxFractionDigits(maxFractionDigits: number): any;
  /**
   * Sets the minimum number of fraction digits (right of the decimal point/decimal comma)
   * to return.
   * @param minFractionDigits Minimum number of fraction digits to return.
   */
  setMinFractionDigits(minFractionDigits: number): any;
}
export { GlideCurrencyFormatter };
