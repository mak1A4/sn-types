declare class NotifySMS {
  constructor();
  /**
   * Sends a Short Message Service (SMS) message from a specified Notify telephone number to
   * a specified telephone number.
   * @param fromNumber Notify telephone number sending the SMS message.
   * @param message Message to send.
   * @param sourceRecord Optional. Incident GlideRecord to store in the
   * Source field of the associated SMS message record in the Notify Message
   * [notify_message] table. This links the Incident record that caused the SMS message to
   * be generated to that SMS message.Default: None. If this parameter is not passed in,
   * this information is not tracked.
   * @param toNumber Telephone number of the device to receive the SMS message.
   */
  sendToNumber(
    fromNumber: string,
    message: string,
    sourceRecord: any | undefined,
    toNumber: string,
  ): any;
  /**
   * Sends a Short Message Service (SMS) message from a specified Notify phone number to a
   * list of phone numbers.
   * @param fromNumber Notify telephone number sending the SMS message.
   * @param message Message to send.
   * @param sourceRecord Optional. Incident GlideRecord to store in the
   * Source field of the associated SMS message record in the Notify Message
   * [notify_message] table. This links the Incident record that caused the SMS message to
   * be generated to that SMS message.Default: None. If this parameter is not passed in,
   * this information is not tracked.
   * @param toNumber List of telephone numbers to receive the SMS message.
   */
  sendToNumbers(
    fromNumber: string,
    message: string,
    sourceRecord: any | undefined,
    toNumber: any[],
  ): any;
  /**
   * Sends a Short Message Service (SMS) message from a specified phone number to the user
   * identified in a specified GlideRecord.
   * @param fromNumber Notify telephone number sending the SMS message.
   * @param message Message to send.
   * @param sourceRecord Optional. Incident GlideRecord to store in the
   * Source field of the associated SMS message record in the Notify Message
   * [notify_message] table. This links the Incident record that caused the SMS message to
   * be generated to that SMS message.Default: None. If this parameter is not passed in,
   * this information is not tracked.
   * @param toGr GlideRecord of a record type that contains a field that
   * resolves to a user's telephone number. The record type must correlate with the record
   * type used by the phone number resolver that is currently implemented. A phone number
   * resolver is simply a method that obtains the user telephone number from a specific
   * type of GlideRecord, such as a User record or a Case record. When using the default
   * resolver, the records correspond to the User [sys_user] table. To change the type
   * of record that the resolver uses to obtain the telephone number, use the NotifySMS - setRecordToNumberResolver(Object scriptIncludeInstance, String methodName) method.
   */
  sendToUser(
    fromNumber: string,
    message: string,
    sourceRecord: any | undefined,
    toGr: any,
  ): any;
  /**
   * Sends a Short Message Service (SMS) message from a specified Notify phone number to
   * users found in a specified GlideRecord.
   * @param fromNumber Notify telephone number sending the SMS message.
   * @param message Message to send.
   * @param sourceRecord Optional. Incident GlideRecord to store in the
   * Source field of the associated SMS message record in the Notify Message
   * [notify_message] table. This links the Incident record that caused the SMS message to
   * be generated to that SMS message.Default: None. If this parameter is not passed in,
   * this information is not tracked.
   * @param toGr GlideRecord of a record type that contains a field that
   * resolves to a user's telephone number. The record type must correlate with the record
   * type used by the phone number resolver that is currently implemented. A phone number
   * resolver is simply a method that obtains the user telephone number from a specific
   * type of GlideRecord, such as a User record or a Case record. When using the default
   * resolver, the records correspond to the User [sys_user] table. To change the type
   * of record that the resolver uses to obtain the telephone number, use the NotifySMS - setRecordToNumberResolver(Object scriptIncludeInstance, String methodName) method.
   */
  sendToUsers(
    fromNumber: string,
    message: string,
    sourceRecord: any | undefined,
    toGr: any,
  ): any;
  /**
   * Sets the method within a script include to use to obtain the target telephone number in
   * the GlideRecord that is passed in the NotifySMS.sendToUser() and
   * NotifySMS.sendToUsers() methods.
   * @param methodName Name of the method to use to obtain the target telephone number in a
   * GlideRecord.
   * @param scriptIncludeInstance Instance of the script include that contains the specified number resolver
   * method.
   */
  setRecordToNumberResolver(
    methodName: string,
    scriptIncludeInstance: any,
  ): any;
}
export { NotifySMS };
