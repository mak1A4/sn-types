declare class Cell {
  constructor(rowspan: number, colspan: number);
  /**
   * Adds an image to a table cell.
   * @param image Image to add to a table cell.
   */
  addImage(image: any): any;
  /**
   * Adds text to a table cell.
   * @param paragraph Text to add to a table cell.
   */
  addParagraph(paragraph: any): any;
  /**
   * Applies a predefined style to table cells.
   * @param style Style to apply to this element.
   */
  addStyle(style: any): any;
  /**
   * Adds a table to a cell.
   * @param table Table to add to a cell.
   */
  addTable(table: any): any;
  /**
   * Gets the number of the column in which the cell is located.
   */
  getColumn(): any;
  /**
   * Gets the number of rows in which the cell is located.
   */
  getRow(): any;
  /**
   * Specifies a background color for the cell.
   * @param color Background color.
   */
  setBackGroundColor(color: any): any;
  /**
   * Sets a border for all four edges of a cell.
   * @param width Cell border width in points.
   */
  setBorder(width: number): any;
  /**
   * Sets a border for the lower limit of a cell.
   * @param width Cell border width in points.
   */
  setBorderBottom(width: number): any;
  /**
   * Sets a border for the left limit of a cell.
   * @param width Cell border width in points.
   */
  setBorderLeft(width: number): any;
  /**
   * Sets a border for the right limit of a cell.
   * @param width Cell border width in points.
   */
  setBorderRight(width: number): any;
  /**
   * Sets a border for the upper limit of a cell.
   * @param width Cell border width in points.
   */
  setBorderTop(width: number): any;
  /**
   * Sets a colored border for all four edges of a cell.
   * @param color Cell border color.
   * @param width Cell border width in points.
   */
  setColoredBorder(color: any, width: number): any;
  /**
   * Sets a colored border for the lower limit of a cell.
   * @param color Cell border color.
   * @param width Cell border width in points.
   */
  setColoredBorderBottom(color: any, width: number): any;
  /**
   * Sets a colored border for the left limit of a cell.
   * @param color Cell border color.
   * @param width Cell border width in points.
   */
  setColoredBorderLeft(color: any, width: number): any;
  /**
   * Sets a colored border for the right limit of a cell.
   * @param color Cell border color.
   * @param width Cell border width in points.
   */
  setColoredBorderRight(color: any, width: number): any;
  /**
   * Sets a colored border for the upper limit of a cell.
   * @param color Cell border color.
   * @param width Cell border width in points.
   */
  setColoredBorderTop(color: any, width: number): any;
  /**
   * Sets the height of a cell.
   * @param value Cell height in points.
   */
  setHeight(value: number): any;
  /**
   * Sets the horizontal alignment for this cell.
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
   * Sets the maximum height of a cell.
   * @param value Maximum cell height in points.
   */
  setMaxHeight(value: number): any;
  /**
   * Sets the maximum width of a cell.
   * @param value Maximum cell width in points.
   */
  setMaxWidth(value: number): any;
  /**
   * Sets the minimum height of a cell.
   * @param value Minimum cell height in points.
   */
  setMinHeight(value: number): any;
  /**
   * Sets the minimum width of a cell.
   * @param value Minimum cell width in points.
   */
  setMinWidth(value: number): any;
  /**
   * Sets the opacity of cell content, borders, and background.
   * @param opacity Float decimal value from 0 through 1, in which 0 is transparent and 1 is fully
   * opaque.Default: 0
   */
  setOpacity(opacity: number): any;
  /**
   * Sets the padding of all four sides of a cell to the same width.
   * @param padding Padding width in points as a decimal value.
   */
  setPadding(padding: number): any;
  /**
   * Sets the value of the bottom padding width of a cell.
   * @param padding Padding width in points as a decimal value.
   */
  setPaddingBottom(padding: number): any;
  /**
   * Sets the value of the left padding width of a cell.
   * @param padding Padding width in points as a decimal value.
   */
  setPaddingLeft(padding: number): any;
  /**
   * Sets the value of the right padding width of a cell.
   * @param padding Padding width in points as a decimal value.
   */
  setPaddingRight(padding: number): any;
  /**
   * Sets the value of the top padding width of a cell.
   * @param padding Padding width in points as a decimal value.
   */
  setPaddingTop(padding: number): any;
  /**
   * Sets the text alignment of this cell.
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
   * Sets the vertical alignment for this cell.
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
export { Cell };
