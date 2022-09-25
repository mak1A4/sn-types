declare class DocumentService {
  constructor();
  /**
   * Creates a document record in the Documents [ds_document] table.
   * @param doc One or more properties representing fields of a new record. The name property
   * is required and can be set using the SystemDocument constructor
   * or name() method.
   */
  createDocument(doc: any): any;
  /**
   * Removes a document record from the Documents [ds_document] table.
   * @param docSysId Sys_id of a document record in the Documents [ds_document]
   * table.
   */
  deleteDocument(docSysId: string): any;
  /**
   * Updates the field values of an existing document record.
   * @param docSysId Sys_id of a document record in the Documents [ds_document]
   * table.
   * @param doc One or more properties representing document fields to be updated.
   */
  updateDocument(docSysId: string, doc: any): any;
}
export { DocumentService };
