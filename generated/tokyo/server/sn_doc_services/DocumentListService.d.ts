declare class DocumentListService {
  constructor();
  /**
   * Creates a document list in the Document Lists [ds_document_lists] table.
   * @param doc One or more properties representing fields of a new record. The name property
   * is required and can be set using the SystemDocumentList
   * constructor or name() method.
   */
  createDocumentList(doc: any): any;
  /**
   * Creates documents from a list of document templates.
   * @param listSysId Sys_id of a document list record in the Document Lists [ds_document_lists]
   * table.
   * @param tableName Name of the table containing the record on which add a list of document
   * template references.
   * @param tableSysId Sys_id
   * of the record containing the content from which to add a list of document template
   * references.
   */
  createDocumentsFromList(
    listSysId: string,
    tableName: string,
    tableSysId: string,
  ): any;
  /**
   * Removes a document record from the Document Lists [ds_document_lists] table.
   * @param listSysId Sys_id of a document list record in the Document Lists [ds_document_lists]
   * table.
   */
  deleteDocumentList(listSysId: string): any;
  /**
   * Updates the field values of an existing document list.
   * @param listSysId Sys_id of a document list record in the Document Lists [ds_document_lists]
   * table.
   * @param doc One or more properties representing document list fields to be updated.
   */
  updateDocumentList(listSysId: string, doc: any): any;
}
export { DocumentListService };
