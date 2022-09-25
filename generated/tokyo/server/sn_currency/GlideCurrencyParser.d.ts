declare class GlideCurrencyParser {
  constructor();
  /**
   * Parses a specified string into a GlideCurrencyValue object to obtain locale-based
   * currency formatting.
   * @param value String to parse. You can prepend this string with the ISO currency code to use
   * when parsing the string (semicolon separated). If the currency code is not set prior
   * to calling the parse() method, it defaults to the current session
   * currency code.This method supports both decimal point and decimal comma
   * notation.
   * For example: "123.45", "USD;123.45", "123,45",
   * "EUR;123,45"
   */
  parse(value: string): any;
  /**
   * Sets the currency code for the associated GlideCurrencyParser object.
   * @param currencyCode Three-letter ISO currency code to use as the default in the associated
   * GlideCurrencyParser object.
   */
  setDefaultCurrencyCode(currencyCode: string): any;
  /**
   * Sets the default language and country codes, which constitute the locale, on the
   * associated GlideCurrencyParser object.
   * @param language Three-letter ISO 639 language code, such as eng, spa, and fre.
   * @param country Three-letter ISO 3166 country code, such as USA, ESP, and FRA.
   */
  setLocale(language: string, country: string): any;
}
export { GlideCurrencyParser };
