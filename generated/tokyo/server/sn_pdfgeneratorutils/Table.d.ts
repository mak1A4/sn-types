declare class Table {
  constructor(ltr: boolean, columnWidths: any[], largeTable: boolean);
  /**
   * Adds a cell element to the table.
   * @param cell Cell element to add to the table.
   */
  addCell(cell: any): any;
  /**
   * Adds a cell element with an applied style to the table.
   * @param cell Cell object to add to the table.
   * @param style Style to apply to the cell.
   */
  addCellWithStyle(cell: any, style: any): any;
  /**
   * Adds a header Cell object to the table.
   * @param cell Header cell to add to the table.
   */
  addHeaderCell(cell: any): any;
  /**
   * Adds a cell that contains an image to the table.
   * @param image Image object to add to the cell.
   */
  addImageCell(image: any): any;
  /**
   * Adds a cell that contains a paragraph to the table.
   * @param p Paragraph object to add to the cell.
   */
  addParagraphCell(p: any): any;
  /**
   * Adds a cell that contains a string to the table.
   * @param text Text to add to the cell.
   */
  addTextCell(text: string): any;
  /**
   * Indicates that all the intended content has been added to a large table.
   */
  complete(): any;
  /**
   * Prevents splitting a row across two pages, when possible.
   * @param value Flag that indicates whether to split a row across two pages, or move the entire
   * row onto the second page. However, this property does not apply when the row spans
   * more than a single page.Valid values:
   * true: If the remaining part of a page is not large enough for the row, adds
   * the entire row to a new page.
   *
   * false: If the remaining part of a page is not large enough for the row,
   * splits the row across two pages.
   *
   *
   *
   * Default: false
   */
  donotSplitRowOnPageBreak(value: boolean): any;
  /**
   * Adds additional content to a table that is already added to a document.
   */
  flush(): any;
  /**
   * Returns the default style.
   */
  getDefaultStyle(): any;
  /**
   * Returns the style applied to the table's header.
   */
  getHeaderStyle(): any;
  /**
   * Sets a border of designated width around the outer edges of the table.
   * @param width Width of the border. Unit: Points
   */
  setBorder(width: number): any;
  /**
   * Sets the table's default background color.
   * @param color Color object used as the default background color for the table.
   */
  setDefaultbackGroundColor(color: any): any;
  /**
   * Sets the default style to apply to the table.
   * @param defaultStyle Default style to apply to the table.
   */
  setDefaultStyle(defaultStyle: any): any;
  /**
   * Sets the table to a fixed position on the page.
   * @param pageNumber Number of the page to add the table to.
   * @param left Number of pixels from the left margin to add the table. Unit:
   * Points
   * @param bottom Number of pixels from the bottom margin to add the table. Unit:
   * Points
   * @param width Width of the table. Unit: Points
   */
  setFixedPosition(
    pageNumber: number,
    left: number,
    bottom: number,
    width: number,
  ): any;
  /**
   * Sets the Style object to apply to the table's header.
   * @param headerStyle Style object to apply to the table's header.
   */
  setHeaderStyle(headerStyle: any): any;
  /**
   * Sets the horizontal alignment of the table.
   * @param alignment Alignment for the table. Valid
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
   * Sets all margins around the table to the same width.
   * @param margin Value of the top, right, bottom, and left margins in points.
   */
  setMargin(margin: number): any;
  /**
   * Sets the margin at the bottom of the page.
   * @param margin Height of the bottom margin in points.
   */
  setMarginBottom(margin: number): any;
  /**
   * Sets the margin at the left side of the page.
   * @param margin Width of the left margin in points.
   */
  setMarginLeft(margin: number): any;
  /**
   * Sets the margin at the right side of the page.
   * @param margin Width of the right margin in points.
   */
  setMarginRight(margin: number): any;
  /**
   * Sets a margin at the top of the page.
   * @param margin Height of the top margin in points.
   */
  setMarginTop(margin: number): any;
  /**
   * Sets the table's total width.
   * @param width Width of the table.Unit: Points
   */
  setWidth(width: number): any;
  /**
   * Expands the table to use the entire width available on the page.
   */
  useAllAvailableWidth(): any;
}
export { Table };
