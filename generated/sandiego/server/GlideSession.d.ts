declare class GlideSession {
  /**
   * Retrieves a session client value previously set with
   * putClientData().
   * @param paramName Name of the client data to retrieve.
   */
  getClientData(paramName: string): any;
  /**
   * Returns the client IP address.
   */
  getClientIP(): any;
  /**
   * Returns the application currently selected in the application picker.
   */
  getCurrentApplicationId(): any;
  /**
   * Returns the sys_id of the current domain for the logged-in user session.
   */
  getCurrentDomainID(): any;
  /**
   * Returns the session's language code.
   */
  getLanguage(): any;
  /**
   * Returns the session token.
   */
  getSessionToken(): any;
  /**
   * Returns the name of the session's time zone.
   */
  getTimeZoneName(): any;
  /**
   * Returns the URL on the stack. Returns null if the stack is empty.
   */
  getUrlOnStack(): any;
  /**
   * Returns true if the user is impersonating another user.
   */
  isImpersonating(): any;
  /**
   * Returns true if the session is interactive.
   */
  isInteractive(): any;
  /**
   * Returns true if the user is logged in.
   */
  isLoggedIn(): any;
  /**
   * Sets a session client value that can be retrieved with
   * getClientData(). This method is used in a server side script that runs when
   * a form is created.
   * @param paramName Name of the client data to set.
   * @param paramValue Value of the client data.
   */
  putClientData(paramName: string, paramValue: string): any;
}
export { GlideSession };
