declare class NotifyJsTelephonyDriver {
  /**
   * Calls a specified telephone number.
   * @param notifyPhoneNumber NotifyPhoneNumber record that contains the Notify phone number from which to
   * make the call. Located in the Notify Phone Number [notify_number] table.
   * @param toPhoneNumber Telephone number to call.Format: E.164
   */
  call(notifyPhoneNumber: any, toPhoneNumber: string): any;
  /**
   * Returns a list of the capabilities of the telephony driver.
   */
  getCapabilities(): any;
  /**
   * Returns the maximum number of telephone numbers to which the telephony driver
   * associated with the passed in Notify telephone number can send an SMS message to at one
   * time.
   * @param phoneNumber Notify telephone number to check for the maximum number of telephone numbers
   * that the associated driver is able to send to in one bulk SMS message.
   */
  getMaxSizeForBulkSms(phoneNumber: string): any;
  /**
   * Returns the Notify phone number record for the specified phone number.
   */
  getPhoneNumber(): any;
  /**
   * Returns a list of all Notify telephone numbers associated with the current telephony
   * driver.
   */
  getPhoneNumbers(): any;
  /**
   * Checks whether the current telephony driver is active.
   */
  isActive(): any;
  /**
   * Removes the specified caller from the current Notify conference call.
   * @param participantRecord GlideRecord object containing the Notify Participant [notify_participant]
   * record of the caller to remove from the conference call.
   */
  kick(participantRecord: any): any;
  /**
   * Mutes the specified caller in the current Notify conference call.
   * @param participantRecord GlideRecord object containing the Notify Participant [notify_participant]
   * record of the caller to mute in the conference call.
   */
  mute(participantRecord: any): any;
  /**
   * Sends the specified Short Message Service (SMS) message to the specified list of
   * telephone numbers.
   * @param message Message to send.
   * @param notifyPhoneNumber Record that contains the phone number that is sending the bulk SMS
   * message.
   * @param source Optional. Incident GlideRecord to store in the Source field of the associated
   * SMS message record in the Notify Message [notify message] table. This links the
   * Incident record that caused the SMS message to be generated to that SMS
   * message.Default: None. If this parameter is not passed in, this information is
   * not tracked.
   * @param toPhoneNumbers List of telephone numbers of the devices to receive the SMS message.
   */
  sendAutonomousBulkSms(
    message: string,
    notifyPhoneNumber: any,
    source: any | undefined,
    toPhoneNumbers: any[],
  ): any;
  /**
   * Sends a specified Short Message Service (SMS) message to a specified telephone
   * number.
   * @param notifyPhoneNumber Notify phone number record that contains the telephone number that is sending
   * the SMS message. Located in the Notify Phone Number [notify_number] table.
   * @param toPhoneNumber Phone number to send the SMS message to. Format: E.164 compliant
   * @param message Text to send in the SMS message.
   */
  sendSMS(notifyPhoneNumber: any, toPhoneNumber: string, message: string): any;
  /**
   * Checks whether the specified Notify telephone number is capable of handling autonomous
   * bulk Short Message Service (SMS) messages.
   */
  supportsAutonomousBulkSms(): any;
  /**
   * Checks whether the current telephony driver is capable of handling telephone
   * calls.
   */
  supportsCall(): any;
  /**
   * Checks whether the specified Notify telephone number is capable of calls to a browser
   * using WebRTC (Real-Time Communications.)
   */
  supportsCallOverWebRtc(): any;
  /**
   * Checks whether the current telephony driver is capable of handling Short Message
   * Service (SMS) messages.
   */
  supportsSMS(): any;
  /**
   * Unmutes the specified caller in the current Notify conference call.
   * @param participantRecord GlideRecord object containing the Notify Participant [notify_participant]
   * record of the caller to mute in the conference call.
   */
  unmute(participantRecord: any): any;
}
export { NotifyJsTelephonyDriver };
