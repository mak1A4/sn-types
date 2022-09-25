declare class GlideSystem {
  /**
   * Adds an error message for the current session.
   * @param message Message to add.
   */
  addErrorMessage(message: string): any;
  /**
   * Adds an info message for the current session. This method is not supported for
   * asynchronous business rules.
   * @param message Info message to add.
   */
  addInfoMessage(message: string): any;
  /**
   * Returns an ASCII string from the specified base64 string.
   * @param source A base64 encoded string.
   */
  base64Decode(source: string): any;
  /**
   * Creates a base64 string from the specified string.
   * @param source String to encode.
   */
  base64Encode(source: string): any;
  /**
   * Returns the date and time for the beginning of last month in GMT.
   */
  beginningOfLastMonth(): any;
  /**
   * Returns the date and time for the beginning of last week in GMT.
   */
  beginningOfLastWeek(): any;
  /**
   * Returns the date and time for the beginning of next month in GMT.
   */
  beginningOfNextMonth(): any;
  /**
   * Returns the date and time for the beginning of next week in GMT.
   */
  beginningOfNextWeek(): any;
  /**
   * Returns the date and time for the beginning of next year in GMT.
   */
  beginningOfNextYear(): any;
  /**
   * Returns the date and time for the beginning of this month in GMT.
   */
  beginningOfThisMonth(): any;
  /**
   * Returns the date and time for the beginning of this quarter in GMT.
   */
  beginningOfThisQuarter(): any;
  /**
   * Returns the date and time for the beginning of this week in GMT.
   */
  beginningOfThisWeek(): any;
  /**
   * Returns the date and time for the beginning of this year in GMT.
   */
  beginningOfThisYear(): any;
  /**
   * Generates a date and time for the specified date in GMT.
   * @param date Date to generate the GMT for.Format: yyyy-mm-dd
   * @param range Start, end, or a time in the 24 hour format hh:mm:ss.
   */
  dateGenerate(date: string, range: string): any;
  /**
   * Returns the date and time for a specified number of days ago.
   * @param days Integer number of days
   */
  daysAgo(days: number): any;
  /**
   * Returns the date and time for the end of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoEnd(days: number): any;
  /**
   * Returns the date and time for the beginning of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoStart(days: string): any;
  /**
   * Writes a debug message to the system log.
   * @param message The log message with place holders for any variable arguments.
   * @param param1 (Optional) First variable argument.
   * @param param2 (Optional) Second variable argument.
   * @param param3 (Optional) Third variable argument.
   * @param param4 (Optional) Fourth variable argument.
   * @param param5 (Optional) Fifth variable argument.
   */
  debug(
    message: string,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
  ): any;
  /**
   * Returns the date and time for the end of last month in GMT.
   */
  endOfLastMonth(): any;
  /**
   * Returns the date and time for the end of last week in GMT.
   */
  endOfLastWeek(): any;
  /**
   * Returns the date and time for the end of last year in GMT.
   */
  endOfLastYear(): any;
  /**
   * Returns the date and time for the end of next month in GMT.
   */
  endOfNextMonth(): any;
  /**
   * Returns the date and time for the end of next week in GMT.
   */
  endOfNextWeek(): any;
  /**
   * Returns the date and time for the end of next year in GMT.
   */
  endOfNextYear(): any;
  /**
   * Returns the date and time for the end of this month in GMT.
   */
  endOfThisMonth(): any;
  /**
   * Returns the date and time for the end of this quarter in GMT.
   */
  endOfThisQuarter(): any;
  /**
   * Returns the date and time for the end of this week in GMT.
   */
  endOfThisWeek(): any;
  /**
   * Returns the date and time for the end of this year in GMT.
   */
  endOfThisYear(): any;
  /**
   * Writes an error message to the system log.
   * @param message The log message with place holders for any variable arguments.
   * @param param1 (Optional) First variable argument.
   * @param param2 (Optional) Second variable argument.
   * @param param3 (Optional) Third variable argument.
   * @param param4 (Optional) Fourth variable argument.
   * @param param5 (Optional) Fifth variable argument.
   */
  error(
    message: string,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
  ): any;
  /**
   * Queues an event for the event manager.
   * @param name Name of the event being queued.
   * @param instance GlideRecord object, such as "current".
   * @param parm1 Optional. Saved with the instance if specified.
   * @param parm2 Optional. Saved with the instance if specified.
   * @param queue Optional. Name of the queue.
   */
  eventQueue(
    name: string,
    instance: any,
    parm1?: string,
    parm2?: string,
    queue?: string,
  ): any;
  /**
   * Queues an event in the event manager.
   * @param name Name of the event to queue.
   * @param instance GlideRecord object or the sys_id of the record to which this event
   * applies.
   * @param parm1 Optional. String to pass into the event script. This parameter is free-form and
   * depends on the implementation of the event script.Default: If the
   * instance parameter is a GlideRecord object, then the
   * default is the display value for that GlideRecord (now_GR.getDisplayValue) otherwise
   * it is null.
   * @param parm2 Optional. String to pass into the event script. This parameter is free-form and
   * depends on the implementation of the event script. Default:
   * null
   * @param expiration Optional. GlideDateTime object or a date/time type element that specifies the
   * date and time to process the event.Default: Current date/time
   */
  eventQueueScheduled(
    name: string,
    instance: any,
    parm1?: string,
    parm2?: string,
    expiration?: any,
  ): any;
  /**
   * Executes a job for a scoped application.
   * @param job Job to run.
   */
  executeNow(job: any): any;
  /**
   * Generates a GUID that can be used when a unique identifier is required.
   */
  generateGUID(): any;
  /**
   * Gets the caller scope name; returns null if there is no caller.
   */
  getCallerScopeName(): any;
  /**
   * Gets a string representing the cache version for a CSS file.
   */
  getCssCacheVersionString(): any;
  /**
   * Gets the ID of the current application as set using the Application Picker.
   */
  getCurrentApplicationId(): any;
  /**
   * Gets the name of the current scope.
   */
  getCurrentScopeName(): any;
  /**
   * Returns the error messages that were added by addErrorMessage() for
   * the session.
   */
  getErrorMessages(): any;
  /**
   * Retrieves the specified message from the Message [sys_ui_message] table. If the message
   * has HTML special characters, replaces them with the corresponding HTML name codes. For example,
   * &amp; becomes &amp;amp;.
   * @param id Message identifier. You can locate
   * this value in the Key field of the Message [sys_ui_message] table. Note the Key
   * field may look exactly like the actual message string.
   * @param args Optional. List of strings or other values defined by java.text.MessageFormat
   * that replace the variables within the specified message. For example:
   * gs.getMessage("Abort adding action '{0}', same subflow can't be added
   * twice in this subflow.", current.action.name);
   * In this example
   * '{0}' is replaced with the content of
   * current.action.name.
   * Note: The passed in values are not
   * translated. They are inserted verbatim in the message.
   */
  getEscapedMessage(id: string, args?: any[]): any;
  /**
   * Retrieves translated messages from the Message [sys_ui_message] table to display in a
   * UI.
   * @param id Message identifier. You can locate this value in the Key field of the Message
   * [sys_ui_message] table. Note the Key field may look exactly like the actual
   * message.
   * @param args Optional. List of strings or other values defined by java.text.MessageFormat
   * that replace the variables within the specified message. For example:
   * gs.getMessage("Abort adding action '{0}', same subflow can't be added
   * twice in this subflow.", current.action.name);
   * In this example
   * '{0}' is replaced with the content of
   * current.action.name.
   * Note: The passed in values are not
   * translated. They are inserted verbatim in the message.
   */
  getMessage(id: string, args?: any[]): any;
  /**
   * Gets the value of a Glide property. If the property is not found, returns an alternate
   * value.
   * @param key The key for the property whose value should be returned.
   * @param alt (Optional) Alternate object to return if the property is not found.
   */
  getProperty(key: string, alt?: any): any;
  /**
   * Gets a reference to the current Glide session.
   */
  getSession(): any;
  /**
   * Retrieves the GlideSession session ID.
   */
  getSessionID(): any;
  /**
   * This method is no longer available. Instead, use
   * gs.getSession().getSessionToken().
   */
  getSessionToken(): any;
  /**
   * Returns the name of the time zone associated with the current user.
   */
  getTimeZoneName(): any;
  /**
   * Gets the current URI for the session.
   */
  getUrlOnStack(): any;
  /**
   * Returns a reference to the scoped GlideUser object for the current user.
   */
  getUser(): any;
  /**
   * Gets the display name of the current user.
   */
  getUserDisplayName(): any;
  /**
   * Gets the sys_id of the current user.
   */
  getUserID(): any;
  /**
   * Gets the user name, or user id, of the current user.
   */
  getUserName(): any;
  /**
   * Determines if the current user has the specified role.
   * @param role The role to check.
   */
  hasRole(role: any): any;
  /**
   * Returns the date and time for a specified number of hours ago.
   * @param hours Integer number of hours
   */
  hoursAgo(hours: number): any;
  /**
   * Returns the date and time for the end of the hour a specified number of hours
   * ago.
   * @param hours Integer number of hours
   */
  hoursAgoEnd(hours: number): any;
  /**
   * Returns the date and time for the start of the hour a specified number of hours
   * ago.
   * @param hours Integer number of hours
   */
  hoursAgoStart(hours: number): any;
  /**
   * Provides a safe way to call from the sandbox, allowing only the inclusion of trusted
   * scripts.
   * @param name The name of the script to include.
   */
  include(name: string): any;
  /**
   * Writes an info message to the system log.
   * @param message The log message with place holders for any variable arguments.
   * @param param1 (Optional) First variable argument.
   * @param param2 (Optional) Second variable argument.
   * @param param3 (Optional) Third variable argument.
   * @param param4 (Optional) Fourth variable argument.
   * @param param5 (Optional) Fifth variable argument.
   */
  info(
    message: string,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
  ): any;
  /**
   * Determines if debugging is active for a specific scope.
   */
  isDebugging(): any;
  /**
   * Checks if the current session is interactive. An example of an interactive session is
   * when a user logs in normally. An example of a non-interactive session is using a SOAP request to
   * retrieve data.
   */
  isInteractive(): any;
  /**
   * Determines if the current user is currently logged in.
   */
  isLoggedIn(): any;
  /**
   * You can determine if a request comes from a mobile device.
   */
  isMobile(): any;
  /**
   * Returns the date and time for the end of the minute a specified number of minutes
   * ago.
   * @param minutes Integer number of minutes ago, such as 5 or 126.
   */
  minutesAgoEnd(minutes: number): any;
  /**
   * Returns the date and time for the start of the minute a specified number of minutes
   * ago.
   * @param minutes Integer number of minutes ago, such as 15 or 112.
   */
  minutesAgoStart(minutes: number): any;
  /**
   * Returns the date and time for a specified number of months ago.
   * @param months Integer number of months ago.
   */
  monthsAgo(months: number): any;
  /**
   * Returns the date and time for the start of the month a specified number of months
   * ago.
   * @param months Integer number of months ago, such as 3 or 14.
   */
  monthsAgoStart(months: number): any;
  /**
   * Queries an object and returns true if the object is null, undefined, or contains an
   * empty string.
   * @param o The object to be checked.
   */
  nil(o: any): any;
  /**
   * Returns the date and time for the last day of the quarter for a specified number of
   * quarters ago.
   * @param quarters Integer number of quarters
   */
  quartersAgoEnd(quarters: number): any;
  /**
   * Returns the date and time for the first day of the quarter for a specified number of
   * quarters ago.
   * @param quarters Integer number of quarters
   */
  quartersAgoStart(quarters: number): any;
  /**
   * Sets the specified key to the specified value if the property is within the script's
   * scope.
   * @param key The key for the property to be set.
   * @param value The value of the property to be set.
   * @param description A description of the property.
   */
  setProperty(key: string, value: string, description: string): any;
  /**
   * Sets the redirect URI for this transaction, which then determines the next page the
   * user will see.
   * @param o URI object or URI string to set as the redirect
   */
  setRedirect(o: any): any;
  /**
   * Determines if a database table exists.
   * @param name Name of the table to check for existence.
   */
  tableExists(name: string): any;
  /**
   * Replaces UTF-8 encoded characters with ASCII characters.
   * @param url A string with UTF-8 percent (%) encoded characters.
   */
  urlDecode(url: string): any;
  /**
   * Encodes non-ASCII characters, unsafe ASCII characters, and spaces so the returned
   * string can be used on the Internet. Uses UTF-8 encoding. Uses percent (%) encoding.
   * @param url The string to be encoded.
   */
  urlEncode(url: string): any;
  /**
   * Writes a warning message to the system log.
   * @param message The log message with place holders for any variable arguments.
   * @param param1 (Optional) First variable argument.
   * @param param2 (Optional) Second variable argument.
   * @param param3 (Optional) Third variable argument.
   * @param param4 (Optional) Fourth variable argument.
   * @param param5 (Optional) Fifth variable argument.
   */
  warn(
    message: string,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
  ): any;
  /**
   * Takes an XML string and returns a JSON object.
   * @param xmlString The XML string to be converted.
   */
  xmlToJSON(xmlString: string): any;
  /**
   * Returns a date and time for a certain number of years ago.
   * @param years An integer number of years
   */
  yearsAgo(years: number): any;
  /**
   * Returns yesterday's time (24 hours ago).
   */
  yesterday(): any;
}
export { GlideSystem };
