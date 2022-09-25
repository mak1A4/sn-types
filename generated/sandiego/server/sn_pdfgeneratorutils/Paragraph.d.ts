declare class Paragraph {
  constructor(text: string);
  /**
   * Adds an empty line after a paragraph in a document.
   */
  addNewLine(): any;
  /**
   * Adds a paragraph. You can use this method to create a block of paragraphs with
   * automatic line breaks.
   * @param paragraph Paragraph object.
   */
  addParagraph(paragraph: any): any;
  /**
   * Adds a string of text to a paragraph. This method does not automatically insert a space
   * preceding the content.
   * @param content Information to include in a paragraph.
   */
  addString(content: string): any;
  /**
   * Applies a predefined style to paragraph text.
   * @param style Style to apply to this element.
   */
  addStyle(style: any): any;
  /**
   * Sets a paragraph element to a fixed position on the page.
   * @param left Indentation from the left side of the PDF page in points.
   * @param bottom Position from the bottom of the PDF page in points.
   * @param width Width of the paragraph element in points. This value determines the length at
   * which the line breaks.
   */
  setFixedPosition(left: number, bottom: number, width: number): any;
  /**
   * Sets each paragraph margin.
   * @param margin Value of the top, right, bottom, and left margins in points.
   */
  setMargin(margin: number): any;
  /**
   * Sets the bottom margin of a paragraph.
   * @param margin Height of the bottom margin in points.
   */
  setMarginBottom(margin: number): any;
  /**
   * Sets the left margin of a paragraph.
   * @param leftMargin Width of the left margin in points.
   */
  setMarginLeft(leftMargin: number): any;
  /**
   * Sets the right margin of a paragraph.
   * @param margin Width of the right margin in points.
   */
  setMarginRight(margin: number): any;
  /**
   * Sets a size for each paragraph margin.
   * @param topMargin Height of the top margin in points.
   * @param rightMargin Width of the right margin in points.
   * @param bottomMargin Height of the bottom margin in points.
   * @param leftMargin Width of the left margin in points.
   */
  setMargins(
    topMargin: number,
    rightMargin: number,
    bottomMargin: number,
    leftMargin: number,
  ): any;
  /**
   * Sets the top margin of a paragraph.
   * @param margin Height of the top margin in points.
   */
  setMarginTop(margin: number): any;
  /**
   * Sets the text alignment of this paragraph.
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
}
export { Paragraph };
