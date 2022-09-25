declare class GlideElementCurrency2 {
  /**
   * Returns the currency value as entered by the user.
   */
  getAsEnteredDisplayValue(): any;
  /**
   * Returns the formatted currency string.
   */
  getDisplayValue(): any;
  /**
   * Returns the reference currency value.
   */
  getReferenceDisplayValue(): any;
  /**
   * Returns the currency value converted to the session currency.
   */
  getSessionDisplayValue(): any;
  /**
   * Sets the display value of a Currency2 field by parsing the displayValue
   * string.
   * @param displayValue The display value in the format "&lt;currency type&gt;;&lt;currency
   * amount&gt;" where the amount is formatted in the user's locale.
   */
  setDisplayValue(displayValue: string): any;
}
export { GlideElementCurrency2 };
