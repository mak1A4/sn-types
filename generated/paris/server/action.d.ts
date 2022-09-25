declare class action {
  /**
   * Gets a GlideURI object to determine the user view.
   */
  getGlideURI(): any;
  /**
   * Gets the URL of the return page in view after a UI action is complete.
   */
  getReturnURL(): any;
  /**
   * Gets the value of a URL parameter.
   * @param parameterName Name of the URL parameter name to be queried for the URL parameter
   * value.
   */
  getURLParameter(parameterName: string): any;
  /**
   * Opens a page with a GlideRecord in the user view.
   * @param gr GlideRecord of the page to be opened in the user view.
   */
  openGlideRecord(gr: any): any;
  /**
   * Indicates whether to enable or disable pop-up windows on the page in the current
   * view.
   * @param noPop Flag indicating whether to enable or disable pop-up windows on the page:
   * true: Disables pop-up windows.
   *
   * false: Default. Enables pop-up windows.
   *
   *
   */
  setNoPop(noPop: boolean): any;
  /**
   * Sets the redirect URI for this transaction, which determines the next page the user
   * sees.
   * @param URL URL to set as the redirect. You can provide the URL as a string or a GlideRecord. If you pass the URL as a GlideRecord, this value takes the
   * focus to that record's form.
   */
  setRedirectURL(URL: any): any;
  /**
   * Sets the return URI for this transaction after a UI action is complete. You can use
   * this method to determine what page the user has in view when they return from
   * submit.
   * @param URL URI to set as the return location after a UI action is complete. You can
   * provide the URL as a string or a GlideRecord.
   */
  setReturnURL(URL: any): any;
  /**
   * Sets a URL parameter name and value.
   * @param parameterName Name of the URL parameter.
   * @param parameterValue Value of the parameter.
   */
  setURLParameter(parameterName: string, parameterValue: string): any;
}
export { action };
