declare class GlideElementCurrency2 {
  /**
   * Returns an FX Currency field display string, as entered by the user, from the associated
   * GlideRecord.
   */
  getAsEnteredDisplayValue(): any;
  /**
   * Returns the display value of an FX Currency field within the associated
   * GlideRecord.
   */
  getDisplayValue(): any;
  /**
   * Returns the reference currency value of an FX Currency field within the associated
   * GlideRecord.
   */
  getReferenceDisplayValue(): any;
  /**
   * Returns the session currency value of the associated FX Currency field within the
   * current GlideRecord.
   */
  getSessionDisplayValue(): any;
  /**
   * Sets the display value of an FX Currency field with the specified currency
   * value.
   * @param displayValue Value to set in the FX Currency field in the format &lt;currency
   * code&gt;;&lt;currency amount&gt;. You must format the &lt;currency
   * amount&gt; field in the user's locale.For example, if the user's locale
   * is USA/eng, the passed in &lt;currency amount&gt; would be 123.45.
   * If the user's local is FRA/fre, the passed in &lt;currency
   * amount&gt; would be 123,45.
   */
  setDisplayValue(displayValue: string): any;
}
export { GlideElementCurrency2 };
