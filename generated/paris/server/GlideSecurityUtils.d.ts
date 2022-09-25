declare class GlideSecurityUtils {
  /**
   * Removes suspicious encoding to prevent reflected or DOM based cross site
   * scripting.
   * @param url The URL to be checked.
   */
  cleanURL(url: string): any;
  /**
   * Removes the domain address from the URL, which leaves the page name and
   * parameters.
   * @param url The URL to be turned into a relative URL.
   */
  enforceRelativeURL(url: string): any;
  /**
   * Add escape characters to a script.
   * @param script The script to have escape characters added.
   */
  escapeScript(script: string): any;
  /**
   * Check the specified URL against the system defined white list.
   * @param url The URL to be checked against the URL white list.
   */
  isURLWhiteListed(url: string): any;
}
export { GlideSecurityUtils };
