declare class Document {
  constructor(pageSize: any);
  /**
   * Adds a page to the document by terminating the
   * current page and creating a new one.
   */
  addAndStartNewPage(): any;
  /**
   * Adds a name to the author field in PDF document properties.
   * @param author Name of the document's author.
   */
  addAuthor(author: string): any;
  /**
   * Adds an image to a document.
   * @param image Image to add to a document.
   */
  addImage(image: any): any;
  /**
   * Adds a new empty line to the document.
   */
  addNewLine(): any;
  /**
   * Adds a new blank page to the
   * document. Use to force a page break to start a new chapter or section in your
   * document.
   */
  addNewPage(): any;
  /**
   * Adds a new page at the specified index of the
   * document. For example, setting the index to 6 inserts a page six or inserts the page at
   * the position of the existing page six in a document. The original page six becomes page
   * seven.
   * @param index Position at which to insert a new page.
   */
  addNewPageAtIndex(index: number): any;
  /**
   * Adds a paragraph to a document.
   * @param paragraph Block of text provided as a paragraph object.
   */
  addParagraph(paragraph: any): any;
  /**
   * Adds a table to a document.
   * @param table Table to be inserted into the document.
   */
  addTable(table: any): any;
  /**
   * Closes a document.
   */
  close(): any;
  /**
   * Creates a document with the specified page size.
   * @param pageSize Document page size.
   */
  createDocument(pageSize: any): any;
  /**
   * Gets the number of pages in the document.
   */
  getPageCount(): any;
  /**
   * Gets the default page size of the document.
   */
  getPageSize(): any;
  /**
   * Indicates whether a document is closed or open.
   */
  isClosed(): any;
  /**
   * Attaches the document file to the specified target table.
   * @param tableName Name of the table on which to attach the document.
   * @param tableSysId Sys_id of the record on which to attach the document.
   * @param fileName Name of the document to attach.
   */
  saveAsAttachment(
    tableName: string,
    tableSysId: string,
    fileName: string,
  ): any;
  /**
   * Sets the base text flow direction to reorder from based on character
   * recognition
   * @param direction Text flow direction.Valid values:
   * LEFT_TO_RIGHT: Order text flow left to right. The text direction is only
   * reordered if left-to-right language characters are detected.
   *
   * RIGHT_TO_LEFT: Order text flow right to left. The text direction is only
   * reordered if right-to-left language characters are detected.
   *
   *
   *
   * Default: LEFT_TO_RIGHT
   */
  setBaseDirection(direction: string): any;
  /**
   * Sets the page margin sizes in the document.
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
}
export { Document };
