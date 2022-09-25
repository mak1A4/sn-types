declare class DocumentListEntryService {
  constructor();
  /**
   * Adds a document template entry to a document list.
   * @param entry One or more properties representing fields of a document list entry
   * object.
   */
  createDocumentListEntry(entry: any): any;
  /**
   * Removes a document list entry from the Document List Entries [ds_document_list_entry]
   * table.
   * @param listEntryId Sys_id of a document list record in the Document List Entries
   * [ds_document_list_entry] table.
   */
  deleteDocumentListEntry(listEntryId: string): any;
  /**
   * Updates the field values of an existing document list entry.
   * @param listEntryId Sys_id of a document list record in the Document List Entries
   * [ds_document_list_entry] table.
   * @param entry One or more properties representing fields of a document list entry
   * object.
   */
  updateDocumentListEntry(listEntryId: string, entry: any): any;
}
export { DocumentListEntryService };
