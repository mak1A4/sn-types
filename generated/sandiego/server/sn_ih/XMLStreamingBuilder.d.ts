declare class XMLStreamingBuilder {
  constructor();
  /**
   * Returns an XMLStreamingAPI object.
   */
  build(): any;
  /**
   * Sets a
   * time when the attachment expires. Must also call the
   * withAttachment() method.
   * @param expiresAt Object that is set when the attachment expires.
   *
   * Minimum value: 7200 seconds, or two hours, from the time the attachment is
   * created. This is the default value if you don't call the
   * expiresAt() method.
   *
   * Maximum value: 172800 seconds, or 48 hours, from the time the attachment is
   * created.
   *
   *
   *
   */
  expiresAt(expiresAt: any): any;
  /**
   * Creates an XML document as an attachment and stores it in the Streaming Attachments
   * [streaming_attachment] table. If you don't call this method, the API creates the XML document as
   * a string.
   */
  withAttachment(): any;
}
export { XMLStreamingBuilder };
