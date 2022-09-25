declare class GlideSystem {
  /**
   * Adds an error message for the current session.
   * @param message The message to add.
   */
  addErrorMessage(message: any): any;
  /**
   * Adds an info message for the current session.
   * @param message The message to add.
   */
  addInfoMessage(message: any): any;
  /**
   * Adds a message for the current session.
   * @param type Type of message, such as error or
   * info.
   * @param message Message to add to the current session.
   */
  addMessage(type: string, message: any): any;
  /**
   * Gets the date and time for the beginning of last month in GMT.
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
   * Returns the date and time for the beginning of the current month in GMT.
   */
  beginningOfThisMonth(): any;
  /**
   * Returns the date and time for the beginning of the current quarter in GMT.
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
   * Retrieves the date and time for the beginning of today in GMT.
   */
  beginningOfToday(): any;
  /**
   * Retrieves the (UTC) beginning of tomorrow adjusted for the timezone of the current
   * session.
   */
  beginningOfTomorrow(): any;
  /**
   * Retrieves the date and time for the beginning of yesterday in GMT.
   */
  beginningOfYesterday(): any;
  /**
   * Calculate the difference between two dates using the default calendar.
   * @param startDate Starting date to compare in the current user's date format.
   * @param endDate Ending date to compare in the current user's date format.
   * @param numericValue Flag that indicates ther format of the returned time value.Valid values:
   *
   * true: Return value is formatted in number of seconds
   *
   * false: Return value is formatted ddd hh:mm:ss.
   *
   *
   */
  calDateDiff(startDate: string, endDate: string, numericValue: boolean): any;
  /**
   * Calculates the difference between two dates.
   * @param startDate The starting date to compare in the current user's date format.
   * @param endDate The ending date to compare in the current user's date format.
   * @param numericValue If true, the return value will be formatted in number of seconds; if false the
   * return value will be formatted ddd hh:mm:ss.
   */
  dateDiff(startDate: string, endDate: string, numericValue: boolean): any;
  /**
   * Generates a date and time for the specified date in GMT.
   * @param date Date to generate in GMT.Format: yyyy-mm-dd
   * @param range Start, end, or a time. Format: 24-hour hh:mm:ss
   */
  dateGenerate(date: string, range: string): any;
  /**
   * Returns a date and time for a certain number of days ago.
   * @param days Number of days
   */
  daysAgo(days: number): any;
  /**
   * Returns a date and time for the end of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoEnd(days: number): any;
  /**
   * Returns the date and time of the beginning of the day for the specified number of days
   * ago. The returned date and time reflect the time zone of the current session (local
   * time).
   * @param days Number of days ago
   */
  daysAgoLocal(days: number): any;
  /**
   * Returns a date and time for the beginning of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoStart(days: string): any;
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
   * Retrieves the date and time for the end of today in GMT.
   */
  endOfToday(): any;
  /**
   * Retrieves the date and time for the end of tomorrow in GMT.
   */
  endOfTomorrow(): any;
  /**
   * Gets the date and time for the end of yesterday in GMT.
   */
  endOfYesterday(): any;
  /**
   * Queues an event for the event manager.
   * @param name Name of the event being queued.
   * @param glideRecord GlideRecord object, such as "current".
   * @param parm1 (Optional) Saved with the instance if specified.
   * @param parm2 (Optional) Saved with the instance if specified.
   * @param queue Name of the queue.
   */
  eventQueue(
    name: string,
    glideRecord: any,
    parm1: string | undefined,
    parm2: string | undefined,
    queue: string,
  ): any;
  /**
   * Queues an event for the event manager at a specified date and time.
   * @param name Name of the event being queued.
   * @param glideRecord GlideRecord object, such as "current".
   * @param parm1 (Optional) Saved with the instance if specified.
   * @param parm2 (Optional) Saved with the instance if specified.
   * @param expiration Date and time to process this event.
   */
  eventQueueScheduled(
    name: string,
    glideRecord: any,
    parm1: string | undefined,
    parm2: string | undefined,
    expiration: any,
  ): any;
  /**
   * Clears session messages saved using addErrorMessage() or
   * addInfoMessage().
   */
  flushMessages(): any;
  /**
   * Returns the file path to the user's avatar.
   */
  getAvatar(): any;
  /**
   * Returns the name of the current application scope.
   */
  getCurrentScopeName(): any;
  /**
   * Retrieves the display column for the table.
   * @param tableName Name of the table from which to get the display column name.
   */
  getDisplayColumn(tableName: string): any;
  /**
   * Returns the display value for a specified field on a specified record.
   * @param tableName Name of the table.
   * @param recordID Sys_id for the record.
   * @param fieldName Name of the field whose display value to return.
   */
  getDisplayValueFor(
    tableName: string,
    recordID: string,
    fieldName: string,
  ): any;
  /**
   * Returns the list of error messages for the session that were added by
   * addErrorMessage().
   */
  getErrorMessages(): any;
  /**
   * Retrieves the property and escapes it for XML parsing.
   * @param key Key for the property whose value should be returned.
   * @param substituteObject Optional. Object to return if the property is not found.
   */
  getEscapedProperty(key: string, substituteObject?: any): any;
  /**
   * Returns the display name of the impersonating user.
   */
  getImpersonatingUserDisplayName(): any;
  /**
   * Returns the name of the impersonating user or null if not impersonating.
   */
  getImpersonatingUserName(): any;
  /**
   * Retrieves the list of info messages for the session that were added by
   * addInfoMessage().
   */
  getInfoMessages(): any;
  /**
   * Returns the user's initials.
   */
  getInitials(): any;
  /**
   * Retrieves translated messages from the Message [sys_ui_message] table to display in a
   * UI.
   * @param messageID Message identifier. You can locate
   * this value in the Key field of the Message [sys_ui_message] table. Note the Key
   * field may look exactly like the actual message string.
   * @param args Optional. List of strings or other values defined by
   * java.text.MessageFormat that replace the variables within the specified message.
   * For example: gs.getMessage("Abort adding action '{0}', same subflow
   * can't be added twice in this subflow.", current.action.name);
   * In
   * this example '{0}' is replaced with the content of
   * current.action.name.
   * Note: The passed in values are not
   * translated. They are inserted verbatim in the message.
   */
  getMessage(messageID: string, args?: any): any;
  /**
   * Retrieves translated messages to display in the UI and escapes all ticks (').
   * @param MessageID Message identifier. You can locate
   * this value in the Key field of the Message [sys_ui_message] table. Note the Key
   * field may look exactly like the actual message string.
   * @param args Optional. List of strings or other values defined by
   * java.text.MessageFormat that replace the variables within the specified message.
   * For example: gs.getMessage("Abort adding action '{0}', same subflow
   * can't be added twice in this subflow.", current.action.name);
   * In
   * this example '{0}' is replaced with the content of
   * current.action.name.
   * Note: The passed in values are not
   * translated. They are inserted verbatim in the message.
   */
  getMessageS(MessageID: string, args?: any): any;
  /**
   * Returns the node name for the specified index.
   * @param obj Object to examine.
   * @param index Index from which to obtain the node name.
   */
  getNodeName(obj: any, index: number): any;
  /**
   * Returns the node value for the specified index.
   * @param obj Object to examine.
   * @param index Index from which to get the node valu.e
   */
  getNodeValue(obj: any, index: number): any;
  /**
   * Returns the specified user preference.
   * @param key Key for the preference.
   * @param _default Default value to use if the specified preference is not found.
   */
  getPreference(key: string, _default: any): any;
  /**
   * Returns the value of a Glide property. If the property is not found, returns the
   * specified alt value.
   * @param key Key for the property whose value should be returned.
   * @param alt Optional. Alternate object to return if the property is not found.
   */
  getProperty(key: string, alt?: any): any;
  /**
   * Returns the script error found in the specified script, if there is one.
   * @param script Script to check for errors.
   */
  getScriptError(script: string): any;
  /**
   * Returns a GlideSession object.
   */
  getSession(): any;
  /**
   * Returns the GlideSession session ID.
   */
  getSessionID(): any;
  /**
   * Returns the style defined for the table, field, and field value.
   * @param tableName Table name
   * @param fieldName Field name
   * @param fieldValue Field value
   */
  getStyle(tableName: string, fieldName: string, fieldValue: string): any;
  /**
   * Returns a reference to the user object for the current user.
   */
  getUser(): any;
  /**
   * Returns the name field of the current user. For example, the API returns John Smith
   * instead of jsmith.
   */
  getUserDisplayName(): any;
  /**
   * Returns the sys_id of the current user.
   */
  getUserID(): any;
  /**
   * Returns the name of the current user, such as jsmith.
   */
  getUserName(): any;
  /**
   * Returns the user display name based on a provided user login name.
   * @param user_id Login name of the user from which to retrieve the associated display
   * name.
   */
  getUserNameByUserID(user_id: string): any;
  /**
   * Constructs an array of all the nodes and values in an XML document.
   * @param xml XML document to parse.
   */
  getXMLNodeList(xml: string): any;
  /**
   * Returns the XML text for the first element in the XML string that matches the XPath
   * query.
   * @param xml XML string to search.
   * @param xpathQuery XPath query to match.
   */
  getXMLText(xml: string, xpathQuery: string): any;
  /**
   * Determines if the current user has at least one of the passed-in roles.
   * @param roleName Comma-separated list of roles.
   */
  hasRole(roleName: string): any;
  /**
   * Determines if the current user has the specified role within a specified
   * group.
   * @param roleName Name of the role.
   * @param group Sys_id of the group to check for the specified role.
   */
  hasRoleInGroup(roleName: any, group: any): any;
  /**
   * Returns a date and time for the specified number of hours ago. The returned value is
   * adjusted for the time zone of the instance.
   * @param hours Number of hours ago.
   */
  hoursAgo(hours: number): any;
  /**
   * Returns a date and time for the end of the hour for the specified number of hours ago.
   * The returned value is adjusted for the time zone of the instance.
   * @param hours Number of hours ago.
   */
  hoursAgoEnd(hours: number): any;
  /**
   * Returns a date and time for the start of the hour for the specified number of hours
   * ago. The returned value is adjusted for the time zone of the instance.
   * @param hours Number of hours ago.
   */
  hoursAgoStart(hours: number): any;
  /**
   * Checks whether the date in the specified date object is the first day of the
   * month.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isFirstDayOfMonth(date: any): any;
  /**
   * Checks whether the date in the specified date object is the first day of the week. This
   * method uses the ISO standard of Monday being the first day of the week.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isFirstDayOfWeek(date: any): any;
  /**
   * Checks whether the date in the specified date object is the first day of the
   * year.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isFirstDayOfYear(date: any): any;
  /**
   * Checks if the current session is interactive.
   */
  isInteractive(): any;
  /**
   * Checks whether the date in the specified date object is the last day of the
   * month.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isLastDayofMonth(date: any): any;
  /**
   * Checks whether the date in the specified date object is the last day of the week. This
   * method uses the ISO standard of Sunday being the last day of the week.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isLastDayOfWeek(date: any): any;
  /**
   * Checks whether the date in the specified date object is the last day of the
   * year.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isLastDayOfYear(date: any): any;
  /**
   * Determines if the current user is currently logged in.
   */
  isLoggedIn(): any;
  /**
   * Determines whether the request came from a mobile device.
   */
  isMobile(): any;
  /**
   * Returns the date and time one week ago in GMT.
   */
  lastWeek(): any;
  /**
   * Logs a message to the system log and saves it to the syslog table.
   * @param message Message to log.
   * @param source Optional. Source of the message.
   */
  log(message: string, source?: string): any;
  /**
   * Logs an error to the system log and saves it to the syslog table.
   * @param message Error message to log.
   * @param source Optional. Source of the message.
   */
  logError(message: string, source?: string): any;
  /**
   * Logs a warning to the system log and saves it to the syslog table.
   * @param message Message to log.
   * @param source Optional. Source of the message.
   */
  logWarning(message: string, source?: string): any;
  /**
   * Returns a date and time for the specified number of minutes ago.
   * @param minutes Number of minutes in the past to return.
   */
  minutesAgo(minutes: number): any;
  /**
   * Returns a date and time for the end of the minute a certain number of minutes
   * ago.
   * @param minutes Integer number of minutes ago, such as 5 or 11.
   */
  minutesAgoEnd(minutes: number): any;
  /**
   * Returns a date and time for the start of the minute a certain number of minutes
   * ago.
   * @param minutes Integer number of minutes ago, such as 15 or 112.
   */
  minutesAgoStart(minutes: number): any;
  /**
   * Returns a date and time for a certain number of months ago.
   * @param months Integer number of months ago.
   */
  monthsAgo(months: number): any;
  /**
   * Returns a date and time for the last day of the month a certain number of months
   * ago.
   * @param months Integer number of months, such as 4 or 16.
   */
  monthsAgoEnd(months: number): any;
  /**
   * Returns a date and time for the start of the month a certain number of months
   * ago.
   * @param months Integer number of months ago, such as 5 or 14.
   */
  monthsAgoStart(months: number): any;
  /**
   * Queries an object and returns true if the object is null or contains an empty
   * string.
   * @param obj The object to be checked.
   */
  nil(obj: any): any;
  /**
   * Returns the current date in UTC.
   */
  now(): any;
  /**
   * Returns the current date and time in the user-defined format.
   */
  nowDateTime(): any;
  /**
   * Gets a GlideDateTime object with the current date and time.
   */
  nowGlideDateTime(): any;
  /**
   * Returns the current date and time in UTC format.
   */
  nowNoTZ(): any;
  /**
   * Writes a message to the system log.
   * @param message The message to log
   */
  print(message: string): any;
  /**
   * Returns a date and time for a certain number of quarters ago.
   * @param quarters Integer number of the quarters ago.
   */
  quartersAgo(quarters: number): any;
  /**
   * Returns a date and time for the last day of the quarter, for a specified number of
   * quarters ago.
   * @param quarters An integer number of quarters
   */
  quartersAgoEnd(quarters: number): any;
  /**
   * Returns a date and time for the first day of the quarter, for a specified number of
   * quarters ago.
   * @param quarters An integer number of quarters
   */
  quartersAgoStart(quarters: number): any;
  /**
   * Sets the specified key to the specified value.
   * @param key The key for the property to be set.
   * @param value The value of the property to be set.
   * @param description A description of the property.
   */
  setProperty(key: string, value: string, description: string): any;
  /**
   * Sets the redirect URI for this transaction, which then determines the next page the
   * user will see.
   * @param URI URI to set as the redirect
   */
  setRedirect(URI: any): any;
  /**
   * Sets the return URI for this transaction. This determines what page the user will be
   * directed to when they return from the next form.
   * @param URI URI to set as the return location.
   */
  setReturn(URI: any): any;
  /**
   * Determines if a database table exists in the ServiceNow
   * instance.
   * @param tableName Name of the table to check.
   */
  tableExists(tableName: string): any;
  /**
   * Returns the sys_id of the user associated with this session. Use
   * getUserID() instead.
   */
  userID(): any;
  /**
   * Deletes any open scheduled job records in the Schedule (sys_trigger) table for the
   * specified GlideRecord.
   * @param glideRecord The GlideRecord
   */
  workflowFlush(glideRecord: any): any;
  /**
   * Gets a date and time for a certain number of years ago.
   * @param years An integer number of years
   */
  yearsAgo(years: number): any;
  /**
   * Returns yesterday's time (24 hours ago).
   */
  yesterday(): any;
}
export { GlideSystem };
