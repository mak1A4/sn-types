declare class SystemDocumentListEntry {
  constructor(listSysId: string);
  /**
   * Sets the Description field of a document list entry record.
   * @param description Description of the document list entry.
   */
  description(description: string): any;
  /**
   * Specifies the document template to add to a document list.
   * @param docSysId Sys_id of a document record in the Documents [ds_document]
   * table. The document specified must be a template and have a version.
   */
  document(docSysId: string): any;
  /**
   * Specifies the document list in which to add a document.
   * @param listSysId Sys_id of a document list record in the Document Lists [ds_document_lists]
   * table.
   */
  documentList(listSysId: string): any;
}
export { SystemDocumentListEntry };
