declare class ConnectionInfo {
  /**
   * Returns the value of a ConnectionInfo attribute with the specified
   * property name.
   * @param name Name of a ConnectionInfo object property.
   */
  getAttribute(name: string): any;
  /**
   * Returns the value of credential attributes for a specified connection.
   */
  getCredentialAttribute(): any;
  /**
   * Returns the connection attributes as a collection of key-value pairs.
   */
  getDataMap(): any;
  /**
   * Returns the extended attributes as a collection of key-value pairs.
   */
  getExtendedAttributes(): any;
}
export { ConnectionInfo };
