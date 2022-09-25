declare class GlideURI {
  /**
   * Deletes one or more parameters from the URI that match the beginning of the provided
   * string.
   * @param match Partial name of one or more parameters to remove from the query portion of a
   * URI.
   */
  deleteMatchingParameter(match: string): any;
  /**
   * Removes a specified parameter from the query portion of the URI.
   * @param name Name of the parameter to remove from the query portion of a URI.
   */
  deleteParameter(name: string): any;
  /**
   * Returns the value of the specified
   * parameter.
   * @param name The parameter name.
   */
  get(name: string): any;
  /**
   * Returns the file name portion of the
   * URI.
   */
  getFileFromPath(): any;
  /**
   * Returns a map (key value pairs) containing each parameter in the query and its
   * associated value.
   */
  getMap(): any;
  /**
   * Sets the specified parameter to the specified
   * value.
   * @param name The parameter name.
   * @param value The value.
   */
  set(name: string, value: string): any;
  /**
   * Adds the sysparm_view parameter to the query with the named
   * view.
   * @param view Name of the sysparm_view parameter to set in the URI
   * query.
   */
  setView(view: string): any;
  /**
   * Reconstructs the URI string and performs the proper
   * URL encoding by converting non-valid characters to their URL code. For example,
   * converting &amp; to '%26'.
   * @param path The base portion of the system URL to which the URI is appended.
   */
  toString(path: string): any;
}
export { GlideURI };
