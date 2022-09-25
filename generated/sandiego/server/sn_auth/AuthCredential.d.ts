declare class AuthCredential {
  constructor(authCredential?: any);
  /**
   * Returns the value of an AuthCredential attribute.
   * @param key Key of the attribute to return the value for. If you created an empty
   * AuthCredential object, you must use the setAttribute()
   * method to add properties to the object. If you used a credential record
   * to instantiate the AuthCredential object, pass a field name from
   * the Credential [discovery_credentials] table to access the value.
   */
  getAttribute(key: string): any;
  /**
   * Sets an attribute for an AuthCredential object.
   * @param key Name of the attribute to set. If you created an empty
   * AuthCredential object, you must use the this method to add
   * properties to the object. If you used a credential record to instantiate the
   * AuthCredential object, pass a field name from the Credential
   * [discovery_credentials] table to set the value.
   * @param value Value of the attribute.
   */
  setAttribute(key: string, value: string): any;
}
export { AuthCredential };
