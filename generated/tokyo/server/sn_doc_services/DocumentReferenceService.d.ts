declare class DocumentReferenceService {
  constructor();
  /**
   * Adds a document reference to a target table record.
   * @param docSysId Sys_id of a document record in the Documents [ds_document]
   * table.
   * @param targetTable Name of the target table on which to provide a document reference.
   * @param tableSysId Sys_id of the target table record to which the document reference is to be
   * added.
   */
  addDocumentReference(
    docSysId: string,
    targetTable: string,
    tableSysId: string,
  ): any;
  /**
   * Removes a document reference from the Document References [ds_document_reference]
   * table.
   * @param docSysId Sys_id of a document record in the Documents [ds_document]
   * table.
   * @param targetTable Name of the table containing the document reference. This information is listed
   * with the document in the Document References [ds_document_reference] table.
   * @param tableSysId Sys_id of the record from which the document is referenced. You can find
   * related information listed with the document in the Document References
   * [ds_document_reference] table.
   */
  removeDocumentReference(
    docSysId: string,
    targetTable: string,
    tableSysId: string,
  ): any;
}
export { DocumentReferenceService };
