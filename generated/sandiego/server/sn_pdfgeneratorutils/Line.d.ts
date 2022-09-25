declare class Line {
  constructor();
  /**
   * Places a line on a document page.
   * @param Document Name of the document object.
   * @param pageNo Page number on which you want to place the line.
   * @param xPos X-coordinate area of the page on which to place the line.
   * @param yPos Y-coordinate area of the page on which to place the line.
   * @param width Width area of the page in which you want to draw the line. Values are in
   * points.
   * @param lineWidth Optional. Value of line thickness in points.Default: 1
   */
  drawLine(
    Document: any,
    pageNo: number,
    xPos: number,
    yPos: number,
    width: number,
    lineWidth?: number,
  ): any;
  /**
   * Sets the color of a line.
   * @param color Line color.
   */
  setColor(color: any): any;
}
export { Line };
