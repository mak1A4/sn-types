declare class SystemDocumentVersion {
  constructor(docSysId: string);
  /**
   * Specifies the document record for this version.
   * @param docSysId Sys_id of a document record in the Documents [ds_document]
   * table.
   */
  document(docSysId: string): any;
  /**
   * Sets the Type field of a document version.
   * @param docType Document source type.Valid values:
   * url
   *
   * attachment
   *
   *
   * Default: attachment
   * Note: An attachment can currently only be added in the
   * Document Versions [ds_document_version] table UI and not with the
   * API.
   */
  type(docType: string): any;
  /**
   * Sets the URL of a document version.
   * @param url URL of the source document for this version.
   */
  url(url: string): any;
  /**
   * Sets the number of a document version.
   * @param versionNumber Version number for this document.
   */
  versionNumber(versionNumber: number): any;
}
export { SystemDocumentVersion };
