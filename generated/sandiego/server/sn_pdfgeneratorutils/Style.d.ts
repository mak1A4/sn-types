declare class Style {
  constructor();
  /**
   * Specifies a background color of an element.
   * @param color Background color.
   */
  setBackgroundColor(color: any): any;
  /**
   * Sets a style to bold font.
   */
  setBold(): any;
  /**
   * Sets the style border on all four sides of an element.
   * @param width Style border width in points.
   */
  setBorder(width: number): any;
  /**
   * Sets the style border to the bottom of an element.
   * @param width Style border width in points.
   */
  setBorderBottom(width: number): any;
  /**
   * Sets the style border on the left side of an element.
   * @param width Style border width in points.
   */
  setBorderLeft(width: number): any;
  /**
   * Sets the style border on the right side of an element.
   * @param width Style border width in points.
   */
  setBorderRight(width: number): any;
  /**
   * Sets the style border to the top of an element.
   * @param width Style border width in points.
   */
  setBorderTop(width: number): any;
  /**
   * Sets style border with color on all four sides of an element.
   * @param width Style border width in points.
   * @param color Style border color.
   */
  setColoredBorder(width: number, color: any): any;
  /**
   * Sets style border with color to the bottom side of an element.
   * @param width Style border width in points.
   * @param color Style border color.
   */
  setColoredBorderBottom(width: number, color: any): any;
  /**
   * Sets style border with color on the left side of an element.
   * @param width Style border width in points.
   * @param color Style border color.
   */
  setColoredBorderLeft(width: number, color: any): any;
  /**
   * Sets style border with color on the right side of an element.
   * @param width Style border width in points.
   * @param color Style border color.
   */
  setColoredBorderRight(width: number, color: any): any;
  /**
   * Sets style border with color to the top side of an element.
   * @param width Style border width in points.
   * @param color Style border color.
   */
  setColoredBorderTop(width: number, color: any): any;
  /**
   * Sets a font color.
   * @param color Font color.
   */
  setFontColor(color: any): any;
  /**
   * Sets a style font size.
   * @param fontSize Font size in points.
   */
  setFontSize(fontSize: number): any;
  /**
   * Sets the horizontal alignment for a style.
   * @param alignment Horizontal alignment setting.Valid
   * values:
   * center: Align contents to the center.
   *
   * left: Align contents to the left.
   *
   * right: Align contents to the right.
   *
   *
   *
   */
  setHorizontalAlignment(alignment: string): any;
  /**
   * Sets a style to italic font.
   */
  setItalic(): any;
  /**
   * Sets the padding of all four sides of an element to the same width.
   * @param padding Padding width in points as a decimal value.
   */
  setPadding(padding: number): any;
  /**
   * Sets the value of the bottom padding width of an element.
   * @param padding Padding width in points as a decimal value.
   */
  setPaddingBottom(padding: number): any;
  /**
   * Sets the value of the left padding width of an element.
   * @param padding Padding width in points as a decimal value.
   */
  setPaddingLeft(padding: number): any;
  /**
   * Sets the value of the right padding width of a style.
   * @param padding Padding width in points as a decimal value.
   */
  setPaddingRight(padding: number): any;
  /**
   * Sets the value of the top padding width of an element.
   * @param padding Padding width in points as a decimal value.
   */
  setPaddingTop(padding: number): any;
  /**
   * Sets the text alignment for a style.
   * @param alignment Text alignment position.Valid values:
   * text-center: Aligns text to the center.
   *
   * text-justified: Modifies the space between characters to completely fill
   * text between the left and right sides. The final line is left-aligned.
   *
   * text-justified-all: Justifies text alignment including the final line.
   *
   * text-left: Align text to the left.
   *
   * text-right: Align text to the right.
   *
   *
   *
   */
  setTextAlignment(alignment: string): any;
  /**
   * Sets the vertical alignment for this element.
   * @param alignment Vertical alignment setting.Valid values:
   * bottom: Aligns contents to the bottom.
   *
   * mid: Aligns contents to the center.
   *
   * top: Aligns contents to the top.
   *
   *
   *
   */
  setVerticalAlignment(alignment: string): any;
}
export { Style };
