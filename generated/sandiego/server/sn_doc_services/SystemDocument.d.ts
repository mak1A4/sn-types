declare class SystemDocument {
  constructor(docName: string);
  /**
   * Sets the Audience field of a document record to specify external or internal
   * availability. Represents the Audience field in a Document Management
   * form.
   * @param audience String representing the intended audience of the document.Possible
   * values:
   * external
   *
   * internal
   *
   *
   * Default: internal
   */
  audience(audience: string): any;
  /**
   * Sets the Classification field of a document record to identify the level of information
   * sensitivity. Represents the Classification field in a Document Management
   * form.
   * @param classification Classification of the document.Possible values:
   * confidential
   *
   * public
   *
   * restricted
   *
   *
   * Default: public
   */
  classification(classification: string): any;
  /**
   * Sets the template from which to generate a document. When the document is
   * generated, the specified template is listed in the Created From Template field in the Documents
   * [ds_document_list] table.
   * @param docTemplate Sys_id of a document listed in the Documents [ds_document_list] table. The
   * document must have the Template checkbox selected (true). See also DocumentVersionService API.
   */
  createdFromTemplate(docTemplate: string): any;
  /**
   * Sets the Department field of a document record.
   * @param docDept Sys_id of a department listed in the Departments [cmn_department]
   * table.
   */
  department(docDept: string): any;
  /**
   * Sets the Description field of a document record.
   * @param description Description of the document.
   */
  description(description: string): any;
  /**
   * Sets the Name field of a document record.
   * @param docName Name of the document.
   */
  name(docName: string): any;
  /**
   * Sets the Owner field of a document record.
   * @param owner Sys_id of a user listed in the Users [sys_user] table. Role required:
   * admin
   * Default: Current user
   */
  owner(owner: string): any;
  /**
   * Sets the Reviewers field of a document record.
   * @param reviewers List of one or more document reviewers by sys_id. The reviewer must be a user
   * listed in the Users [sys_user] table.
   */
  reviewers(reviewers: string): any;
  /**
   * Sets the State field of a document record.
   * @param state State of the document representing where the document is in the
   * workflow.Valid values:
   * draft
   *
   * submit
   *
   * review
   *
   * complete
   *
   *
   * Default: draft
   */
  state(state: string): any;
  /**
   * Specifies whether a document record is a template.
   * @param template Flag that specifies whether a document record is a template.
   *
   * Valid values:
   * true: The default version of this document is a template.
   *
   * false: This document is not a template.
   *
   *
   *
   *
   * Default: false
   */
  template(template: boolean): any;
  /**
   * Sets the Type field of a document record.
   * @param docType Type of document.Valid values:
   * contract
   *
   * guideline
   *
   * policy
   *
   * procedure
   *
   *
   * Default: None
   */
  type(docType: string): any;
}
export { SystemDocument };
