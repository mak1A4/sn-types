declare class GlideSysAttachment {
  constructor();
  /**
   * Copies attachments from the source record to the target record.
   * @param sourceTable Name of the table with the attachments to be copied.
   * @param sourceID Source table's sys_id.
   * @param targetTable Name of the table on which to add the attachments.
   * @param targetID Target table's sys_id.
   */
  copy(
    sourceTable: string,
    sourceID: string,
    targetTable: string,
    targetID: string,
  ): any;
  /**
   * Deletes the specified attachment.
   * @param attachmentID Attachment's sys_id.
   */
  deleteAttachment(attachmentID: string): any;
  /**
   * Returns a GlideRecord containing the matching attachment metadata such as name, type,
   * or size.
   * @param tableName Name of the table to which the attachment belongs; for example,
   * incident.
   * @param sys_id The sys_id of record to which the attachment belongs.
   */
  getAttachments(tableName: string, sys_id: string): any;
  /**
   * Returns the attachment content as a string.
   * @param sysAttachment Attachment record.
   */
  getContent(sysAttachment: any): any;
  /**
   * Returns the attachment content as a string with base64 encoding.
   * @param sysAttachment Attachment record.
   */
  getContentBase64(sysAttachment: any): any;
  /**
   * Returns a GlideScriptableInputStream object given the sys_id of an
   * attachment.
   * @param sysID Attachment sys_id.
   */
  getContentStream(sysID: string): any;
  /**
   * Attaches a specified attachment to the specified record.
   * @param record Record to which to attach the attachment.
   * @param fileName Attachment file name.
   * @param contentType Attachment content type.
   * @param content Attachment content.
   */
  write(
    record: any,
    fileName: string,
    contentType: string,
    content: string,
  ): any;
  /**
   * Inserts an attachment for the specified record using base64 encoded
   * content.
   * @param now_GR Record to which the attachment is to be attached.
   * @param fileName Attachment's file name.
   * @param contentType Attachment's content type.
   * @param content Attachment content in base64 format.
   */
  writeBase64(
    now_GR: any,
    fileName: string,
    contentType: string,
    content: string,
  ): any;
  /**
   * Inserts an attachment using the input stream.
   * @param now_GR Record to which the attachment is to be attached.
   * @param fileName Attachment's file name.
   * @param contentType Attachment's content type.
   * @param content Attachment content.
   */
  writeContentStream(
    now_GR: any,
    fileName: string,
    contentType: string,
    content: any,
  ): any;
}
export { GlideSysAttachment };
