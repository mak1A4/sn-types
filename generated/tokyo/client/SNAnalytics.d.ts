declare class SNAnalytics {
  /**
   * Stores the specified event information in the analytics data store.
   * @param payload Event to store in the analytics data store.Data type:
   * Object
   * "payload": {
   * "data": [Array],
   * "name": String
   * }
   */
  addEvent(payload: any): any;
  /**
   * Appends the specified string to the specified user string property in the analytics
   * data store.
   * @param name Name of the property to append the specified string to. Special characters are
   * not allowed.Note: The associated property must be a string or
   * string[].
   * Maximum length: The length of the property name and property
   * value cannot exceed 300 bytes.
   * @param value Value to append to the string property.The following values are automatically converted by this
   * method:
   * String value of "yes": Boolean value of "true"
   *
   * String value of "no": Boolean value of "false
   *
   *
   *
   */
  appendToUserProperty(name: string, value: string): any;
  /**
   * Increments or decrements the specified user property value with the specified number
   * value in the analytics data store.
   * @param name Name of the property to increment. Value is case-sensitive.Note: The associated
   * property must be a number.
   * @param value Amount to increment the property by. If you enter a negative number, the value
   * is decremented.
   */
  incUserProperty(name: string, value: number): any;
  /**
   * Removes the specified property for the current user from the analytics data
   * store.
   * @param name Name of the property to remove. Value is case-sensitive.
   */
  removeUserProperty(name: string): any;
  /**
   * Sets the specified properties with the specified values for the current user in the
   * analytics data store.
   * @param properties Object that contains the name-value pairs of the user properties to set, such as:
   * {
   * level: 7,
   * lastPurchase: new Date(),
   * lastPurchaseId: '41563cd2-1666-4855-8c0d-b9ca778aed23',
   * isPremium: true,
   * tags: ['chair', 'table'],
   * }
   * The following values are automatically converted by this
   * method:
   * String value of "yes": Boolean value of "true"
   *
   * String value of "no": Boolean value of "false
   *
   *
   *
   */
  setUserProperties(properties: any): any;
  /**
   * Sets the specified property with the specified value for the current user in the
   * analytics data store.
   * @param name Name of the property to update. This name appears as the label for the
   * property. For example, in the prior screenshot, Domain, Instance Name, Company,
   * Role, and User Type are all name parameters. Special characters are not
   * allowed.Maximum length: The length of the property name and property value
   * cannot exceed 300 bytes.
   * @param value Value to set in the specified property.The following values are automatically converted by this
   * method:
   * String value of "yes": Boolean value of "true"
   *
   * String value of "no": Boolean value of "false
   *
   *
   *
   */
  setUserProperty(name: string, value: any): any;
  /**
   * Saves the name and description of a page in the analytics data store.
   * @param name Descriptive name of the page or page section. Special characters are not
   * allowed.
   * @param description Optional. Description of the page to appear in the timeline and analytics
   * dashboard. Default: name parameter value
   */
  startPage(name: string, description?: string): any;
}
export { SNAnalytics };
