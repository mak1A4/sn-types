declare class GlideEmailOutbound {
  constructor();
  /**
   * Adds the address to either the cc or bcc list.
   * @param type Either cc or bcc, determines the list to which the address is added.
   * @param address The recipient's email address.
   */
  addAddress(type: string, address: string): any;
  /**
   * Adds the address to either the cc or bcc list.
   * @param type Either cc or bcc, determines the list to which the address is added.
   * @param address The recipient's email address.
   * @param displayName The name to be shown instead of the email address.
   */
  addAddress(type: string, address: string, displayName: string): any;
  /**
   * Returns the email's subject line.
   */
  getSubject(): any;
  /**
   * Returns the email's watermark.
   */
  getWatermark(): any;
  /**
   * Sets the body of the email.
   * @param bodyText The body of the email.
   */
  setBody(bodyText: string): any;
  /**
   * Sets the sender's address.
   * @param address The sender's email address.
   */
  setFrom(address: string): any;
  /**
   * Sets the reply to address.
   * @param address The reply to email address.
   */
  setReplyTo(address: string): any;
  /**
   * Sets the email's subject line.
   * @param subject Text for the subject line.
   */
  setSubject(subject: string): any;
}
export { GlideEmailOutbound };
