declare class GlideElementDescriptor {
  /**
   * Returns the encryption type used for attachments on the element's table.
   */
  getAttachmentEncryptionType(): any;
  /**
   * Returns the element's encryption type.
   */
  getEncryptionType(): any;
  /**
   * Returns the element's internal data type.
   */
  getInternalType(): any;
  /**
   * Returns the element's label.
   */
  getLabel(): any;
  /**
   * Returns the element's length.
   */
  getLength(): any;
  /**
   * Returns the element's name.
   */
  getName(): any;
  /**
   * Returns the element's plural label.
   */
  getPlural(): any;
  /**
   * Returns true if an encrypted attachment has been added to the table.
   */
  hasAttachmentsEncrypted(): any;
  /**
   * Returns true if the element is an automatically generated or system field.
   */
  isAutoOrSysID(): any;
  /**
   * Returns true if the element is defined as a dropdown choice in its dictionary
   * definition.
   */
  isChoiceTable(): any;
  /**
   * Returns true if an element is encrypted.
   */
  isEdgeEncrypted(): any;
  /**
   * Determines whether the element is mandatory and must contain a value before the record
   * can be saved.
   */
  isMandatory(): any;
  /**
   * Returns true if the element is a virtual element.
   */
  isVirtual(): any;
}
export { GlideElementDescriptor };
