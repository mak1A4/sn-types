declare class GlideURI {
  constructor();
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
   * Sets the specified parameter to the specified
   * value.
   * @param name The parameter name.
   * @param value The value.
   */
  set(name: string, value: string): any;
  /**
   * Reconstructs the URI string and performs the proper
   * URL encoding by converting non-valid characters to their URL code. For example,
   * converting &amp; to '%26'.
   * @param path The base portion of the system URL to which the URI is appended.
   */
  toString(path: string): any;
}
export { GlideURI };
