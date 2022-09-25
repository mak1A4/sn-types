declare class JSONStreamingBuilder {
  constructor();
  /**
   * Returns a JSONStreamingAPI
   * object.
   */
  build(): any;
  /**
   * Sets a
   * time when the attachment expires. Must also call the
   * withAttachment() method. If you do not call this
   * method, the attachment expires two hours from the time the attachment is created.
   * @param expiresAt Object that is set when the attachment expires.
   *
   * Minimum value: 7200 seconds, or two hours, from the time the attachment is
   * created. Default.
   *
   * Maximum value: 172800 seconds, or 48 hours, from the time the attachment is
   * created.
   *
   *
   *
   */
  expiresAt(expiresAt: any): any;
  /**
   * Creates the JSON object as a streaming
   * attachment and stores it in the Streaming Attachments
   * [streaming_attachment] table. If you do not call this method, the API
   * creates the payload as a JSON string.
   */
  withAttachment(): any;
}
export { JSONStreamingBuilder };
