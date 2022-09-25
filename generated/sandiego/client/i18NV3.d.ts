declare class i18NV3 {
  /**
   * Formats a string containing named tokens with values from a map.
   * @param message The message to have the tokens added.
   * @param map The map of name/value pairs to replace in the message.
   */
  format(message: string, map: any): any;
  /**
   * Retrieves a translated message.
   * @param msgKey The message to be retrieved.
   * @param callback The function to be called when the message has been retrieved. The callback
   * function has one argument, a string that is the translated message.
   */
  getMessage(msgKey: string, callback: any): any;
  /**
   * Retrieves a set of messages.
   * @param msgKeys An array of keys specifying the messages to be retrieved.
   * @param callback The function to be called when the messages have been retrieved. The callback
   * function has one argument, an object containing key-value pairs, where key is the
   * requested message key, and the value is the translated string.
   */
  getMessages(msgKeys: any[], callback: any): any;
}
export { i18NV3 };
