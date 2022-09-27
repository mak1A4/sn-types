// @ts-nocheck
/// <reference no-default-lib="true"/>

declare class action_static {
  /**
   * Gets a GlideURI object to determine the user view.
   */
  getGlideURI(): any;
  /**
   * Gets the URL of the return page in view after a UI action is complete.
   */
  getReturnURL(): string;
  /**
   * Gets the value of a URL parameter.
   * @param parameterName Name of the URL parameter name to be queried for the URL parameter
   * value.
   */
  getURLParameter(parameterName: string): string;
  /**
   * Opens a page with a GlideRecord in the user view.
   * @param gr GlideRecord of the page to be opened in the user view.
   */
  openGlideRecord(gr: GlideRecord): any;
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
declare var action = new action_static();
declare class CertificateEncryption {
  constructor();
  /**
   * Generates the Message Authentication Code (MAC), which is used to authenticate a
   * message.
   * @param key Key to use to sign the message. Must be Base64 encoded.
   * @param algorithm Algorithm to use to generate the MAC: HmacSHA256, HmacSHA1, HmacMD5, and so
   * on.
   * @param data Data to process.
   */
  generateMac(key: string, algorithm: string, data: string): string;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from Trust Store
   * Cert.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param algorithm Algorithm to use to create the hash, such as SHA-1, SHA-256, and so on.
   */
  getThumbPrint(certificateID: string, algorithm: string): string;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from the keystore
   * entry.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Alias name for the certificate.
   * @param algorithm SHA-1, SHA-256, and so on.
   */
  getThumbPrintFromKeystore(
    certificateID: string,
    alias: string,
    algorithm: string,
  ): string;
  /**
   * Signs the data using the private key and the specified algorithm.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Private key name.
   * @param aliaspassword Password for the private key.
   * @param algorithm Algorithm to use. Must be one of the following values:
   * NONEwithRSA
   *
   * MD2withRSA
   *
   * MD5withRSA
   *
   * SHA1withRSA
   *
   * SHA224withRSA
   *
   * SHA256withRSA
   *
   * SHA384withRSA
   *
   * SHA512withRSA
   *
   * NONEwithDSA
   *
   * SHA1withDSA
   *
   * SHA224withDSA
   *
   * SHA256withDSA
   *
   * NONEwithECDSA
   *
   * SHA1withECDSA
   *
   * SHA224withECDSA
   *
   * SHA256withECDSA
   *
   * SHA384withECDSA
   *
   * SHA512withECDSA
   *
   *
   * @param datatosign Data to sign.
   */
  sign(
    certificateID: string,
    alias: string,
    aliaspassword: string,
    algorithm: string,
    datatosign: string,
  ): string;
}
declare class FlowScriptAPI {
  /**
   * Returns the context ID of the running flow.
   */
  getContextID(): string;
}
declare class GlideAggregate {
  constructor(tableName: string);
  /**
   * Adds an aggregate to a database query.
   * @param agg Name of an aggregate to include in a database query.Valid values:
   * AVG
   *
   * COUNT
   *
   * MIN
   *
   * MAX
   *
   * STDDEV
   *
   * SUM
   *
   *
   *
   * @param name Optional. Name of the field to group the results of the aggregation
   * by.Default: Null
   */
  addAggregate(agg: string, name?: string): any;
  /**
   * Adds an encoded query to the other queries that may have been set for this
   * aggregate.
   * @param query An encoded query to add to the aggregate.
   */
  addEncodedQuery(query: string): any;
  /**
   * Adds a not null query to the aggregate.
   * @param fieldname The name of the field.
   */
  addNotNullQuery(fieldname: string): GlideQueryCondition;
  /**
   * Adds a null query to the aggregate.
   * @param fieldName The name of the field.
   */
  addNullQuery(fieldName: string): GlideQueryCondition;
  /**
   * Adds a query to the aggregate.
   * @param name The query to add.
   * @param operator The operator for the query.
   * @param value The list of values to include in the query.
   */
  addQuery(name: string, operator: string, value: string): GlideQueryCondition;
  /**
   * Adds a trend for a specified field.
   * @param fieldName Name of the field for which trending should occur.
   * @param timeInterval Time interval for the trend. Valid values:
   * date
   *
   * dayofweek
   *
   * hour
   *
   * quarter
   *
   * value
   *
   * week
   *
   * year
   *
   *
   *
   */
  addTrend(fieldName: string, timeInterval: string): any;
  /**
   * Returns the value of an aggregate from the current record.
   * @param agg Type of the aggregate. Valid values:
   * AVG
   *
   * COUNT
   *
   * MIN
   *
   * MAX
   *
   * STDDEV
   *
   * SUM
   *
   *
   *
   * @param name Name of the field to get the aggregate from.
   */
  getAggregate(agg: string, name: string): string;
  /**
   * Gets the query necessary to return the current aggregate.
   */
  getAggregateEncodedQuery(): string;
  /**
   * Retrieves the encoded query.
   */
  getEncodedQuery(): string;
  /**
   * Retrieves the number of rows in the GlideAggregate object.
   */
  getRowCount(): number;
  /**
   * Retrieves the table name associated with this GlideAggregate object.
   */
  getTableName(): string;
  /**
   * Returns the value of the specified field.
   * @param name Name of the field within the current table to return.
   */
  getValue(name: string): string;
  /**
   * Provides the name of a field to use in grouping the aggregates.
   * @param name Name of the field.
   */
  groupBy(name: string): any;
  /**
   * Determines if there are any more records in the GlideAggregate object.
   */
  hasNext(): boolean;
  /**
   * Moves to the next record in the GlideAggregate.
   */
  next(): boolean;
  /**
   * Orders the aggregates using the value of the specified field. The field will also be
   * added to the group-by list.
   * @param name Name of the field to order the aggregates by.
   */
  orderBy(name: string): any;
  /**
   * Orders the aggregates based on the specified aggregate and field.
   * @param agg Type of aggregation.
   * @param fieldName Name of the field to aggregate.
   */
  orderByAggregate(agg: string, fieldName: string): any;
  /**
   * Sorts the aggregates in descending order based on the specified field. The field will
   * also be added to the group-by list.
   * @param name Name of the field.
   */
  orderByDesc(name: string): any;
  /**
   * Issues the query and gets the results.
   */
  query(): any;
  /**
   * Sets whether the results are to be grouped.
   * @param b When true the results are grouped.
   */
  setGroup(b: boolean): any;
}
declare class GlideApplicationProperty {
  /**
   * Returns the value for the specified application property and domain sys_id.
   * @param name Name of the application property to return.Note: If the application is not
   * global, you must prefix the name of the sys_application_property with the
   * application's scope.
   * @param domainSysId Optional. Sys_id of the domain associated with the application
   * property.Default: Session domain
   */
  getValue(name: string, domainSysId?: string): string;
  /**
   * Stores the specified value in the specified application property for the specified
   * domain, or the current session domain if not specified.
   * @param name Name of the application property to save.Note: If the application is not
   * global, you must prefix the name of the sys_application_property with the
   * application's scope.
   * @param value Value to store in the specified application property.
   * @param domainSysId Optional. Sys_id of the domain associated with the application
   * property.Default: Current session domain
   */
  setValue(name: string, value: string, domainSysId?: string): boolean;
}
declare class GlideCalendarDateTime {
  constructor();
  constructor(gcDT: GlideCalendarDateTime);
  constructor(dateTime: string);
  /**
   * Adds a GlideTime object to the current GlideCalendarDateTime object.
   * @param time Time to add.
   */
  add(time: GlideTime): any;
  /**
   * Adds a GlideTime object to the current GlideCalendarDateTime object.
   * @param milliseconds Number of milliseconds to add
   */
  add(milliseconds: number): any;
  /**
   * Adds a specified number of days to the current GlideCalendarDateTime object. A negative
   * parameter subtracts days.
   * @param days Number of days to add. Use a negative value to subtract.
   */
  addDaysLocalTime(days: number): any;
  /**
   * Adds a specified number of days to the current GlideCalendarDateTime object. A negative
   * parameter subtracts days.
   * @param days Number of days to add. Use a negative value to subtract.
   */
  addDaysUTC(days: number): any;
  /**
   * Adds a specified number of months to the current GlideCalendarDateTime object. A
   * negative parameter subtracts months.
   * @param months Number of months to add. Use a negative value to subtract.
   */
  addMonthsLocalTime(months: number): any;
  /**
   * Adds a specified number of months to the current GlideCalendarDateTime object. A
   * negative parameter subtracts months.
   * @param months Number of months to add. Use a negative number to subtract.
   */
  addMonthsUTC(months: number): any;
  /**
   * Adds a specified number of seconds to the GlideCalendarDateTime object.
   * @param seconds Number of seconds to add
   */
  addSeconds(seconds: number): any;
  /**
   * Adds a specified number of weeks to the current GlideCalendarDateTime object. A
   * negative parameter subtracts weeks.
   * @param weeks Number of weeks to add. Use a negative number to subtract.
   */
  addWeeksLocalTime(weeks: number): any;
  /**
   * Adds a specified number of weeks to the current GlideCalendarDateTime object. A
   * negative parameter subtracts weeks.
   * @param weeks Number of weeks to add. Use a negative number to subtract.
   */
  addWeeksUTC(weeks: number): any;
  /**
   * Adds a specified number of years to the current GlideCalendarDateTime object. A
   * negative parameter subtracts years.
   * @param years Number of years to add. To subtract use a negative value.
   */
  addYearsLocalTime(years: number): any;
  /**
   * Adds a specified number of years to the current GlideCalendarDateTime object. A
   * negative parameter subtracts years.
   * @param years Number of years to add. Use a negative value to subtract.
   */
  addYearsUTC(years: number): any;
  /**
   * Compares two date and time objects to determine whether one occurs before the other or
   * if they are equivalent.
   * @param dateTime Date time in a GlideCalendarDateTime object.
   */
  compareTo(dateTime: any): number;
  /**
   * Compares an object with an existing value for equality.
   * @param GCDT Object to compare. Can be a GlideCalendarDateTime object or a valid date time
   * string.
   */
  equals(GCDT: any): boolean;
  /**
   * Returns the date stored by the GlideCalendarDateTime object, expressed in the standard
   * format, yyyy-MM-dd, and the system time zone, UTC by default.
   */
  getDate(): GlideDate;
  /**
   * Returns the day of the month stored by the GlideCalendarDateTime object, expressed in
   * the current user's time zone.
   */
  getDayOfMonthLocalTime(): number;
  /**
   * Gets the day of the month stored by the GlideCalendarDateTime object, expressed in the
   * UTC time zone.
   */
  getDayOfMonthUTC(): number;
  /**
   * Returns the day of the week stored by the GlideCalendarDateTime object, expressed in
   * the user's time zone.
   */
  getDayOfWeekLocalTime(): number;
  /**
   * Returns the day of the week stored by the GlideCalendarDateTime object, expressed in
   * the UTC time zone.
   */
  getDayOfWeekUTC(): number;
  /**
   * Returns the number of days in the month stored by the GlideCalendarDateTime object,
   * expressed in the current user's time zone.
   */
  getDaysInMonthLocalTime(): number;
  /**
   * Returns the number of days in the month stored by the GlideCalendarDateTime object,
   * expressed in the UTC time zone.
   */
  getDaysInMonthUTC(): number;
  /**
   * Returns the date and time value in the current user's display format and time zone.
   * Referring to the GlideCalendarDateTime object directly returns the date and time value in the
   * GMT time zone.
   */
  getDisplayValue(): string;
  /**
   * Returns the display value in the internal format (yyyy-MM-dd HH:mm:ss).
   */
  getDisplayValueInternal(): string;
  /**
   * Returns the amount of time that daylight saving time is offset.
   */
  getDSTOffset(): number;
  /**
   * Returns the current error message.
   */
  getErrorMsg(): string;
  /**
   * Returns the object's time in the local time zone and in the internal
   * format.
   */
  getInternalFormattedLocalTime(): string;
  /**
   * Returns the date stored by the GlideCalendarDateTime object, expressed in the standard
   * format, yyyy-MM-dd, and the current user's time zone.
   */
  getLocalDate(): GlideDate;
  /**
   * Returns the month stored by the GlideCalendarDateTime object, expressed in the current
   * user's time zone.
   */
  getMonthLocalTime(): number;
  /**
   * Returns the month stored by the GlideCalendarDateTime object, expressed in the UTC time
   * zone.
   */
  getMonthUTC(): number;
  /**
   * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT.
   */
  getNumericValue(): number;
  /**
   * Returns the Unix duration stamp.
   */
  getTime(): GlideTime;
  /**
   * Returns the time zone offset in milliseconds.
   */
  getTZOffset(): number;
  /**
   * Returns the object's time in local time zone in the user's format.
   */
  getUserFormattedLocalTime(): string;
  /**
   * Returns the date and time value stored by the GlideCalendarDateTime object in the
   * internal format, yyyy-MM-dd HH:mm:ss, and the system time zone; UTC by default.
   */
  getValue(): string;
  /**
   * Returns the number of the week stored by the GlideCalendarDateTime object, expressed in
   * the current user's time zone.
   */
  getWeekOfYearLocalTime(): number;
  /**
   * Returns the number of the week stored by the GlideCalendarDateTime object, expressed in
   * the UTC time zone.
   */
  getWeekOfYearUTC(): number;
  /**
   * Returns the year stored by the GlideCalendarDateTime object, expressed in the current
   * user's time zone.
   */
  getYearLocalTime(): number;
  /**
   * Returns the year stored by the GlideCalendarDateTime object, expressed in the UTC time
   * zone.
   */
  getYearUTC(): number;
  /**
   * Determines if an object's date is set.
   */
  hasDate(): boolean;
  /**
   * Determines if the object's time uses a daylight saving offset
   */
  isDST(): boolean;
  /**
   * Determines if a value is a valid date and time.
   */
  isValid(): boolean;
  /**
   * Sets the day of the month to a specified value in the current user's time zone.
   * @param day Day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the
   * month.
   */
  setDayOfMonthLocalTime(day: number): any;
  /**
   * Sets the day of the month to a specified value in the UTC time zone.
   * @param day Day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the
   * month.
   */
  setDayOfMonthUTC(day: number): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param asDisplayed Date and time in the current user's display format and time zone. The
   * parameter must be formatted using the current user's preferred display format,
   * such as MM-dd-yyyy HH:mm:ss.
   * To assign the current date and time to a
   * variable in a workflow script, use
   * &lt;variable&gt;.setDisplayValue(gs.nowDateTime).
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param dateTime Date and time in the current user's time zone.
   * @param format Format to use to parse the dateTime parameter.
   */
  setDisplayValue(dateTime: string, format: string): any;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param dateTime Date and time in internal format
   */
  setDisplayValueInternal(dateTime: string): any;
  /**
   * Sets the date and time of the current object using an existing GlideCalendarDateTime
   * object.
   * @param gcDT GlideCalendarDateTime object
   */
  setGlideCalendarDateTime(gcDT: GlideCalendarDateTime): any;
  /**
   * Sets the month stored by the GlideCalendarDateTime object to a specified value using
   * the current user's time zone.
   * @param month Month to change to.
   */
  setMonthLocalTime(month: number): any;
  /**
   * Sets the month stored by the GlideCalendarDateTime object to a specified value using
   * the UTC time zone.
   * @param month Month to change to.
   */
  setMonthUTC(month: number): any;
  /**
   * Sets the date and time of the GlideCalendarDateTime object.
   * @param dateTime Date and time to use. This parameter may be one of several types.
   * A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss:
   * sets the value of the object to the specified date and time. Using the method
   * this way is equivalent to instantiating a new GlideCalendarDateTime object using the
   * GlideCalendarDateTime(value) constructor.
   * If the date and
   * time format used does not match the internal format, the method attempts to
   * set the date and time using other available formats. Resolving the date and
   * time this way can lead to inaccurate data due to ambiguity in the day and
   * month values. When using a non-standard date and time format, use
   * setValue(dt, format) instead.
   *
   *
   * A GlideCalendarDateTime object: sets the value of the object to the date and
   * time stored by the GlideCalendarDateTime passed in the parameter. Using the
   * method this way is equivalent to instantiating a new GlideCalendarDateTime
   * object using the GlideCalendarDateTime(g)
   * constructor.
   *
   *
   * A Java Date object: sets the value of the object using the value stored by the
   * Java Date object. Using the method this way is equivalent to passing the
   * value returned by the Java Date object getTime() to the
   * GlideCalendarDateTime setNumericValue() method. This method
   * does not accept JavaScript Date objects.
   *
   *
   * A JavaScript Number: sets the value of the object using the Number value as
   * milliseconds past January 1, 1970 00:00:00 GMT. Using the method this way is
   * equivalent to the setNumericValue(milliseconds)
   * method.
   *
   *
   * A Java Integer or Long: sets the value of the object using the Integer or Long
   * value as milliseconds past January 1, 1970 00:00:00 GMT. Using the method
   * this way is equivalent to the setNumericValue(milliseconds)
   * method.
   *
   *
   *
   */
  setValue(dateTime: any): any;
  /**
   * Sets a date and time value using the UTC time zone and the specified date and time
   * format.
   * @param dateTime Date and time to use.
   * @param format Format to use.
   */
  setValueUTC(dateTime: string, format: string): any;
  /**
   * Sets the year stored by the GlideCalendarDateTime object to a specified value using the
   * current user's time zone.
   * @param year Year to change to.
   */
  setYearLocalTime(year: number): any;
  /**
   * Sets the year stored by the GlideCalendarDateTime object to a specified value using the
   * UTC time zone.
   * @param year Year to change to.
   */
  setYearUTC(year: number): any;
  /**
   * Returns the duration difference between two GlideCalendarDateTime values.
   * @param start Start value.
   * @param end End value.
   */
  subtract(
    start: GlideCalendarDateTime,
    end: GlideCalendarDateTime,
  ): GlideDuration;
  /**
   * Returns the duration difference between two GlideCalendarDateTime values.
   * @param time Time to subtract.
   */
  subtract(time: GlideTime): any;
  /**
   * Returns the duration difference between two GlideCalendarDateTime values.
   * @param milliseconds Number of milliseconds to subtract.
   */
  subtract(milliseconds: number): any;
  /**
   * Returns the date and time value stored by the GlideCalendarDateTime object in the
   * internal format, yyyy-MM-dd HH:mm:ss, and the system time zone; UTC by default.
   */
  toString(): string;
}
declare class GlideDate {
  constructor();
  /**
   * Gets the date in the specified date format.
   * @param format Desired date format using Java SimpleDateFormat. For example,
   * "dd-MM-yyyy" to get the day, month, and year, or
   * "EEEE" to get the day of the week.
   */
  getByFormat(format: string): string;
  /**
   * Gets the day of the month stored by the GlideDate object, expressed in the UTC time
   * zone.
   */
  getDayOfMonthNoTZ(): number;
  /**
   * Gets the date in the current user's display format and time zone.
   */
  getDisplayValue(): string;
  /**
   * Gets the display value in the internal format (yyyy-MM-dd).
   */
  getDisplayValueInternal(): string;
  /**
   * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
   */
  getMonthNoTZ(): number;
  /**
   * Gets the date value stored in the database by the GlideDate object in the internal
   * format, yyyy-MM-dd, and the system time zone, UTC by default.
   */
  getValue(): string;
  /**
   * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
   */
  getYearNoTZ(): number;
  /**
   * Sets a date value using the current user's display format and time zone.
   * @param asDisplayed The date in the current user's display format and time zone. The parameter must
   * be formatted using the current user's preferred display format, such as yyyy-MM-dd.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the date of the current GlideDate object in internal format (yyyy-MM-dd) and the
   * system time zone (UTC by default).
   * @param o Date and time to set in the current GlideDate object.Format:
   * yyyy-MM-dd
   */
  setValue(o: string): any;
  /**
   * Gets the duration difference between two GlideDate values.
   * @param start The start value.
   * @param end The end value.
   */
  subtract(start: GlideDate, end: GlideDate): GlideDuration;
}
declare class GlideDateTime {
  constructor();
  constructor(g: GlideDateTime);
  constructor(value: string);
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param gd GlideTime object whose time value to add to the specified GlideDateTime
   * object.
   */
  add(gd: GlideTime): any;
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param milliseconds The number of milliseconds to add.
   */
  add(milliseconds: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts days using the local date and time
   * values.
   * @param days The number of days to add. Use a negative value to subtract.
   */
  addDaysLocalTime(days: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts days using the UTC date and time
   * values.
   * @param days The number of days to add. Use a negative number to subtract.
   */
  addDaysUTC(days: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months. The method determines the local date and time equivalent to the
   * value stored by the GlideDateTime object, then adds or subtracts months using the local date and
   * time values.
   * @param months The number of months to add. use a negative value to subtract.
   */
  addMonthsLocalTime(months: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts months using the UTC date and time
   * values.
   * @param months The number of months to add. Use a negative value to subtract.
   */
  addMonthsUTC(months: number): any;
  /**
   * Adds the specified number of seconds to the current GlideDateTime object.
   * @param seconds The number of seconds to add.
   */
  addSeconds(seconds: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts weeks using the local date and time
   * values.
   * @param weeks The number of weeks to add. Use a negative value to subtract.
   */
  addWeeksLocalTime(weeks: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts weeks using the UTC date and time
   * values.
   * @param weeks The number of weeks to add. Use a negative value to subtract.
   */
  addWeeksUTC(weeks: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts years using the local date and time
   * values.
   * @param years The number of years to add.  Use a negative value to subtract.
   */
  addYearsLocalTime(years: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years. The date and time value stored by GlideDateTime object is interpreted
   * as being in the UTC time zone.
   * @param years The number of years to add. Use a negative value to subtract.
   */
  addYearsUTC(years: number): any;
  /**
   * Determines if the GlideDateTime object occurs after the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  after(gdt: GlideDateTime): boolean;
  /**
   * Determines if the GlideDateTime object occurs before the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  before(gdt: GlideDateTime): boolean;
  /**
   * Compares two date and time objects to determine whether they are equivalent or one
   * occurs before or after the other.
   * @param o Date and time object in GlideDateTime format
   */
  compareTo(o: any): number;
  /**
   * Compares a datetime with an existing value for equality.
   * @param dateTime The datetime to compare.
   */
  equals(dateTime: GlideDateTime): boolean;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the system time zone, UTC by default.
   */
  getDate(): GlideDate;
  /**
   * Gets the day of the month stored by the GlideDateTime object, expressed in the current
   * user's time zone.
   */
  getDayOfMonthLocalTime(): number;
  /**
   * Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getDayOfMonthUTC(): number;
  /**
   * Gets the day of the week stored by the GlideDateTime object, expressed in the user's
   * time zone.
   */
  getDayOfWeekLocalTime(): number;
  /**
   * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getDayOfWeekUTC(): number;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the current user's time zone.
   */
  getDaysInMonthLocalTime(): number;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the UTC time zone.
   */
  getDaysInMonthUTC(): number;
  /**
   * Gets the date and time value in the current user's display format and time
   * zone.
   */
  getDisplayValue(): string;
  /**
   * Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).
   */
  getDisplayValueInternal(): string;
  /**
   * Gets the amount of time that daylight saving time is offset.
   */
  getDSTOffset(): number;
  /**
   * Gets the current error message.
   */
  getErrorMsg(): string;
  /**
   * Returns the object's time in the local time zone and in the internal
   * format.
   */
  getInternalFormattedLocalTime(): string;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the current user's time zone.
   */
  getLocalDate(): GlideDate;
  /**
   * Returns a GlideTime object that represents the time portion of the GlideDateTime object
   * in the user's time zone.
   */
  getLocalTime(): GlideTime;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getMonthLocalTime(): number;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the UTC time zone.
   */
  getMonthUTC(): number;
  /**
   * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
   */
  getNumericValue(): number;
  /**
   * Returns a GlideTime object that represents the time portion of the GlideDateTime
   * object.
   */
  getTime(): GlideTime;
  /**
   * Gets the time zone offset in milliseconds.
   */
  getTZOffset(): number;
  /**
   * Returns the object's time in the local time zone and in the user's format.
   */
  getUserFormattedLocalTime(): string;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
   */
  getValue(): string;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the
   * current user's time zone. All weeks begin on Sunday. The first week of the year is the week that
   * contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered
   * the first week of 2016 as that week contains January 1 and 2.
   */
  getWeekOfYearLocalTime(): number;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC
   * time zone. All weeks begin on Sunday. The first week of the year is the week that contains at
   * least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week
   * of 2016 as that week contains January 1 and 2.
   */
  getWeekOfYearUTC(): number;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getYearLocalTime(): number;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.
   */
  getYearUTC(): number;
  /**
   * Determines if an object's date is set.
   */
  hasDate(): boolean;
  /**
   * Determines if an object's time uses a daylight saving offset.
   */
  isDST(): boolean;
  /**
   * Determines if a value is a valid date and time.
   */
  isValid(): boolean;
  /**
   * Determines if the GlideDateTime object occurs on or after the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  onOrAfter(gdt: GlideDateTime): boolean;
  /**
   * Determines if the GlideDateTime object occurs on or before the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  onOrBefore(gdt: GlideDateTime): boolean;
  /**
   * Sets the day of the month to a specified value in the current user's time
   * zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the month.
   */
  setDayOfMonthLocalTime(day: number): any;
  /**
   * Sets the day of the month to a specified value in the UTC time zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the month.
   */
  setDayOfMonthUTC(day: number): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param asDisplayed The date and time in the current user's display format and time zone. The
   * parameter must be formatted using the current user's preferred display format, such
   * as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a
   * workflow script, use
   * variable.setDisplayValue(gs.nowDateTime);.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param value Date and time in the current user's time zone.
   * @param format Date and time format to use to parse the value parameter.
   * Use the following values to describe the value
   * parameter:
   * dd: Day of the month
   *
   * MM: Month of the year
   *
   * yyyy: Year
   *
   * HH: Hour
   *
   * mm: Minutes
   *
   * ss: Seconds
   *
   *
   *
   * For example: "dd-MM-yyyy HH:mm:ss" or "MM-dd-yyyy HH:mm".
   */
  setDisplayValue(value: string, format: string): any;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param value The date and time in internal format.
   */
  setDisplayValueInternal(value: string): any;
  /**
   * Sets the date and time of the current object using an existing GlideDateTime object.
   * This method is equivalent to instantiating a new object with a GlideDateTime
   * parameter.
   * @param g The object to use for setting the datetime value.
   */
  setGlideDateTime(g: GlideDateTime): any;
  /**
   * Sets the month stored by the GlideDateTime object to the specified value using the
   * current user's time zone.
   * @param month The month to change to.
   */
  setMonthLocalTime(month: number): any;
  /**
   * Sets the month stored by the GlideDateTime object to the specified value using the UTC
   * time zone.
   * @param month The month to change to.
   */
  setMonthUTC(month: number): any;
  /**
   * Sets the date and time of the GlideDateTime object.
   * @param o The date and time to use. This parameter may be one of several types:
   * A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss.
   * Sets the value of the object to the specified date and time. Using the method
   * this way is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(String value) constructor. If the date and time
   * format used does not match the internal format, the method attempts to set the
   * date and time using other available formats. Resolving the date and time this
   * way can lead to inaccurate data due to ambiguity in the day and month values.
   * When using a non-standard date and time format, use
   * setValueUTC(String dt, String format) instead.
   *
   * A GlideDateTime object. Sets the value of the object to the date and time
   * stored by the GlideDateTime passed in the parameter. Using the method this way
   * is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(GlideDateTime g) constructor.
   *
   * A JavaScript Number. Sets the value of the object using the Number value as
   * milliseconds past January 1, 1970 00:00:00 GMT.
   *
   *
   */
  setValue(o: string): any;
  /**
   * Sets a date and time value using the UTC time zone and the specified date and time
   * format. This method throws a runtime exception if the date and time format used in the
   * dt parameter does not match the format parameter.
   * You can retrieve the error message by calling getErrorMsg() on the
   * GlideDateTime object after the exception is caught.
   * @param dt The date and time to use.
   * @param format The date and time format to use.
   */
  setValueUTC(dt: string, format: string): any;
  /**
   * Sets the year stored by the GlideDateTime object to the specified value using the
   * current user's time zone.
   * @param year The year to change to.
   */
  setYearLocalTime(year: number): any;
  /**
   * Sets the year stored by the GlideDateTime object to the specified value using the UTC
   * time zone.
   * @param year The year to change to.
   */
  setYearUTC(year: number): any;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param Start The start value.
   * @param End The end value.
   */
  subtract(Start: GlideDateTime, End: GlideDateTime): GlideDuration;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param time The time value to subtract.
   */
  subtract(time: GlideTime): any;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param milliseconds The number of milliseconds to subtract.
   */
  subtract(milliseconds: number): any;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default. This method is equivalent to
   * getValue().
   */
  toString(): string;
}
declare class GlideDBFunctionBuilder {
  constructor();
  /**
   * Adds the values of two or more integer fields.
   */
  add(): any;
  /**
   * Builds the database function defined by the GlideDBFunctionBuilder object.
   */
  build(): any;
  /**
   * Concatenates the values of two or more fields.
   */
  concat(): any;
  /**
   * Defines a constant value to use in the function. If used with the
   * dayofweek() method, the string defines whether to use Sunday or Monday as
   * the first day of the week.
   * @param constant A constant value used in a function. When used with the
   * dayofweek() method, the value defines whether the week starts
   * on a Sunday or Monday.
   *
   *
   * 1: Week begins on Sunday.
   *
   * 2: Week begins on Monday.
   *
   *
   *
   *
   * This definition enables the dayofweek() method to return
   * the correct day of the week from a given date. If a value other than 1 or 2 is
   * provided, the dayofweek() method uses Sunday as the first day
   * of the week.
   */
  constant(constant: string): any;
  /**
   * Determines the duration using a given start date/time and end date/time.
   */
  datediff(): any;
  /**
   * Returns an integer representing the day of the week for a given date.
   */
  dayofweek(): number;
  /**
   * Divides the value of one integer field by another.
   */
  divide(): any;
  /**
   * Defines a field on which a SQL operation is performed.
   * @param field The field on which you are performing the SQL operation.
   */
  field(field: string): any;
  /**
   * Determines the number of code units in a field.
   */
  length(): any;
  /**
   * Multiplies the values of two integer fields.
   */
  multiply(): any;
  /**
   * Subtracts the value of one integer field from another.
   */
  subtract(): any;
}
declare class GlideDigest {
  constructor();
  /**
   * Create a message digest from a string using the MD5 algorithm. The output string is in
   * Base64.
   * @param source The source string.
   */
  getMD5Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the MD5 algorithm. The output string
   * is in Base64.
   * @param inputStream The source input stream.
   */
  getMD5Base64FromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the MD5 algorithm. The output string is in
   * hexadecimal.
   * @param source The source string.
   */
  getMD5Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the MD5 algorithm. The output string
   * is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getMD5HexFromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA1 algorithm. The output string is in
   * Base64.
   * @param source The source string.
   */
  getSHA1Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA1 algorithm. The output
   * string is in Base64.
   * @param inputStream The source input stream.
   */
  getSHA1Base64FromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA1 algorithm. The output string is in
   * hexadecimal.
   * @param source The source string.
   */
  getSHA1Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA1 algorithm. The output
   * string is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getSHA1HexFromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA256 algorithm. The output string is
   * in Base64.
   * @param source The source string.
   */
  getSHA256Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA256 algorithm. The output
   * string is in Base64.
   * @param inputStream The source input stream.
   */
  getSHA256Base64FromInputStream(
    inputStream: GlideScriptableInputStream,
  ): string;
  /**
   * Create a message digest from a string using the SHA256 algorithm. The output string is
   * in hexadecimal.
   * @param source The source string.
   */
  getSHA256Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA256 algorithm. The output
   * string is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getSHA256HexFromInputStream(inputStream: GlideScriptableInputStream): string;
}
declare class GlideDuration {
  constructor();
  constructor(another: GlideDuration);
  constructor(milliseconds: number);
  constructor(displayValue: string);
  /**
   * Adds the duration of the specified GlideDuration object to the current GlideDuration
   * object.
   * @param duration GlideDuration object that contains the duration value to add to the current
   * GlideDuration object.
   */
  add(duration: GlideDuration): GlideDuration;
  /**
   * Returns the duration value in the specified format.
   * @param format Duration format.
   */
  getByFormat(format: string): string;
  /**
   * Returns the number of days.
   */
  getDayPart(): number;
  /**
   * Returns the display value of the duration in number of days, hours, and
   * minutes.
   */
  getDisplayValue(): string;
  /**
   * Returns the duration value in "d HH:mm:ss" format.
   */
  getDurationValue(): string;
  /**
   * Returns the rounded number of days. If the time part is more than 12 hours, the return
   * value is rounded up. Otherwise, it is rounded down.
   */
  getRoundedDayPart(): number;
  /**
   * Returns the internal date/time value of the current GlideDuration object.
   */
  getValue(): string;
  /**
   * Sets the duration display value.
   * @param asDisplayed Display duration value to set.Format: d HH:mm:ss
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the internal date/time value of the GlideDuration object.
   * @param o Date and time to use as the endpoint for the calculated duration time.
   * Format: YYYY-MM-DD HH:mm:ss
   */
  setValue(o: any): any;
  /**
   * Subtracts the duration of the specified GlideDuration object to the current
   * GlideDuration object.
   * @param duration GlideDuration object that contains the duration value to subtract from the
   * current GlideDuration object.
   */
  subtract(duration: GlideDuration): GlideDuration;
}
declare class GlideElement {
  /**
   * Determines if the user's role permits the creation of new records in this
   * field.
   */
  canCreate(): boolean;
  /**
   * Indicates whether the user's role permits them to read the associated
   * GlideRecord.
   */
  canRead(): boolean;
  /**
   * Determines whether the user's role permits them to write to the associated
   * GlideRecord.
   */
  canWrite(): boolean;
  /**
   * Determines if the current field has been modified. This functionality is available for
   * all available data types, except Journal fields.
   */
  changes(): boolean;
  /**
   * Determines if the previous value of the current field matches the specified
   * object.
   * @param o An object value to check against the previous value of the current
   * field.
   */
  changesFrom(o: any): boolean;
  /**
   * Determines if the new value of a field, after a change, matches the specified
   * object.
   * @param o An object value to check against the new value of the current field.
   */
  changesTo(o: any): boolean;
  /**
   * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration
   * field. Does not require the creation of a GlideDateTime object because the duration field is
   * already a GlideDateTime object.
   */
  dateNumericValue(): number;
  /**
   * Returns the value of the specified attribute from the dictionary.
   * @param attributeName Attribute name
   */
  getAttribute(attributeName: string): string;
  /**
   * Returns the Boolean value of the specified attribute from the dictionary.
   * @param attributeName Attribute name
   */
  getBooleanAttribute(attributeName: string): boolean;
  /**
   * Returns the choice list for a specified field.
   * @param dependent Optional. Field within the associated record on which the choice list field
   * depends.
   */
  getChoices(dependent?: string): any[];
  /**
   * Returns the choice label for the current choice.
   */
  getChoiceValue(): string;
  /**
   * Returns the clear text value for Password (2 way encrypted) fields in scoped
   * applications.
   */
  getDecryptedValue(): string;
  /**
   * Gets the formatted display value of the field.
   * @param maxCharacters Optional: Maximum characters desired
   */
  getDisplayValue(maxCharacters?: number): string;
  /**
   * Returns the field's element descriptor.
   */
  getED(): void;
  /**
   * Returns the phone number in international format.
   */
  getGlobalDisplayValue(): string;
  /**
   * Returns the HTML value of a field.
   * @param maxChars Optional. Maximum number of characters to return.
   */
  getHTMLValue(maxChars?: number): string;
  /**
   * Returns either the most recent journal entry or all journal entries.
   * @param mostRecent If 1, returns the most recent entry. If -1, returns all journal
   * entries.
   */
  getJournalEntry(mostRecent: number): string;
  /**
   * Returns the object label.
   */
  getLabel(): string;
  /**
   * Returns the name of the field.
   */
  getName(): string;
  /**
   * Gets the table name for a reference element.
   */
  getReferenceTable(): string;
  /**
   * Returns a GlideRecord object for a given reference element.
   */
  getRefRecord(): GlideRecord;
  /**
   * Returns the name of the table on which the field resides.
   */
  getTableName(): string;
  /**
   * Determines if a field is null.
   */
  nil(): boolean;
  /**
   * Sets the value of a date/time element to the specified number of milliseconds since
   * January 1, 1970 00:00:00 GMT.
   * @param milliseconds Number of milliseconds since 1/1/1970
   */
  setDateNumericValue(milliseconds: number): any;
  /**
   * Sets the display value of the field.
   * @param value The value to set for the field.
   */
  setDisplayValue(value: any): any;
  /**
   * Adds an error message. Available in Fuji patch 3.
   * @param errorMessage The error message.
   */
  setError(errorMessage: string): any;
  /**
   * Sets the field to the specified phone number.
   * @param phoneNumber The phone number to set. This can be in either the international or local
   * format.
   * @param strict When true, specifies that the number specified must match the correct format.
   * When false, the system attempts to correct an improperly formatted phone
   * number.
   */
  setPhoneNumber(phoneNumber: any, strict: boolean): boolean;
  /**
   * Sets the value of a field.
   * @param value Object value to set the field to.
   */
  setValue(value: any): any;
  /**
   * Converts the value of a GlideRecord field to a string.
   */
  toString(): string;
}
declare class GlideElementCurrency2 {
  /**
   * Returns the currency value as entered by the user.
   */
  getAsEnteredDisplayValue(): string;
  /**
   * Returns the formatted currency string.
   */
  getDisplayValue(): string;
  /**
   * Returns the reference currency value.
   */
  getReferenceDisplayValue(): string;
  /**
   * Returns the currency value converted to the session currency.
   */
  getSessionDisplayValue(): string;
  /**
   * Sets the display value of a Currency2 field by parsing the displayValue
   * string.
   * @param displayValue The display value in the format "&lt;currency type&gt;;&lt;currency
   * amount&gt;" where the amount is formatted in the user's locale.
   */
  setDisplayValue(displayValue: string): any;
}
declare class GlideElementDescriptor {
  /**
   * Returns the encryption type used for attachments on the element's table.
   */
  getAttachmentEncryptionType(): string;
  /**
   * Returns the element's encryption type.
   */
  getEncryptionType(): string;
  /**
   * Returns the element's internal data type.
   */
  getInternalType(): string;
  /**
   * Returns the element's label.
   */
  getLabel(): string;
  /**
   * Returns the element's length.
   */
  getLength(): number;
  /**
   * Returns the element's name.
   */
  getName(): string;
  /**
   * Returns the element's plural label.
   */
  getPlural(): string;
  /**
   * Returns true if an encrypted attachment has been added to the table.
   */
  hasAttachmentsEncrypted(): boolean;
  /**
   * Returns true if the element is an automatically generated or system field.
   */
  isAutoOrSysID(): boolean;
  /**
   * Returns true if the element is defined as a dropdown choice in its dictionary
   * definition.
   */
  isChoiceTable(): boolean;
  /**
   * Returns true if an element is encrypted.
   */
  isEdgeEncrypted(): boolean;
  /**
   * Determines whether the element is mandatory and must contain a value before the record
   * can be saved.
   */
  isMandatory(): boolean;
  /**
   * Returns true if the element is a virtual element.
   */
  isVirtual(): boolean;
}
declare class GlideEmailOutbound {
  constructor();
  /**
   * Adds the address to either the cc or bcc list.
   * @param type Either cc or bcc, determines the list to which the address is added.
   * @param address The recipient's email address.
   */
  addAddress(type: string, address: string): any;
  /**
   * Adds the address to either the cc or bcc list.
   * @param type Either cc or bcc, determines the list to which the address is added.
   * @param address The recipient's email address.
   * @param displayName The name to be shown instead of the email address.
   */
  addAddress(type: string, address: string, displayName: string): any;
  /**
   * Returns the email's subject line.
   */
  getSubject(): string;
  /**
   * Returns the email's watermark.
   */
  getWatermark(): string;
  /**
   * Sets the body of the email.
   * @param bodyText The body of the email.
   */
  setBody(bodyText: string): any;
  /**
   * Sets the sender's address.
   * @param address The sender's email address.
   */
  setFrom(address: string): any;
  /**
   * Sets the reply to address.
   * @param address The reply to email address.
   */
  setReplyTo(address: string): any;
  /**
   * Sets the email's subject line.
   * @param subject Text for the subject line.
   */
  setSubject(subject: string): any;
}
declare class GlideFilter {
  constructor(filter: string, title: string);
  /**
   * Compares a specified filter to the contents of a specified GlideRecord.
   * @param now_GR GlideRecord to evaluate.
   * @param filter Encoded query string in standard Glide format.
   * See Encoded query
   * strings.To exclude null values from GlideFilter query results, add
   * ISNOTEMPTY to the query condition.
   * Note: The filter values
   * are case-sensitive. In addition, you cannot use setCaseSensitive(false) to change the change the
   * case-sensitive value.
   * @param match Optional. Flag that indicates whether all conditions must be met if the
   * filter parameter contains multiple conditions. Valid
   * values:
   *
   * true: All conditions must be met for the method to return true.
   *
   * false: Only one of the conditions must be met for the method to return
   * true.
   *
   *
   * Default: true
   */
  checkRecord(now_GR: GlideRecord, filter: string, match?: boolean): boolean;
  /**
   * Evaluates a filter against a specified GlideRecord.
   * @param now_GR GlideRecord to evaluate.
   * @param match Flag that indicates whether all filter conditions must match.
   *
   * Valid values:
   * true: All filter conditions must match.
   *
   * false: Filter condition match is not required.
   *
   *
   *
   *
   * Default: false
   */
  match(now_GR: GlideRecord, match: boolean): boolean;
  /**
   * Enables or disables case-sensitive filter results.
   * @param caseSensitive Flag that indicates whether the filter is case-sensitive.Valid values:
   * true: The filter is case-sensitive.
   *
   * false: The filter is case-insensitive.
   *
   *
   *
   * Default: true
   */
  setCaseSensitive(caseSensitive: boolean): any;
}
declare class GlideFormScratchpad {}
declare var g_scratchpad = new GlideFormScratchpad();
declare class GlideImportLog {
  constructor(importSetRun?: GlideImportSetRun, source?: string);
  /**
   * Logs a message of type Error to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  error(message: string, source?: string): any;
  /**
   * Returns a sys_id of the Import Run record associated with this Import Log.
   */
  getImportRunHistory(): string;
  /**
   * Logs a message of type Info to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  info(message: string, source?: string): any;
  /**
   * Associates the GlideImportLog object with a specific Import Set Run record.
   * @param importRunHistory The sys_id of a record from the Transform History [sys_import_set_run]
   * table.
   */
  setImportRunHistory(importRunHistory: string): any;
  /**
   * Logs a message of type Warn to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  warn(message: string, source?: string): any;
}
declare class GlideImportSetRun {
  constructor(importSetID?: string);
  /**
   * Gets the sys_id of the Import Set Run associated with the transformation.
   */
  getImportSetRunSysID(): string;
}
declare class GlideImportSetTransformer {
  constructor();
  /**
   * Gets the Import Set Run object associated with a GlideImportSetTransformer
   * object.
   */
  getImportSetRun(): GlideImportSetRun;
  /**
   * Returns a Boolean value specifying whether or not there was an error during a
   * transformation.
   */
  isError(): boolean;
  /**
   * Associates an Import Set record with a specific GlideImportSetTransformer
   * object.
   * @param id The sys_id of an Import Set record from the Import Sets [sys_import_set]
   * table.
   */
  setImportSetID(id: string): any;
  /**
   * Associates an Import Set Run object with a specific GlideImportSetTransformer
   * object.
   * @param importSetRun GlideImportSetRun object representing the ImportSetRun record to track the
   * transformation history.
   */
  setImportSetRun(importSetRun: GlideImportSetRun): any;
  /**
   * Associates a GlideImportLog object with a specific GlideImportSetTransformer
   * object.
   * @param log GlideImportLog object to link to the Import Set history. Once set, any call
   * from the GlideImportLog object is associated with the Import Set run history for
   * that specific transform.
   */
  setLogger(log: GlideImportLog): any;
  /**
   * Associates a Transform Map with a specific GlideImportSetTransformer
   * object.
   * @param mapID A sys_id from the Table Transform Maps [sys_transform_map] table.
   */
  setMapID(mapID: string): any;
}
declare class GlideLocale {
  /**
   * Returns the GlideLocale object.
   */
  get(): GlideLocale;
  /**
   * Returns the decimal separator.
   */
  getDecimalSeparator(): string;
  /**
   * Returns the grouping separator.
   */
  getGroupingSeparator(): string;
}
declare class GlidePluginManager {
  /**
   * Determines if the specified plugin has been activated.
   * @param pluginID Unique plugin identifier.
   */
  isActive(pluginID: string): boolean;
}
declare class GlideQuery {
  constructor(table: string);
  /**
   * Aggregates a field using a specified aggregation function.
   * @param aggregateType The type of aggregation function to perform. Options include:
   *
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   *
   * @param field Field on which to perform the operation.
   */
  aggregate(aggregateType: string, field: string): GlideQuery;
  /**
   * Returns the aggregate average of a given numeric field.
   * @param field Field on which to perform the operation.
   */
  avg(field: string): any;
  /**
   * Returns the number of records that match the query.
   */
  count(): number;
  /**
   * Deletes all records in the table specified by the preceding Where clauses.
   */
  deleteMultiple(): any;
  /**
   * Disables updating system fields, or fields with a name that starts with the
   * sys prefix, such as sys_created_on, sys_updated_on, and sys_mod_count. Only
   * applies to the specified query.
   */
  disableAutoSysFields(): GlideQuery;
  /**
   * Disables any business rules, flows, workflows, or audit records that would run or be
   * created as the result of the query.
   */
  disableWorkflow(): GlideQuery;
  /**
   * Forces a database update even when no record changes are made. For example, you can use
   * this method to force a business rule to execute.
   */
  forceUpdate(): GlideQuery;
  /**
   * Returns a single record from the query.
   * @param key Sys_id of the record to return.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  get(key: string, selectedFields?: any[]): any;
  /**
   * Returns an Optional object containing a single record based on a set of name-value
   * pairs to query by. Assumes the '=' operator for each name-value pair.
   * @param keyValues Object where the keys are the name of the fields, and the values are the values
   * to query for.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  getBy(keyValues: any, selectedFields?: any[]): any;
  /**
   * Groups the query results by a designated field or fields.
   * @param fields Field or fields to group the results by.
   */
  groupBy(fields: string): GlideQuery;
  /**
   * Filters aggregate groups so that you can display only groups of results that match a
   * specified condition.
   * @param aggregateType The type of aggregation function to perform. Options include:
   *
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   *
   * @param field Field on which to perform the operation.
   * @param operator Numeric operator to use in the operation. Options include:
   * &gt;: Greater than.
   *
   * &lt;: Less than.
   *
   * &gt;=: Greater than or equal to.
   *
   * &lt;=: Less than or equal to.
   *
   * =: Equal to.
   *
   * !=: Not equal to.
   *
   *
   *
   * @param value Number value to use in the operation.
   */
  having(
    aggregateType: string,
    field: string,
    operator: string,
    value: number,
  ): GlideQuery;
  /**
   * Inserts a record and returns an Optional object containing the record.
   * @param keyValues Object containing name-value pairs to insert into the record. Unspecified
   * fields will be null.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  insert(keyValues: any, selectedFields?: any[]): any;
  /**
   * Updates an existing record, or inserts a new record if one does not already exist.
   * @param changes Object containing name-value pairs to update or insert into the record.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  insertOrUpdate(changes: any, selectedFields?: any[]): any;
  /**
   * Limits the number of records returned in a query.
   * @param limit Number of records to return.
   */
  limit(limit: number): GlideQuery;
  /**
   * Returns the aggregate maximum of a given field.
   * @param field Field on which to perform the operation.
   */
  max(field: string): any;
  /**
   * Returns the aggregate minimum of a given field.
   * @param field Field on which to perform the operation.
   */
  min(field: string): any;
  /**
   * Orders the returned result in ascending order by a given field.
   * @param fields Comma-delimited fields to order the result by in ascending order.
   */
  orderBy(fields: string): GlideQuery;
  /**
   * Orders the returned result in descending order by a given field.
   * @param fieldOrAggregate If the query does not use the aggregate() method, pass the
   * field to order the results by. If the query uses the
   * aggregate() method, pass the type of aggregation function to
   * perform.
   * Options include:
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   * @param field Optional. Field to order the result by in descending order. Required for
   * queries using the aggregate() method.
   */
  orderByDesc(fieldOrAggregate: string, field?: string): GlideQuery;
  /**
   * Adds an OR clause to a query that returns values based on a given condition.
   * @param fieldOrQuery Field or another GlideQuery object used in the where clause. If passing a
   * field, you can dot-walk to a desired value. For example,
   * 'company.name'.
   * @param operator Optional. Operator used in the OR clause. If you do not pass an argument, the
   * system uses the = operator. You do not need to include a placeholder value.
   * @param value Value used in the OR clause.
   */
  orWhere(
    fieldOrQuery: string,
    operator: string | undefined,
    value: any,
  ): GlideQuery;
  /**
   * Adds an OR clause that returns records that do not contain a null value in a given
   * field.
   * @param field Field used in the query.
   */
  orWhereNotNull(field: string): GlideQuery;
  /**
   * Adds an OR clause to a query that returns records that contain a null value in a given
   * field.
   * @param field Field used in the query.
   */
  orWhereNull(field: string): GlideQuery;
  /**
   * Returns the results of the query as a Stream object containing specified fields.
   * @param fields Optional. Fields to display in the result. You can provide any number of
   * fields as arguments, dot-walk to a desired value, or use a flag. For example:
   * select('first_name', 'location.city', 'company$DISPLAY');orselect(['first_name', 'location.city', 'company$DISPLAY']);Default:
   * The system always returns the sys_id.
   */
  select(fields?: string): any;
  /**
   * Returns the result of the query as an Optional object containing specified fields.
   * @param fields Optional. Fields to display in the result. You can provide any number of fields
   * as arguments, dot-walk to a desired value, or use a flag. For example:
   * selectOne('first_name', 'location.city', 'company$DISPLAY');orselectOne(['first_name', 'location.city', 'company$DISPLAY']);Default:
   * The system always returns the sys_id.
   */
  selectOne(fields?: string): any;
  /**
   * Returns the aggregate sum of a given numeric field.
   * @param field Field on which to perform the operation.
   */
  sum(field: string): any;
  /**
   * Returns a GlideRecord object that represents the current query. Returns a
   * GlideAggregrate object if the query uses the GlideQuery.aggregate() method.
   */
  toGlideRecord(): any;
  /**
   * Updates an existing record that matches the defined conditions.
   * @param changes Object containing name-value pairs to update in the record. Names must match
   * fields in the table.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  update(changes: any, selectedFields?: any[]): any;
  /**
   * Updates all existing records that match the defined conditions. Returns the number of
   * records updated.
   * @param changes Object containing name-value pairs to update in the record. Names must match
   * fields in the table.
   */
  updateMultiple(changes: any): any;
  /**
   * Adds a Where clause to the query that returns values based on a given
   * condition.
   * @param fieldOrQuery Field or another GlideQuery object used in the where clause. If passing a
   * field, you can dot-walk to a desired value. For example,
   * 'company.name'.
   * @param operator Optional. Operator used in the where clause. If you do not pass an argument,
   * the system uses the = operator.
   * @param value Value used in the where clause.
   */
  where(
    fieldOrQuery: string,
    operator: string | undefined,
    value: any,
  ): GlideQuery;
  /**
   * Returns records that do not contain a null value in a given field.
   * @param field Field used in the query.
   */
  whereNotNull(field: string): GlideQuery;
  /**
   * Returns records that contain a null value in a given field.
   * @param field Field used in the query.
   */
  whereNull(field: string): GlideQuery;
  /**
   * Executes the query using the GlideRecordSecure API to securely query
   * the database while honoring ACLs.
   */
  withAcls(): GlideQuery;
}
declare class GlideQueryCondition {
  /**
   * Adds an AND condition to the current condition.
   * @param name The name of a field.
   * @param oper (Optional) The operator for the query. If you do not specify an operator, the
   * condition uses an equals operator.
   * @param value The value to query on.
   */
  addCondition(
    name: string,
    oper: string | undefined,
    value: any,
  ): GlideQueryCondition;
  /**
   * Appends a two-or-three parameter OR condition to an existing
   * GlideQueryCondition.
   * @param name Field name
   * @param oper (Optional) Query operator. The available values are dependent on the data
   * type of the value parameter.Numbers:
   * =
   *
   * !=
   *
   * &gt;
   *
   * &gt;=
   *
   * &lt;
   *
   * &lt;=
   *
   *
   *
   * Strings (must be in upper case):
   * =
   *
   * !=
   *
   * IN
   *
   * STARTSWITH
   *
   * ENDSWITH
   *
   * CONTAINS
   *
   * DOESNOTCONTAIN
   *
   *
   *
   * @param value Value on which to query (not case-sensitive).Note: All passed in arrays must
   * contain a minimum of two elements. Single element arrays are not
   * supported.
   */
  addOrCondition(
    name: string,
    oper: string | undefined,
    value: any,
  ): GlideQueryCondition;
}
declare class GlideRecord {
  constructor(tableName: string);
  /**
   * Adds a filter to return active records.
   */
  addActiveQuery(): GlideQueryCondition;
  /**
   * Adds an encoded query to other queries that may have been set.
   * @param query An encoded query
   * string.
   */
  addEncodedQuery(query: string): any;
  /**
   * Applies a pre-defined GlideDBFunctionBuilder object to a record.
   * @param _function GlideDBFunctionBuilder object that defines a SQL operation.
   */
  addFunction(_function: any): any;
  /**
   * Adds a filter to return records based on a relationship in a table related to the
   * current GlideRecord.
   * @param joinTable Name of table to use in the join, such as
   * 'incident'.
   * @param primaryField Optional. Name of the field in the GlideRecord to use to join the field
   * specified in the joinTableField parameter.Default:
   * sys_id
   * @param joinTableField Optional. Name of the field in the table specified in
   * joinTable to use to join the tables.Default: First field
   * in the table specified in joinTable that is a reference field
   * to the current GlideRecord table.
   */
  addJoinQuery(
    joinTable: string,
    primaryField?: string,
    joinTableField?: string,
  ): GlideQueryCondition;
  /**
   * A filter that specifies records where the value of the field passed in the parameter is
   * not null.
   * @param fieldName The name of the field to be checked.
   */
  addNotNullQuery(fieldName: string): GlideQueryCondition;
  /**
   * Adds a filter to return records where the value of the specified field is
   * null.
   * @param fieldName The name of the field to be checked.
   */
  addNullQuery(fieldName: string): GlideQueryCondition;
  /**
   * Build a search query and return the rows that match the request.
   * @param name Table field name. If you are not querying a table field, use these reserved
   * variables:
   * 123TEXTQUERY321: Adds a search term to the query. Use this option to return
   * matching values from any field in the table. Use the term you want to query as
   * the value.
   *
   * 123TEXTINDEXGROUP321: Adds a text index group to the query. Use the name of
   * the text index group from the Text Index Groups [ts_index_group] table you want
   * to query as the value. For more information about text index groups, see Configure multiple tables
   * for indexing and searching.
   *
   *
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(name: string, value: any): GlideQueryCondition;
  /**
   * Build a search query and return the rows that match the request.
   * @param name Table field name.
   * @param operator Query operator. The available values are dependent on the data type of the
   * value parameter.Numbers:
   * =
   *
   * !=
   *
   * &gt;
   *
   * &gt;=
   *
   * &lt;
   *
   * &lt;=
   *
   *
   *
   * Strings (must be in upper case):
   * =
   *
   * !=
   *
   * IN
   *
   * NOT IN
   *
   * STARTSWITH
   *
   * ENDSWITH
   *
   * CONTAINS
   *
   * DOES NOT CONTAIN
   *
   * INSTANCEOF
   *
   *
   *
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(name: string, operator: string, value: any): GlideQueryCondition;
  /**
   * Build a search query and return the rows that match the request.
   * @param query An encoded query string
   *
   * .
   */
  addQuery(query: string): GlideQueryCondition;
  /**
   * Provides atomic add and subtract operations on a specified number field at the database
   * level for the current GlideRecord object.
   * @param field The name of the field in this GlideRecord to modify. If the associated field
   * is not a numeric type, the operation is ignored.
   * @param value The amount to add to the value when the record is saved. To perform a
   * subtraction operation, simply pass a negative value.
   */
  addValue(field: string, value: number): any;
  /**
   * Sets the values of the specified encoded query terms and applies them to the current
   * GlideRecord.
   * @param queryString Encoded query to apply to the current GlideRecord.
   */
  applyEncodedQuery(queryString: string): any;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit
   * inserting new records in this table.
   */
  canCreate(): boolean;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit deleting
   * records in this table.
   */
  canDelete(): boolean;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit reading
   * records in this table.
   */
  canRead(): boolean;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit editing
   * records in this table.
   */
  canWrite(): boolean;
  /**
   * Sets a range of rows to be returned by subsequent queries.
   * @param firstRow First row to include. Because the index starts at 0, a value of 0 returns the
   * first row.
   * @param lastRow 0-based row number of the first row NOT to return. Behaves similar to Java's
   * String.substring(a,b) method. For example, if
   * lastRow = 4 and firstRow = 2, two
   * records are returned (4-2).
   * @param forceCount Optional. Flag that indicates whether to force a row count query. In most
   * implementations of this call, the row count is performed. There are some outlying
   * cases, such as text searches, were a row count is not performed. Setting this flag
   * ensures that the row count occurs.Valid values:
   * true: Row count always occurs.
   *
   * false: Row count occurs if implemented in normal execution of method.
   *
   *
   *
   * Default: false
   */
  chooseWindow(firstRow: number, lastRow: number, forceCount?: boolean): any;
  /**
   * Deletes multiple records that satisfy the query condition.
   */
  deleteMultiple(): any;
  /**
   * Deletes the current record.
   */
  deleteRecord(): boolean;
  /**
   * Returns the specified record in the current GlideRecord object.
   * @param name Optional. Name of the instantiated GlideRecord column to search for the
   * specified value parameter. If only a single parameter is passed
   * in, the method assumes that this parameter is the sys_id or display value.
   * @param value Value to match.
   */
  get(name: any | undefined, value: any): boolean;
  /**
   * Returns the dictionary attributes for the specified field.
   * @param fieldName Field name for which to return the dictionary attributes
   */
  getAttribute(fieldName: string): string;
  /**
   * Returns the current table's label.
   */
  getClassDisplayValue(): string;
  /**
   * Retrieves the display value for the current record.
   */
  getDisplayValue(): string;
  /**
   * Returns the element's descriptor.
   */
  getED(): GlideElementDescriptor;
  /**
   * Retrieves the GlideElement object for the specified field.
   * @param fieldName Column name for which to return the GlideElement object.
   */
  getElement(fieldName: string): GlideElement;
  /**
   * Returns an array of GlideElement objects. Each object describes a field in the current
   * GlideRecord.
   */
  getElements(): any[];
  /**
   * Retrieves the query condition of the current result set
   * as an encoded query string.
   */
  getEncodedQuery(): string;
  /**
   * Returns the field's label.
   */
  getLabel(): string;
  /**
   * Retrieves the last error message. If there is no last error message, null is returned.
   */
  getLastErrorMessage(): string;
  /**
   * Retrieves the link to the current record.
   * @param noStack Flag indicating whether to append the sysparm_stack parameter to the returned
   * link. This parameter specifies the page to visit after closing the current link.
   * Valid values:
   * true: Do not attach the sysparm_stack parameter.
   *
   * false: Attach the sysparm_stack parameter.
   *
   *
   *
   * If true, the sysparm_stack parameter is not appended to the link.
   */
  getLink(noStack: boolean): string;
  /**
   * Retrieves the class name for the current record.
   */
  getRecordClassName(): string;
  /**
   * Retrieves the number of rows in the query result.
   */
  getRowCount(): number;
  /**
   * Retrieves the name of the table associated with the GlideRecord.
   */
  getTableName(): string;
  /**
   * Gets the primary key of the record, which is usually the sys_id unless otherwise
   * specified.
   */
  getUniqueValue(): string;
  /**
   * Retrieves the string value of an underlying element in a field.
   * @param name The name of the field to get the value from.
   */
  getValue(name: string): string;
  /**
   * Determines if there are any more records in the GlideRecord object.
   */
  hasNext(): boolean;
  /**
   * Creates an empty record suitable for population before an insert.
   */
  initialize(): any;
  /**
   * Inserts a new record using the field values that have been set for the current record.
   */
  insert(): string;
  /**
   * Checks to see if the current database action is to be aborted.
   */
  isActionAborted(): boolean;
  /**
   * Verifies whether the specified encoded query is valid.
   * @param query Encoded query to validate. See Encoded query
   * strings.
   */
  isEncodedQueryValid(query: string): boolean;
  /**
   * Checks if the current record is a new record that has not yet been inserted into the
   * database.
   */
  isNewRecord(): boolean;
  /**
   * Determines if the current table is valid or if the record was successfully
   * retrieved.
   */
  isValid(): boolean;
  /**
   * Determines if the specified field is defined in the current table.
   * @param columnName The name of the field.
   */
  isValidField(columnName: string): boolean;
  /**
   * Determines if a record was actually returned by the query/get record
   * operation.
   */
  isValidRecord(): boolean;
  /**
   * Creates a new GlideRecord record, sets the default values for the fields, and assigns a
   * unique ID to the record.
   */
  newRecord(): any;
  /**
   * Moves to the next record in the GlideRecord object.
   */
  next(): boolean;
  /**
   * Retrieves the current operation being performed, such as insert, update, or delete.
   */
  operation(): string;
  /**
   * Specifies an orderBy column.
   * @param name Column name to use to order the records in this GlideRecord object.
   */
  orderBy(name: string): any;
  /**
   * Specifies a descending orderBy column.
   * @param name Column name to use to order the records in a GlideRecord object.
   */
  orderByDesc(name: string): any;
  /**
   * Runs a query against the table based on the filters specified
   * by query methods such as addQuery() and
   * addEncodedQuery().
   * @param name Optional - must also specify value parameter. Name of the field to search for
   * the value specified in the value parameter.
   * Note: This method is typically run without arguments, but you can specify a
   * name-value pair to filter records containing the specified values. If the
   * parameters are specified, the "name=value" condition is added to the
   * query.
   *
   *
   * @param value Optional - must also specify field parameter. Value to search for in the
   * specified field parameter.
   */
  query(name?: string, value?: string): any;
  /**
   * Sets a flag to indicate if the next database action (insert, update, delete) is to be
   * aborted. This is often used in business rules.
   * @param b True to abort the next action. False if the action is to be allowed.
   */
  setAbortAction(b: boolean): any;
  /**
   * Sets the limit for number of records are fetched by the GlideRecord query.
   * @param maxNumRecords The maximum number of records to fetch.
   */
  setLimit(maxNumRecords: number): any;
  /**
   * Sets the sys_id value for the current record.
   * @param guid GUID to assign to the current record.
   */
  setNewGuidValue(guid: string): any;
  /**
   * Sets the value of the field with the specified name to the specified value.
   * @param name Name of the field.
   * @param value The value to assign to the field.
   */
  setValue(name: string, value: any): any;
  /**
   * Enables or disables the running of business rules, script engines, and
   * audit.
   * @param enable If true (default), enables business rules. If false, disables business
   * rules.
   */
  setWorkflow(enable: boolean): any;
  /**
   * Updates the GlideRecord with any changes that have been made. If the record does not
   * already exist, it is inserted.
   * @param reason Optional. Reason for the update. The reason appears in the audit
   * record.
   */
  update(reason?: string): string;
  /**
   * Updates each GlideRecord in a stated query with a specified
   * set of changes.
   */
  updateMultiple(): any;
  /**
   * Moves to the next record in the GlideRecord. Provides the same functionality as
   * next(), use this method if the GlideRecord has a column named
   * next.
   */
  _next(): boolean;
  /**
   * Runs a query against the table based on the filters specified
   * by query methods such as addQuery() and
   * addEncodedQuery().
   * This method is intended to be used on tables in which
   * there is a column named "query", which might cause errors running the query()
   * method.
   * @param name Optional - must also specify value parameter. Name of the field to search for
   * the value specified in the value parameter.
   * Note: This method is typically run without arguments, but you can specify a
   * name-value pair to filter records containing the specified values. If the
   * parameters are specified, the "name=value" condition is added to the
   * query.
   *
   *
   * @param value Optional - must also specify field parameter. Value to search for in the
   * specified field parameter.
   */
  _query(name?: string, value?: string): any;
}
declare class GlideSchedule {
  constructor();
  constructor(sysID: string, timeZone?: string);
  /**
   * Adds a new schedule segment to the current schedule.
   * @param startDate The starting date of the new schedule segment.
   * @param offSet The time offset of the new schedule segment.
   */
  add(startDate: GlideDateTime, offSet: GlideDuration): GlideDateTime;
  /**
   * Determines the elapsed time in the schedule between two date time values using the
   * timezone of the schedule or, if that is not specified, the timezone of the session.
   * @param startDate The starting datetime.
   * @param endDate The ending datetime.
   */
  duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;
  /**
   * Retrieves the schedule name.
   */
  getName(): string;
  /**
   * Determines if the specified date and time is within the current schedule.
   * @param time Date and time value to check.
   */
  isInSchedule(time: GlideDateTime): boolean;
  /**
   * Determines if the current schedule is valid. A schedule is valid if it has at least one
   * schedule span.
   */
  isValid(): boolean;
  /**
   * Loads a schedule with the schedule information.
   * @param sysID The system ID of the schedule.
   * @param timeZone (Optional) The timezone. If a timezone is not specified, or is nil, the current
   * session timezone is used for the schedule.
   * @param excludeSpanID Any span to exclude.
   */
  load(sysID: string, timeZone: string | undefined, excludeSpanID: string): any;
  /**
   * Sets the timezone for the current schedule.
   * @param timeZone The timezone.
   */
  setTimeZone(timeZone: string): any;
  /**
   * Determines how much time (in milliseconds) until start time of the next schedule
   * item.
   * @param time Time to be evaluated
   * @param timeZone Timezone
   */
  whenNext(time: GlideDateTime, timeZone: string): number;
}
declare class GlideScopedEvaluator {
  constructor();
  /**
   * Evaluates a script from a GlideRecord field.
   * @param grObj The GlideRecord containing a script expression.
   * @param scriptField (Optional) The name of the field containing the script expression.
   * @param variables (Optional) A map of variables with name-value pairs. These variables are
   * available to the script during execution of this method.
   */
  evaluateScript(
    grObj: GlideRecord,
    scriptField?: string,
    variables?: any,
  ): any;
  /**
   * Returns a variable from a GlideScopedEvaluator object.
   * @param name The name of the variable.
   */
  getVariable(name: string): any;
  /**
   * Puts a variable into the GlideScopedEvaluator object. These variables are available to
   * the script that this GlideScopedEvaluator object runs.
   * @param name The name of the variable.
   * @param value The value of the variable.
   */
  putVariable(name: string, value: any): any;
}
declare class GlideScriptableInputStream {}
declare class GlideScriptedProcessor {
  /**
   * Redirects to the specified URL.
   * @param url Destination URL
   */
  redirect(url: string): any;
  /**
   * Encodes an object as a JSON string and writes it to the current URL.
   * @param o The object to encode to a JSON string.
   */
  writeJSON(o: any): any;
  /**
   * Writes the specified string to the current URL in the specified
   * character-encoding.
   * @param contentType Sets the content type of the response sent to the client, if the response has
   * not been committed, and may include a character-encoding specification.
   * @param s The string to write.
   */
  writeOutput(contentType: string, s: string): any;
  /**
   * Writes the specified string to the current URL in the specified
   * character-encoding.
   * @param s The string to write.
   */
  writeOutput(s: string): any;
}
declare class GlideSecureRandomUtil {
  /**
   * Generates a pseudo-random integer.
   */
  getSecureRandomInt(): number;
  /**
   * Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value
   * that you pass into the method.
   * @param bound The bound value.
   */
  getSecureRandomIntBound(bound: number): number;
  /**
   * Generates pseudo-random long value.
   */
  getSecureRandomLong(): number;
  /**
   * Generates a random alpha-numeric String with the specified length.
   * @param length The length of the string in number of characters.
   */
  getSecureRandomString(length: number): string;
}
declare class GlideSecurityUtils {
  /**
   * Removes suspicious encoding to prevent reflected or DOM based cross site
   * scripting.
   * @param url The URL to be checked.
   */
  cleanURL(url: string): string;
  /**
   * Removes the domain address from the URL, which leaves the page name and
   * parameters.
   * @param url The URL to be turned into a relative URL.
   */
  enforceRelativeURL(url: string): string;
  /**
   * Add escape characters to a script.
   * @param script The script to have escape characters added.
   */
  escapeScript(script: string): string;
  /**
   * Check the specified URL against the system defined white list.
   * @param url The URL to be checked against the URL white list.
   */
  isURLWhiteListed(url: string): boolean;
}
declare class GlideServletRequest {
  /**
   * Returns the MIME type of the body of the request.
   */
  getContentType(): string;
  /**
   * Returns the header value.
   * @param name The name of the header to be retrieved.
   */
  getHeader(name: string): string;
  /**
   * Returns a comma-separated list of header names.
   */
  getHeaderNames(): string;
  /**
   * Returns the header values.
   * @param name Names of the headers to be retrieved.
   */
  getHeaders(name: string): string;
  /**
   * Returns the value of the parameter contained in the request URL.
   * @param name The name of the parameter to be retrieved. This can be the parameter endpoint
   * from the processor form.
   */
  getParameter(name: string): string;
  /**
   * Returns an enumeration list of URL parameters that were used in the request
   * URI.
   */
  getParameterNames(): any;
  /**
   * Returns the query string from the request.
   */
  getQueryString(): string;
}
declare class GlideServletResponse {
  /**
   * Sends a temporary redirect to the client.
   * @param location The URL to receive the response.
   */
  sendRedirect(location: string): any;
  /**
   * Sets the MIME type of the response
   * @param type The MIME type.
   */
  setContentType(type: string): any;
  /**
   * Sets a response header to the specified value.
   * @param key Specifies the header.
   * @param value The value to be assigned to the header. If the header exists, it is
   * overwritten.
   */
  setHeader(key: string, value: string): any;
  /**
   * Sets the status code for the response.
   * @param status The status to be set.
   */
  setStatus(status: number): any;
}
declare class GlideSession {
  /**
   * Retrieves a session client value previously set with
   * putClientData().
   * @param paramName Name of the client data to retrieve.
   */
  getClientData(paramName: string): string;
  /**
   * Returns the client IP address.
   */
  getClientIP(): string;
  /**
   * Returns the application currently selected in the application picker.
   */
  getCurrentApplicationId(): string;
  /**
   * Returns the session's language code.
   */
  getLanguage(): string;
  /**
   * Returns the session token.
   */
  getSessionToken(): string;
  /**
   * Returns the name of the session's time zone.
   */
  getTimeZoneName(): string;
  /**
   * Returns the URL on the stack. Returns null if the stack is empty.
   */
  getUrlOnStack(): string;
  /**
   * Returns true if the user is impersonating another user.
   */
  isImpersonating(): boolean;
  /**
   * Returns true if the session is interactive.
   */
  isInteractive(): boolean;
  /**
   * Returns true if the user is logged in.
   */
  isLoggedIn(): boolean;
  /**
   * Sets a session client value that can be retrieved with
   * getClientData(). This method is used in a server side script that runs when
   * a form is created.
   * @param paramName Name of the client data to set.
   * @param paramValue Value of the client data.
   */
  putClientData(paramName: string, paramValue: string): any;
}
declare class GlideSPScriptable {
  /**
   * Returns true if the user can read the specified GlideRecord.
   * @param gr The GlideRecord to check.
   */
  canReadRecord(gr: GlideRecord): boolean;
  /**
   * Returns true if the user can read the specified GlideRecord.
   * @param table Name of the table to query.
   * @param sysId Sys_id of the record to query.
   */
  canReadRecord(table: string, sysId: string): boolean;
  /**
   * Returns true if the currently logged in user has permission to view the specified
   * page.
   * @param pageID Page ID from the Pages [sp_page] table.
   */
  canSeePage(pageID: string): boolean;
  /**
   * Returns a model and view model for a sc_cat_item or
   * sc_cat_item_guide.
   * @param sysId The sys_id of the catalog item (sc_cat_item) or order guide
   * (sc_cat_item_guide).
   */
  getCatalogItem(sysId: string): any;
  /**
   * Returns a model and view model for a sc_cat_item or
   * sc_cat_item_guide.
   * @param sysId The sys_id of the catalog item (sc_cat_item) or order guide
   * (sc_cat_item_guide).
   * @param isOrdering When true, uses create roles security check. When false, uses write roles
   * security check.When users are ordering an item or have it in their cart,  check
   * using the create roles.
   * If users are not ordering, for example, somebody is
   * looking at a requested item to see the variables associated with that item, then
   * check using the write roles.
   */
  getCatalogItem(sysId: string, isOrdering: boolean): any;
  /**
   * Returns the display value of the specified field (if it exists and has a value) from
   * either the widget's sp_instance or the sp_portal
   * record.
   * @param fieldName Name of the field
   */
  getDisplayValue(fieldName: string): string;
  /**
   * Returns information about the specified field in the specified GlideRecord.
   * @param gr The GlideRecord to check
   * @param fieldName The field to find information for
   */
  getField(gr: GlideRecord, fieldName: string): any;
  /**
   * Checks the specified list of field names, and returns an array of valid field
   * names.
   * @param gr The GlideRecord to check
   * @param field_Names A comma separated list of field names.
   */
  getFields(gr: GlideRecord, field_Names: string): any[];
  /**
   * Checks the specified list of field names and returns an object of valid field
   * names.
   * @param gr The GlideRecord to check
   * @param field_Names A comma separated list of field names.
   */
  getFieldsObject(gr: GlideRecord, field_Names: string): any;
  /**
   * Return the form.
   * @param tableName The name of the table
   * @param sysId The form's sys_id
   */
  getForm(tableName: string, sysId: string): any;
  /**
   * Returns KB articles in the specified category and its subcategories.
   * @param sys_id Sys_id of the KB article category.
   * @param limit Maximum number of KB articles returned.
   */
  getKBCategoryArticles(sys_id: string, limit: number): any[];
  /**
   * Returns Knowledge Base article summaries in the specified category and its
   * subcategories.
   * @param sys_id Sys_id of the KB article category.
   * @param limit Maximum number of KB articles returned.
   * @param maxChars Maximum number of characters to return from the article text. For full article
   * text, set the value to -1.
   */
  getKBCategoryArticleSummaries(
    sys_id: string,
    limit: number,
    maxChars: number,
  ): any[];
  /**
   * Returns the number of articles in the defined Knowledge Base.
   * @param sys_id Sys_id of a Knowledge Base record.
   */
  getKBCount(sys_id: string): number;
  /**
   * Returns a list of the specified table's columns in the specified view.
   * @param tableName Name of the table
   * @param view The view by which to filter the columns
   */
  getListColumns(tableName: string, view: string): any;
  /**
   * Returns the (?id=) portion of the URL based on the sp_menu type.
   * @param page The page
   */
  getMenuHREF(page: GlideRecord): string;
  /**
   * Returns an array of menu items for the specified instance.
   * @param sysId sysId of the instance
   */
  getMenuItems(sysId: string): any[];
  /**
   * Returns the value of the specified parameter.
   * @param name The name of the key from the query string or post body.
   */
  getParameter(name: string): any;
  /**
   * Returns the portal record from the Service Portals [sp_portal] table.
   */
  getPortalRecord(): GlideRecord;
  /**
   * If parameters are provided, returns the GlideRecord identified by the provided table
   * and Sys ID. If no parameters are provided, returns the record identified by the current URL.
   * @param table Optional. The table of the record to return. If no parameters are included,
   * returns the table and Sys ID identified by the current URL.
   * @param sys_id Optional. The Sys ID of the record to return. If no parameters are included,
   * returns the record identified by the current URL.
   */
  getRecord(table?: string, sys_id?: string): GlideRecord;
  /**
   * Copies display values for the specified fields into the data parameter.
   * @param data The display values for the specified fields are copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordDisplayValues(data: any, from: GlideRecord, names: string): any;
  /**
   * For the specified fields, copies the element's name, display value, and value into the
   * data parameter.
   * @param data The element's name, display value, and value for the specified fields are
   * copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordElements(data: any, from: GlideRecord, names: string): any;
  /**
   * Copies values for the specified field names from the GlideRecord into the data
   * parameter.
   * @param data The value for the specified fields are copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordValues(data: any, from: GlideRecord, names: string): any;
  /**
   * Returns Service Catalog
   * variables associated with a record in String format.
   * @param gr The record to retrieve Service Catalog variables
   * for. Must be a record with Service Catalog variables
   * defined, such as a requested item [sc_req_item] record or an incident submitted
   * through a record producer.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getRecordVariables(gr: GlideRecord, includeNilResponses?: boolean): string;
  /**
   * Returns an array of Service Catalog variables associated
   * with a record.
   * @param gr The record to retrieve Service Catalog variables
   * for. Must be a record with Service Catalog variables
   * defined, such as a requested item [sc_req_item] record or an incident submitted
   * through a record producer.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getRecordVariablesArray(gr: GlideRecord, includeNilResponses?: boolean): any;
  /**
   * Gets the activity stream for the specified record. This method works on tables that
   * extend the task table.
   * @param table The table name
   * @param sysID The sys_id of the record
   */
  getStream(table: string, sysID: string): any;
  /**
   * Returns the user's initials.
   */
  getUserInitials(): string;
  /**
   * Returns the named value of the JSON request, instance, or portal.
   * @param name Name of the JSON request, instance, or portal.
   */
  getValue(name: string): any;
  /**
   * Copies values from the request or instance to the data parameter.
   * @param data Receives the parameter values.
   * @param names Comma-separated string of field names.
   */
  getValues(data: any, names: string): any;
  /**
   * Returns an array of Service Catalog variables associated
   * with the record in the URL.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getVariablesArray(includeNilResponses?: boolean): any;
  /**
   * Gets a widget by id or sys_id, executes that widget's server script using the provided
   * options, then returns the widget model.
   * @param sysID The widget sys_id or widget_id
   * @param options An object to pass to the widget's server script. Refer to this object as
   * options in your server script.Note: Any options passed into this
   * function will only be available in the embedded widget's server script on the
   * first execution of that script. Any subsequent calls into
   * the server script from the embedded widget will not contain the object properties
   * passed in.
   */
  getWidget(sysID: string, options: any): any;
  /**
   * Transforms a URL requesting a list or form in the platform UI into the URL of the
   * corresponding id=list or id=form Service Portal
   * page.
   * @param url Platform UI URL
   */
  mapUrlToSPUrl(url: string): string;
}
declare class GlideStringUtil {
  /**
   * Replaces periods with underscore characters.
   * @param sourceString The string to be processed.
   */
  dotToUnderBar(sourceString: string): string;
  /**
   * Remove quotes from a string.
   * @param sourceString The string to be processed.
   */
  escapeAllQuotes(sourceString: string): string;
  /**
   * Use for home pages to replace problem characters with escape characters.
   * @param sourceString The string to be processed.
   */
  escapeForHomePage(sourceString: string): string;
  /**
   * Use to replace illegal characters with their escape codes.
   * @param htmlString The string to be processed.
   */
  escapeHTML(htmlString: string): string;
  /**
   * Replaces non-printable characters with their printable notation.
   * @param sourceString The string to be processed.
   */
  escapeNonPrintable(sourceString: string): string;
  /**
   * Replaces query term separators "^" with their escape sequence "^^".
   * @param sourceString The string to be processed.
   */
  escapeQueryTermSeparator(sourceString: string): string;
  /**
   * Replace quotes with escape characters by adding a backslash before each
   * quote.
   * @param sourceString The string to be processed.
   */
  escapeTicks(sourceString: string): string;
  /**
   * Use to replace illegal HTML characters into HTML notation.
   * @param sourceString The string to be processed.
   */
  getHTMLValue(sourceString: string): string;
  /**
   * Extract numeric characters from a string.
   * @param sourceString The string to be processed.
   */
  getNumeric(sourceString: string): string;
  /**
   * Returns true if the specified string is a valid base64 string.
   * @param sourceString The string to be processed.
   */
  isBase64(sourceString: string): boolean;
  /**
   * Returns true if the specified string is in valid sys ID format.
   * @param sourceString The string to be processed.
   */
  isEligibleSysID(sourceString: string): boolean;
  /**
   * Replaces the new line character, "/n", with a break code "".
   * @param sourceString The string to be processed.
   */
  newLinesToBreaks(sourceString: string): string;
  /**
   * Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading,
   * trailing, and duplicate spaces.
   * @param sourceString The string to be processed.
   */
  normalizeWhitespace(sourceString: string): string;
  /**
   * Replaces escape characters with their respective character.
   * @param htmlString String to process.
   */
  unEscapeHTML(htmlString: string): string;
}
declare class GlideSysAttachment {
  constructor();
  /**
   * Copies attachments from the source record to the target record.
   * @param sourceTable Name of the table with the attachments to be copied.
   * @param sourceID Source table's sys_id.
   * @param targetTable Name of the table on which to add the attachments.
   * @param targetID Target table's sys_id.
   */
  copy(
    sourceTable: string,
    sourceID: string,
    targetTable: string,
    targetID: string,
  ): string;
  /**
   * Deletes the specified attachment.
   * @param attachmentID Attachment's sys_id.
   */
  deleteAttachment(attachmentID: string): any;
  /**
   * Returns a GlideRecord containing the matching attachment metadata such as name, type,
   * or size.
   * @param tableName Name of the table to which the attachment belongs; for example,
   * incident.
   * @param sys_id The sys_id of record to which the attachment belongs.
   */
  getAttachments(tableName: string, sys_id: string): GlideRecord;
  /**
   * Returns the attachment content as a string.
   * @param sysAttachment Attachment record.
   */
  getContent(sysAttachment: GlideRecord): string;
  /**
   * Returns the attachment content as a string with base64 encoding.
   * @param sysAttachment Attachment record.
   */
  getContentBase64(sysAttachment: GlideRecord): string;
  /**
   * Returns a GlideScriptableInputStream object given the sys_id of an
   * attachment.
   * @param sysID Attachment sys_id.
   */
  getContentStream(sysID: string): GlideScriptableInputStream;
  /**
   * Attaches a specified attachment to the specified record.
   * @param content Attachment content.
   * @param contentType Attachment content type.
   * @param fileName Attachment file name.
   * @param record Record to which to attach the attachment.
   */
  write(
    content: string,
    contentType: string,
    fileName: string,
    record: GlideRecord,
  ): string;
  /**
   * Inserts an attachment for the specified record using base64 encoded
   * content.
   * @param now_GR Record to which the attachment is to be attached.
   * @param fileName Attachment's file name.
   * @param contentType Attachment's content type.
   * @param content Attachment content in base64 format.
   */
  writeBase64(
    now_GR: GlideRecord,
    fileName: string,
    contentType: string,
    content: string,
  ): string;
  /**
   * Inserts an attachment using the input stream.
   * @param now_GR Record to which the attachment is to be attached.
   * @param fileName Attachment's file name.
   * @param contentType Attachment's content type.
   * @param content Attachment content.
   */
  writeContentStream(
    now_GR: GlideRecord,
    fileName: string,
    contentType: string,
    content: GlideScriptableInputStream,
  ): string;
}
declare class GlideSysListControl {
  constructor(tableName: string);
  /**
   * Returns the sys_id for the control.
   */
  getControlID(): string;
  /**
   * Returns true if the edit button is not displayed.
   */
  isOmitEditButton(): boolean;
  /**
   * Returns true when the New button is not displayed.
   */
  isOmitNewButton(): boolean;
}
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
  base64Decode(source: string): string;
  /**
   * Creates a base64 string from the specified string.
   * @param source String to encode.
   */
  base64Encode(source: string): string;
  /**
   * Returns the date and time for the beginning of last month in GMT.
   */
  beginningOfLastMonth(): string;
  /**
   * Returns the date and time for the beginning of last week in GMT.
   */
  beginningOfLastWeek(): string;
  /**
   * Returns the date and time for the beginning of next month in GMT.
   */
  beginningOfNextMonth(): string;
  /**
   * Returns the date and time for the beginning of next week in GMT.
   */
  beginningOfNextWeek(): string;
  /**
   * Returns the date and time for the beginning of next year in GMT.
   */
  beginningOfNextYear(): string;
  /**
   * Returns the date and time for the beginning of this month in GMT.
   */
  beginningOfThisMonth(): string;
  /**
   * Returns the date and time for the beginning of this quarter in GMT.
   */
  beginningOfThisQuarter(): string;
  /**
   * Returns the date and time for the beginning of this week in GMT.
   */
  beginningOfThisWeek(): string;
  /**
   * Returns the date and time for the beginning of this year in GMT.
   */
  beginningOfThisYear(): string;
  /**
   * Generates a date and time for the specified date in GMT.
   * @param date Date to generate the GMT for.Format: yyyy-mm-dd
   * @param range Start, end, or a time in the 24 hour format hh:mm:ss.
   */
  dateGenerate(date: string, range: string): string;
  /**
   * Returns the date and time for a specified number of days ago.
   * @param days Integer number of days
   */
  daysAgo(days: number): string;
  /**
   * Returns the date and time for the end of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoEnd(days: number): string;
  /**
   * Returns the date and time for the beginning of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoStart(days: string): string;
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
  endOfLastMonth(): string;
  /**
   * Returns the date and time for the end of last week in GMT.
   */
  endOfLastWeek(): string;
  /**
   * Returns the date and time for the end of last year in GMT.
   */
  endOfLastYear(): string;
  /**
   * Returns the date and time for the end of next month in GMT.
   */
  endOfNextMonth(): string;
  /**
   * Returns the date and time for the end of next week in GMT.
   */
  endOfNextWeek(): string;
  /**
   * Returns the date and time for the end of next year in GMT.
   */
  endOfNextYear(): string;
  /**
   * Returns the date and time for the end of this month in GMT.
   */
  endOfThisMonth(): string;
  /**
   * Returns the date and time for the end of this quarter in GMT.
   */
  endOfThisQuarter(): string;
  /**
   * Returns the date and time for the end of this week in GMT.
   */
  endOfThisWeek(): string;
  /**
   * Returns the date and time for the end of this year in GMT.
   */
  endOfThisYear(): string;
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
  executeNow(job: GlideRecord): string;
  /**
   * Generates a GUID that can be used when a unique identifier is required.
   */
  generateGUID(): string;
  /**
   * Gets the caller scope name; returns null if there is no caller.
   */
  getCallerScopeName(): string;
  /**
   * Gets a string representing the cache version for a CSS file.
   */
  getCssCacheVersionString(): string;
  /**
   * Gets the ID of the current application as set using the Application Picker.
   */
  getCurrentApplicationId(): string;
  /**
   * Gets the name of the current scope.
   */
  getCurrentScopeName(): string;
  /**
   * Returns the error messages that were added by addErrorMessage() for
   * the session.
   */
  getErrorMessages(): any[];
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
  getEscapedMessage(id: string, args?: any[]): string;
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
  getMessage(id: string, args?: any[]): string;
  /**
   * Gets the value of a Glide property. If the property is not found, returns an alternate
   * value.
   * @param key The key for the property whose value should be returned.
   * @param alt (Optional) Alternate object to return if the property is not found.
   */
  getProperty(key: string, alt?: any): string;
  /**
   * Gets a reference to the current Glide session.
   */
  getSession(): GlideSession;
  /**
   * Retrieves the GlideSession session ID.
   */
  getSessionID(): string;
  /**
   * This method is no longer available. Instead, use
   * gs.getSession().getSessionToken().
   */
  getSessionToken(): string;
  /**
   * Returns the name of the time zone associated with the current user.
   */
  getTimeZoneName(): string;
  /**
   * Gets the current URI for the session.
   */
  getUrlOnStack(): string;
  /**
   * Returns a reference to the scoped GlideUser object for the current user.
   */
  getUser(): GlideUser;
  /**
   * Gets the display name of the current user.
   */
  getUserDisplayName(): string;
  /**
   * Gets the sys_id of the current user.
   */
  getUserID(): string;
  /**
   * Gets the user name, or user id, of the current user.
   */
  getUserName(): string;
  /**
   * Determines if the current user has the specified role.
   * @param role The role to check.
   */
  hasRole(role: any): boolean;
  /**
   * Returns the date and time for a specified number of hours ago.
   * @param hours Integer number of hours
   */
  hoursAgo(hours: number): string;
  /**
   * Returns the date and time for the end of the hour a specified number of hours
   * ago.
   * @param hours Integer number of hours
   */
  hoursAgoEnd(hours: number): string;
  /**
   * Returns the date and time for the start of the hour a specified number of hours
   * ago.
   * @param hours Integer number of hours
   */
  hoursAgoStart(hours: number): string;
  /**
   * Provides a safe way to call from the sandbox, allowing only the inclusion of trusted
   * scripts.
   * @param name The name of the script to include.
   */
  include(name: string): boolean;
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
  isDebugging(): boolean;
  /**
   * Checks if the current session is interactive. An example of an interactive session is
   * when a user logs in normally. An example of a non-interactive session is using a SOAP request to
   * retrieve data.
   */
  isInteractive(): boolean;
  /**
   * Determines if the current user is currently logged in.
   */
  isLoggedIn(): boolean;
  /**
   * You can determine if a request comes from a mobile device.
   */
  isMobile(): boolean;
  /**
   * Returns the date and time for the end of the minute a specified number of minutes
   * ago.
   * @param minutes Integer number of minutes ago, such as 5 or 126.
   */
  minutesAgoEnd(minutes: number): string;
  /**
   * Returns the date and time for the start of the minute a specified number of minutes
   * ago.
   * @param minutes Integer number of minutes ago, such as 15 or 112.
   */
  minutesAgoStart(minutes: number): string;
  /**
   * Returns the date and time for a specified number of months ago.
   * @param months Integer number of months ago.
   */
  monthsAgo(months: number): string;
  /**
   * Returns the date and time for the start of the month a specified number of months
   * ago.
   * @param months Integer number of months ago, such as 3 or 14.
   */
  monthsAgoStart(months: number): string;
  /**
   * Queries an object and returns true if the object is null, undefined, or contains an
   * empty string.
   * @param o The object to be checked.
   */
  nil(o: any): boolean;
  /**
   * Returns the date and time for the last day of the quarter for a specified number of
   * quarters ago.
   * @param quarters Integer number of quarters
   */
  quartersAgoEnd(quarters: number): string;
  /**
   * Returns the date and time for the first day of the quarter for a specified number of
   * quarters ago.
   * @param quarters Integer number of quarters
   */
  quartersAgoStart(quarters: number): string;
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
  tableExists(name: string): boolean;
  /**
   * Replaces UTF-8 encoded characters with ASCII characters.
   * @param url A string with UTF-8 percent (%) encoded characters.
   */
  urlDecode(url: string): string;
  /**
   * Encodes non-ASCII characters, unsafe ASCII characters, and spaces so the returned
   * string can be used on the Internet. Uses UTF-8 encoding. Uses percent (%) encoding.
   * @param url The string to be encoded.
   */
  urlEncode(url: string): string;
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
  yearsAgo(years: number): string;
  /**
   * Returns yesterday's time (24 hours ago).
   */
  yesterday(): string;
}
declare var gs = new GlideSystem();
declare class GlideTableHierarchy {
  constructor(tableName: string);
  /**
   * Returns an array of strings containing all tables that extend the current table and
   * includes the current table.
   */
  getAllExtensions(): any[];
  /**
   * Returns the parent class.
   */
  getBase(): string;
  /**
   * Returns an array of strings containing all classes in the hierarchy of the current
   * table.
   */
  getHierarchy(): any[];
  /**
   * Returns the table's name.
   */
  getName(): string;
  /**
   * Returns the top level class in the hierarchy.
   */
  getRoot(): string;
  /**
   * Returns an array of strings containing all tables that extend the current
   * table.
   */
  getTableExtensions(): any[];
  /**
   * Returns an array of strings of the table names in the hierarchy.
   */
  getTables(): any[];
  /**
   * Returns true of this class has been extended.
   */
  hasExtensions(): boolean;
  /**
   * Returns true if this is a base class.
   */
  isBaseClass(): boolean;
  /**
   * Returns true if this table is not in a hierarchy.
   */
  isSoloClass(): boolean;
}
declare class GlideTextReader {
  constructor(inputStream: GlideScriptableInputStream);
  /**
   * Returns the character encoding of the input stream.
   */
  getEncoding(): string;
  /**
   * Returns a single line from the input stream and returns a string. Since this is working
   * off of a stream, it is not subject to the 5MB size limit.
   */
  readLine(): string;
}
declare class GlideTime {
  constructor();
  constructor(milliseconds: number);
  /**
   * Returns the time in the specified format.
   * @param format String to use to format the time.For example, if the current time is
   * 10:30:20 then:
   * hh:mm:ss = 10:30:20
   *
   * HH = 10
   *
   * HH –- ss = 10 –- 20
   *
   * hh a = 10 AM
   *
   * s:m:H ss:mm:hh = 20:30:10 20:30:10
   *
   * HH:mm:ss.SSSZ = 10:30:20.000+0000
   *
   * HH/mm/ss = 10/30/20
   *
   *
   *
   */
  getByFormat(format: string): string;
  /**
   * Gets the time in the current user's display format and time zone.
   */
  getDisplayValue(): string;
  /**
   * Gets the display value in the current user's time zone and the internal format
   * (HH:mm:ss).
   */
  getDisplayValueInternal(): string;
  /**
   * Returns the hours part of the time using the local time zone.
   */
  getHourLocalTime(): number;
  /**
   * Returns the hours part of the time using the local time zone. The number of hours is
   * based on a 24 hour clock.
   */
  getHourOfDayLocalTime(): number;
  /**
   * Returns the hours part of the time using the UTC time zone. The number of hours is
   * based on a 24 hour clock.
   */
  getHourOfDayUTC(): number;
  /**
   * Returns the hours part of the time using the UTC time zone. The number of hours is
   * based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
   */
  getHourUTC(): number;
  /**
   * Returns the number of minutes using the local time zone.
   */
  getMinutesLocalTime(): number;
  /**
   * Returns the number of minutes in the hour based on the UTC time zone.
   */
  getMinutesUTC(): number;
  /**
   * Returns the number of seconds in the current minute.
   */
  getSeconds(): number;
  /**
   * Gets the time value stored in the database by the GlideTime object in the internal
   * format, HH:mm:ss, and the system time zone.
   */
  getValue(): string;
  /**
   * Sets a time value using the current user's display format and time zone.
   * @param asDisplayed The time in the current user's display format and time zone. The parameter must
   * be formatted using the current user's preferred display format, such as HH:mm:ss.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the time of the GlideTime object in the internal time zone.
   * @param o The time in hh:mm:ss format.
   */
  setValue(o: string): any;
  /**
   * Gets the duration difference between two GlideTime object values.
   * @param startTime The start value.
   * @param endTime The end value.
   */
  subtract(startTime: GlideTime, endTime: GlideTime): GlideDuration;
}
declare class GlideTransformLog {
  constructor();
  /**
   * Logs a message of type Error to localhost logs.
   * @param message Transform log message.
   */
  error(message: string): any;
  /**
   * Logs a message of type Info to localhost logs.
   * @param message Transform log message.
   */
  info(message: string): any;
  /**
   * Logs a message of type Warn to localhost logs.
   * @param message Transform log message.
   */
  warn(message: string): any;
}
declare class GlideUICompatibility {
  constructor(scopeName: string);
  /**
   * Returns the terms "block" or "allow" based upon the browser version.
   */
  getCompatibility(): string;
  /**
   * Determines if the browser is not supported.
   */
  isBlocked(): boolean;
}
declare class GlideURI {
  constructor();
  /**
   * Returns the value of the specified
   * parameter.
   * @param name The parameter name.
   */
  get(name: string): string;
  /**
   * Returns the file name portion of the
   * URI.
   */
  getFileFromPath(): string;
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
  toString(path: string): string;
}
declare class GlideUser {
  /**
   * Returns the current user's company sys_id.
   */
  getCompanyID(): string;
  /**
   * Returns the current user's display name.
   */
  getDisplayName(): string;
  /**
   * Returns the identifier of the user's current session domain.
   */
  getDomainID(): string;
  /**
   * Returns the user's email address.
   */
  getEmail(): string;
  /**
   * Returns the user's first name.
   */
  getFirstName(): string;
  /**
   * Gets the sys_id of the current user.
   */
  getID(): string;
  /**
   * Returns the user's last name.
   */
  getLastName(): string;
  /**
   * Returns the user ID, or login name, of the current user.
   */
  getName(): string;
  /**
   * Gets the specified user preference value for the current user.
   * @param name The name of the preference.
   */
  getPreference(name: string): string;
  /**
   * Returns a list of roles that includes explicitly granted roles, inherited roles, and
   * roles acquired by group membership.
   */
  getRoles(): any[];
  /**
   * Returns the list of roles explicitly granted to the user.
   */
  getUserRoles(): any[];
  /**
   * Determines if the current user has the specified role.
   * @param role Role to check
   */
  hasRole(role: string): boolean;
  /**
   * Determines if the current user is a member of the specified group.
   * @param group Group to check
   */
  isMemberOf(group: string): boolean;
  /**
   * Saves a user preference value to the database.
   * @param name The preference to save.
   * @param value The preference value.
   */
  savePreference(name: string, value: string): any;
}
declare class GlideXMLUtil {
  /**
   * Removes invalid characters from an XML string.
   * @param xmlString The string to be processed.
   */
  removeInvalidChars(xmlString: string): string;
  /**
   * Determines if the specified string is valid XML.
   * @param xmlString The string to be validated.
   * @param nsAware When true, the validation is aware of name spaces. When false, the validation
   * ignores name spaces.
   * @param forgiveUnclosed When true, the validation does not check for  tags enclosing the
   * string.
   */
  validateXML(
    xmlString: string,
    nsAware: boolean,
    forgiveUnclosed: boolean,
  ): string;
}
declare class NotifyConferenceUtil {
  constructor();
  /**
   * Adds a participant to a specified conference call using their phone number to identify
   * the participant.
   * @param toNumber Phone number of the participant to add to the conference call.
   * @param confGR GlideRecord of the conference call to which to add the specified participant.
   * These records are located in the Notify Conference Call [notify_conference_call]
   * table.
   */
  addToConferenceByPhoneNumber(toNumber: string, confGR: GlideRecord): any;
  /**
   * Adds a participant to the conference call referenced by the passed in GlideRecord using
   * their unique user identifier.
   * @param userId Sys ID of the participant to add to the specified conference call. This
   * information is located in the User [sys_user] table.
   * @param confGR GlideRecord of the conference call to add the specified participant. These
   * records are located in the Notify Conference Call [notify_conference_call]
   * table.
   */
  addToConferenceByUserId(userId: string, confGR: GlideRecord): any;
  /**
   * Performs the specified conference call action, such as starting/ending a conference
   * call or joining, removing, muting, or unmuting participants from a conference call.
   * @param action Defines the conference call action to perform.The
   * following are the available conference call actions:
   * start: Starts the conference call identified in
   * data.confId
   *
   * end: Terminates the conference call identified in
   * data.confId
   *
   * join: Adds the participant specified in the data.items
   * array to the conference call identified in data.confId
   *
   * multiJoin: Adds the participants specified in the
   * data.items array to the conference call identified in
   * data.confId
   *
   * selfJoin: Adds the currently logged in user to the conference call (no entry
   * in data.items required.)
   *
   * kick: Removes the participant specified in the data.items
   * array from the conference call identified in
   * data.confId
   *
   * multiKick: Removes the participants specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   * mute: Mutes the participant specified in the data.items
   * array on the conference call identified in data.confId
   *
   * multiMute: Mutes the participants specified in the
   * data.items array on the conference call identified in
   * data.confId
   *
   * unmute: Unmutes the participant specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   * multiUnmute: Unmutes the participants specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   *
   *
   * @param data Object that describes the conference call.
   */
  doConferenceAction(action: string, data: any): any;
  /**
   * Returns a JSON data template to use with the doConferenceAction()
   * method. Using this template automatically structures the data object so that you don't have to
   * manually create it.
   */
  getConferenceInputDataTemplate(): any;
  /**
   * Returns the capabilities of all telephony service provider drivers in the
   * instance.
   */
  getServiceProvidersCapabilities(): any;
  /**
   * Determines whether a Notify conference action is supported by a telephony service
   * provider.
   * @param action Value of the isSupported parameter returned by the
   * getServiceProvidersCapabilities() method for a specific
   * action and service provider.
   *
   * Note: Although the isSupported value may appear to be a
   * Boolean, it is actually a Number. Do not try and evaluate the capabilities as
   * Boolean values. Use this method as the associated values may be expanded in future
   * versions.
   */
  isActionSupported(action: number): boolean;
  /**
   * Removes the participant associated with the passed in GlideRecord from the current
   * conference call.
   * @param notifyParticipantGR GlideRecord object of the participant to remove from the conference call. These
   * records are located in the Notify Participant [notify_participant] table.
   */
  kickByParticipantGR(notifyParticipantGR: GlideRecord): any;
  /**
   * Mutes the participant associated with the passed in GlideRecord on the current
   * conference call.
   * @param notifyParticipantGR GlideRecord object of the participant to mute. These records are located in the
   * Notify Participant [notify_participant] table.
   */
  muteByParticipantGR(notifyParticipantGR: any): any;
  /**
   * Unmutes the participant associated with the passed in GlideRecord on the current
   * conference call.
   * @param notifyParticipantGR GlideRecord object of the participant to unmute. These records are located in
   * the Notify Participant [notify_participant] table.
   */
  unmuteByParticipantGR(notifyParticipantGR: GlideRecord): any;
}
declare class Optional {
  /**
   * Returns an empty Optional object. Use this method in an Else clause to handle a query
   * that might not return a result.
   * @param reason Optional. Reason displayed in the log when Optional.get() is
   * called on the empty Optional object.
   */
  empty(reason?: string): any;
  /**
   * Applies a predicate function, a function that takes a single value and returns true or
   * false, to the record inside the Optional object. If the function returns true, the method
   * returns the Optional record unchanged. If the function returns false, it returns an empty
   * Optional object.
   * @param predicate Predicate function to apply to the value inside the Optional object. Must
   * return a Boolean value.
   */
  filter(predicate?: any): any;
  /**
   * Applies a function that returns an Optional object to the result of a query. Use this
   * method to perform a second query using the result of the first.
   * @param fn Function
   * to apply to the results of the query that returned the Optional
   * object.
   */
  flatMap(fn?: any): any;
  /**
   * Returns the record inside the Optional object, or throws an error if the query does not
   * return a record.
   */
  get(): any;
  /**
   * Applies a function to the record within an Optional object. If the Optional object does
   * not contain a record, the function does not execute.
   * @param fn The function to apply to the record within the Optional object.
   */
  ifPresent(fn?: any): any;
  /**
   * Returns true if the Optional object is empty.
   */
  isEmpty(): boolean;
  /**
   * Checks whether an Optional object contains a value.
   */
  isPresent(): boolean;
  /**
   * Returns a new Optional object. Instead of containing the record, the object contains a
   * function to get the record that is only called if and when requested in the code.
   * @param lazyGetFn Function that returns a single record as a result of a query. For example:
   * var userGr = new GlideRecord('sys_user');
   */
  lazy(lazyGetFn: any): any;
  /**
   * Applies a function to the result of a query.
   * @param fn Function to apply to the result of the query.
   */
  map(fn: any): any;
  /**
   * Wraps a given value in an Optional object. For example, you can wrap the result of a
   * GlideRecord query in an Optional object to use the associated methods.
   * @param value Value inside the Optional object.
   */
  of(value?: any): any;
  /**
   * Adds a default value within the Optional object if the query does not return any
   * results.
   * @param defaultValue Value within the Optional object if the query does not return any
   * results.
   */
  orElse(defaultValue?: any): any;
}
declare class PAScorecard {
  /**
   * Add a query parameter to filter the returned scores.
   * @param uuid Enter a colon-separated list of sys_id values to specify which indicators,
   * breakdowns, aggregates, and domains to query. The parameter follows this
   * format:&lt;indicator sys_id&gt;:&lt;breakdown sys_id&gt;:&lt;element
   * sys_id&gt;:&lt;lvl-2 breakdown sys_id&gt;:&lt;lvl-2 element sys_id&gt;:&lt;aggregate
   * sys_id&gt;:&lt;domain_sys_id&gt;
   * The parameter must begin with the sys_id of an indicator record.
   * Optionally, you can append the sys_id values of a breakdown and breakdown element
   * to group the response based on the breakdown, and the sys_id of an aggregate to
   * apply that aggregate. You can use a breakdown with an aggregate, or use only
   * one.
   * For information about obtaining the sys_id values of records, see Unique record identifier (sys_id).
   *
   * Note: If an indicator is configured to use a
   * Default time series, all Analytics Hub values for that indicator use that time series aggregation.
   * @param breakdown Sys_id of a breakdown to return chart information
   * organized as defined by the breakdown. For example, the sys_id of a priority
   * breakdown to return separate task chart information for each priority value, such as
   * the number of open incidents / Priority / 2 - High.Data type: String
   * @param breakdown_relation Specify the sys_id of a breakdown relation to break down the returned data
   * using that relation. You can view available breakdown relations by setting the
   * include_available_breakdowns parameter to
   * true.
   * @param elements_filter Specify the sys_id of an elements filter to apply that filter to the returned
   * data.
   * @param display Flag that indicates the type of indicators to
   * return.Valid values:
   * true: Return only indicators that display on the Analytics Hub.
   *
   * all: Return all indicators.
   *
   *
   *
   * Data type: String
   * Default: true
   * @param favorites Flag that indicates whether to return only indicators
   * that are favorites of the querying user.Valid values:
   * true: Return only indicators that are favorites of the querying user.
   *
   * false: Return all indicators.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param key Flag that indicates whether to return results only for
   * key indicators.Valid values:
   * true: Return the trendline_scores element.
   *
   * false: Do not return the trendline_scores element .
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param target Flag that indicates whether to return results only for
   * indicators that have a target set on the Analytics Hub.Valid values:
   * true: Only return results for indicators that have a target set.
   *
   * false: Return results for all applicable indicators.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param contains Comma-separated list of names or descriptions to return
   * results only from indicators with a matching value. All the comma-separated list
   * items must match, or no results are returned: The list follows AND logic, not OR
   * logic.Data type: String
   * @param tags Enter an indicator group sys_id to return the indicators in that group. Do not
   * use uuid with this parameter.
   * @param per_page Maximum number of indicators each query can return on a
   * page. Data type: Number
   * Default: 10
   * Maximum: 100
   * @param page Specify the page number. For example, when querying 20 Analytics Hubs with the default per_page value (10), specify a page value of 2 to retrieve Analytics Hubs 11-20.
   * @param sortby Value to use when sorting results. Valid values:
   * bullet
   *
   * change
   *
   * changeperc
   *
   * date
   *
   * default
   *
   * direction
   *
   * duedate
   *
   * frequency
   *
   * gap
   *
   * gapperc
   *
   * group
   *
   * indicator_group
   *
   * name
   *
   * order
   *
   * target
   *
   * trend
   *
   * value
   *
   *
   *
   * Data type: String
   * Default: value
   * @param sortdir Sort direction.Valid values:
   * asc: Denotes ascending
   *
   * des: Denotes descending
   *
   *
   *
   * Data type: String
   * Default: Descending
   * @param display_value Data retrieval operation for reference and choice fields.Based on this
   * value, the display value and/or the actual value in the database are retrieved.
   * true returns display values for all of the fields.
   *
   * false returns actual values from the database. If a value
   * is not specified, this parameter defaults to false.
   *
   * all returns both actual and display values.
   *
   *
   *
   * @param exclude_reference_link Flag that indicates whether to hide additional
   * information provided for reference fields, such as the URI to the reference
   * resource.Valid values:
   * true: Hide additional information provided for reference fields.
   *
   * false: Do not hide additional information provided for reference
   * fields.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_scores Flag that indicates whether to
   * return indicator scores for the entire time range selected on the Analytics Hub. If a value is not specified, this parameter defaults to false and returns only
   * the most recent score value.To constrain the date range of the scores that are returned, combine this
   * parameter with the from and to
   * parameters.
   * @param from Earliest date to return scores
   * from. Only scores from this date or later are returned. This parameter requires that include_scores is set to
   * true.
   * @param to Latest date from which to return
   * scores. Only scores from this date or earlier are returned.  This parameter requires that include_scores is set to
   * true.
   * @param step Numeric value to skip scores, based on the indicator
   * frequency. For example, specify a value of 3 to return only scores from every third
   * day for a daily indicator, or from every third week for a weekly indicator. Data
   * type: Number
   * @param limit Maximum number of scores to return.Data type:
   * Number
   * @param include_available_breakdowns Flag that indicates whether to return all available
   * breakdowns for an indicator.Valid values:
   * true: Return all available breakdowns for an indicator.
   *
   * false: Return no breakdowns.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_available_aggregates Flag that indicates whether to return all possible
   * aggregates for an indicator, including aggregates that have already been
   * applied.Valid values:
   * true: Return all possible aggregates for an indicator, including aggregates
   * that have already been applied.
   *
   * false: Return no aggregates.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_realtime Flag that indicates whether to return the
   * realtime_enabled element which indicates if real-time scores are enabled for the
   * indicator, and the realtime_value element which contains the real-time score value.
   * This parameter is not supported for formula indicators.Valid values:
   * true: Return the realtime_enabled element.
   *
   * false: Do not return the realtime_enabled element.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_target_color_scheme Flag that indicates whether to return the
   * target_color_scheme element that contains the minimum and maximum values, and the
   * color of each section of the target color scheme for the Analytics Hub.Valid values:
   * true: Return the target_color_scheme element.
   *
   * false: Do not return the target_color_scheme element.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_forecast_scores Flag that indicates whether
   * to return the forecast_scores element that contains an array of date-value pairs
   * that define the forecast data for the Analytics Hub.This paramater requires that the include_scores
   * parameter is also set to true.
   * @param include_trendline_scores Flag that indicates whether
   * to return the trendline_scores element that contains an array of date-value pairs
   * that define the Analytics Hub trendline.This paramater requires that the include_scores
   * parameter is also set to true.
   */
  addParam(
    uuid: string | undefined,
    breakdown: string,
    breakdown_relation: string,
    elements_filter: string,
    display: string,
    favorites: string,
    key: string,
    target: string,
    contains: string,
    tags: string,
    per_page: string,
    page: string,
    sortby: string,
    sortdir: string,
    display_value: string,
    exclude_reference_link: string,
    include_scores: string,
    from: string,
    to: string,
    step: string,
    limit: string,
    include_available_breakdowns: string,
    include_available_aggregates: string,
    include_realtime: string,
    include_target_color_scheme: string,
    include_forecast_scores: string,
    include_trendline_scores: string,
  ): any;
  /**
   * Perform a query based on the specified parameters and return the results as an
   * object.
   */
  query(): any;
  /**
   * Get the last query result as an object.
   */
  result(): any;
}
declare class PASnapshot {
  /**
   * Compare records in snapshots for a specified indicator at multiple dates, such as to
   * identify records included in one snapshot but not the other.
   * @param sys_id The indicator sys_id.
   * @param date1 The date of the first snapshot, in the format yyyymmdd.
   * @param date2 The date of the second snapshot, in the format yyyymmdd.
   * @param type Specifies what data to retrieve. Valid values are:
   * all1: all records in the first snapshot
   *
   * all2: all records in the second snapshot
   *
   * shared: records that are in both snapshots
   *
   * movedin: records that are in the first snapshot, but not the second
   *
   * movedout: records that are in the second snapshot, but not the first
   *
   *
   */
  getCompareIDs(
    sys_id: string,
    date1: number,
    date2: number,
    type: string,
  ): string;
  /**
   * Get the query used to compare records in snapshots for a specified indicator at
   * multiple dates.
   * @param sys_id The indicator sys_id.
   * @param date1 The date of the first snapshot, in the format yyyymmdd.
   * @param date2 The date of the second snapshot, in the format yyyymmdd.
   * @param type Specifies what data to retrieve. Valid values are:
   * all1: all records in the first snapshot
   *
   * all2: all records in the second snapshot
   *
   * shared: records that are in both snapshots
   *
   * movedin: records that are in the second snapshot, but not the first
   *
   * movedout: records that are in the first snapshot, but not the second
   *
   *
   */
  getCompareQuery(
    sys_id: string,
    date1: number,
    date2: number,
    type: string,
  ): string;
  /**
   * Get the sys_id values for all records contained in the snapshot for a specified
   * indicator at the specified date.
   * @param sys_id The indicator sys_id.
   * @param date The date when the snapshot was taken, in the format yyyymmdd.
   */
  getIDs(sys_id: string, date: number): string;
  /**
   * Get the query used to generate the snapshot for a specified indicator at the specified
   * date.
   * @param sys_id The indicator sys_id.
   * @param date The date when the snapshot was taken, in the format yyyymmdd.
   */
  getQuery(sys_id: string, date: number): string;
}
declare class RenderProperties {
  /**
   * Returns the encoded query from the URL sent to the page.
   */
  getEncodedQuery(): string;
  /**
   * Returns the list control object for the page.
   */
  getListControl(): any;
  /**
   * Returns the value of the specified URL parameter.
   * @param parameterName Name of the parameter passed on the URL.
   */
  getParameterValue(parameterName: string): string;
  /**
   * Returns the URL where the request originated.
   */
  getReferringURL(): string;
  /**
   * Returns the name of the view in use.
   */
  getViewName(): string;
  /**
   * Returns the window's properties.
   */
  getWindowProperties(): any;
  /**
   * Returns true if the page is part of Studio.
   */
  isInDevStudio(): boolean;
  /**
   * Returns true if this is an interactive session. An interactive session is when a user
   * has logged in as opposed to a REST request.
   */
  isInteractive(): boolean;
  /**
   * Returns true when the sysparm_collection_related_file URL parameter is
   * set.
   */
  isManyToMany(): boolean;
  /**
   * Returns true when the sys_is_related_list URL-parameter is true.
   * Returns false if the parameter is not present.
   */
  isRelatedList(): boolean;
}
declare class SPScriptedFacet {
  /**
   * Adds facet items or mapped queries to a facets object.
   * @param label The display label for the facet item or mapped query.
   * @param valueObj The facet item or mapped query for the facet. Can only contain types String,
   * Number, Boolean, and Double.
   */
  addFacetItem(label: string, valueObj: any): any;
}
declare class SPScriptedFacetService {
  /**
   * Creates a single choice facets object.
   * @param label Label for the facet.
   * @param id ID for the facet.
   */
  createFacet(label: string, id: string): any;
  /**
   * Creates a multi choice facets object.
   * @param label Label for the facet.
   * @param id ID for the facet.
   */
  createMultiChoiceFacet(label: string, id: string): any;
}
declare class Stream {
  constructor(nextFn: any);
  /**
   * Returns results in batches of arrays, each containing the number of records passed to
   * the method.
   * @param count Number of records in each array returned from the stream.
   */
  chunk(count: number): any;
  /**
   * Applies a predicate function to every item in the Stream object. If the predicate
   * returns true for every item in the stream, the method returns true. If the predicate returns
   * false for any item in the stream, the method returns false.
   * @param predicate Predicate function to apply to every record or item inside the Stream object.
   * The function must take each item in the stream as input and return a boolean.
   */
  every(predicate: any): boolean;
  /**
   * Applies a predicate function to each item in the Stream object. If the predicate
   * returns true, the method returns the stream. If the predicate returns false, it returns an empty
   * Stream object.
   * @param predicate Predicate function to apply to every record or item inside the Stream object.
   * The function must take each item in the stream as input and return a
   * boolean.
   */
  filter(predicate: any): any;
  /**
   * Returns the first record or item in the Stream object that matches the predicate
   * function. If no predicate function is provided, then the method returns the first record or item
   * in the Stream.
   * @param predicate Optional. Predicate function to apply to the items inside the Stream object.
   * The function must take each item in the stream as input and return a
   * boolean.
   */
  find(predicate?: any): any;
  /**
   * Applies a function to every item in a stream. Returns another stream that you can
   * iterate over.
   * @param fn Function to apply to the result of the query that returns a Stream object.
   */
  flatMap(fn: any): any;
  /**
   * Applies the specified function to each record or item in the stream.
   * @param fn Function to apply to each item in the stream.
   */
  forEach(fn: any): any;
  /**
   * Returns a Stream object that contains the values from the provided array.
   * @param arr Array of values to create the stream from.
   */
  fromArray(arr: any[]): any;
  /**
   * Limits the number of results returned by the stream.
   * @param count Number of records to return.
   */
  limit(count: number): any;
  /**
   * Applies a function to each item in a stream and returns the updated Stream
   * object.
   * @param fn Function to apply to the result of the query that takes the each item in the
   * stream as input.
   */
  map(fn: any): any;
  /**
   * Executes a reducer function on each item in the stream, resulting in single output
   * value.
   * @param reducerFn Function to apply to each item in the stream that reduces the stream to a
   * single value. This function must take two arguments:
   *
   * acc: Accumulator that accumulates all values returned by
   * the function.
   *
   * cur: Current item being accumulated in the array.
   *
   *
   *
   *
   * @param initialValue Value passed to the function as the initial value.
   */
  reduce(reducerFn: any, initialValue: any): any;
  /**
   * Applies a predicate function, a function that takes a single value and returns true or
   * false, to each item in the stream. If the predicate returns true for any item in the stream, the
   * method returns true.
   * @param predicate Predicate function to apply to the items inside the Stream object. Must return
   * a Boolean value.
   */
  some(predicate: any): boolean;
  /**
   * Returns an array containing the given number of items from the stream.
   * @param count The maximum number of items from the stream to return in the array.
   */
  toArray(count: number): any[];
}
declare class TemplatePrinter {
  /**
   * Prints the string to the email body.
   * @param string The string to print
   */
  print(string: string): any;
  /**
   * Adds non-breaking spaces to the email body.
   * @param spaces The number of non-breaking spaces to output to the email body.
   */
  space(spaces: number): any;
}
declare class v_query {
  /**
   * Gets an encoded query string for the specified field.
   * @param field Name of the field.
   */
  getCondition(field: string): string;
  /**
   * Returns the query against a remote table as an encoded query string
   */
  getEncodedQuery(): string;
  /**
   * Gets the value of a field in an equality query condition.
   * @param field Name of the field to be queried.
   */
  getParameter(field: string): string;
  /**
   * Returns the sys_id value in a get query.
   */
  getSysId(): string;
  /**
   * Gets a text search query parameter.
   */
  getTextSearch(): string;
  /**
   * Determines if the query is a get query, that is, a query that retrieves a record by
   * sys_id.
   */
  isGet(): boolean;
  /**
   * Indicates if the query contains a text query parameter.
   */
  isTextSearch(): boolean;
  /**
   * Sets the last error message in the GlideRecord.
   * @param message Error message.
   */
  setLastErrorMessage(message: string): any;
}
declare class v_table {
  /**
   * Adds rows to the remote table.
   * @param row JavaScript object containing field name and value map in which the key is the
   * field name, for example, {number: "INC0001", sys_id:
   * "a34"}.{ &lt;field name&gt;: String }
   *
   */
  addRow(row: any): boolean;
}
declare class Workflow {
  inputs: any;
  result: string;
  /**
   * Adds a debug message to the log.
   * @param message The message to add to the log.
   * @param args Arguments to add to the message.
   */
  debug(message: string, args: any): string;
  /**
   * Adds an error message to the log.
   * @param message The message to add to the log.
   * @param args Arguments to add to the message.
   */
  error(message: string, args: any): string;
  /**
   * Returns the specified variable's value.
   * @param name The variable name
   */
  getVariable(name: string): any;
  /**
   * Adds an informational message to the log.
   * @param message The message to add to the log.
   * @param args Arguments to add to the message.
   */
  info(message: string, args: any): string;
  /**
   * Returns the workflow name.
   */
  name(): string;
  /**
   * Removes the specified variable from the workflow.
   * @param name The variable name
   */
  removeVariable(name: string): any;
  /**
   * Returns the workflow's scratchpad object.
   */
  scratchpad(): any;
  /**
   * Sets the workflow's result.
   * @param result The workflow's result
   */
  setResult(result: string): any;
  /**
   * Sets the specified variable to the specified value.
   * @param name The variable name
   * @param value The value to be assigned to the variable.
   */
  setVariable(name: string, value: any): any;
  /**
   * Adds a warning message to the log.
   * @param message The message to add to the log.
   * @param args Arguments to add to the message.
   */
  warn(message: string, args: any): string;
}
declare class XMLDocument2 {
  constructor(inputStream: GlideScriptableInputStream);
  constructor();
  /**
   * Creates and adds an element node to the current node. The element name is the string
   * passed in as a parameter. The new element has no text child nodes.
   * @param name The new element's name.
   */
  createElement(name: string): any;
  /**
   * Creates and adds an element node with a text child node to the current
   * node.
   * @param name Name of the element to add.
   * @param value Element's text value.
   */
  createElementWithTextValue(name: string, value: string): any;
  /**
   * Gets the document element node of the XMLdocument2 object. The document element node is
   * the root node.
   */
  getDocumentElement(): any;
  /**
   * Gets the first node in the specified xPath.
   * @param xPath The xPath to obtain the node from.
   */
  getFirstNode(xPath: string): any;
  /**
   * Gets the node after the specified node.
   * @param current The current node.
   */
  getNextNode(current: any): any;
  /**
   * Gets the node specified in the xPath.
   * @param xPath xPath of the node to obtain.
   */
  getNode(xPath: string): any;
  /**
   * Gets all the text child nodes from the node referenced in the specified
   * XPath.
   * @param xPath XPath of the text to obtain.
   */
  getNodeText(xPath: string): string;
  /**
   * Parses the XML string and loads it into the XMLDocument2 object.
   * @param xmlDoc The document to parse.
   */
  parseXML(xmlDoc: string): boolean;
  /**
   * Makes the node passed in as a parameter the current node.
   * @param element The element node to set as the current node.
   */
  setCurrentElement(element: any): any;
  /**
   * When set to true, the XMLDocument2 object processes the document with XML
   * namespaces.
   * @param aware When true, the XMLDocument2 object processes the document with XML namespaces.
   */
  setNamespaceAware(aware: boolean): any;
  /**
   * Returns a string containing the XML.
   */
  toString(): string;
}
declare class XMLNode {
  /**
   * Gets the value of the attribute.
   * @param attribute Name of the attribute.
   */
  getAttribute(attribute: string): string;
  /**
   * Returns an object containing the node's attributes as properties with
   * values.
   */
  getAttributes(): any;
  /**
   * Gets a XMLNodeIterator object that can be used to walk through the list of child
   * nodes.
   */
  getChildNodeIterator(): any;
  /**
   * Gets the node's first child node.
   */
  getFirstChild(): any;
  /**
   * Gets the node's last child node.
   */
  getLastChild(): any;
  /**
   * Gets the node's name. A node's name is determined by the node type. A document-element
   * node's name is #document. A text node's name is #text. An element node's name is the element's
   * name.
   */
  getNodeName(): string;
  /**
   * Gets the node's value. A node's value is determined by the node type. Element and
   * document-element nodes return null.
   */
  getNodeValue(): string;
  /**
   * Gets the text content of the current node. The text content of a node consists of all
   * the node's child text nodes
   */
  getTextContent(): string;
  /**
   * Determines if the node has the specified attribute.
   * @param attribute The name of the attribute to check.
   */
  hasAttribute(attribute: string): boolean;
  /**
   * Returns the string value of the current node.
   */
  toString(): string;
}
declare class XMLNodeIterator {
  /**
   * Returns true if the iteration has more elements.
   */
  hasNext(): boolean;
  /**
   * Gets the next element in the iteration. The returned element may be a #text node for
   * the spaces/tabs if XML is "pretty formatted".
   */
  next(): any;
}
declare namespace sn_auth {
  export class AuthCredential {
    constructor(authCredential?: any);
    /**
     * Returns the value of an AuthCredential attribute.
     * @param key Key of the attribute to return the value for. If you created an empty
     * AuthCredential object, you must use the setAttribute()
     * method to add properties to the object. If you used a credential record
     * to instantiate the AuthCredential object, pass a field name from
     * the Credential [discovery_credentials] table to access the value.
     */
    getAttribute(key: string): any;
    /**
     * Sets an attribute for an AuthCredential object.
     * @param key Name of the attribute to set. If you created an empty
     * AuthCredential object, you must use the this method to add
     * properties to the object. If you used a credential record to instantiate the
     * AuthCredential object, pass a field name from the Credential
     * [discovery_credentials] table to set the value.
     * @param value Value of the attribute.
     */
    setAttribute(key: string, value: string): any;
  }
  export class GlideOAuthClient {
    /**
     * Retrieves the access and refresh tokens for the client.
     * @param requestID Request ID from the OAuth Requestor Profile [oauth_requestor_profile] table,
     * which references the OAuth Entity Profile [oauth_entity_profile] table.
     * @param oauthProfileID OAuth profile ID from the OAuth Entity Profile [oauth_entity_profile]
     * table.
     */
    getToken(requestID: string, oauthProfileID: string): GlideOAuthToken;
    /**
     * Retrieves the token for the client, with the request parameters encoded in JSON
     * format.
     * @param clientName The client name.
     * @param jsonString The JSON string for the client.
     */
    requestToken(
      clientName: string,
      jsonString: string,
    ): GlideOAuthClientResponse;
    /**
     * Retrieves the token for the client, with the client name and the request set into a
     * GlideOAuthClientResponse object.
     * @param clientName The client name.
     * @param request The request.
     */
    requestTokenByRequest(
      clientName: string,
      request: GlideOAuthClientRequest,
    ): GlideOAuthClientResponse;
    /**
     * Revokes the access or refresh token for the client, with the request and optional
     * header parameters set into a GlideOAuthClientRequest object.
     * @param clientName The client name.
     * @param accessToken The access token.
     * @param refreshToken The refresh token.
     * @param request The request.
     */
    revokeToken(
      clientName: string,
      accessToken: string,
      refreshToken: string,
      request: GlideOAuthClientRequest,
    ): GlideOAuthClientResponse;
  }
  export class GlideOAuthClientRequest {
    /**
     * Retrieves the grant type.
     */
    getGrantType(): string;
    /**
     * Retrieves the HTTP headers for the string you provide.
     * @param name The name of the parameter.
     */
    getHeader(name: string): any;
    /**
     * Retrieves the HTTP headers.
     */
    getHeaders(): any;
    /**
     * Retrieves the parameters for the parameter name you provide.
     * @param name The parameter name for which you want the parameters.
     */
    getParameter(name: string): string;
    /**
     * Retrieves the password.
     */
    getPassword(): string;
    /**
     * Retrieves the refresh token.
     */
    getRefreshToken(): string;
    /**
     * Retrieves the scope.
     */
    getScope(): string;
    /**
     * Retrieves the user name.
     */
    getUserName(): string;
    /**
     * Sets the grant type for the string you provide.
     * @param name The grant type.
     */
    setGrantType(name: string): any;
    /**
     * Retrieves the HTTP headers for the string you provide.
     * @param name The name of the parameter.
     * @param value The value of the parameter.
     */
    setHead(name: string, value: string): any;
    /**
     * Sets the parameters for the name:value pair of strings you provide.
     * @param name The parameter name for which you want the parameters.
     * @param value The value of the parameter.
     */
    setParameter(name: string, value: string): any;
    /**
     * Sets the password with the string you provide.
     * @param password The user name.
     */
    setPassword(password: string): any;
    /**
     * Sets the refresh token with the string you provide.
     * @param refreshToken The refresh token.
     */
    setRefreshToken(refreshToken: string): any;
    /**
     * Sets the scope for the string you provide.
     * @param scope The scope.
     */
    setScope(scope: string): any;
    /**
     * Sets the user name with the string you provide.
     * @param userName The user name.
     */
    setUserName(userName: string): any;
  }
  export class GlideOAuthClientResponse {
    /**
     * Retrieves all of the response information, including instance information.
     */
    getBody(): string;
    /**
     * Retrieves the HTTP response content header from an external OAuth provider.
     */
    getContentType(): string;
    /**
     * Retrieves the error message if authentication is not successful.
     */
    getErrorMessage(): string;
    /**
     * Retrieves the HTTP response code from the external OAuth provider.
     */
    getResponseCode(): string;
    /**
     * Retrieves the error message if authentication is not successful.
     */
    getResponseParameters(): any;
    /**
     * Retrieves the refresh token.
     */
    getToken(): GlideOAuthToken;
  }
  export class GlideOAuthToken {
    /**
     * Retrieves the access token associated with the GlideOAuthToken object.
     */
    getAccessToken(): string;
    /**
     * Deprecated. Retrieves the sys_id of the token ID associated with the GlideOAuthToken
     * object.
     */
    getAccessTokenSysID(): string;
    /**
     * Retrieves the lifespan of the access token associated with the GlideOAuthToken
     * object.
     */
    getExpiresIn(): number;
    /**
     * Refreshes the token associated with the GlideOAuthToken object.
     */
    getRefreshToken(): string;
    /**
     * Deprecated. Retrieves the sys_id of the refresh token.
     */
    getRefreshTokenSysID(): string;
    /**
     * Retrieves the token scope, which is the amount of access granted by the access
     * token.
     */
    getScope(): string;
  }
  export class HttpRequestAuthedData {
    constructor();
    /**
     * Adds a header to the HttpRequestAuthedData object.
     * @param key Name of the HTTP header.
     * @param value Value of the HTTP Header.
     */
    addHeader(key: string, value: string): any;
    /**
     * Adds a query parameter to the HttpRequestAuthedData object.
     * @param key Name of the query parameter.
     * @param value Value of the query parameter.
     */
    addQueryParam(key: string, value: string): any;
    /**
     * Returns whether the signature is applied to the request in the header or as a query
     * parameter.
     */
    getDirective(): string;
    /**
     * Returns an object containing the headers that were included when the request was
     * signed.
     */
    getHeaderMap(): any;
    /**
     * Returns an object containing the query parameters included when the request was
     * signed.
     */
    getQueryMap(): any;
    /**
     * Returns the status of the request signing.
     */
    getStatus(): string;
    /**
     * Returns a detailed message about the request signing. If the request signing fails,
     * this method returns the error message.
     */
    getStatusMessage(): string;
    /**
     * Defines whether to apply the signature to the signed request in the header or as a
     * query parameter.
     * @param directive Whether to apply the signature to the header or as a query parameter of the
     * signed request. Values include:
     *
     * query: Applies signature as a query parameter.
     *
     * header: Applies signature to the request header.
     *
     *
     */
    setDirective(directive: string): any;
    /**
     * Sets the status of the request signing.
     * @param status The status of the request signing. Possible values:
     *
     * success: The system successfully signed the request.
     *
     * fail: The system failed to sign the request.
     *
     * skipped: The system skipped signing because the information
     * was incomplete.
     *
     *
     */
    setStatus(status: string): any;
    /**
     * Sets a status message for the request signing.
     * @param statusMessage Message to set for the request signing status.
     */
    setStatusMessage(statusMessage: string): any;
  }
  export class HttpRequestData {
    constructor();
    /**
     * Adds a header to the HttpRequestData object.
     * @param key Name of the HTTP header.
     * @param value Value of the HTTP Header.
     */
    addHeader(key: string, value: string): any;
    /**
     * Adds a query parameter to the HttpRequestData object.
     * @param key Name of the query parameter.
     * @param value Value of the query parameter.
     */
    addQueryParam(key: string, value: string): any;
    /**
     * Removes a header from the HttpRequestData object.
     * @param key Name of the HTTP header to remove.
     */
    deleteHeader(key: string): any;
    /**
     * Returns the sys_id of the Connection & Credential alias associated with the IntegrationHub REST step.
     */
    getConnectionAliasID(): string;
    /**
     * Returns the value of a connection attribute associated with the Connection &
     * Credential alias associated with IntegrationHub REST step.
     * @param name Name of the connection attribute.
     */
    getConnectionExtendedAttribute(name: string): string;
    /**
     * Returns the content of the request in the HttpRequestData object.
     */
    getContent(): string;
    /**
     * Returns the date when the request was signed.
     */
    getDate(): number;
    /**
     * Returns whether the signature is applied to the request in the header or as a query
     * parameter.
     */
    getDirective(): string;
    /**
     * Returns the endpoint set for the request.
     */
    getEndpoint(): string;
    /**
     * Returns the time in seconds before the signature expires starting when the request was
     * signed using the generateAuth() method in the
     * RequestAuthAPI class.
     */
    getExpiry(): number;
    /**
     * Returns the value associated with the given HTTP header.
     * @param key Name of HTTP header.
     */
    getHeader(key: string): string;
    /**
     * Returns an object containing the headers included in the request.
     */
    getHeaderMap(): any;
    /**
     * Returns the host used in the request.
     */
    getHost(): string;
    /**
     * Returns the HTTP method used in the request.
     */
    getHttpMethod(): string;
    /**
     * Returns the value of the specified query parameter.
     * @param key Name of the query parameter to get the value of.
     */
    getQueryParam(key: string): string;
    /**
     * Returns an object containing the query parameters included in the request.
     */
    getQueryParamMap(): any;
    /**
     * Returns the region for the request that will be used in signing.
     */
    getRegion(): string;
    /**
     * Returns the service defined in the request.
     */
    getService(): string;
    /**
     * Defines the content to send in the request.
     * @param content Content to send in the request.
     */
    setContent(content: string): any;
    /**
     * Defines the date of the request used for signing.
     * @param date The difference between January 1, 1970 UTC and the date used to sign the
     * request.Unit: Milliseconds
     */
    setDate(date: number): any;
    /**
     * Defines whether to apply the signature to the request in a header or as a query
     * parameter.
     * @param directive Whether to apply the signature to the header or as a query parameter. Values
     * include:
     *
     * query: Applies signature as a query parameter.
     *
     * header: Applies signature to the request header.
     *
     *
     * Default: header
     */
    setDirective(directive: string): any;
    /**
     * Defines the endpoint to send the request to.
     * @param endpoint Endpoint to send the request to. The endpoint can include query parameters,
     * path, and version.
     */
    setEndpoint(endpoint: string): any;
    /**
     * Sets the amount of time before the signature expires starting when the request is
     * signed using the generateAuth() method in the
     * RequestAuthAPI class.
     * @param expiry Amount of time before the signature expires.Unit: Seconds
     */
    setExpiry(expiry: number): any;
    /**
     * Defines the host used in the request.
     * @param host Name of the HTTP request host.
     */
    setHost(host: string): any;
    /**
     * Sets the HTTP method to use in the request.
     * @param httpMethod HTTP method to use in the request.
     */
    setHttpMethod(httpMethod: string): any;
    /**
     * Defines the region to use for the request in signing.
     * @param region The region to use to sign the request. Available values are determined by the
     * third-party API's requirements.
     */
    setRegion(region: string): any;
    /**
     * Defines the service for the request.
     * @param service The service for the request.
     */
    setService(service: string): any;
  }
  export class RequestAuthAPI {
    constructor(data: any, credential: any);
    /**
     * Signs the HttpRequestData object and returns an HttpRequestAuthedData object to use to
     * send in the REST request.
     */
    generateAuth(): any;
    /**
     * Returns the credential record used to sign the request.
     */
    getAuthCredential(): any;
    /**
     * Returns the HttpRequestData object that was used to instantiate the
     * RequestAuthAPI class.
     */
    getHttpRequestData(): any;
    /**
     * Generates a temporary, limited privilege token that you can use to provide trusted
     * users with temporary security credentials to control third-party resources.
     */
    resetAuthCredential(): any;
  }
}
declare namespace sn_cc {
  export class ConnectionInfo {
    /**
     * Returns the value of a ConnectionInfo attribute with the specified
     * property name.
     * @param name Name of a ConnectionInfo object property.
     */
    getAttribute(name: string): string;
    /**
     * Returns the value of credential attributes for a specified connection.
     */
    getCredentialAttribute(): any;
    /**
     * Returns the connection attributes as a collection of key-value pairs.
     */
    getDataMap(): any;
    /**
     * Returns the extended attributes as a collection of key-value pairs.
     */
    getExtendedAttributes(): any;
  }
  export class ConnectionInfoProvider {
    constructor();
    /**
     * This function retrieves a ConnectionInfo object identified by the given aliasID in the
     * current domain.
     * @param aliasID The sys_id of a connection alias.
     */
    getConnectionInfo(aliasID: string): any;
    /**
     * This function retrieves a ConnectionInfo object identified by the given aliasID for a
     * specific domain.
     * @param aliasID The sys_id of a connection alias.
     * @param domainID The sys_id of a domain or global.
     */
    getConnectionInfoByDomain(aliasID: string, domainID: string): any;
  }
  export class StandardCredentialsProvider {
    constructor();
    /**
     * Returns the credential record object identified by the specified sys_id.
     * @param sys_id Sys_id of the credential record. Located in the Credentials
     * [discovery_credentials] table.
     */
    getCredentialByID(sys_id: string): any;
    /**
     * Returns an array of all credentials that match the specified types and
     * tags.
     * @param tags Optional. Comma-separated list of tag names. For example, "ssh,
     * jdbc".Examples of valid calls:
     * var credentials = provider.getCredentials(null,
     * null);
     *
     *
     * var credentials = provider.getCredentials(["ssh"], "");
     *
     *
     * var credentials = provider.getCredentials(new ArrayList&lt;String&gt;(),
     * "ssh,admin");
     *
     *
     *
     * @param types Optional. Credential type names. For example, ["ssh", "windows"]Note: If
     * types is null or empty, any match returns a credential. If
     * types is specified, the credentials whose type matches one
     * of the types is returned.
     */
    getCredentials(tags?: string, types?: any[]): any;
  }
}
declare namespace sn_clotho {
  export class Client {
    constructor();
    /**
     * Remove the data in the MetricBase database associated with
     * the specified metric in the specified GlideRecord. Use this method for removing test data.
     * @param gr The records whose time series data for the specified metric is to be
     * deleted.
     * @param metric The name of the metric.
     */
    deleteSeries(gr: GlideRecord, metric: string): any;
    /**
     * Saves metric data to the MetricBase database.
     * @param metricData One of the following:
     * DataBuilder object containing metric data.
     *
     * Array of DataBuilder objects containing metric data.
     *
     *
     */
    put(metricData: any): any;
  }
  export class Data {
    /**
     * Returns the end time for data in the Data object.
     */
    getEnd(): GlideDateTime;
    /**
     * Returns the label assigned by the
     * sn_clotho.ClothoTransform.label() method.
     */
    getLabel(): string;
    /**
     * Returns the name of the metric of the data series. Returns null when the data object is
     * associated with multiple data series.
     */
    getMetricName(): string;
    /**
     * Returns the time period in milliseconds.
     */
    getPeriod(): number;
    /**
     * Returns the start time for data in the Data object.
     */
    getStart(): GlideDateTime;
    /**
     * Returns the subject of the data series. Returns null when the data object is associated
     * with multiple data series.
     */
    getSubject(): string;
    /**
     * Returns the name of the table assigned in the DataSelector class constructor. Returns
     * null when the data object is associated with multiple data series.
     */
    getTableName(): string;
    /**
     * Returns an array of values.
     */
    getValues(): any[];
    /**
     * Returns the number of values in the Data object.
     */
    size(): number;
  }
  export class DataBuilder {
    constructor(glideRecord: any, subject: string, metric: string);
    /**
     * Add a series of data points to the DataBuilder object. Each data point is a time stamp
     * and a value.
     * @param start The time stamp for the first data point. Subsequent time stamps are calculated
     * using the retention policy collection period.
     * @param value An array of numbers.
     */
    add(start: GlideDateTime, value: any[]): any;
    /**
     * Add a series of data points to the DataBuilder object. Each data point is a time stamp
     * and a value.
     * @param start The time stamp for the data point.
     * @param value The value of the data point.
     */
    add(start: GlideDateTime, value: number): any;
  }
  export class Transformer {
    constructor(sourceRecords: GlideRecord);
    /**
     * Run the transform.
     * @param start The beginning of the period to be evaluated.
     * @param end The end of the period to be evaluated.
     */
    execute(start: GlideDateTime, end: GlideDateTime): any;
    /**
     * Specify a field to be used to group the data.
     * @param field A field in the table to be used to group the transform results.
     */
    groupBy(field: string): any;
    /**
     * Specify the metric field to be used in the transform.
     * @param metricName Name of the metric field.
     */
    metric(metricName: string): any;
  }
  export class TransformPart {
    /**
     * Add the specified number to the value in each time stamp.
     * @param constant The number to add to the value in each time stamp.
     */
    add(constant: number): any;
    /**
     * Aggregate the selected metric series into one series containing the average value for
     * each time stamp.
     */
    avg(): any;
    /**
     * Create a result set that for each time stamp returns specified number of bottom values.
     * This method results in 'count' number of series. Each value retains the label of its source
     * series.
     * @param count The number of series to return. The series are labeled 0 to count - 1.
     */
    bottom(count: number): any;
    /**
     * Replace the value in any time stamp that is greater than the specified value with the
     * specified value.
     * @param ceiling The maximum allowed value for any time stamp.
     */
    ceil(ceiling: number): any;
    /**
     * Mark this transform for collection.
     */
    collect(): any;
    /**
     * Aggregate the selected metric series into one series containing the number of values
     * for each time stamp.
     */
    count(): any;
    /**
     * Divide the value in each time stamp by the specified number.
     * @param constant The number by which to divide the value of each time stamp.
     */
    div(constant: number): any;
    /**
     * Create a series using the specified aggregator for the specified time.
     * @param aggregator Can be:
     * AVG
     *
     * CHISQUARE
     *
     * LAST
     *
     * MAX
     *
     * MEDIAN
     *
     * MIN
     *
     * STDDEV
     *
     *
     * For definitions of these options, see MetricBase
     * transforms.
     * @param duration Time period for the series.
     */
    filter(aggregator: any, duration: any): any;
    /**
     * Replace the value in any time stamp that is less than the specified value with the
     * specified value.
     * @param floor The minimum value for any time stamp.
     */
    floor(floor: number): any;
    /**
     * Create series made up of the value that the specified percentage of values is below.
     * Returns a series for each fraction in the specified array.
     * @param fractions The fractions to use on the input series.
     */
    fractiles(fractions: any[]): any;
    /**
     * Return the part of the result relevant to this transform.
     */
    getResult(): any;
    /**
     * Specify a field to be used to group the data.
     * @param field A field in the table to be used to group the transform results.
     */
    groupBy(field: string): any;
    /**
     * Create a data value for a NaN data item by interpolating from adjacent data values.
     * @param count Specifies the number of data samples in each direction to check for a non NaN
     * value. If if a non NaN value is not found, NaN is used.
     */
    interpolate(count: any): any;
    /**
     * Perform an Interquartile range transform.
     */
    iqr(): any;
    /**
     * Add a label for the resulting series.
     * @param label The label for the transform results.
     */
    label(label: string): any;
    /**
     * Returns at most the specified number of values, starting at the most recent non-NaN
     * value.
     * @param count A number of time stamps.
     */
    limit(count: any): any;
    /**
     * Run a logarithm on the value in each time stamp where the result is the log of the
     * specified base for the time stamp value.
     * @param base The base for the logarithm calculation.
     */
    log(base: number): any;
    /**
     * Returns a series with the maximum value for each time stamp.
     */
    max(): any;
    /**
     * Create a series containing the median of values for each time stamp across a set of
     * series.
     */
    median(): any;
    /**
     * Specify the metric field to be used in the transform.
     * @param metric Name of the metric field.
     */
    metric(metric: string): any;
    /**
     * Returns a series with the minimum value for each time stamp.
     */
    min(): any;
    /**
     * Multiply the value in each time stamp by the specified number.
     * @param constant The number by which to multiply the value of each time stamp.
     */
    mul(constant: number): any;
    /**
     * Partition the series into intervals of the same duration.
     * @param aggregator The aggregator to use. Can be min, max, avg, or last.
     * @param duration The interval length.
     * @param base The zero offset for partitioning. For example, if you partition by day (24h),
     * then set the base to Monday at midnight in your time zone. If you partition by 30
     * days, then set the base to  1st day of the most recent month.
     */
    partition(
      aggregator: string,
      duration: GlideDateTime,
      base: GlideDateTime,
    ): any;
    /**
     * Specify the number of data points to include in the result.
     * @param count The number of samples to include in the result.
     */
    resample(count: number): any;
    /**
     * Specify the number of data points to include in the result.
     * @param min The minimum number of samples to include in the result. If not enough samples
     * are available, interpolation is used to create samples.
     * @param max The maximum number of samples to include in the result.
     */
    resample(min: number, max: number): any;
    /**
     * Specify the number of data points to include in the result.
     * @param aggregator Can be LAST, AVG, MIN, or MAX.
     * @param duration The time period for the result set.
     */
    resample(aggregator: string, duration: GlideDuration): any;
    /**
     * Specify the number of data points to include in the result.
     * @param aggregator Can be LAST, AVG, MIN, or MAX.
     * @param numValues The number of samples to include in the result set.When the number of values
     * requested is greater than the number of values in the data for the requested time
     * period, interpolate() is used to add values between existing
     * points to reach the requested number of values.
     */
    resample(aggregator: string, numValues: number): any;
    /**
     * Round the value in each time stamp to the specified precision.
     * @param precision The value to be used in the rounding calculation.
     */
    round(precision: number): any;
    /**
     * Create a series containing the standard deviation of values for each time stamp across
     * a set of series.
     */
    stddev(): any;
    /**
     * Subtract the specified number from the value in each time stamp.
     * @param constant The number to subtract from the value in each time stamp.
     */
    sub(constant: any): any;
    /**
     * Aggregate the selected metric series into one series containing the sum of all values
     * for each time stamp.
     */
    sum(): any;
    /**
     * Create a result set that for each time stamp returns the specified number of top
     * values. This method results in 'count' number of series. Each value retains the label of its
     * source series.
     * @param count The number of series to return. The series are labeled 0 to count - 1.
     */
    top(count: number): any;
  }
  export class TransformResult {
    /**
     * Returns an array of Data objects. Returns an error if no group was specified for the
     * transform.
     */
    byGroup(): any[];
    /**
     * Returns the transformed data with the specified label.
     * @param label The label that identifies the data to be retrieved.
     */
    getByLabel(label: string): any;
    /**
     * Returns a single Data object, or null if the result is empty.
     */
    getData(): any;
    /**
     * Returns the transformed data as an array. This method turns a Data object into an
     * array.
     */
    toArray(): any[];
  }
}
declare namespace sn_cmdb {
  export class IdentificationEngine {
    /**
     * Inserts or updates
     * configuration items and non-Configuration Management Database (CMDB)
     * configuration items (classes not extending from cmdb_ci) in the CMDB based on identification and reconciliation
     * rules. Use this API instead of updating the CMDB directly.
     * @param input Required. Input payload. A JSON formatted string of
     * configuration items to add or update.
     * "input" {
     * "items": [Array],
     * "referenceItems": [Array],
     * "relations": [Array]
     * }
     * @param source Identifies the data source of the CI information. This value must be one of the
     * choice values defined for the discovery_source field of the cmdb_ci table.
     */
    createOrUpdateCI(input: string, source: string): any;
    /**
     * Inserts or updates
     * configuration items and non-Configuration Management Database (CMDB)
     * configuration items (classes not extending from cmdb_ci) in the CMDB based on identification and reconciliation
     * rules. Use this API instead of updating the CMDB directly.
     * @param input Required. Input payload. A JSON formatted string of
     * configuration items to add or update.
     * "input" {
     * "items": [Array],
     * "referenceItems": [Array],
     * "relations": [Array]
     * }
     * @param options Optional, but {} or null must be passed-in. Options to enable
     * or disable features.Note: By default or if partial_payloads is
     * set to true, both partial_commits and
     * deduplicate_payloads are enabled, even if they are set to
     * false, as those features are essential for partial payloads
     * functionality.
     * "options": {
     * "deduplicate_payloads": "Boolean",
     * "generate_summary": "Boolean",
     * "partial_commits": "Boolean",
     * "partial_payloads": "Boolean"
     * }
     * @param source Data source of the CI information. This value must be one of
     * the choice values defined for the discovery_source field of the Configuration Item
     * [cmdb_ci] table.
     */
    createOrUpdateCIEnhanced(
      input: string,
      options: any | undefined,
      source: string,
    ): any;
    /**
     * Determines the operation (insert/update) to perform with the specified payload without
     * committing the operation in the database.
     * @param jsonString A JSON formatted string of configuration items to be added or updated. Each
     * input string is in the format  'items: [{}], relations:[{}]', where each item within
     * the items and relations lists contains name-value pairs. The possible name-value
     * pairs within the items list are:
     * className - the sys_class_name of the CI to be created or updated.
     *
     * values:{} - the field information for the CI as name-value pairs, where the
     * name is the field name.
     *
     * lookup:[{}] - a list of records with each item having name-value pairs like
     * the items list.
     *
     *
     *
     * The possible name-value pairs within the relations list are:
     * parent - index of the parent item in the dependency relation
     *
     * child - index of the child item in the dependency relation
     *
     * type - the relationship type. This is one of the name field values from the
     * cmdb_rel_type table.
     *
     *
     *
     */
    identifyCI(jsonString: string): string;
    /**
     * Determines the Configuration Management Database (CMDB) operation (insert/update)
     * to perform with the specified payload (request body), without committing the operations in the
     * database.
     * @param input Required. Input payload. A JSON formatted string of
     * configuration items to add or update.
     * "input" {
     * "items": [Array],
     * "referenceItems": [Array],
     * "relations": [Array]
     * }
     * @param options Optional, but {} or null must be passed-in. Options to enable
     * or disable features.Note: By default or if partial_payloads is
     * set to true, both partial_commits and
     * deduplicate_payloads are enabled, even if they are set to
     * false, as those features are essential for partial payloads
     * functionality.
     * "options": {
     * "deduplicate_payloads": "Boolean",
     * "generate_summary": "Boolean",
     * "partial_commits": "Boolean",
     * "partial_payloads": "Boolean"
     * }
     * @param source Data source of the CI information. This value must be one of
     * the choice values defined for the discovery_source field of the Configuration Item
     * [cmdb_ci] table.
     */
    identifyCIEnhanced(
      input: string,
      options: any | undefined,
      source: string,
    ): any;
    /**
     * Runs an identification audit against the specified configuration item (CI) to detect
     * duplicates.
     * @param gr The CI on which to run the audit to detect duplicates. The CI must have
     * independent identification rules.
     */
    runIdentificationAudit(gr: GlideRecord): any;
  }
}
declare namespace sn_cmdbgroup {
  export class CMDBGroupAPI {
    /**
     * Returns all configuration items (CIs) for the specified group. The results include all
     * manual CIs and the list of CIs from the query builder's saved query.
     * @param groupId Sys_id of the Configuration Management Database (CMDB) group.
     * @param requireCompleteSet Optional, but must be passed if
     * requireAllQueryNodesCis is passed. Flag that indicates
     * whether an empty string is returned if any CIs are filtered out by access control
     * list (ACL) restrictions.
     * Valid values:
     * true: Return empty string.
     *
     * false: Don't return value.
     *
     *
     *
     * Default: false
     * @param requireAllQueryNodesCis Optional. Flag that indicates whether to
     * return CIs from all CMDB classes of the query. Valid values:
     * true: Return CIs from all columns.
     *
     * false: Only return CIs from the starting node of the query builder query.
     *
     *
     *
     * Default: false
     */
    getAllCI(
      groupId: string,
      requireCompleteSet?: boolean,
      requireAllQueryNodesCis?: boolean,
    ): any;
    /**
     * Returns all configuration items (CIs) returned from all saved query builders' query IDs
     * for the specified group.
     * @param groupId Sys_id of the Configuration Management Database (CMDB) group.
     * @param requireCompleteSet Optional, but must be passed if
     * requireAllQueryNodesCis is passed. Flag that indicates
     * whether an empty string is returned if any CIs are filtered out by access control
     * list (ACL) restrictions.
     * Valid values:
     * true: Return empty string.
     *
     * false: Don't return value.
     *
     *
     *
     * Default: false
     * @param requireAllQueryNodesCis Optional. Flag that indicates whether to
     * return CIs from all CMDB classes of the query. Valid values:
     * true: Return CIs from all columns.
     *
     * false: Only return CIs from the starting node of the query builder query.
     *
     *
     *
     * Default: false
     */
    getAllCIFromQueryBuilder(
      groupId: string,
      requireCompleteSet?: boolean,
      requireAllQueryNodesCis?: boolean,
    ): any;
    /**
     * Returns the CMDB group's manual CI list.
     * @param groupId The sysId of the CMDB group.
     * @param requireCompleteSet When true, returns an error string if any CIs are filtered out by ACL
     * restrictions.
     */
    getManualCIList(groupId: string, requireCompleteSet: boolean): string;
    /**
     * Returns the query builder's query IDs for the specified CMDB group.
     * @param groupId The sysId of the CMDB group.
     * @param requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL
     * restrictions.
     */
    getSavedQueryIdList(groupId: string, requireCompleteSet: boolean): string;
    /**
     * Sets the manual CI list for the specified group. The existing manual CI list is
     * overwritten. CI sysIds not found in the cmdb_ci table are ignored.
     * @param groupId The sysId of the CMDB group.
     * @param ciSysIds Comma separated list of CI sysIds.
     */
    setManualCIList(groupId: string, ciSysIds: string): string;
    /**
     * Sets the saved query ID list for the specified group. The existing query ID list is
     * overwritten. Query sysIds not found in the qb_saved_query table are ignored.
     * @param groupId The sysId of the CMDB group.
     * @param queryIds Comma separated list of saved query sysIds.
     */
    setSavedQueryIdList(groupId: string, queryIds: string): string;
  }
}
declare namespace sn_connect {
  export class Conversation {
    /**
     * Add a user to a conversation.
     * @param sysID The sys_ID of the user you want to add to a conversation.
     */
    addSubscriber(sysID: string): any;
    /**
     * Create a Connect
     * conversation.
     * @param name Create a conversation with a specific name.
     * @param type Include a specific conversation type. The type is determined by the type choice
     * list. The base system includes the following type options:
     * connect
     *
     * support
     *
     * group
     *
     * peer
     *
     * qanda
     *
     * team
     *
     *
     */
    create(name: string, type: string): any;
    /**
     * Get an existing Connect conversation by sys_id.
     * @param sysID The sys_id of the conversation record.
     */
    get(sysID: string): any;
    /**
     * Remove a user from a conversation.
     * @param SysID The sys_id of the user you want to remove from a conversation.
     */
    removeSubscriber(SysID: string): any;
    /**
     * Send a message to a conversation.
     * @param Body The main text of the message.
     * @param Field The field you want the message to appear as. Only use this option if adding a
     * message to a record conversation. Choose from work_notes, comments, or system. Using
     * the field system treats the message as a system message.
     */
    sendMessage(Body: string, Field: string): any;
  }
  export class Queue {
    /**
     * Retrieves a specified chat queue.
     * @param SysID Sys_id of a queue from the Chat Queue [chat_queue] table.
     */
    get(SysID: string): any;
    /**
     * Adds the current user to an existing Connect Support chat queue and
     * posts the specified question.
     * @param Question Question to add to the chat queue.
     */
    join(Question: string): any;
  }
}
declare namespace sn_cti_core {
  export class CTIOperationRequest {
    constructor(origin?: string);
    /**
     * Returns the authentication token set on the associated CTIOperationRequest
     * object.
     */
    getAuthToken(): string;
    /**
     * Returns the interaction GlideRecord associated with the operation request.
     */
    getInteractionRecord(): GlideRecord;
    /**
     * Returns the sys_id of the interaction record associated with the current
     * CTIOperationRequest object.
     */
    getInteractionSysId(): string;
    /**
     * Returns the ISO 639.1 language code that was set on the current CTIOperationRequest
     * object.
     */
    getLanguage(): string;
    /**
     * Returns the major version of the computer telephony integrator (CTI) software set on
     * the current CTIOperationRequest object.
     */
    getMajorVersion(): number;
    /**
     * Returns the minor version of the computer telephony integrator (CTI) software
     * associated with a CTIOperationRequest object.
     */
    getMinorVersion(): number;
    /**
     * Returns the name of the operation that the computer telephony integration (CTI)
     * provider is requesting to execute.
     */
    getOperationName(): string;
    /**
     * Returns the substep operation handler name set on the current CTIOperationRequest
     * object.
     */
    getOperationSubStepName(): string;
    /**
     * Returns the value of a specified key previously set on the current CTIOperationRequest
     * object.
     * @param key The name of the key value to return.
     */
    getParameter(key: string): string;
    /**
     * Returns the key-value pairs for all parameters that were previously set on the current
     * CTIOperationRequest object.
     */
    getParameters(): any;
    /**
     * Returns the value of a specified session attribute key set on the current
     * CTIOperationRequest object.
     * @param key The name of the key value to return.
     */
    getSessionAttribute(key: string): string;
    /**
     * Returns a key-value pair map of all session attributes set on the current
     * CTIOperationRequest object.
     */
    getSessionAttributes(): any;
    /**
     * Returns the handling behavior for a subsep when a substep's operation handler is not
     * found.
     */
    getSubStepNotFoundBehaviour(): any;
    /**
     * Sets an authentication token on the current CTIOperationRequest object.
     * @param id The authentication token for the associated Cloud Call Center user.
     */
    setAuthToken(id: string): any;
    /**
     * Sets the sys_id of the interaction record associated with the operation request on the
     * current CTIOperationRequest object.
     * @param sys_id The sys_id of the interaction record to associate with the request.
     */
    setInteractionSysId(sys_id: string): any;
    /**
     * Sets the ISO 639.1 language code to use when processing the associated operation on a
     * CTIOperationRequest object.
     * @param languageCode The ISO 639.1 language code to use when processing the associated
     * operation.
     */
    setLanguage(languageCode: string): any;
    /**
     * Sets the major version of the computer telephony integrator (CTI) provider software
     * making the request on the associated CTIOperationRequest object.
     * @param majorVersion Major version of the CTI provider software making the operation request.If
     * this value was not previously set, returns
     * 1.
     */
    setMajorVersion(majorVersion: number): any;
    /**
     * Sets the minor version of the computer telephony integrator (CTI) provider software
     * making the request on the associated CTIOperationRequest object.
     * @param minorVersion Minor version of the CTI provider software making the operation request.If
     * this value was not previously set, returns
     * 0.
     */
    setMinorVersion(minorVersion: number): any;
    /**
     * Sets the name of the operation that the computer telephony integration (CTI) provider
     * is attempting to execute on the current CTIOperationRequest object.
     * @param name The name of the operation that the CTI provider is currently attempting to
     * execute. This name must be the same as the name of the operation handler to use
     * to process the request. If it is not, an error is thrown. You can locate the
     * available operation handlers in the Operation Handler [sn_cti_operation_handler]
     * table.
     */
    setOperationName(name: string): any;
    /**
     * Sets the operation substep name on the current CTIOperationRequest object.
     * @param name The name of the substep that the CTI provider is trying to execute.
     */
    setOperationSubStepName(name: string): any;
    /**
     * Sets the specified key-value pair on the parameter object of the current
     * CTIOperationRequest object.
     * @param key Name of the key under which to store the associated value.
     * @param value Value to store.Valid data types:
     * string
     *
     * int
     *
     * float
     *
     * number
     *
     * boolean
     *
     * date
     *
     * object
     *
     *
     *
     */
    setParameter(key: string, value: any): any;
    /**
     * Sets the specified session attribute key-value pair on the current CTIOperationRequest
     * object.
     * @param key Name of the key under which to store the associated value.
     * @param value Value to store.Valid data types:
     * string
     *
     * int
     *
     * float
     *
     * number
     *
     * boolean
     *
     * date
     *
     * object
     *
     *
     *
     */
    setSessionAttribute(key: string, value: any): any;
    /**
     * Sets the behavior to perform if the current substep's operation handler is not
     * found.
     * @param behaviour Behavior to use if a handling behavior is not specified for the substep. This
     * must be a behavior defined on the CTIOperationRequest.OperationNotFoundBehaviours
     * object.Possible values:
     * ThrowError: Throw an error.
     *
     * PassThrough: Do not perform any further processing on the request, just
     * return.
     *
     * RouteToOperation: Use the parent operation handler
     * &lt;operation_name&gt;.
     *
     *
     *
     */
    setSubStepNotFoundBehaviour(behaviour: any): any;
  }
  export class CTIOperationResponse {
    constructor();
    /**
     * Returns the authentication token that was set on the CTIOperationResponse
     * object.
     */
    getAuthToken(): string;
    /**
     * Returns the error object associated with the current CTIOperationResponse
     * object.
     */
    getError(): any;
    /**
     * Returns the sys_id of the interaction record associated with the call session that was
     * set on the CTIOperationResponse object.
     */
    getInteractionSysId(): string;
    /**
     * Returns the major version of the computer telephony integrator (CTI) software set on
     * the current CTIOperationResponse object.
     */
    getMajorVersion(): number;
    /**
     * Returns the message string set on the current CTIOperationResponse object.
     */
    getMessage(): string;
    /**
     * Returns the minor version of the computer telephony integrator (CTI) software set on
     * the current CTIOperationResponse object.
     */
    getMinorVersion(): number;
    /**
     * Returns the value of a specified key previously set on the current CTIOperationResponse
     * object.
     * @param key The name of the key value to return.
     */
    getParameter(key: string): string;
    /**
     * Returns the key-value pairs for all parameters that were previously set on the current
     * CTIOperationResponse object.
     */
    getParameters(): any;
    /**
     * Returns the value for a specified session attribute key set on the current
     * CTIOperationResponse object.
     * @param key The name of the key value to return.
     */
    getSessionAttribute(key: string): string;
    /**
     * Returns the key-value pairs for all session attributes that were previously set on the
     * current CTIOperationResponse object.
     */
    getSessionAttributes(): any;
    /**
     * Returns the status code set on the current CTIOperationResponse object.
     */
    getStatusCode(): number;
    /**
     * Sets an authentication token on the current CTIOperationResponse object.
     */
    setAuthToken(): string;
    /**
     * Sets the error object in the current CTIOperationResponse object.
     * @param error Information about the error that was detected while processing the requested
     * operation. The format of this object is determined by the CTI provider.
     */
    setError(error: any): any;
    /**
     * Sets the sys_id of the interaction record associated with the operation request on the
     * current CTIOperationResponse object.
     * @param sys_id The sys_id to set for the current interaction.
     */
    setInteractionSysId(sys_id: string): any;
    /**
     * Sets the major version of the computer telephony integrator (CTI) provider software
     * making the request on the associated CTIOperationResponse object.
     * @param majorVersion Major version of the CTI provider software making the operation request.If
     * this value was not previously set, returns
     * 1.
     */
    setMajorVersion(majorVersion: number): any;
    /**
     * Sets a text message on the current CTIOperationResponse object.
     * @param message Message text
     */
    setMessage(message: string): any;
    /**
     * Sets the minor version of the computer telephony integrator (CTI) provider software
     * making the request on the associated CTIOperationResponse object.
     * @param minorVersion Minor version of the CTI provider software making the operation request.If
     * this value was not previously set, returns
     * 0.
     */
    setMinorVersion(minorVersion: number): any;
    /**
     * Sets the specified key-value pair on the associated CTIOperationResponse
     * object.
     * @param key Name of the key under which to store the associated value.
     * @param value Value to store for the key.Valid data types:
     * string
     *
     * int
     *
     * float
     *
     * number
     *
     * boolean
     *
     * date
     *
     * object
     *
     *
     *
     */
    setParameter(key: string, value: any): any;
    /**
     * Sets the specified session attribute key-value pair on the associated
     * CTIOperationResponse object.
     * @param key Name of the session attribute key under which to set the associated
     * value.
     * @param value Value to set.Valid data types:
     * string
     *
     * int
     *
     * float
     *
     * number
     *
     * boolean
     *
     * date
     *
     * object
     *
     *
     *
     */
    setSessionAttribute(key: string, value: any): any;
    /**
     * Sets the status code of the current operation request on the CTIOperationResponse
     * object.
     * @param statusCode Integer that uniquely identifies the status of the requested operation.
     */
    setStatusCode(statusCode: number): any;
  }
}
declare namespace sn_currency {
  export class GlideCurrencyConfig {
    constructor();
    constructor(ed: GlideElementDescriptor);
    /**
     * Returns the aggregation source value for an FX Currency field.
     */
    getAggregationSource(): string;
    /**
     * Returns the field used as the source of the date and time for the currency conversion.
     */
    getConversionDateSource(): string;
    /**
     * Returns the number of digits to display for an FX Currency field.
     */
    getDisplayDigits(): number;
    /**
     * Returns the currency code used to convert the FX Currency value when it appears in
     * lists and reports.
     */
    getDisplayValue(): string;
    /**
     * Returns the rate table field used as a rate table filter for an FX Currency
     * field.
     */
    getRateFilterRateTableField(): string;
    /**
     * Returns the target table field used to filter the rate table records for an FX Currency
     * field.
     */
    getRateFilterTargetTableField(): string;
    /**
     * Returns the rate table used to convert currency for an FX Currency field.
     */
    getRateTable(): string;
    /**
     * Returns the reference currency for an FX Currency field.
     */
    getReferenceCurrency(): string;
    /**
     * Returns the reference currency source for an FX Currency field.
     */
    getReferenceCurrencySource(): string;
  }
  export class GlideCurrencyConverter {
    constructor();
    constructor(from: string, to: string);
    /**
     * Executes the currency converter.
     */
    convert(): any;
    /**
     * Sets the amount of currency to convert.
     * @param amount Currency amount to convert. This value must be unformatted except for a decimal
     * point to denote fractional currency. For example, 1234.56 is valid, 1,234.56 is
     * invalid.
     */
    setAmount(amount: string): any;
    /**
     * Sets the currency conversion date and time.
     * @param date Date/time for which to calculate the currency conversion. This value determines
     * the rate that is used in the conversion.
     */
    setDateTime(date: GlideDateTime): any;
    /**
     * Sets the currency type to convert from.
     * @param from Currency to convert from. Use the three-letter ISO currency code of the
     * currency.
     */
    setFromCurrency(from: string): any;
    /**
     * Defines the rate table to be used in currency conversions.
     * @param rateTable The rate table used in currency conversons, which must extend
     * fx_conversion_rate. If the value is undefined, fx_system_rate is used.
     */
    setRateTable(rateTable: string): any;
    /**
     * Sets the currency type to convert to.
     * @param to Currency to convert to. Use the three-letter ISO currency code of the
     * currency.
     */
    setToCurrency(to: string): any;
  }
  export class GlideCurrencyExchangeValue {
    /**
     * Returns the amount after conversion.
     */
    getAmount(): number;
    /**
     * Returns the currency type converted to.
     */
    getCurrency(): string;
    /**
     * Returns the original, pre-conversion currency type.
     */
    getOriginalCurrency(): string;
    /**
     * Returns the original, pre-conversion amount.
     */
    getOriginalValue(): number;
    /**
     * Returns the currency conversion rate used to create the GlideCurrencyExchangeValue
     * object.
     */
    getRate(): number;
    /**
     * Returns the sys_id of the record in the rate table used in the currency conversion.
     */
    getRateSysId(): string;
  }
  export class GlideCurrencyFormatter {
    constructor(formatString?: string);
    /**
     * Formats a specified currency value using the specified currency code.
     * @param value Currency amount to format. The amount can only contain a decimal point to
     * denote the fractional amount, commas are not supported. Valid values: 123.45 or
     * 2436.23
     * Invalid values 123,45 or 2,134.56
     * @param currencyCode Three-letter ISO currency code to use when formatting the currency.
     */
    format(value: string, currencyCode: string): string;
    /**
     * Sets the default language and country, which constitutes the locale, for the currency
     * formatter.
     * @param language Two-letter ISO 639 language code, such as en, sp, and fr.
     * @param country Two-letter ISO 3166 country code, such as US, ES, and FR.
     */
    setLocale(language: string, country: string): any;
    /**
     * Sets the maximum number of fraction digits to display.
     * @param maxFractionDigits Sets the maximum number of fraction digits to display.
     */
    setMaxFractionDigits(maxFractionDigits: number): any;
    /**
     * Sets the minimum number of fraction digits to display.
     * @param minFractionDigits The minimum number of fraction digits to display.
     */
    setMinFractionDigits(minFractionDigits: number): any;
  }
  export class GlideCurrencyParser {
    constructor();
    /**
     * Parses a specified string into a GlideCurrencyValue object to obtain locale-based
     * currency formatting.
     * @param value String to parse. You can prepend this string with the ISO currency code to use
     * when parsing the string (semicolon separated). If the currency code is not set prior
     * to calling the parse() method, it defaults to the current session
     * currency code.This method supports both decimal point and decimal comma
     * notation.
     * For example: "123.45", "USD;123.45", "123,45",
     * "EUR;123,45"
     */
    parse(value: string): GlideCurrencyValue;
    /**
     * Sets the currency code for the associated GlideCurrencyParser object.
     * @param currencyCode Three-letter ISO currency code to use as the default in the associated
     * GlideCurrencyParser object.
     */
    setDefaultCurrencyCode(currencyCode: string): any;
    /**
     * Sets the default language and country codes, which constitute the locale, on the
     * associated GlideCurrencyParser object.
     * @param language Three-letter ISO 639 language code, such as eng, spa, and fre.
     * @param country Three-letter ISO 3166 country code, such as USA, ESP, and FRA.
     */
    setLocale(language: string, country: string): any;
  }
  export class GlideCurrencyValue {
    /**
     * Returns the currency amount originally passed into the associated
     * GlideCurrencyParser.parse() call.
     */
    getAmount(): string;
    /**
     * Returns the currency code used to parse the currency in the associated
     * GlideCurrencyParser.parse() call.
     */
    getCurrencyCode(): string;
  }
}
declare namespace sn_discovery {
  export class DiscoveryAPI {
    /**
     * Discovers a specified IPv4 address.
     * @param application Optional. Application configured for the MID Server.To define a
     * source parameter but not an
     * application parameter, use "NULL" as the place
     * holder.
     * Default: Discovery
     * @param ipAddress IP address to discover.
     * @param source Optional. Source of the Discovery. This same value appears in the optional
     * Source field in the Discovery Status record, which
     * indicates how the Discovery was triggered. Default: Discovery_API
     */
    discoverIpAddress(
      application: string | undefined,
      ipAddress: string,
      source?: string,
    ): string;
    /**
     * Used to return a summary of a configuration item's Discovery status given the specific
     * status sys_id and IPv4 address.
     * @param ipAddress The IPv4 address that was scanned.
     * @param discoveryStatusSysId The sys_id of the Discovery status record for the IP address that was
     * scanned.
     */
    reportCiIpAddressStatus(
      ipAddress: string,
      discoveryStatusSysId: string,
    ): any[];
    /**
     * Used to return a summary of a CI Discovery status given a specific Discovery Status
     * sys_id.
     * @param sys_id The sys_id of a Discovery status record.
     */
    reportCiStatus(sys_id: string): any[];
  }
  export class ReportCiStatusOutputJS {
    /**
     * Used to return the state of the scanned CI.
     */
    getCiOperationStatus(): string;
    /**
     * Used to return the value in the cmdb_ci field from the discovery_device_history table
     * for the CI being scanned.
     */
    getCmdbCI(): string;
    /**
     * Used to return the value from the State field in the Discovery
     * Status [discovery_status] table.
     */
    getDiscoveryState(): string;
    /**
     * Used to return the value from the source field in the discovery_device_history table
     * for the CI being scanned.
     */
    getIpAddress(): string;
    /**
     * Used to return the value from the issues field in the discovery_device_history table
     * for the CI being scanned.
     */
    getIssues(): number;
    /**
     * Used to return the value from the issues_link field in the discovery_device_history
     * table for the CI being scanned.
     */
    getIssuesLink(): string;
    /**
     * Used to serialized the ReportCiStatusOutputJS object.
     */
    toJson(): string;
  }
}
declare namespace sn_dt {
  export class DecisionTableAPI {
    constructor();
    /**
     * Returns all decision tables from the Decision Tables [sys_decision] table.
     */
    getAll(): any;
    /**
     * Returns the answers associated with the specified decision table. An answer is a record
     * on any table associated with a Decision [sys_decision_question] record.
     * @param decisionID Sys ID of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     */
    getAnswers(decisionID: string): any;
    /**
     * Evaluates a decision table based on the provided inputs and returns an
     * answer.
     * If no inputs are provided, returns the first default answer found.
     * @param decisionID Sys ID of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     * @param inputs Optional. Input values for the Decision Inputs [sys_decision_input] table
     * associated with the provided decision table. Use the value of the Column
     * name field as the key. The data type of the value must match the
     * Decision Input Type field.  If no inputs are provided,
     * returns the first default answer found.
     */
    getDecision(decisionID: string, inputs?: any): GlideRecord;
    /**
     * Evaluates
     * a decision table based on the provided inputs and returns all
     * correctly
     * evaluated answers. If no inputs are provided, returns all default answers.
     * @param decisionID Sys ID of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     * @param inputs Optional. Input values for the Decision Inputs  [sys_decision_input] table
     * associated with the provided decision table. If no inputs are provided, returns all
     * default answers.
     */
    getDecisions(decisionID: string, inputs?: any): any[];
    /**
     * Returns a single decision table from the Decision Tables [sys_decision]
     * table.
     * @param decisionID Sys ID of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     */
    getDecisionTable(decisionID: string): any;
    /**
     * Returns the decision inputs from the Decision Inputs [sys_decision_input] table
     * associated with the passed in decision table.
     * @param decisionID Sys ID of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     */
    getInputs(decisionID: string): any;
    /**
     * Returns the decisions from the Decision [sys_decision_question] table associated with
     * the passed in decision table.
     * @param decisionID Sys ID of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     */
    getQuestions(decisionID: string): any;
  }
}
declare namespace sn_dt_api {
  export class DynamicTranslation {
    /**
     * Detects the language of the passed in text.
     * @param text Text to use to detect the language.
     * @param parms Optional. JSON object that contains additional translation parameters.
     */
    getDetectedLanguage(text: string, parms?: any): any;
    /**
     * Translates the passed in text to one or more languages.
     * @param textToTranslate Text to translate.
     * @param parms Optional. JSON object that contains additional translation parameters.
     */
    getTranslation(textToTranslate: string, parms?: any): any;
    /**
     * Determines whether the
     * getDetectedLanguage() and getTranslation()
     * methods are enabled for a translation service.
     * @param translator Optional. Translation service to verify whether the  methods are active.
     * Translation services are configured under the Translator Configuration
     * menu.Possible values - not case-sensitive:
     *
     * Google
     *
     * IBM
     *
     * Microsoft
     *
     * &lt;custom&gt;
     *
     *
     * Note: To use custom translation services you must first configure the translation
     * service in your instance. For details, see Integrate with a translation
     * service provider.
     */
    isEnabled(translator?: string): any;
  }
}
declare namespace sn_fd {
  export class Flow {
    /**
     * Ignores the trigger and runs an activated flow asynchronously.
     * @param flowInputs Name-value pairs in &lt;String, Object&gt; format that define
     * record-based flow inputs.To call a flow with a record-based trigger, use the
     * format:var flowInputs = {};
     * flowInputs['current'] = glideRecord;
     * flowInputs['table_name'] = glideRecord.getTableName();
     * The
     * GlideRecord object must be named 'current'.
     * To call a flow with a Service Catalog
     * trigger, use the
     * format:var flowInputs = {};
     * flowInputs['request_item'] = glideRecord;
     * flowInputs['table_name'] = glideRecord.getTableName();
     * The
     * GlideRecord object must be named 'request_item'.
     */
    startAsync(flowInputs: any): any;
  }
  export class FlowAPI {
    /**
     * Cancels a paused or running flow, subflow, or action.
     * @param contextId Sys_id of the execution details record for the flow, subflow, or action. Access
     * the execution details by navigating to the Flow Executions tab in Flow Designer, or pass the sys_id of the context record returned by the
     * startFlow(), startSubflow(), or
     * startAction() methods.
     * @param reason Optional. Reason for canceling the flow, subflow, or action. Appears in the
     * Message field of the Flow engine log entries [sys_flow_log]
     * table.
     */
    cancel(contextId: string, reason?: string): any;
    /**
     * Run an action from a server-side script synchronously.
     * @param name The scope and name of the action to be executed, for example
     * global.action_name.
     * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
     * label.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeAction(name: string, inputs: any, timeout?: number): any;
    /**
     * Run an action from a server-side script synchronously from the current user session
     * without creating execution details or other related records. Improve performance by eliminating
     * record-keeping overhead. Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the action to execute. For example,
     * global.action_name. Locate the Internal
     * name field in the list of Flow Designer
     * actions.
     * @param inputs Name-value pairs that define action inputs. You can find the available action
     * inputs and required data types under Inputs in the action outline. Use the input
     * name, not the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeActionQuick(name: string, inputs: any, timeout?: number): any;
    /**
     * Runs a Data Stream action synchronously from a server-side script and returns a
     * ScriptableDataStream object.
     * @param name The scope and name of the Data Stream action to execute. For example,
     * global.data_stream_action_name.
     * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
     * label. If the action does not have any inputs, do not include this
     * parameter.
     * @param timeout Optional. Amount of time before the action times out. After the timeout
     * expires, an exception is thrown. The timeout only applies to the
     * executeDataStreamAction method, not to methods in the
     * ScriptableDataStream class.Default: 30000, specified by the
     * com.glide.hub.flow_api.default_execution_time system
     * property
     * Unit: Milliseconds
     */
    executeDataStreamAction(name: string, inputs: any, timeout?: number): any;
    /**
     * Run a flow from a server-side script synchronously.
     * @param name The scope and name of the flow to be executed, for example
     * global.flow_name.
     * @param inputs Name-value pairs that define trigger inputs. Use the input name, not the input
     * label.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeFlow(name: string, inputs: any, timeout?: number): any;
    /**
     * Runs a flow, subflow, or action from a
     * server-side script synchronously or asynchronously without creating execution
     * details or other related records. Improves performance by eliminating
     * record-keeping overhead.
     * Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the flow to execute. For example,
     * global.flow_name. Locate the Internal name
     * field in the list of Flow Designer
     * flows.
     * @param inputs Name-value pairs that define trigger inputs. You can find the available trigger
     * inputs and required data types in the Trigger section of the flow. Use the input
     * name, not the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeFlowQuick(name: string, inputs: any, timeout?: number): any;
    /**
     * Run an subflow from a server-side script synchronously.
     * @param name The scope and name of the subflow to be executed, for example
     * global.subflow_name.
     * @param inputs Name-value pairs that define subflow inputs. Use the input name, not the input
     * label.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeSubflow(name: string, inputs: any, timeout?: number): any;
    /**
     * Run a subflow from a server-side script synchronously from the current user session
     * without creating execution details or other related records. Improve performance by eliminating
     * record-keeping overhead. Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the subflow to execute. For example,
     * global.subflow_name. Locate the Internal
     * name field in the list of Flow Designer
     * subflows.
     * @param inputs Name-value pairs that define subflow inputs. You can find the available subflow
     * inputs and required data types under Inputs in the subflow. Use the input name, not
     * the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeSubflowQuick(name: string, inputs: any, timeout?: number): any;
    /**
     * Returns the outputs of a completed action or subflow.
     * @param contextId The sys_id of the action or subflow whose outputs you want to get.
     */
    getOutputs(contextId: string): any;
    /**
     * Returns a ScriptableFlowRunner builder object for a flow or action
     * that you want to run.
     */
    getRunner(): any;
    /**
     * Checks if a flow within a give scope contains any Ask for Approval actions.
     * @param scopedFlowName Scope and internal name of the flow to execute. For example,
     * global.flow_name. Locate the Internal name
     * field in the list of Flow Designer flows.
     */
    hasApprovals(scopedFlowName: string): string;
    /**
     * Build password2 values inside a script step.
     * @param password Encrypted password2 value.
     */
    setEncryptedOutput(password: string): string;
    /**
     * Run an action from a server-side script asynchronously.
     * @param name The scope and name of the action to be executed, for example
     * global.action_name.
     * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
     * label.
     */
    startAction(name: string, inputs: any): string;
    /**
     * Run an action from a server-side script asynchronously without creating execution
     * details or other related records. Improve performance by eliminating record-keeping overhead.
     * Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the action to execute. For example,
     * global.action_name. Locate the Internal
     * name field in the list of Flow Designer
     * actions.
     * @param inputs Name-value pairs that define action inputs. You can find the available action
     * inputs and required data types under Inputs in the action outline. Use the input
     * name, not the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     */
    startActionQuick(name: string, inputs: any): any;
    /**
     * Run a flow from a server-side script.
     * @param name The scope and name of the flow to be executed, for example
     * global.flow_name.
     * @param inputs Name-value pairs that define trigger inputs. Use the input name, not the input
     * label.
     */
    startFlow(name: string, inputs: any): string;
    /**
     * Run a flow from a server-side script asynchronously without creating execution details
     * or other related records. Improve performance by eliminating record-keeping overhead. Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the flow to execute. For example,
     * global.flow_name. Locate the Internal name
     * field in the list of Flow Designer
     * flows.
     * @param inputs Name-value pairs that define trigger inputs. You can find the available trigger
     * inputs and required data types in the Trigger section of the flow. Use the input
     * name, not the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     */
    startFlowQuick(name: string, inputs: any): any;
    /**
     * Run a subflow from a server-side script.
     * @param name The scope and name of the subflow to be executed, for example
     * global.subflow_name.
     * @param inputs Name-value pairs that define subflow inputs. Use the input name, not the input
     * label.
     */
    startSubflow(name: string, inputs: any): string;
    /**
     * Run a subflow from a server-side script asynchronously without creating execution
     * details or other related records. Improve performance by eliminating record-keeping overhead.
     * Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the subflow to execute. For example,
     * global.subflow_name. Locate the Internal
     * name field in the list of Flow Designer
     * subflows.
     * @param inputs Name-value pairs that define subflow inputs. You can find the available subflow
     * inputs and required data types under Inputs in the subflow. Use the input name, not
     * the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     */
    startSubflowQuick(name: string, inputs: any): any;
  }
  export class ScriptableDataStream {
    /**
     * Closes the connection to a data stream. Always call this method after performing any
     * desired operations on a data stream.
     */
    close(): any;
    /**
     * Returns the current index of an item in a data stream.
     */
    getItemIndex(): number;
    /**
     * Returns the current index of an item within the current page in a data
     * stream.
     */
    getItemInPageIndex(): number;
    /**
     * Returns the current index of a page in a data stream.
     */
    getPageIndex(): number;
    /**
     * Returns true if there are more items in the data stream.
     */
    hasNext(): boolean;
    /**
     * Returns the next item in a data stream.
     */
    next(): any;
  }
  export class ScriptableFlowRunner {
    /**
     * Identifies the scope and name of the action to execute.
     * @param scopedActionName Scope and name of the action to execute. For example,
     * global.actionName.
     */
    action(scopedActionName: string): any;
    /**
     * Adds a single input. If the name passed as an argument already exists as a separate
     * input, the new value replaces the pre-existing value.
     * @param name The name of the input for the flow, subflow, or action.
     * @param value The value of the input for the flow, subflow, or action.
     */
    addInput(name: string, value: any): any;
    /**
     * Identifies the scope and name of the data stream action to execute.
     * @param scopedDatastreamName Scope and name of the Data Stream action to execute. For example,
     * global.dataStreamActionName.
     */
    datastream(scopedDatastreamName: string): any;
    /**
     * Identifies the scope and name of the flow to execute.
     * @param scopedFlowName Scope and name of the flow to execute. For example,
     * global.flowName.
     */
    flow(scopedFlowName: string): any;
    /**
     * Runs the flow, subflow, or action asynchronously. Once the flow object starts running,
     * script execution resumes immediately.
     */
    inBackground(): any;
    /**
     * Runs the flow, subflow, or action in the specified domain. Checks to ensure the domain
     * exists and is available.
     * @param domainId The sys_id or name for the domain of execution for the flow.
     */
    inDomain(domainId: string): any;
    /**
     * Runs the flow, subflow, or action synchronously. Script execution pauses while the flow
     * object is running.
     */
    inForeground(): any;
    /**
     * Runs a flow, subflow, or action from a
     * server-side script synchronously or asynchronously without creating execution
     * details or other related records. Improves performance by eliminating
     * record-keeping overhead.
     * Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     */
    quick(): any;
    /**
     * Runs the flow, subflow, or action with the specified parameters.
     */
    run(): any;
    /**
     * Identifies the scope and name of the subflow to execute.
     * @param scopedSubflowName Scope and name of the subflow to execute. For example,
     * global.subflowName.
     */
    subflow(scopedSubflowName: string): any;
    /**
     * Sets a timeout for a flow, subflow, or action execution.
     * @param timeout Timeout in milliseconds.
     */
    timeout(timeout: number): any;
    /**
     * Overrides the Connections and Credentials alias associated with the flow,
     * action, or subflow.
     * @param aliasName The name of the alias to override.
     * @param overrideName The name of the alias to use when running the flow, subflow, or action.
     */
    withConnectionAliasOverride(aliasName: string, overrideName: string): any;
    /**
     * Adds a collection of inputs. If a name in one of the name-value pairs already exists,
     * the new value replaces the pre-existing value.
     * @param inputs Map object containing the name-value pairs that define inputs for the flow,
     * subflow, or action.
     */
    withInputs(inputs: any): any;
  }
  export class ScriptableFlowRunnerResult {
    /**
     * Returns information about the executed flow, subflow, or action, including the context
     * ID, domain ID, and execution outputs.
     */
    debug(): string;
    /**
     * Returns the context ID of the flow, subflow, or action.
     */
    getContextId(): string;
    /**
     * Returns the stream of data from a data stream action.
     */
    getDataStream(): any;
    /**
     * Returns the date and time when a Flow Designer action, flow, or subflow
     * ran as a GlideDateTime object.
     */
    getDate(): GlideDateTime;
    /**
     * Returns the sys_id of the domain that the Flow Designer action, flow, or
     * subflow ran in.
     */
    getDomainId(): string;
    /**
     * Returns the scope and internal name of the Flow Designer action, flow,
     * or subflow run.
     */
    getFlowObjectName(): string;
    /**
     * Returns the type of Flow Designer object run.
     */
    getFlowObjectType(): any;
    /**
     * Returns the outputs of a completed Flow Designer action, flow, or
     * subflow.
     */
    getOutputs(): any;
  }
  export class Subflow {
    /**
     * Runs a published subflow asynchronously.
     * @param inputs Name-value pairs that define subflow inputs. If a subflow includes mandatory
     * inputs, they must be included. For inputs of Reference or Document ID field types,
     * use a GlideRecord object as the value.
     */
    startAsync(inputs: any): any;
  }
}
declare namespace sn_hr_core {
  export class hr_Utils {
    constructor();
    /**
     * Gets the Sys ID of the active primary job for a provided user.
     * @param userID Sys ID of the HR user from the User [sys_user] table assigned an active or
     * future job in which Primary is true.
     */
    getPrimaryJob(userID: string): string;
    /**
     * Switches the primary job of a user.
     * @param userId Sys ID of HR user from the Users [sys_user] table.
     * @param jobId Job Sys ID from the Jobs [sn_hr_core_job] table.
     */
    switchPrimaryJob(userId: string, jobId: string): string;
  }
}
declare namespace sn_hr_le {
  export class hr_ActivitySet {
    constructor();
    /**
     * Creates a lifecycle event case based on a specified HR service.
     * @param hrService Sys ID of HR service in the HR Services [sn_hr_core_service] table to be
     * assigned to the lifecycle event case.
     * @param caseValues Key-value pairs containing a value for each case field.
     */
    createLECaseByService(hrService: string, caseValues: any): string;
    /**
     * Checks for a case matching the specified combination of subject person user, HR
     * service, and job.
     * @param spUser Sys ID of subject person user in the Users [sys_user] table.
     * @param hrService Sys ID of HR service in the HR Services [sn_hr_core_service] table.
     * @param jobId Sys ID of subject user's job title in the HR Services [sn_hr_core_service]
     * table.
     */
    hasActiveCaseByService(
      spUser: string,
      hrService: string,
      jobId: string,
    ): boolean;
  }
  export class hr_ActivityUtils {
    /**
     * Creates a case from a record producer and service. This method is intended to be called
     * as-is to create a producer and does not require supplying data.
     * @param current GlideRecord for case to be created.
     * @param producer Comma-separated key value pair containing data as questions and answers that
     * are automatically provided when a user submits an answer to a record producer
     * question.
     */
    createCaseFromProducer(current: GlideRecord, producer: any): any;
  }
}
declare namespace sn_hw {
  export class HistoryWalker {
    constructor(tableName: string, sydId: string);
    constructor(tableName: string, sydId: string, useAudit: boolean);
    /**
     * Gets the update number of the current walked glide record.
     */
    getUpdateNumber(): number;
    /**
     * Gets the record filled with the history/audit data after walking to an update
     * number.
     */
    getWalkedRecord(): GlideRecord;
    /**
     * Returns a copy of the record filled with the history/audit data after walking to an
     * update number.
     */
    getWalkedRecordCopy(): GlideRecord;
    /**
     * Specifies if the record-level read access is applied on the record when retrieving from
     * the database.
     */
    isFieldLevelSecurity(): boolean;
    /**
     * Specifies if the record-level read access is applied on the record when retrieving from
     * the database.
     */
    isRecordLevelSecurity(): boolean;
    /**
     * Specifies if any of the methods that walk the record from one update to another,
     * support the “changes” data for each element.
     */
    isWithChanges(): boolean;
    /**
     * Specifies if journal type fields are populated from the historical values.
     */
    isWithJournalFields(): boolean;
    /**
     * Specifies if values are set for variables that are recorded in the history.
     */
    isWithVariables(): boolean;
    /**
     * Sets the field-level read access on each element before setting the historical value of
     * that element in the GlideRecord. If the field-level security is enabled, it prevents the API to
     * populate the fields of the walked record that the user of the API does not have access
     * to.
     * @param fieldLevelSecurity If set to true, field-level security is enabled. The default value is
     * true.
     */
    setFieldLevelSecurity(fieldLevelSecurity: boolean): any;
    /**
     * Sets the record-level read access on the record when retrieving from the database. The
     * record-level security prevents the API to retrieve the walked record if the user of the API does
     * not have access to the GlideRecord.
     * @param recordLevelSecurity If set to true, record-level read access security is enabled. The default value
     * is true.
     */
    setRecordLevelSecurity(recordLevelSecurity: boolean): any;
    /**
     * Sets the “changes” data support for each element for a method that walks the record
     * from one update to another.
     * @param withChanges If set to true, the “changes” data is supported for each element. The default
     * value is true.
     */
    setWithChanges(withChanges: boolean): any;
    /**
     * Specifies if journal type fields are populated from the historical values.
     * @param withJournalFields If set to true, include journal-type fields. Th default value is false.
     */
    setWithJournalFields(withJournalFields: boolean): any;
    /**
     * Specifies if variables are populated from the historical values.
     * @param withVariables If set to true, values are populated for variables. The default value is
     * false.
     */
    setWithVariables(withVariables: boolean): any;
    /**
     * Applies the appropriate history/audit data to get a walked GlideRecord to the state
     * when it was one update number backward. If the previous update count is missing from the
     * history/audit data, it will walk to the previous available update count.
     */
    walkBackward(): boolean;
    /**
     * Applies the appropriate history/audit data to get a walked GlideRecord to the state
     * when it was one update number forward. If next update count is missing from the history/audit
     * data, it will walk to the next available update count.
     */
    walkForward(): boolean;
    /**
     * Applies the appropriate history/audit data to get a GlideRecord to the state it was in
     * a specific update count. Use getWalkedRecord() or getWalkedRecordCopy() after walking to an
     * update number to retrieve the “walked” GlideRecord.
     * @param updateCount The update number to walk to.
     */
    walkTo(updateCount: number): boolean;
  }
}
declare namespace sn_ih {
  export class XMLStreamingAPI {
    /**
     * Closes the XMLStreamingAPI object. You must call this method to close the stream after
     * building your XML document.
     */
    close(): any;
    /**
     * Ends pretty print XML formatting.
     */
    disablePrettyPrint(): any;
    /**
     * Adds pretty print formatting to an XML element or tree of elements.
     */
    enablePrettyPrint(): any;
    /**
     * Ends the structure of your XML document.
     */
    endDocument(): any;
    /**
     * Adds a closing tag to an XML element.
     */
    endElement(): any;
    /**
     * Returns the XML document as a
     * string.
     */
    getXMLString(): string;
    /**
     * Begins building an XML document.
     * @param rootElement Optional. Root element, or top-level parent element, for your XML
     * document.
     * @param namespaceDefinitionMap Optional. Map of keys and values for the namespaces and their associated values
     * in a subsequent list of elements. For example:
     * {
     * 'namespaceOne':'namespaceValue',
     * 'namespaceTwo':'namespaceValue'
     * }
     */
    startDocument(rootElement?: string, namespaceDefinitionMap?: any): any;
    /**
     * Adds a starting tag for an XML element.
     * @param name Name of the XML element.
     * @param namespaceMap Optional. Map of keys and values for the namespaces and their associated values
     * in a subsequent list of elements. For
     * example:{
     * 'namespaceOne':'namespaceValue',
     * 'namespaceTwo':'namespaceValue'
     * }
     * @param attributeMap Optional. Map of keys and values for the attributes and their associated values
     * in a subsequent list of elements.
     * @param prefix Optional. Prefix for the XML element.
     */
    startElement(
      name: string,
      namespaceMap?: any,
      attributeMap?: any,
      prefix?: string,
    ): any;
    /**
     * Adds a list of nested elements with predefined text to your streaming XML
     * document.
     * @param elementName Name of the XML element associated with each string listed in the
     * data
     * array.
     * @param data List of values to assign to each element nested inside
     * wrappingElement.
     * @param wrappingElement Parent element containing each
     * elementName.
     */
    writeArray(elementName: string, data: any[], wrappingElement: string): any;
    /**
     * Adds an attribute to an element in your XML document.
     * @param name Name of the XML element's attribute.
     * @param value Value for the XML element's attribute.
     */
    writeAttribute(name: string, value: string): any;
    /**
     * Adds attributes to an element in your XML document.
     * @param attributeMap Map of keys and values containing attribute names and values to associate with
     * the XML element. For
     * example:{
     * 'attributeOne':'attributeValue',
     * 'attributeTwo':'attributeValue'
     * }
     */
    writeAttributes(attributeMap: any): any;
    /**
     * Adds CDATA to your XML document.
     * @param data Value to include after the CDATA keyword in your CDATA element.
     */
    writeCData(data: string): any;
    /**
     * Adds a CDATA element to your XML document.
     * @param name Name of the CDATA element.
     * @param data Optional. Type of data to parse the CDATA element
     * as.
     * @param prefix Optional. Map of child elements and values that the CDATA element includes. For
     * example:
     * {
     * 'prefixOne':'prefixValue',
     * 'prefixTwo':'prefixValue'
     * }You
     * must associate an XML element's prefix with a namespace using writeNamespace().
     */
    writeCDataElement(name: string, data?: string, prefix?: any): any;
    /**
     * Adds text to your XML document.
     * @param text Text to add to a section of your XML document.
     */
    writeCharacters(text: string): any;
    /**
     * Adds a comment to your XML document.
     * @param comment Comment text to include.
     */
    writeComment(comment: string): any;
    /**
     * Adds a document type definition to your XML document.
     * @param dtd Name of a valid XML document type definition.
     */
    writeDtd(dtd: string): any;
    /**
     * Adds a namespace to an element in your XML document.
     * @param prefix Prefix for the XML namespace.
     * @param namespaceURI Optional. URI for the namespace.
     */
    writeNamespace(prefix: string, namespaceURI?: string): any;
    /**
     * Adds namespaces to the
     * root
     * element in your XML document.
     * @param namespaceMap Map of keys and values containing namespace prefixes and URIs to associate with
     * the root element of the
     * XML
     * document. For example:
     * {
     * 'namespaceOne':'namespaceValue',
     * 'namespaceTwo':'namespaceValue'
     * }
     */
    writeNamespaces(namespaceMap: any): any;
    /**
     * Adds a single XML element to your XML document.
     * @param name Name of the XML element.
     * @param text Value for the XML element.
     * @param prefix Optional. Map of prefixes and values associated with the XML element. For
     * example:
     * {
     * 'prefixOne':'prefixValue',
     * 'prefixTwo':'prefixValue'
     * }You
     * must associate an XML element's prefix with a namespace using writeNamespace().
     */
    writeTextElement(name: string, text: string, prefix?: any): any;
  }
  export class XMLStreamingBuilder {
    constructor();
    /**
     * Returns an XMLStreamingAPI object.
     */
    build(): any;
    /**
     * Sets a
     * time when the attachment expires. Must also call the
     * withAttachment() method.
     * @param expiresAt Object that is set when the attachment expires.
     *
     * Minimum value: 7200 seconds, or two hours, from the time the attachment is
     * created. This is the default value if you don't call the
     * expiresAt() method.
     *
     * Maximum value: 172800 seconds, or 48 hours, from the time the attachment is
     * created.
     *
     *
     *
     *
     */
    expiresAt(expiresAt: GlideDateTime): any;
    /**
     * Creates an XML document as an attachment and stores it in the Streaming Attachments
     * [streaming_attachment] table. If you don't call this method, the API creates the XML document as
     * a string.
     */
    withAttachment(): any;
  }
}
declare namespace sn_impex {
  export class CSVParser {
    /**
     * Parses passed in CSV formatted content into an array.
     * @param csvLine CSV content to parse.
     * @param delimiter Optional. Character used to delineate the fields in the source CSV
     * content.Default: Comma ','
     * @param quoteCharacter Optional. Character used as the quote character in the source CSV content.
     * Default: Double quote '"'
     */
    parseLineToArray(
      csvLine: string,
      delimiter?: string,
      quoteCharacter?: string,
    ): any[];
    /**
     * Parses passed in CSV formatted content into an object.
     * @param csvLine CSV content to parse.
     * @param headers Headers associated with the CSV content. These headers must be specified in the
     * same order as the corresponding content in csvLine. For
     * example, var headers = ['first_name', 'last_name',
     * 'address'];
     * @param delimiter Optional. Character used to delineate the fields in the source CSV
     * content.Default: Comma ','
     * @param quoteCharacter Optional. Character used as the quote character in the source CSV content.
     * Default: Double quote '"'
     */
    parseLineToObject(
      csvLine: string,
      headers: any[],
      delimiter?: string,
      quoteCharacter?: string,
    ): any;
  }
  export class GlideExcelParser {
    constructor();
    /**
     * Close the connection to the input stream and release the document.
     */
    close(): any;
    /**
     * Returns a list of column headers from the parsed document.
     */
    getColumnHeaders(): any[];
    /**
     * Returns the error message when the parse() method fails.
     */
    getErrorMessage(): string;
    /**
     * Get the current row values and headers.
     */
    getRow(): any;
    /**
     * Gets table column types and max character length from a spreadsheet or CSV
     * attachment.
     */
    getTableInfo(): any;
    /**
     * Moves to the next row.
     */
    next(): boolean;
    /**
     * Parse an XLSX formatted Excel document.
     * @param inputStream The Excel document to be parsed.
     */
    parse(inputStream: GlideScriptableInputStream): boolean;
    /**
     * Set the number of the header row to be retrieved.
     * @param headerRowNumber The header row to be retrieved.
     */
    setHeaderRowNumber(headerRowNumber: number): any;
    /**
     * Return an empty value instead of null when an Excel cell is not present.
     * @param empty When true, cells that are not present return an empty value. When false, cells
     * that are not present return null.
     */
    setNullToEmpty(empty: boolean): any;
    /**
     * Set the name of the sheet to be retrieved.
     * @param sheetName The name of the sheet to be retrieved.
     */
    setSheetName(sheetName: string): any;
    /**
     * Set the number of the Excel sheet to be retrieved.
     * @param sheetNumber The Excel sheet number to retrieve.
     */
    setSheetNumber(sheetNumber: number): any;
  }
  export class GlideImportSetTable {
    constructor(tableLabel: string);
    /**
     * Creates a GlideDateTime column.
     * @param columnLabel Label of the GlideDateTime column to create in the Import Set table.
     */
    addDateTimeColumn(columnLabel: string): any;
    /**
     * Creates a string column.
     * @param columnLabel Label of the string column to create in the Import Set table.
     * @param length Optional. Maximum column length. Default: 40 characters
     */
    addStringColumn(columnLabel: string, length?: number): any;
    /**
     * Creates the Import Set table.
     */
    create(): any;
  }
  export class GlideImportSetTransformMap {
    constructor(
      transformMapName: string,
      importSetTableName: string,
      targetTableName: string,
    );
    /**
     * Add a GlideDateTime transform entry to a transform map.
     * @param targetColumn Target column from target table to transform
     * to.
     * @param coalesce Optional. Flag that indicates whether to insert the
     * record into the target table
     * true: If true and target table contains a record with the same value in this
     * field, the record is updated, that is, not inserted.
     *
     * false: Default. Record is inserted into the target table.
     *
     *
     *
     * @param sourceColumn Source column from Import Set table to
     * transform from.
     * @param dateTimeFormat Optional. GlideDateTime format of the transform, for example, yyyy-MM-dd
     * HH:mm:ss. If empty, the default value is the system date time format.
     */
    addDateTimeTransformEntry(
      targetColumn: string,
      coalesce: boolean | undefined,
      sourceColumn: string,
      dateTimeFormat?: string,
    ): any;
    /**
     * Adds a string transform entry to a transform map.
     * @param targetColumn Source column from Import Set table to
     * transform from.
     * @param coalesce Target column from target table to transform
     * to.
     * @param sourceColumn Optional. Flag that indicates whether to insert the
     * record into the target table
     * true: If true and target table contains a record with the same value in this
     * field, the record is updated, that is, not inserted.
     *
     * false: Default. Record is inserted into the target table.
     *
     *
     *
     */
    addTransformEntry(
      targetColumn: string,
      coalesce: string,
      sourceColumn?: boolean,
    ): any;
    /**
     * Creates a new transform map.
     */
    create(): string;
  }
}
declare namespace sn_interaction {
  export class Interaction {
    /**
     * Accept a new interaction.
     */
    accept(): boolean;
    /**
     * Create an interaction.
     * @param options Field values for an interaction record. The channel field with the channel
     * sys_id and channel metadata are required. If a queue is not included in the
     * parameter, the system returns Interaction b2c0a3af202a1300964f959e0488de75
     * has no queue specified... running queue matching rules.
     */
    create(options: any): any;
    /**
     * Get an interaction record.
     * @param interaction Interaction record from the interaction table [interaction] that is retrieved
     * from the system.
     */
    getInteraction(interaction: GlideRecord): any;
    /**
     * Transfer an interaction record to an agent using the sys_id for the agent.
     * @param SysID The sys_id of the user you want to transfer an interaction record to.
     */
    transferToAgent(SysID: string): any;
    /**
     * Transfer an interaction record to an interaction queue.
     * @param SysID The sys_id of the interaction queue you want to transfer the interaction record
     * to.
     */
    transferToQueue(SysID: string): any;
  }
  export class InteractionQueue {
    /**
     * Assign the next interaction in a queue to the current user.
     */
    acceptNext(): any;
    /**
     * Get an existing interaction queue by sys_id.
     * @param queue Queue from the interaction_queue table.
     */
    get(queue: GlideRecord): any;
    /**
     * Returns a list of agents who are online and assigned to a particular queue.
     */
    getAvailableAgents(): any[];
    /**
     * Check if a user is an agent for a queue.
     * @param queue Sys ID for a queue in the interaction_queue table.
     */
    isAgentFor(queue: GlideRecord): boolean;
    /**
     * Find out whether the queue is in schedule.
     */
    isInSchedule(): any;
  }
}
declare namespace sn_nlp_sentiment {
  export class SentimentAnalyser {
    constructor();
    constructor(configGR: GlideRecord);
    /**
     * Performs sentiment analysis on the specified text.
     * @param inputText Text on which sentiment analysis should be performed.
     */
    analyze(inputText: string): any;
    /**
     * Performs sentiment analysis on an array of strings.
     * @param inputTextArray Array of text (string) on which sentiment analysis should be performed.
     */
    analyzeMultiple(inputTextArray: any[]): any;
    /**
     * Performs sentiment analysis on an array of strings in the specified
     * language.
     * @param inputTextArray Array of text (string) on which sentiment analysis should be performed.
     * @param language Language for the input text. This can very for different sentiment
     * services.
     */
    analyzeMultipleWithLanguage(inputTextArray: any[], language: string): any;
    /**
     * Performs sentiment analysis on a specified text and language.
     * @param inputText Text on which sentiment analysis should be performed.
     * @param language Language for the input text. This can very for different sentiment
     * services.
     */
    analyzeWithLanguage(inputText: string, language: string): any;
    /**
     * Returns the GlideRecord of the specified connector configuration.
     * @param connectorName Name of the connector configuration.
     */
    getConnectorByName(connectorName: string): GlideRecord;
    /**
     * Returns the GlideRecord of the default connector configuration.
     */
    getDefaultConnector(): GlideRecord;
  }
}
declare namespace sn_notification {
  export class Messaging {
    /**
     * Sends a custom message to a third-party application in response to a messaging event.
     * For example, you can send a custom welcome message to a Slack channel when the Now Actions
     * application installs.
     * @param messagingApplication Third-party application to send a message to from the Messaging Entities
     * [messaging_application] table.
     * @param recipient Recipient of the message. When the instance receives an inbound message, you
     * can send a response to a Slack channel, Team, or individual user ID found in the
     * inbound payload.
     * @param messagingContent Message content to send from the Messaging Contents [messaging_content] table.
     * @param target Record used to define dynamic field values in the message. Table must match the
     * Target table field in the Messaging Contents record. If the
     * Messaging Contents record does not use a target table, set the value to null.
     */
    send(
      messagingApplication: GlideRecord,
      recipient: string,
      messagingContent: GlideRecord,
      target: GlideRecord,
    ): any;
  }
}
declare namespace sn_notify {
  export class Notify {
    /**
     * Calls the specified E.164-compliant telephone number.
     * @param notifyPhoneNumber Notify phone number from which to make the call. When you initiate a call, the
     * outgoing call workflow for the number group associated with this number runs. Ensure
     * this workflow includes a join conference call activity to
     * connect the user to the conference call.
     * @param toPhoneNumber Phone number to call. Called numbers are added to the conference call.
     * @param conferenceCall Optional. If this parameter is passed in, the callers identified in the
     * toPhoneNumber parameter are automatically joined into the
     * conference call identified by this record. GlideRecord for the Notify Call
     * [notify_call] table which identifies the conference call record. This record is
     * automatically added to the outgoing call workflow scratchpad as the
     * workflow.scratchpad.conference_call variable.
     * @param userSysId Optional. Unique identifier (sys_id) of the user associated with the
     * call.
     * @param groupSysId Optional. Unique identifier (sys_id) of the group associated with the
     * call.
     * @param sourceRecord Optional. Source record that prompted this call.
     */
    call(
      notifyPhoneNumber: string,
      toPhoneNumber: string,
      conferenceCall?: GlideRecord,
      userSysId?: string,
      groupSysId?: string,
      sourceRecord?: GlideRecord,
    ): any;
    /**
     * Creates a new conference call GlideRecord.
     * @param sourceRecord Optional. Record that initiated the request to create the conference call. Used
     * to populate the source and table fields on notify_conference_call record.
     */
    conferenceCall(sourceRecord?: GlideRecord): GlideRecord;
    /**
     * Resumes a call after it was put in a queue (on hold).
     * @param callRecord GlideRecord object on the Notify Call [notify_call] table with the held call
     * you want to resume.
     */
    dequeueCall(callRecord: GlideRecord): any;
    /**
     * Forwards the specified call to a different call recipient.
     * @param call Notify call record or the telephony provider call ID, of the call to be
     * forwarded.
     * @param destination Notify phone number record or an E.164-compliant phone number, of the caller to
     * which to forward the call.
     * @param dtmf Dual Tone - Multi Frequency (DTMF) code to send upon call connection.
     */
    forwardCall(call: GlideRecord, destination: GlideRecord, dtmf: string): any;
    /**
     * Returns a list of client sessions that are available to receive calls.
     * @param notifyNumber Valid Notify phone number.
     */
    getAvailableClients(notifyNumber: string): any[];
    /**
     * Returns all phone numbers and short codes available to Notify.
     */
    getPhoneNumbers(): any;
    /**
     * Returns all short codes available to Notify.
     */
    getShortCodes(): any;
    /**
     * Returns client tokens for any active telephony drivers for use in WebRTC or mobile
     * clients.
     * @param record GlideRecord to use to identify the Notify client, such as a group record or a
     * user record.
     */
    getTokens(record: GlideRecord): string;
    /**
     * Returns the maximum amount of time that a client session stays active for a specified
     * telephony driver before automatically timing out.
     * @param owner Name of the telephony driver for which to retrieve the session length. Valid
     * values:
     *
     * Twilio: for the old driver
     *
     * TwilioDirect: for the new driver
     *
     *
     */
    getTokenTTL(owner: string): number;
    /**
     * Determines whether the specified phone number has the specified capability.
     * @param notifyPhoneNumber Phone number for which to check for the specified capability.
     * @param capability Capability to detect. The string text must be an exact match to what is in the
     * phone.
     */
    hasCapability(notifyPhoneNumber: string, capability: string): boolean;
    /**
     * Removes the specified caller from the current Notify conference call.
     * @param participant GlideRecord object containing the Notify Participant [notify_participant]
     * record of the caller to remove from the conference call.
     */
    kick(participant: GlideRecord): any;
    /**
     * Performs one or more activities on an active Notify phone call.
     * @param callRecord Notify Call [notify_call] record of the call for which to apply the
     * actions.
     * @param notifyAction NotifyAction object describing one or more activities to perform on the
     * call.
     */
    modifyCall(callRecord: GlideRecord, notifyAction: any): any;
    /**
     * Mutes the specified conference call participant.
     * @param participantRecord GlideRecord from the notify_participant table for the participant to
     * mute.
     */
    mute(participantRecord: GlideRecord): any;
    /**
     * Puts the specified call into a queue (on hold).
     * @param callRecord GlideRecord object of the Notify Call  record (notify_call table) to put on
     * hold.
     */
    queueCall(callRecord: GlideRecord): any;
    /**
     * Sends a specified SMS message to the specified list of Notify clients (phone
     * numbers).
     * @param notifyPhoneNumber Phone number from which the SMS message is being sent.
     * @param toPhoneNumbers Comma separated list phone numbers to which to send the SMS message.Format:
     * E.164-compliant
     * @param messageBody SMS text to send.
     * @param source Source record that prompted this SMS message, such as an incident.
     */
    sendBulkSMS(
      notifyPhoneNumber: any,
      toPhoneNumbers: string,
      messageBody: string,
      source: GlideRecord,
    ): string;
    /**
     * Sends an SMS text message to an E.164-compliant phone number.
     * @param notifyPhoneNumber Notify phone number or short code to which to send this SMS message.
     * @param toPhoneNumber E.164-compliant phone number to which to send the SMS message.
     * @param messageBody SMS text message.
     * @param source Source record that prompted this SMS message, such as an incident.
     */
    sendSMS(
      notifyPhoneNumber: any,
      toPhoneNumber: string,
      messageBody: string,
      source: GlideRecord,
    ): string;
    /**
     * Unmutes the specified conference call participant.
     * @param participantRecord GlideRecord from the notify_participant table for the participant to
     * unmute.
     */
    unmute(participantRecord: GlideRecord): any;
  }
  export class NotifyPhoneNumber {
    /**
     * Returns the international dialing code for a Notify phone number.
     */
    getDialCode(): string;
    /**
     * Returns the ID of this phone number as defined by the telephony provider.
     */
    getID(): string;
    /**
     * Returns the numerical phone number for the current Notify caller.
     */
    getNumber(): string;
    /**
     * Returns the telephony provider associated with this phone number.
     */
    getOwner(): string;
    /**
     * Returns the country associated with the phone number.
     */
    getTerritory(): string;
    /**
     * Determines if the Notify phone number supports conference calls.
     */
    supportsConferenceCall(): boolean;
    /**
     * Determines if the Notify phone number supports receiving phone calls.
     */
    supportsIncomingPhoneCall(): boolean;
    /**
     * Determines if the Notify phone number supports receiving SMS messages.
     */
    supportsIncomingSMS(): boolean;
    /**
     * Determines if the Notify phone number supports initiating phone calls.
     */
    supportsOutgoingPhoneCall(): boolean;
    /**
     * Determines if the Notify phone number supports sending SMS messages.
     */
    supportsOutgoingSMS(): boolean;
    /**
     * Determines if the Notify phone number supports recording phone calls.
     */
    supportsRecording(): boolean;
    /**
     * Determines if the Notify phone number supports calls to a browser, such as in a WebRTC
     * implementation.
     */
    supportsWebRTC(): boolean;
  }
}
declare namespace sn_sc {
  export class CartJS {
    constructor(cartName?: string);
    /**
     * Adds the request for a catalog item to the current cart.
     * @param request A JSON object that contains the details of the catalog item to be added to the
     * cart.The structure of the request object
     * is:
     * {
     * 'sysparm_id': item_id,
     * 'sysparm_quantity': item_quantity,
     * 'variables':{
     * 'var_name': 'var_value',
     * ...
     * }
     * }
     * item_id: sys_id of the item to be added to the cart
     *
     * item_quantity: Number of items to be added. Default value is 1.
     *
     * var_name: Name of the question.
     *
     * var_value: Value of the answer (Not the display value).
     *
     *
     */
    addToCart(request: any): any;
    /**
     * Specifies if the current user has the required role to edit the Request
     * for field.
     */
    canViewRF(): boolean;
    /**
     * Performs the cart checkout. If the two-step checkout is enabled, returns the order
     * summary. If the two-step checkout is disabled, the cart is submitted and details of the
     * generated request are returned.
     */
    checkoutCart(): any;
    /**
     * Deletes the current cart.
     */
    empty(): any;
    /**
     * Returns the cart details.
     */
    getCartDetails(): any;
    /**
     * Returns the cart id of the current cart.
     */
    getCartID(): string;
    /**
     * Returns a GlideRecord object containing records for items in the current
     * cart.
     */
    getCartItems(): GlideRecord;
    /**
     * Gets the delivery address for the current cart.
     */
    getDeliveryAddress(): string;
    /**
     * Gets the sys_id from the sys_user record of the user for whom the cart is
     * requested.
     */
    getRequestedFor(): string;
    /**
     * Gets the name from the user record of the user for whom the current cart is
     * requested.
     */
    getRequestedForDisplayName(): string;
    /**
     * Gets the special instructions for the current cart.
     */
    getSpecialInstructions(): string;
    /**
     * Orders a single item. If two-step checkout is enabled, the method adds the specified
     * item to the cart and returns the sys_id of the cart. If two-step checkout is disabled, the
     * method completes the purchase of the specified item and returns the sys_id of the generated
     * request.
     * @param request JSON object that contains details of the catalog item to order.
     */
    orderNow(request: any): any;
    /**
     * Sets the delivery address for the current cart.
     * @param address Delivery address for the current cart.
     */
    setDeliveryAddress(address: string): any;
    /**
     * Sets the sys_id in the sys_user record of the user for whom the cart is
     * requested.
     * @param user sys_id to be set in the sys_user record of the user for whom the cart is
     * requested.
     */
    setRequestedFor(user: string): any;
    /**
     * Sets the special instructions for the current cart.
     * @param specialInstructions Special instructions for the current cart.
     */
    setSpecialInstructions(specialInstructions: string): any;
    /**
     * Updates special instructions, requested for, and delivery address from the
     * request parameter and performs the cart checkout. Use this API to modify
     * the mentioned parameters of the cart and perform the cart checkout simultaneously. Missing
     * parameters in the request object will have their default value.
     * @param request A JSON object that contains details of the cart to be submitted.The
     * structure of the request object
     * is:
     * {
     * 'special_instructions' : 'instructions',
     * 'sysparm_requested_for' : requested_for,
     * 'delivery_address' : 'address'
     * }
     * instructions: Special instructions for the request.
     *
     * requested_for : sys_id of the requested_for user.
     *
     * address: Delivery address for the request.
     *
     *
     */
    submitOrder(request: any): any;
    /**
     * Updates an item in the cart.
     * @param request A JSON object that contains details of the catalog item to be updated.The
     * structure of the request object
     * is:
     * {
     * 'sysparm_quantity' : item_quantity,
     * 'sysparm_requested_for' : requested_for,
     * 'variables' : {
     * 'var_name' : 'var_value',
     * ...
     * }
     * }
     * item_quantity: Number of items to be added. Default value is 1.
     *
     * var_name: Name of the question.
     *
     * var_value: Value of the answer (Not the display value).
     *
     *
     * @param cart_item_id sys_id of the cart item to be modified.
     */
    updateItem(request: any, cart_item_id: string): any;
  }
  export class CatalogClientScript {
    constructor();
    /**
     * Adds a script to the catalog client script.
     * @param script Script to be added to the catalog client script.
     */
    addScript(script: string): any;
    /**
     * Specifies if the catalog client script runs on a catalog item.
     * @param flag If true, the catalog client script runs on the catalog item. If false, the
     * catalog client script does not run on the catalog item.
     */
    appliesToCatalogItem(flag: boolean): any;
    /**
     * Specifies if the catalog client script runs on a catalog task.
     * @param flag If true, the catalog client script runs on the catalog task. If false, the
     * catalog client script does not run on the catalog task.
     */
    appliesToCatalogTask(flag: boolean): any;
    /**
     * Specifies if the catalog client script runs on a requested item.
     * @param flag If true, the catalog client script runs on the requested item. If false, the
     * catalog client script does not run on the requested item.
     */
    appliesToRequestedItem(flag: boolean): any;
    /**
     * Specifies if the catalog client script runs on a requested item.
     * @param flag If true, the catalog client script runs on the target record. If false, the
     * catalog client script does not run on the target record.
     */
    appliesToTargetRecord(flag: boolean): any;
    /**
     * Inserts the defined catalog client script in the catalog_script_client table.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    create(standardUpdate: boolean): string;
    /**
     * Deletes the defined catalog client script.
     * @param sys_id sys_id of the catalog client script.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    deleteRecord(sys_id: string, standardUpdate: boolean): any;
    /**
     * Defines attribute values for the catalog client script.
     * @param attributes A JSON object that has mapping for the field and value pairs.
     */
    setAttributes(attributes: any): any;
    /**
     * Associates a catalog item with the catalog client script.
     * @param sys_id sys_id of the catalog item.
     */
    setCatalogItem(sys_id: string): any;
    /**
     * Runs the catalog client script when a variable value is updated.
     * @param sys_id sys_id of the variable.
     */
    setOnChangeVariable(sys_id: string): any;
    /**
     * Associates a variable set with the catalog client script.
     * @param sys_id sys_id of the variable set.
     */
    setVariableSet(sys_id: string): any;
  }
  export class CatalogItemVariable {
    /**
     * Insert the defined catalog item variable.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    create(standardUpdate: boolean): string;
    /**
     * Delete the defined catalog item variable.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Get a mapping of catalog item variable attribute values.
     * @param columns Specify the set of columns that you would like the values for.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Define attribute values for this catalog item variable.
     * @param attributes An object mapping column names to values.
     */
    setAttributes(attributes: any): any;
    /**
     * Use to update current catalog item variable with set values.
     * @param columnValues An object mapping column names to values.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class CatalogItemVariableSet {
    /**
     * Inserts the defined catalog item variable set.
     * @param standardUpdate Flag indicating whether to enable the  running of engines and workflow.Valid
     * values:
     * true: Enable the  running of engines and workflow.
     *
     * false: Do not enable the  running of engines and workflow.
     *
     *
     *
     */
    create(standardUpdate: boolean): string;
    /**
     * Delete the defined catalog item variable.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Get a mapping of catalog item variable set attribute values.
     * @param columns Specify the set of columns that you would like the values for.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Define attribute values for this catalog item variable set.
     * @param attributes An object mapping column names to values.
     */
    setAttributes(attributes: any): any;
    /**
     * Use to update current catalog item variable set with set values.
     * @param columnValues An object mapping column names to values.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class CatalogItemVariableSetM2M {
    /**
     * Insert the defined catalog item variable set M2M.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    create(standardUpdate: boolean): string;
    /**
     * Delete the defined catalog item variable set M2M.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Get a mapping of catalog item variable set M2M attribute values.
     * @param columns Specify the set of columns that you would like the values for.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Define attribute values for this catalog item variable set M2M.
     * @param attributes An object mapping column names to values.
     */
    setAttributes(attributes: any): any;
    /**
     * Updates current catalog item variable set M2M with set values.
     * @param columnValues An object mapping column names to values.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class CatalogJS {
    constructor(gr: any);
    constructor(sys_id: string);
    /**
     * Specifies if the catalog is viewable for the user.
     * @param mobile True if the view is mobile view. Else, false.
     */
    canView(mobile: boolean): boolean;
    /**
     * If only one active catalog exists, that catalog is returned. Else, the earliest catalog
     * created is returned, from the list of the catalogs that the user can view. If no catalog is
     * available, null is returned.
     */
    getAvailableCatalog(): any;
    /**
     * Returns the catalog background color.
     */
    getBackgroundColor(): string;
    /**
     * Specifies the number of catalogs active in the catalog table.
     */
    getCatalogCount(): number;
    /**
     * Returns the categories for the specified catalog.
     */
    getCategories(): any;
    /**
     * Specifies the sys_ids of the categories in the specified catalog.
     */
    getCategoryIds(): any;
    /**
     * Specifies the catalog description.
     */
    getDescription(): string;
    /**
     * Returns the catalog desktop image value.
     */
    getDesktopImageSRC(): string;
    /**
     * Returns the catalog gliderecord.
     */
    getGr(): GlideRecord;
    /**
     * Returns the catalog header icon.
     */
    getHeaderIconSRC(): string;
    /**
     * Specifies the sys_id of the catalog.
     */
    getID(): string;
    /**
     * Returns the title of the catalog.
     */
    getTitle(): string;
    /**
     * Specifies if the catalog has categories.
     */
    hasCategories(): boolean;
    /**
     * Specifies if the catalog has catalog items.
     */
    hasItems(): boolean;
    /**
     * Specifies if the wish list is enabled for a catalog.
     */
    isWishlistEnabled(): boolean;
  }
  export class CatalogSearch {
    constructor();
    /**
     * Searches a catalog item based on a search term. The search can be narrowed down to a
     * catalog category level.
     * @param catalogID Identifier of the catalog to search.
     * @param categoryID Identifier of the catalog category to search.
     * @param mobile Flag that indicates whether catalog items exposed for mobile are
     * searched.Valid values:
     * true: Search for mobile catalog items.
     *
     * false: Do not search for mobile catalog items.
     *
     *
     *
     * @param term Search term.
     * @param depthSearch Flag that indicates whether to search subcategories.Valid values:
     * true: Do not search subcategories.
     *
     * false: Search subcategories.
     *
     *
     *
     */
    search(
      catalogID: string,
      categoryID: string,
      mobile: boolean,
      term: string,
      depthSearch: boolean,
    ): GlideRecord;
  }
  export class CatCategory {
    /**
     * Adds the Available For user criteria to a catalog
     * category.
     * @param action Specify add to add the user criteria to the
     * Available For list. Specify
     * delete to delete the user criteria from the
     * Available For list.
     * @param criteriaIDs Array of the user criteria sys_ids.
     */
    availableForUserCriteria(action: string, criteriaIDs: any[]): any;
    /**
     * Determines whether a specified user can view a specified category on a mobile device or
     * desktop.
     * @param isMobile Flag that indicates whether to verify the user for access on a mobile device or
     * desktop.
     * true: validate for mobile.
     *
     * false: validate for desktop.
     *
     *
     * @param userSysId Unique identifier of the user to validate.
     */
    canView(isMobile: boolean, userSysId: string): boolean;
    /**
     * Insert the defined category.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    create(standardUpdate: boolean): string;
    /**
     * Deletes the category record on which the CatCategory class was initially
     * instantiated.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Returns the sys_id of the category.
     */
    getID(): string;
    /**
     * Adds the Not Available For user criteria to a catalog
     * category.
     * @param action Specify add to add the user criteria to the
     * Not Available For list. Specify
     * delete to delete the user criteria from the
     * Not Available For list.
     */
    notAvailableForUserCriteria(action: string): any;
    /**
     * Get a mapping of the category.
     * @param columns Specify the set of columns that you would like the values for.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Define attribute values for this category.
     * @param attributes Set the attributes for new field and value pairs.
     */
    setAttributes(attributes: any): any;
    /**
     * Define the table name for this category.
     * @param tableName Specify the name of the table that extends sc_category.
     */
    setTableName(tableName: string): any;
    /**
     * Use to update current category.
     * @param columnValues Object mapping column names to values.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class CatItem {
    /**
     * Adds the Available For user criteria to a catalog
     * item.
     * @param action Specify add to add the user criteria to the
     * Available For list. Specify
     * delete to delete the user criteria from the
     * Available For list.
     * @param criteriaIDs Array of the user criteria sys_ids.
     */
    availableForUserCriteria(action: string, criteriaIDs: any[]): any;
    /**
     * Verifies whether the current catalog item is viewable in the selected domain (domain
     * selected in the domain picker).
     */
    canViewInDomain(): boolean;
    /**
     * Specifies if the user has access to view the catalog item on global search.
     * @param isMobile True if the search is in mobile view. Else, false.
     */
    canViewOnSearch(isMobile: boolean): boolean;
    /**
     * Inserts the defined catalog item.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable the running of engines and workflow.
     *
     * false: Do not enable the running of engines and workflow. Note that the
     * created and updated system date columns on the table are not updated.
     *
     *
     *
     */
    create(standardUpdate: boolean): string;
    /**
     * Delete the defined catalog item.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Specifies the first category that the user can view in a catalog.
     * @param catalogId sys_id of the catalog.
     */
    getFirstAccessibleCategoryForSearch(catalogId: string): string;
    /**
     * Returns an array of users for whom the associated item cannot be delegated (requested
     * on behalf of).
     * @param requestForUsers Array of user sys_ids to check whether the associated user can acquire the
     * current item and that the item can be requested on behalf of them. User sys_ids are
     * located in the Users [sys_user] table.
     */
    getInvalidDelegatedUsers(requestForUsers: any): any[];
    /**
     * Returns the class name for the current catalog item record.
     */
    getRecordClass(): string;
    /**
     * Verifies whether the specified delegated user has acquisition rights to the current
     * service catalog item.
     * @param delegatedUser Optional. Sys_id of the user to request the service catalog item for
     * (delegate). The method verifies whether the user has acquisition rights to the
     * item. Default: Checks whether the calling user has acquisition rights to the
     * item.
     */
    isDelegationAllowed(delegatedUser?: string): boolean;
    /**
     * Specifies if the catalog item is available in service portal.
     */
    isVisibleServicePortal(): boolean;
    /**
     * Adds the Not Available For user criteria to a catalog
     * item.
     * @param action Specify add to add the user criteria to the
     * Not Available For list. Specify
     * delete to delete the user criteria from the
     * Not Available For list.
     */
    notAvailableForUserCriteria(action: string): any;
    /**
     * Get a mapping of catalog item attribute values.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     * @param columns Specify the set of columns that you would like the values for.
     */
    read(standardUpdate: boolean, columns: any): any;
    /**
     * Define attribute values for this catalog item.
     * @param attributes An object mapping column names to values.
     */
    setAttributes(attributes: any): any;
    /**
     * Define the catalogs that this catalog item is associated with.
     * @param catalogs Specify comma-separated list of catalogs that you would like the item to be
     * associated with.
     */
    setCatalogs(catalogs: string): any;
    /**
     * Define the categories that this catalog item is associated with.
     * @param categories Specify comma-separated list of categories that you would like the item to be
     * associated with.
     */
    setCategories(categories: string): any;
    /**
     * Set the image of a catalog item to a database image record.
     * @param dbImageSysId sys_id of an attachment referencing the db_image.
     * @param type Type can be picture or an icon.
     */
    setImage(dbImageSysId: string, type: string): any;
    /**
     * Define the table name for this catalog item.
     * @param tableName Specify the name of the table that extends sc_cat_item.
     */
    setTableName(tableName: string): any;
    /**
     * Use to update current catalog item with set values.
     * @param columnValues An object mapping column names to values.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class OrderGuide {
    constructor(sys_id: string);
    /**
     * Returns the sys_id of the order guide.
     */
    getID(): string;
    /**
     * Initialises the order guide with the specified catalog items and the variables, and
     * returns the order guide.
     * @param request A JSON object with the Catalog item and variable details.
     */
    init(request: any): any;
    /**
     * Specifies if the Show Include Toggle (include_items) check box
     * is selected for the specified order guide.
     */
    isIncludeItems(): boolean;
    /**
     * Specifies if the two-step checkout is enabled.
     */
    isTwoStep(): boolean;
    /**
     * Specifies if a separate cart (different from that for catalog items) usage is enabled
     * for a two-step order guide.
     */
    isUseCustomCart(): boolean;
    /**
     * Navigates to the catalog items of an order guide.
     * @param itemDetails A JSON object with details of catalog items in the order guide.
     */
    navigateFromMap(itemDetails: any): any;
  }
}
declare namespace sn_skill_rule {
  export class SkillDeterminationUtils {
    constructor();
    /**
     * Assigns an array of active skill objects to a work item.
     * @param skills Array of active skill objects to be assigned.
     * @param gr GlideRecord of the work item on which to assign skills.
     */
    assignSkillsToWorkItem(skills: any[], gr: GlideRecord): any;
    /**
     * Gets skills for a specified work item, indicates if the skills are mandatory, and lists
     * any skill levels.
     * @param gr GlideRecord of a work item from any interaction or task table
     * extension.
     */
    determineWorkItemSkills(gr: GlideRecord): any[];
  }
}
declare namespace sn_sms_pref {
  export class SMSPreferenceHandler {
    constructor(provider: string);
    /**
     * Returns the preferences configuration record for the current telephony service
     * provider.
     */
    getConfig(): GlideRecord;
  }
}
declare namespace sn_templated_snip {
  export class ResponseTemplate {
    constructor();
    /**
     * Returns all response templates from a specified table that match the passed in query
     * criteria.
     * @param tableName Name of the table to use to search the sn_templated_snip_note_template table to
     * locate corresponding response templates. For example, incident or
     * sn_hr_core_case.
     * @param recordId Sys ID of the record to use to render the variables in the response
     * template.
     * @param searchTerm Optional. Text to use to filter the list of matching response templates. The
     * method performs a CONTAINS search of this text on the name and body fields and a
     * STARTS WITH search on the short name field. For example, if the search term is
     * "crash", the method returns any response template that matches the query criteria
     * and has crash in the name or body or the short name starts with
     * crash.
     * Response templates with exact matches on short name appear first in
     * the return results. All other returned response templates are sorted by
     * name.
     * Default: Return all matching response templates.
     * @param limit Optional. Maximum number of response templates to return.Default:
     * 50
     * @param offset Optional. For pagination, the index at which to start the search.Default:
     * 0
     * @param includeEvaluatedBody Optional. Flag that indicates whether to render the template variables.Valid
     * values:
     *
     * false: Do not render the template variables. The response contains the message
     * variables.For example:
     * Please note that your case {number} has been escalated to {assignment_group}.
     *
     *
     *
     * true: Renders the template variables and returns evaluated_response
     * in the return results. For example:
     * Please note that your case INC100001 has been escalated to Facilities.
     *
     *
     *
     *
     * Default: false
     * @param errorFormat Optional. HTML formatting to use for errors. For
     * example:
     * "&lt;span
     * style='color:#ffff00'&gt;{%s}&lt;/span&gt;"
     * Default: "&lt;span
     * style='color:#ff0000'&gt;{%s}&lt;/span&gt;"
     * @param opts Optional. Parameters to pass to the
     * sn_templated_snip.response_template extension point. The format and content of these
     * parameters are dependent on the implementation of the extension point. For additional
     * information on extension points, see Using extension points to extend
     * application functionality.
     */
    query(
      tableName: string,
      recordId: string,
      searchTerm?: string,
      limit?: number,
      offset?: number,
      includeEvaluatedBody?: boolean,
      errorFormat?: string,
      opts?: any,
    ): any;
    /**
     * Renders the HTML body of a specified response template.
     * @param templateId Sys ID of the response template to render.
     * @param tableName Name of the table to use when rendering the variables on the response
     * template.
     * @param recordId Sys ID of the record to use when rendering the variables on the response
     * template. This record must be in the table specified by
     * tableName.
     * @param errorFormat Optional. HTML formatting to use for errors. For
     * example:
     * "&lt;span
     * style='color:#ffff00'&gt;{%s}&lt;/span&gt;"
     * Default: "&lt;span
     * style='color:#ff0000'&gt;{%s}&lt;/span&gt;"
     * @param opts Optional. Parameters to pass to the
     * sn_templated_snip.response_template extension point. The format and content of these
     * parameters are dependent on the implementation of the extension point. For additional
     * information on extension points, see Using extension points to extend
     * application functionality.
     */
    render(
      templateId: string,
      tableName: string,
      recordId: string,
      errorFormat?: string,
      opts?: any,
    ): any;
  }
}
declare namespace sn_tfrm {
  export class Transformer {
    constructor(transformerDefinition: any, document: string);
    /**
     * Returns
     * the row resulting from the last transformation (or null if no row
     * exists).
     */
    getRow(): any;
    /**
     * Transforms the next available
     * row/node
     * in the source document.
     */
    transform(): boolean;
  }
  export class TransformerDefinition {
    constructor(transformerRuleList: any, recordPath?: string);
    /**
     * If set when the TransformerDefinition object was instantiated, returns the record path
     * for the source data file associated with the TransformerDefinition object.
     */
    recordPath(): string;
    /**
     * Validates whether a valid TransformerRuleList is associated with the
     * TransformerDefintion object.
     */
    validate(): boolean;
  }
  export class TransformerRuleList {
    /**
     * Creates an entry in the associated transformation rules list which defines a field to
     * create in the output.
     * @param rule Name of the element in the destination output.
     * @param path Optional. JSONPath or XPath to the data element in the source document.The
     * adapter methods thenConcat() and
     * thenConcatSymbol() do not require you to define this
     * parameter if no other adapter methods are defined for the rule. All other adapter
     * methods require this parameter.
     */
    addRule(rule: string, path?: string): any;
    /**
     * Defines a name for the associated TransformerRuleList object for logging
     * purposes.
     * @param name Name to use to identify the associated TransformerRuleList object. Although
     * the API does not force this name to be unique, it is helpful if they are unique
     * within an instance.
     */
    setName(name: string): any;
    /**
     * Adds an adapter to the current rule that ties the specified currency code to the output
     * field defined in the associated addRule() call.
     * @param currencyCode Currency code to tie to the destination data element, such as USD, EUR, and
     * GBP.
     * @param outputNumericCurrencyValue Optional. Flag that indicates whether to display the currency code.Valid
     * values:
     *
     * true: do not display the country code; numeric value only
     *
     * false: display the country code
     *
     *
     * Default: false
     */
    thenAdaptCurrency(
      currencyCode: string,
      outputNumericCurrencyValue?: boolean,
    ): any;
    /**
     * Adds an adapter to the current rule that converts the source field from one unit of
     * measure to another, such as from minutes to seconds or weeks to days.
     * @param inputDuration Current unit of measure of the source field.Valid values:
     *
     * NANOSECOND
     *
     * MICROSECOND
     *
     * MILLISECOND
     *
     * SECOND
     *
     * MINUTE
     *
     * HOUR
     *
     * DAY
     *
     * WEEK
     *
     *
     * @param outputDuration Unit of measure to convert the source field to in the output.Valid
     * values:
     *
     * NANOSECOND
     *
     * MICROSECOND
     *
     * MILLISECOND
     *
     * SECOND
     *
     * MINUTE
     *
     * HOUR
     *
     * DAY
     *
     * WEEK
     *
     *
     */
    thenAdaptDuration(inputDuration: string, outputDuration: string): any;
    /**
     * Adds an adapter to the current rule that adds the passed in value to the source
     * field.
     * @param operand Value to add to the source field.
     */
    thenAdd(operand: number): any;
    /**
     * Adds an adapter to the current rule that searches the associated source field for a
     * list of strings and replaces them in the output with the specified replacement
     * values.
     * @param map Name/value pairs.
     * name: text to locate in the source data element
     *
     *
     * value: text to replace it with in the output
     *
     *
     */
    thenApplyMap(map: any): any;
    /**
     * Adds an adapter to the current rule that matches a specified regex pattern to content
     * in the source field and then replaces/reformats that content with a second regex pattern and
     * stores that value in the output.
     * @param matchPattern Regex pattern to use to locate the text to replace/reformat.
     * @param outputPattern Regex pattern to use to update the located text.
     */
    thenApplyPattern(matchPattern: string, outputPattern: string): any;
    /**
     * Adds an action to the current rule to round the source field up at the decimal position
     * specified by the passed in value.
     * @param operand Decimal position to the right of the decimal point at which to round the number
     * up (apply ceiling). For example, if this value is 2 and the source data element
     * is 6.421, the resulting value is 6.43.
     */
    thenCeiling(operand: number): any;
    /**
     * Adds an adapter to the current rule that concatenates the passed in string to the
     * output field.
     * @param value Text to concatenate to the end of the current data element.
     */
    thenConcat(value: string): any;
    /**
     * Adds an adapter to the current rule that concatenates the value of a field previously
     * defined in the rules list to the current output field.
     * @param symbol Name of the rules list element to append to the output field.
     */
    thenConcatSymbol(symbol: string): any;
    /**
     * Adds an adapter to the current rule that divides the source field by the passed in
     * value.
     * @param operand Value by which to divide the source field.
     */
    thenDivideBy(operand: number): any;
    /**
     * Adds an adapter to the current rule that divides the passed in value by the source
     * field.
     * @param operand Value into which to divide the source field.
     */
    thenDivideInto(operand: number): any;
    /**
     * Adds an adapter to the current rule that rounds the source field down at the decimal
     * position specified by the passed in value and stores it in the output.
     * @param operand Decimal position to the right of the decimal point at which to round the number
     * down (apply floor). For example, if this value is 2 and the source data element
     * is 6.427, the resulting value is 6.42.
     */
    thenFloor(operand: number): any;
    /**
     * Adds an adapter to the current rule that reformats the content in the source field that
     * matches the specified match pattern, with the specified output pattern.
     * @param matchPattern Pattern to match against the source field.Valid values:
     *
     * @: any character
     *
     * #: decimal digit
     *
     * \: literal escape (\@ for the @ symbol)
     *
     *
     * @param outputPattern Pattern to replace the content with in the output.Valid values:
     *
     * @: any character
     *
     * #: decimal digit
     *
     * \: literal escape (\@ for the @ symbol)
     *
     *
     */
    thenFormat(matchPattern: string, outputPattern: string): any;
    /**
     * Adds an adapter to the current rule that compares the passed in value against the
     * source field and copies the greater of the two values to the output field.
     * @param operand Value to compare to the source field.
     */
    thenMax(operand: number): any;
    /**
     * Adds an adapter to the current rule that compares the passed in value against the
     * source field and copies the lower of the two values to the output field.
     * @param operand Value to compare to the source field.
     */
    thenMin(operand: number): any;
    /**
     * Adds an adapter to the current rule that multiplies the source field by the passed in
     * value.
     * @param operand Value by which to multiply the source field.
     */
    thenMultiply(operand: number): any;
    /**
     * Adds an adapter to the current rule that finds all text within the source field that
     * matches a specified string and replaces it with an updated string.
     * @param matchString String to match against the source field to identify the text to
     * replace.
     * @param replaceString String with which to replace the matching text.
     */
    thenReplace(matchString: string, replaceString: string): any;
    /**
     * Adds an adapter to the current rule that rounds the source data element up at the
     * decimal position specified by the passed in value.
     * @param operand Decimal position to the right of the decimal point at which to round the number
     * up. For example, if this value is 2 and the source data element is 6.422, the
     * resulting value is 6.43.
     */
    thenRoundUp(operand: number): any;
    /**
     * Adds an adapter to the current rule that rounds the source field down at the decimal
     * position specified by the passed in value.
     * @param operand Decimal position to the right of the decimal point at which to round the number
     * down. For example, if this value is 2 and the source data element is 6.427, the
     * resulting value is 6.42.
     */
    thenRoundDown(operand: number): any;
    /**
     * Adds an adapter to the current rule that splits, reorganizes, and replaces strings
     * within the source field and saves them in the output field.
     * @param splitPattern String that denotes how to split the text into segments.
     * @param replaceString String that defines the output string, including segment references and
     * constants. Not all segments need to be referenced. Reference the segments defined
     * by the splitPattern using $#, where # is the number of the
     * order of the segment in the source data element. Reference the entire source data
     * element using $0.
     */
    thenSplit(splitPattern: string, replaceString: string): any;
    /**
     * Adds an adapter to the current rule that subtracts the passed in value from the source
     * field and stores it in the output field.
     * @param operand Value to subtract from the source data element.
     */
    thenSubtract(operand: number): any;
  }
}
declare namespace sn_uc {
  export class UserCriteria {
    constructor();
    constructor(sys_id: string);
    /**
     * Creates a user criteria with specified values in the user_criteria table. Values
     * specified in columnValues override the values provided via setters.
     * @param columnValues Key and value pairs for a column and its value.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    create(columnValues: any, standardUpdate: boolean): string;
    /**
     * Deletes the current user criteria.
     */
    deleteRecord(): boolean;
    /**
     * Displays the mapping for the attribute and value pairs of the catalog item.
     * @param columns Array of catalog item attributes.
     */
    read(columns: string): any;
    /**
     * Specifies if the user criteria is active.
     * @param active If true, the user criteria is active. If false, the user criteria is
     * inactive.
     */
    setActive(active: boolean): any;
    /**
     * Specifies if the user criteria has an advanced script.
     * @param advanced If true, the user criteria has an advanced script.If false, the user
     * criteria does not have an advanced script.
     */
    setAdvanced(advanced: boolean): any;
    /**
     * Sets the company property for the user criteria.
     * @param companies Comma-separated list of the company sys_ids to be set for the user
     * criteria.
     */
    setCompanies(companies: string): any;
    /**
     * Sets the department property for the user criteria.
     * @param departments Comma-separated list of the department sys_ids to be set for the user
     * criteria.
     */
    setDepartments(departments: string): any;
    /**
     * Sets the group property for the user criteria.
     * @param groups Comma-separated list of the group sys_ids to be set for the user
     * criteria.
     */
    setGroups(groups: string): any;
    /**
     * Sets the location property for the user criteria.
     * @param locations Comma-separated list of the location sys_ids to be set for the user
     * criteria.
     */
    setLocations(locations: string): any;
    /**
     * Sets the match_all property for the user criteria.
     */
    setMatchAll(): any;
    /**
     * Sets the name property for the user criteria.
     * @param name Name of the user criteria.
     */
    setName(name: string): any;
    /**
     * Sets the role property for the user criteria.
     * @param roles Comma-separated list of the role sys_ids to be set for the user
     * criteria.
     */
    setRoles(roles: string): any;
    /**
     * Sets the script for the user criteria.
     * @param script Script to be set for the advanced user criteria.
     */
    setScript(script: string): any;
    /**
     * Sets the user property for the user criteria.
     * @param users Comma-separated list of the user sys_ids to be set for the user
     * criteria.
     */
    setUsers(users: string): any;
    /**
     * Updates the current catalog item with the specified values.
     * @param columnValues Mapping for the column name and the value pairs.
     * @param reason Reason for updating the catalog item.
     */
    update(columnValues: any, reason: string): string;
  }
}
declare namespace sn_ws {
  export class RESTAPIRequest {
    body: any;
    headers: any;
    pathParams: any;
    queryParams: any;
    queryString: string;
    uri: string;
    url: string;
    /**
     * Returns the value of a specific header from the web service request.
     * @param header The name of the header, such as accept or
     * content-type.
     */
    getHeader(header: string): string;
    /**
     * Get the content types specified in the request Accept header.
     */
    getSupportedResponseContentTypes(): any[];
  }
  export class RESTAPIRequestBody {
    data: any;
    dataStream: any;
    dataString: string;
    /**
     * Determines if there are additional entries in the request body.
     */
    hasNext(): boolean;
    /**
     * Retrieve one entry from the request body as a script object.
     */
    nextEntry(): any;
  }
  export class RESTAPIResponse {
    /**
     * Returns the ResponseStreamWriter for this response, allowing you to write directly to
     * the response stream.
     */
    getStreamWriter(): any;
    /**
     * Sets the body content to send in the web service response.
     * @param body The response body, as a JavaScript object.
     *
     * The body content is automatically serialized to JSON or XML depending on the
     * value of the Accept header passed in the request.
     */
    setBody(body: any): any;
    /**
     * Assigns a value to the Content-Type header in the web service response.
     * @param contentType The content type of the response body, such as application/json.
     */
    setContentType(contentType: string): any;
    /**
     * Configures the REST response to return an error.
     * @param error Error object.
     */
    setError(error: any): any;
    /**
     * Assign a value to a REST service response header.
     * @param header The header you want to set.
     * @param value The value to assign the specified header.
     */
    setHeader(header: string, value: string): any;
    /**
     * Sets the headers for the web service response.
     * @param headers A JavaScript object listing each header and the value to assign that
     * header.
     */
    setHeaders(headers: any): any;
    /**
     * Assigns a value to the Location header in the web service response.
     */
    setLocation(): any;
    /**
     * Sets the status code number for the web service response.
     * @param status The status code to send in the response, such as 200 to indicate success.
     * Passing a non-numerical value, such as a string, causes the status code to default
     * to 0.
     */
    setStatus(status: number): any;
  }
  export class RESTAPIResponseStream {
    /**
     * Write an input stream to the response stream.
     * @param stream An attachment or a response stream from a third-party service.
     */
    writeStream(stream: any): any;
    /**
     * Write string data to the response stream.
     * @param data The string to add to the response data.
     */
    writeString(data: string): any;
  }
  export class RESTMessageV2 {
    constructor();
    constructor(name: string, methodName: string);
    /**
     * Send the REST message to the endpoint.
     */
    execute(): any;
    /**
     * Send the REST message to the endpoint asynchronously. The instance does not wait for a
     * response from the web service provider when making asynchronous calls.
     */
    executeAsync(): any;
    /**
     * Get the URL of the endpoint for the REST message.
     */
    getEndpoint(): string;
    /**
     * Get the content of the REST message body.
     */
    getRequestBody(): string;
    /**
     * Get the value for an HTTP header specified in the REST message.
     * @param headerName The request header you want to get the value for.
     */
    getRequestHeader(headerName: string): string;
    /**
     * Get HTTP headers that were set by the REST client and the associated
     * values.
     */
    getRequestHeaders(): any;
    /**
     * Configures the REST message to save the returned response body as an attachment
     * record.
     * @param tableName Specify the table that contains the record you want to attach the saved file
     * to.
     * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
     * @param fileName Specify the file name to give to the saved file.
     */
    saveResponseBodyAsAttachment(
      tableName: string,
      recordSysId: string,
      fileName: string,
    ): any;
    /**
     * Configures the REST message to save the returned response body as an attachment
     * record.
     * @param tableName Specify the table that contains the record you want to attach the saved file
     * to.
     * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
     * @param fileName Specify the file name to give to the saved file.
     * @param encryptContext Specify the sys_id of an encryption context. The saved file is encrypted using
     * this context.
     */
    saveResponseBodyAsAttachment(
      tableName: string,
      recordSysId: string,
      fileName: string,
      encryptContext: string,
    ): any;
    /**
     * Set the credentials for the REST message using an existing basic auth or OAuth 2.0
     * profile.
     * @param type The type of authentication profile to use. Valid values are 'basic' to use
     * basic authentication, or 'oauth2' to use OAuth 2.0.
     * @param profileId The sys_id of an authentication profile record. When using basic auth, specify
     * the sys_id of a Basic Auth Configuration [sys_auth_profile_basic] record. When using
     * OAuth 2.0, specify the sys_id of a OAuth Entity Profile [oauth_entity_profile]
     * record.
     */
    setAuthenticationProfile(type: string, profileId: string): any;
    /**
     * Sets basic authentication headers for the REST message.
     * @param userName The username you want to use to authenticate the REST message.
     * @param userPass The password for the specified user.
     */
    setBasicAuth(userName: string, userPass: string): any;
    /**
     * Associate outbound requests and the resulting response record in the ECC queue. This
     * method only applies to REST messages sent through a MID Server.
     * @param correlator A unique identifier
     */
    setEccCorrelator(correlator: string): any;
    /**
     * Override a value from the database by writing to the REST message payload. This method
     * only applies to REST messages sent through a MID Server.
     * @param name The name of the parameter, such as source.
     * @param value The value to assign to the specified parameter.
     */
    setEccParameter(name: string, value: string): any;
    /**
     * Set the endpoint for the REST message.
     * @param endpoint The URL of the REST provider you want to interface with.
     */
    setEndpoint(endpoint: string): any;
    /**
     * The HTTP method this REST message performs, such as GET or PUT.
     * @param method The HTTP method to perform.
     */
    setHttpMethod(method: string): any;
    /**
     * Set the amount of time the REST message waits for a response from the web service
     * provider before the request times out.
     * @param timeoutMs The amount of time, in milliseconds, before the call to the REST provider times
     * out.
     */
    setHttpTimeout(timeoutMs: number): any;
    /**
     * Set the log level for this message and the corresponding response.
     * @param level The log level. Valid values are basic, elevated, and all.
     */
    setLogLevel(level: string): any;
    /**
     * Configure the REST message to communicate through a MID Server.
     * @param midServer The name of the MID Server to use. Your instance must have an active MID Server
     * with the specified name.
     */
    setMIDServer(midServer: string): any;
    /**
     * Set the mutual authentication protocol profile for the REST message.
     * @param profileName The Name of the protocol profile to use for mutual
     * authentication.
     */
    setMutualAuth(profileName: string): any;
    /**
     * Append a parameter to the end of the request URL with the form name=value.
     * @param name The name of the URL parameter to pass.
     * @param value The value to assign the URL parameter.
     */
    setQueryParameter(name: string, value: string): any;
    /**
     * Set the body content to send to the web service provider when using PUT or POST HTTP
     * methods.
     * @param body The request body to send.
     */
    setRequestBody(body: string): any;
    /**
     * Sets the request body using an existing attachment record.
     * @param attachmentSysId The sys_id of the Attachment [sys_attachment] record you want to send in this
     * REST message.
     */
    setRequestBodyFromAttachment(attachmentSysId: string): any;
    /**
     * Set an HTTP header in the REST message to the specified value.
     * @param name The name of the header.
     * @param value The value to assign to the specified header.
     */
    setRequestHeader(name: string, value: string): any;
    /**
     * Override the default requestor profile for the REST message in order to retrieve an
     * OAuth access token associated with a different requestor.
     * @param requestorContext
     * @param requestorId
     */
    setRequestorProfile(requestorContext: string, requestorId: string): any;
    /**
     * Set a REST message function variable with the specified name from the REST message
     * record to the specified value.
     * @param name The name of the REST message variable. This parameter must be defined in the
     * REST message record before you can assign a value to it.
     * @param value The value to assign the variable.
     */
    setStringParameter(name: string, value: string): any;
    /**
     * Set a REST message function variable with the specified name from the REST message
     * record to the specified value.
     * @param name The name of the REST message variable. This parameter must be defined in the
     * REST message record before you can assign a value to it.
     * @param value The value to assign the variable.
     */
    setStringParameterNoEscape(name: string, value: string): any;
  }
  export class RESTResponseV2 {
    /**
     * Returns all headers contained in the response, including any duplicate
     * headers.
     */
    getAllHeaders(): any;
    /**
     * Get the content of the REST response body.
     */
    getBody(): string;
    /**
     * Returns all cookies included in the response.
     */
    getCookies(): any;
    /**
     * Get the numeric error code if there was an error during the REST transaction.
     */
    getErrorCode(): number;
    /**
     * Get the error message if there was an error during the REST transaction.
     */
    getErrorMessage(): string;
    /**
     * Get the value for a specified header.
     * @param name The name of the header that you want the value for, such as Set-Cookie.
     */
    getHeader(name: string): string;
    /**
     * Get all headers returned in the REST response and the associated values.
     */
    getHeaders(): any;
    /**
     * Get the fully-resolved query sent to the REST endpoint..
     */
    getQueryString(): string;
    /**
     * Get the sys_id value of the attachment created from the response body
     * content.
     */
    getResponseAttachmentSysid(): string;
    /**
     * Get the numeric HTTP status code returned by the REST provider.
     */
    getStatusCode(): number;
    /**
     * Indicate if there was an error during the REST transaction.
     */
    haveError(): boolean;
    /**
     * Set the amount of time the instance waits for a response from the web service
     * provider.
     * @param timeoutSecs The amount of time, in seconds, to wait for this response.
     */
    waitForResponse(timeoutSecs: number): any;
  }
  export class SOAPMessageV2 {
    constructor();
    constructor(soapMessage: string, soapFunction: string);
    /**
     * Send the SOAP message to the endpoint.
     */
    execute(): any;
    /**
     * Send the SOAP message to
     * the ECC queue.
     */
    executeAsync(): any;
    /**
     * Get the endpoint for the SOAP message.
     */
    getEndpoint(): string;
    /**
     * Returns the content of the SOAP message body.
     */
    getRequestBody(): string;
    /**
     * Get the value for an HTTP header specified by the SOAP client.
     * @param headerName The request header you want to get the value for.
     */
    getRequestHeader(headerName: string): string;
    /**
     * Get HTTP headers that were set by the SOAP client and the associated
     * values.
     */
    getRequestHeaders(): any;
    /**
     * Set basic authentication headers for the SOAP message.
     * @param userName The username to use when authenticating the SOAP message.
     * @param userPass The password for the specified user.
     */
    setBasicAuth(userName: string, userPass: string): any;
    /**
     * Associate outbound requests and the resulting response record in the ECC
     * queue.
     * @param correlator A unique identifier.
     */
    setEccCorrelator(correlator: string): any;
    /**
     * Override a value from the database by writing to the SOAP message payload.
     * @param name The name of the ECC parameter.
     * @param value The value to assign to the specified ECC parameter.
     */
    setEccParameter(name: string, value: string): any;
    /**
     * Set the endpoint for the SOAP message.
     * @param endpoint The URL of the SOAP web service provider you want to interface with.
     */
    setEndpoint(endpoint: string): any;
    /**
     * Set the amount of time the SOAP message waits for a response from the web service
     * provider before the request times out.
     * @param timeoutMs The amount of time to wait for a response from the web service provider, in
     * milliseconds.
     */
    setHttpTimeout(timeoutMs: number): any;
    /**
     * Sets the log level for this message and the corresponding response.
     * @param level The log level. Valid values are basic, elevated, and all.
     */
    setLogLevel(level: string): any;
    /**
     * Configure the SOAP message to be sent through a MID Server.
     * @param midServerName The name of the MID Server you want to send the SOAP message through. Your
     * instance must have an active MID Server with the specified name.
     */
    setMIDServer(midServerName: string): any;
    /**
     * Set the mutual authentication
     * protocol
     * profile for the SOAP message.
     * @param profileName The name of the protocol profile to use for mutual authentication.
     */
    setMutualAuth(profileName: string): any;
    /**
     * Set the body content to send to the web service provider.
     * @param requestBody The body of the SOAP message.
     */
    setRequestBody(requestBody: string): any;
    /**
     * Set an HTTP header in the SOAP message to the specified value.
     * @param headerName The name of the header.
     * @param headerValue The value to assign to the specified header.
     */
    setRequestHeader(headerName: string, headerValue: string): any;
    /**
     * Define the SOAP action this SOAP message performs.
     * @param soapAction The SOAP action this SOAP message performs.
     */
    setSOAPAction(soapAction: string): any;
    /**
     * Set a variable with the specified name from the SOAP message record to the specified
     * value.
     * @param name The name of the SOAP message variable.
     * @param value The value to assign to the specified variable.
     */
    setStringParameter(name: string, value: string): any;
    /**
     * Set a variable with the specified name from the SOAP message record to the specified
     * value.
     * @param name The name of the SOAP message variable.
     * @param value The value to assign to the specified variable.
     */
    setStringParameterNoEscape(name: string, value: string): any;
    /**
     * Sets web service security values for the SOAP message.
     * @param keystoreId The sys_id of the Java or PKCS12 key store to use.
     * @param keystoreAlias The alias that identifies the public and private keys.
     * @param keystorePassword The password assigned to the key store record.
     * @param certificateId The sys_id of the trusted server certificate.
     */
    setWSSecurity(
      keystoreId: string,
      keystoreAlias: string,
      keystorePassword: string,
      certificateId: string,
    ): any;
  }
  export class SOAPResponseV2 {
    /**
     * Return all headers contained in the response, including any duplicate
     * headers.
     */
    getAllHeaders(): any;
    /**
     * Get the content of the SOAP response body.
     */
    getBody(): string;
    /**
     * Returns all cookies included in the response.
     */
    getCookies(): any;
    /**
     * Get the numeric error code if there was an error during the SOAP
     * transaction.
     */
    getErrorCode(): number;
    /**
     * Get the error message if there was an error during the SOAP transaction.
     */
    getErrorMessage(): string;
    /**
     * Get the value for a specified HTTP header.
     * @param name The name of the header that you want the value for, such as Set-Cookie.
     */
    getHeader(name: string): string;
    /**
     * Get all HTTP headers returned in the SOAP response and the associated
     * values.
     */
    getHeaders(): any;
    /**
     * Get the numeric HTTP status code returned by the SOAP provider.
     */
    getStatusCode(): number;
    /**
     * Indicate if there was an error during the SOAP transaction.
     */
    haveError(): boolean;
    /**
     * Set the amount of time the instance waits for a response from the web service
     * provider.
     * @param timeoutSecs The amount of time, in seconds, to wait for this response.
     */
    waitForResponse(timeoutSecs: number): any;
  }
}
