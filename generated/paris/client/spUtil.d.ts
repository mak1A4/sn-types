declare class spUtil {
  /**
   * Displays a notification error message.
   * @param message Error message to display.
   */
  addErrorMessage(message: string): any;
  /**
   * Displays a notification info message.
   * @param message Message to display.
   */
  addInfoMessage(message: string): any;
  /**
   * Displays a trivial notification message.
   * @param message Message to display.
   */
  addTrivialMessage(message: string): any;
  /**
   * Create a unique ID.
   */
  createUid(): any;
  /**
   * Formats a string as an alternative to string concatenation.
   * @param template String template with values for substitution.
   * @param data Object containing variables for substitution.
   */
  format(template: string, data: any): any;
  /**
   * Returns a widget model by ID or sys_id.
   * @param widgetId Widget ID or sys_id of the widget to embed.
   * @param data (Optional) Name/value pairs of parameters to pass to the widget model.
   */
  get(widgetId: string, data?: any): any;
  /**
   * Retrieve all headers to be used for API calls.
   */
  getHeaders(): any;
  /**
   * Get complete host domain.
   */
  getHost(): any;
  /**
   * Execute callback with User Preference response by passing Preference name.
   * @param preference The name of the preference.
   * @param callback Define the callback function.
   */
  getPreference(preference: string, callback: any): any;
  /**
   * Get current service portal url information.
   */
  getURL(): any;
  /**
   * Check if current client is a mobile device.
   */
  isMobile(): any;
  /**
   * Brief description of the method.
   * @param attributes String containing comma separated attributes, such as the
   * Attributes field of a dictionary record.
   */
  parseAttributes(attributes: string): any;
  /**
   * Watches for updates to a table or filter and returns the value from the callback
   * function.
   * @param $scope Scope of the data object updated by the callback function.
   * @param table Watched table.
   * @param filter Filter for fields to watch.
   * @param callback Optional. Parameter to define the callback function.
   */
  recordWatch($scope: any, table: string, filter: string, callback?: any): any;
  /**
   * Calls the server and replaces the current options and
   * data with the server response.
   * @param $scope The scope defined for the update.
   */
  refresh($scope: any): any;
  /**
   * Sscroll to element with specified selector, over specified period of time.
   * @param selector The selector to scroll to.
   * @param time The time, in milliseconds, taken to scroll to the specified selector.
   */
  scrollTo(selector: string, time: number): any;
  /**
   * Update the header breadcrumbs.
   * @param $scope The scope defined for the table.
   * @param breadcrumbs An array of conditions used to create the breadcrumb filter.
   */
  setBreadCrumb($scope: any, breadcrumbs: any[]): any;
  /**
   * Set a user preference.
   * @param preference The preference name
   * @param value The preference value
   */
  setPreference(preference: string, value: string): any;
  /**
   * Update the search page.
   * @param searchPage The name of the search page.
   */
  setSearchPage(searchPage: string): any;
  /**
   * Updates the data object on the server within a given scope.
   * @param $scope The scope defined for the update.
   */
  update($scope: any): any;
}
export { spUtil };
