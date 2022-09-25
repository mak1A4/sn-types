declare class GlideSession {
  /**
   * Clears a session client value previously set with putClientData().
   * @param paramName Name of the client data to clear.
   */
  clearClientData(paramName: string): any;
  /**
   * Returns a session client value previously set with putClientData().
   * @param paramName Name of the client data to retrieve.
   */
  getClientData(paramName: string): any;
  /**
   * Gets the session's language code.
   */
  getLanguage(): any;
  /**
   * Gets a list of roles for the current user.
   */
  getRoles(): any;
  /**
   * Gets the name of the session's time zone.
   */
  getTimeZoneName(): any;
  /**
   * Determines if the current session is interactive.
   */
  isInteractive(): any;
  /**
   * Determines if the current user is currently logged in.
   */
  isLoggedIn(): any;
  /**
   * Sets a session client value that can be retrieved with
   * getClientData(). This method is used in a server side script that runs when
   * a form is created.
   * @param paramName Name of the client parameter to set.
   * @param paramValue Parameter value.
   */
  putClientData(paramName: string, paramValue: string): any;
}
export { GlideSession };
