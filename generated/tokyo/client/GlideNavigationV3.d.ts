declare class GlideNavigationV3 {
  /**
   * Redirects to a new URL.
   * @param url The URL to load. It can be any URL supported by the browser.
   * @param target Optional. The frame in which to load the content specified by the URL.
   * Default: Current frame
   */
  open(url: string, target?: string): any;
  /**
   * Opens the specified URL in a popup window.
   * @param url URL to open.
   * @param name Window name.
   * @param features Comma separated list of features for the popup window.
   * @param noStack Flag that indicates whether to append sysparm_stack=no to the
   * URL. This parameter helps prevent unexpected behavior when using the form back
   * button.Valid values:
   * true: Append sysparm_stack=no to the URL.
   *
   * false: Do not append sysparm_stack=no to the URL.
   *
   *
   *
   */
  openPopup(url: string, name: string, features: string, noStack: boolean): any;
  /**
   * Redirects to a record. The record displays in the navigator frame.
   * @param tableName Name of the table containing the record to display.
   * @param sys_id Sys_id of the record to display.
   */
  openRecord(tableName: string, sys_id: string): any;
  /**
   * Refreshes content in the navigator frame.
   */
  refreshNavigator(): any;
  /**
   * Reloads the current frame.
   */
  reloadWindow(): any;
}
export { GlideNavigationV3 };
