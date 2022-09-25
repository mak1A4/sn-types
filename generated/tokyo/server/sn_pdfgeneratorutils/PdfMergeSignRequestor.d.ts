declare class PdfMergeSignRequestor {
  constructor();
  /**
   * Assigns signature size and position requirements in the PDF.
   * @param pageNumber Number of the page on which to insert the signature.
   * @param leftMargin Value in points representing the left margin area of the page at which to
   * insert the signature.
   * @param topMargin Value in points representing the top margin area of the page at which to insert
   * the signature image.
   * @param boxWidth Value in points representing width of the box to contain the signature.
   * @param boxHeight Value in points representing height of the box to contain the signature
   * image.
   * @param sysId Sys_id of the signature image in the Attachments [sys_attachment]
   * table.
   */
  addSignatureMapping(
    pageNumber: number,
    leftMargin: number,
    topMargin: number,
    boxWidth: number,
    boxHeight: number,
    sysId: string,
  ): any;
  /**
   * Creates a signature request with source and target inputs.
   * @param targetSysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table. Use this value as the target PDF on which to add a signature.
   * @param targetTable Name of the table containing the record to which the PDF
   * is attached. You can find this value in the same row as the attachment listed in the
   * Attachments [sys_attachment] table.
   * @param tableSysId Sys_id of the record to which the PDF is attached. You can
   * find this value in the same row as the attachment listed in the Attachments
   * [sys_attachment] table.
   * @param targetFileName Name of the target PDF without extension.
   */
  createRequest(
    targetSysId: string,
    targetTable: string,
    tableSysId: string,
    targetFileName: string,
  ): any;
  /**
   * Processes requests and adds the signatures.
   */
  processRequest(): any;
}
export { PdfMergeSignRequestor };
