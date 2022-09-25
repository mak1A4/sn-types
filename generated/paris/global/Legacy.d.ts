declare class Legacy {
  /**
   * Adds ad-hoc users to an ongoing conference call.
   * @param conferenceCall The sys_id or GlideRecord of an active conference call.
   * @param participant The sys_id or GlideRecord of a user with an E.164-compliant phone number, or an
   * E.164-compliant phone number.
   */
  addConferenceCallParticipant(
    conferenceCall: string,
    participant: string,
  ): any;
  /**
   * Converts a local phone number to an E.164-compliant phone number based on a user's
   * location.
   * @param userID The sys_id of a sys_user record to get location information from.
   * @param phoneNumber The phone number.
   */
  convertLocalPhoneNumberToE164(userID: string, phoneNumber: string): any;
  /**
   * Returns all participants for a conference call.
   * @param conferenceCallId The ID of the conference call.
   * @param isCallable An optional flag to return either only the users you can call (true) or those
   * you cannot call (false).
   */
  getConferenceCallParticipants(
    conferenceCallId: string,
    isCallable?: boolean,
  ): any;
  /**
   * Returns a number of frequently-called users, up to the limit parameter, in alphabetical
   * order.
   * @param limit The maximum number of results.
   */
  getFrequentlyCalledUsers(limit: number): any;
  /**
   * Returns a user's preferred E.164-compliant phone number for SMS messages.
   * @param user The user record or the sys_id of a user to get the E.164-compliant phone number
   * from.
   */
  getPreferredE164SMSNumber(user: any): any;
  /**
   * Returns a user's preferred E.164-compliant phone number for voice calls.
   * @param user The user record or the sys_id of a user to get the E.164-compliant phone number
   * from.
   */
  getPreferredE164VoiceNumber(user: any): any;
  /**
   * Returns a user's preferred email address
   * @param user The user record or the sys_id of a user to get the email address from.
   */
  getPreferredEmailAddress(user: any): any;
  /**
   * Indicates whether Notify is set up correctly or not.
   */
  getReadyState(): any;
  /**
   * Returns the current status of Notify configuration.
   */
  getStatus(): any;
  /**
   * Initiate a new conference call.
   * @param conferenceCallParticipants One or more users, conference call participants, identified by the sys_ids from
   * the sys_user table or E.164-compliant phone numbers.
   * @param conferenceCallTitle Title of the conference call. This parameter has a maximum length of 40
   * characters.
   */
  initiateConferenceCall(
    conferenceCallParticipants: string,
    conferenceCallTitle: string,
  ): any;
  /**
   * Initiate a new conference call.
   * @param conferenceCallParticipants One or more users, conference call participants, identified by the sys_ids from
   * the sys_user table or E.164-compliant phone numbers.
   * @param conferenceCallTitle Title of the conference call. This parameter has a maximum length of 40
   * characters.
   * @param sourceRecord Source record to associate to the conference call such as an incident or
   * problem number.
   * @param private Value to control if a conference call is private. This value defaults to
   * false.
   */
  initiateConferenceCall(
    conferenceCallParticipants: string,
    conferenceCallTitle: string,
    sourceRecord: any,
    private: boolean,
  ): any;
  /**
   * Determines whether a user is callable or not.
   * @param participant A sys_user or notifynow_participant record, or an E.164-compliant phone
   * number.
   */
  isCallable(participant: string): any;
  /**
   * Checks if the telephone number associated with the Twilio account is capable of sending
   * SMS messages.
   */
  isSMSCapable(): any;
  /**
   * Checks if the telephone number associated with the Twilio account is capable of sending
   * SMS messages.
   * @param userID The sys_id of the user you want to check for an SMS-capable phone
   * number.
   */
  isSMSCapable(userID: string): any;
  /**
   * Checks if the telephone number associated with the Twilio account is capable of setting
   * up phone calls.
   */
  isVoiceCapable(): any;
  /**
   * Checks if the telephone number associated with the Twilio account is capable of setting
   * up phone calls.
   * @param userID The sys_id of the user you want to check for a voice-call capable phone
   * number.
   */
  isVoiceCapable(userID: string): any;
  /**
   * Removes a participant from a conference call.
   * @param participant The conference call participant to remove from the call.
   */
  kick(participant: any): any;
  /**
   * Mutes a participant on a conference call.
   * @param participant The conference call participant to mute.
   */
  mute(participant: any): any;
  /**
   * Send an email question to an email address.
   * @param emailAddress Email address to send the question to.
   * @param question The question record to send or the sys_id of a question record.
   * @param sourceRecord An optional source record to associate to the SMS question, such as an
   * incident.
   * @param emailSubject Optional text to override the default email subject.
   */
  sendEmailQuestion(
    emailAddress: string,
    question: string,
    sourceRecord?: any,
    emailSubject?: string,
  ): any;
  /**
   * Sends an SMS message to an E.164-compliant mobile phone number.
   * @param phoneNumber The E.164-compliant phone number to send the message to.
   * @param smsBody The message to send, maximum 1600 characters.
   */
  sendSMS(phoneNumber: string, smsBody: string): any;
  /**
   * Sends an SMS message to an E.164-compliant mobile phone number.
   * @param phoneNumber The E.164-compliant phone number to send the message to.
   * @param smsBody The message to send, maximum 1600 characters.
   * @param source The source record to associate with this SMS message.
   */
  sendSMS(phoneNumber: string, smsBody: string, source: any): any;
  /**
   * Sends an SMS question.
   * @param phoneNumber An E.164-compliant phone number to send the message to.
   * @param question The question record to send or the sys_id of a question record.
   * @param sourceRecord An optional source record to associate to the SMS question, such as an
   * incident.
   */
  sendSMSQuestion(phoneNumber: any, question: string, sourceRecord?: any): any;
  /**
   * Unmutes a participant on a conference call.
   * @param participant The muted conference call participant to unmute.
   */
  umute(participant: any): any;
}
export { Legacy };
