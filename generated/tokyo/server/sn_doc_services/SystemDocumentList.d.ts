declare class SystemDocumentList {
  constructor(docListName: string);
  /**
   * Sets the Description field of a new document list record.
   * @param description Description of the document list.
   */
  description(description: string): any;
  /**
   * Sets the Name field of a document list record.
   * @param docListName Name of the document list.
   */
  name(docListName: string): any;
}
export { SystemDocumentList };
