declare class PDFGenerationAPI {
  constructor();
  /**
   * Converts an HTML string to a PDF document.
   * @param html HTML to convert to a PDF document.
   * @param targetTable Name of the table on which to attach the
   * converted PDF.
   * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
   * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
   * [sys_attachment] table.
   * @param fontFamilySysId Optional. Sys_id of the font family to use for the PDF. This sys_id is from the
   * PDF Generation Font Family [sys_pdf_generation_font_family] table.Default:
   * none
   * @param documentConfiguration Optional. Object containing a table of contents configuration and a page number
   * configuration.{​
   * "toc_config" : "String",​
   * "page_number_config": "String"​
   * }​
   */
  convertToPDF(
    html: string,
    targetTable: string,
    targetTableSysId: string,
    pdfName: string,
    fontFamilySysId?: string,
    documentConfiguration?: any,
  ): any;
  /**
   * Converts an HTML string into a PDF with header and footer content.
   * @param html HTML to convert to a PDF document.
   * @param targetTable Name of the table on which to attach the
   * converted PDF.
   * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
   * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
   * [sys_attachment] table.
   * @param headerFooterInfo Defines PDF header and footer
   * details.{
   * "FooterImageAlignment": "String",
   * "FooterImageAttachmentId": "String",
   * "FooterImageHeight": "String",
   * "FooterText": "String",
   * "FooterTextAlignment": "String",
   * "GeneratePageNumber": "String",
   * "HeaderImageAlignment": "String",
   * "HeaderImageAttachmentId": "String",
   * "HeaderImageHeight": "String",
   * "LeftOrRightMargin": "String",
   * "PageOrientation": "String",
   * "PageSize": "String",
   * "TopOrBottomMargin": "String"
   * }
   * @param fontFamilySysId Optional. Sys_id of the font family to use for the PDF. This sys_id is from the
   * PDF Generation Font Family [sys_pdf_generation_font_family] table.Default:
   * none
   * @param documentConfiguration Optional. Object containing a table of contents configuration and a page number
   * configuration.{​
   * "toc_config" : "String",​
   * "page_number_config": "String"​
   * }​
   */
  convertToPDFWithHeaderFooter(
    html: string,
    targetTable: string,
    targetTableSysId: string,
    pdfName: string,
    headerFooterInfo: any,
    fontFamilySysId?: string,
    documentConfiguration?: any,
  ): any;
  /**
   * Fills
   * fields in an editable PDF and attaches it to the provided record.
   * @param fieldsMap Optional. Key value map by PDF field name and value to fill. Use the
   * getDocumentFields() method to get the list of available
   * fields.
   * @param sysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table.
   * @param tableName Name of the table containing the record to which the PDF
   * is attached. You can find this value in the same row as the attachment listed in the
   * Attachments [sys_attachment] table.
   * @param tableSysId Sys_id of the record to which the PDF is attached. You can
   * find this value in the same row as the attachment listed in the Attachments
   * [sys_attachment] table.
   * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
   * [sys_attachment] table.
   */
  fillDocumentFields(
    fieldsMap: any | undefined,
    sysId: string,
    tableName: string,
    tableSysId: string,
    pdfName: string,
  ): any;
  /**
   * Fills fields in an editable PDF, flattens the data
   * fields, and attaches it to the provided record.
   * @param fieldsMap Optional. Key value map by PDF field name and value to fill. Use the
   * getDocumentFields() method to get the list of available
   * fields.
   * @param sysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table.
   * @param tableName Name of the table containing the record to which the PDF
   * is attached. You can find this value in the same row as the attachment listed in the
   * Attachments [sys_attachment] table.
   * @param tableSysId Sys_id of the record to which the PDF is attached. You can
   * find this value in the same row as the attachment listed in the Attachments
   * [sys_attachment] table.
   * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
   * [sys_attachment] table.
   * @param flatten Optional. Flattening fields enable locking the fields so that other users cannot
   * change the information. Specify the key as "FlattenType" and provide a flattening option as
   * a string.Valid values:
   * donot_flatten - Do not flatten any fields.
   *
   * partially_flatten - Flatten only the fields which are modified.
   *
   * fully_flatten - Flattens all the fields.
   *
   *
   *
   * Default:
   * fully_flatten
   * {
   * "FlattenType": "String"
   * }
   */
  fillDocumentFieldsAndFlatten(
    fieldsMap: any | undefined,
    sysId: string,
    tableName: string,
    tableSysId: string,
    pdfName: string,
    flatten?: any,
  ): any;
  /**
   * Fills fields in an editable PDF, adds signature
   * image, flattens the data fields, and attaches it to the provided record.
   * @param fieldsMap Optional. Key value map by PDF field name and value to fill. Use the
   * getDocumentFields() method to get the list of available
   * fields.
   * @param sysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table.
   * @param tableName Name of the table containing the record to which the PDF
   * is attached. You can find this value in the same row as the attachment listed in the
   * Attachments [sys_attachment] table.
   * @param tableSysId Sys_id of the record to which the PDF is attached. You can
   * find this value in the same row as the attachment listed in the Attachments
   * [sys_attachment] table.
   * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
   * [sys_attachment] table.
   * @param requestor Signature input returned from pdfMergeSignRequestor.
   * @param flatten Optional. Flattening fields enable locking the fields so that other users cannot
   * change the information. Specify the key as "FlattenType" and provide a flattening option as
   * a string.Valid values:
   * donot_flatten - Do not flatten any fields.
   *
   * partially_flatten - Flatten only the fields which are modified.
   *
   * fully_flatten - Flattens all the fields.
   *
   *
   *
   * Default:
   * fully_flatten
   * {
   * "FlattenType": "String"
   * }
   */
  fillFieldsAndMergeSignature(
    fieldsMap: any | undefined,
    sysId: string,
    tableName: string,
    tableSysId: string,
    pdfName: string,
    requestor: any,
    flatten?: any,
  ): any;
  /**
   * Gets a list of editable fields in a PDF document. Enables listing editable PDF fields
   * without manually opening the file to check.
   * @param sysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table.
   */
  getDocumentFields(sysId: string): any;
  /**
   * Gets the field type of set of editable fields from a PDF document.
   * @param sysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table.
   */
  getDocumentFieldsType(sysId: string): any;
  /**
   * Fills fields in an editable PDF, creates an image, and converts it to a
   * Base64-encoded PDF.
   * @param fieldsMap Optional. Key value map by PDF field name and value to fill. Use the
   * getDocumentFields() method to get the list of available
   * fields.
   * @param sysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table.
   * @param requestor Signature input returned from pdfMergeSignRequestor.
   * @param flatten Optional. Flattening fields enable locking the fields so that other users cannot
   * change the information. Specify the key as "FlattenType" and provide a flattening option as
   * a string.Valid values:
   * donot_flatten - Do not flatten any fields.
   *
   * partially_flatten - Flatten only the fields which are modified.
   *
   * fully_flatten - Flattens all the fields.
   *
   *
   *
   * Default:
   * fully_flatten
   * {
   * "FlattenType": "String"
   * }
   */
  getFilledDocumentWithSignatureAsBase64(
    fieldsMap: any | undefined,
    sysId: string,
    requestor: any,
    flatten?: any,
  ): any;
  /**
   * Gets the page size of a PDF document.
   * @param sysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table.
   */
  getPdfPageSizes(sysId: string): any;
  /**
   * Checks if the PDF document contains editable fields.
   * @param sysId Sys_id of a
   * PDF in the Attachments [sys_attachment] table.
   */
  isDocumentFillable(sysId: string): any;
}
export { PDFGenerationAPI };
