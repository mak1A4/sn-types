declare class DocumentVersionService {
  constructor();
  /**
   * Creates a document version record in the Versions [ds_document_version]
   * table.
   * @param docVersion One or more properties representing fields of a document version.
   */
  createDocumentVersion(docVersion: any): any;
  /**
   * Deletes a document version.
   * @param docVersionSysId Sys_id of a document version in the Versions [ds_document_version]
   * table.
   */
  deleteDocumentVersion(docVersionSysId: string): any;
}
export { DocumentVersionService };
