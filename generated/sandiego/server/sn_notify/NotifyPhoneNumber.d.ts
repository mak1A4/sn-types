declare class NotifyPhoneNumber {
  /**
   * Returns the international dialing code for a Notify phone number.
   */
  getDialCode(): any;
  /**
   * Returns the ID of this phone number as defined by the telephony provider.
   */
  getID(): any;
  /**
   * Returns the numerical phone number for the current Notify caller.
   */
  getNumber(): any;
  /**
   * Returns the telephony provider associated with this phone number.
   */
  getOwner(): any;
  /**
   * Returns the country associated with the phone number.
   */
  getTerritory(): any;
  /**
   * Determines if the Notify phone number supports conference calls.
   */
  supportsConferenceCall(): any;
  /**
   * Determines if the Notify phone number supports receiving phone calls.
   */
  supportsIncomingPhoneCall(): any;
  /**
   * Determines if the Notify phone number supports receiving SMS messages.
   */
  supportsIncomingSMS(): any;
  /**
   * Determines if the Notify phone number supports initiating phone calls.
   */
  supportsOutgoingPhoneCall(): any;
  /**
   * Determines if the Notify phone number supports sending SMS messages.
   */
  supportsOutgoingSMS(): any;
  /**
   * Determines if the Notify phone number supports recording phone calls.
   */
  supportsRecording(): any;
  /**
   * Determines if the Notify phone number supports calls to a browser, such as in a WebRTC
   * implementation.
   */
  supportsWebRTC(): any;
}
export { NotifyPhoneNumber };
