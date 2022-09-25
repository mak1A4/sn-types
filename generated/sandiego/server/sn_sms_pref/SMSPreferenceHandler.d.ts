declare class SMSPreferenceHandler {
  constructor(provider: string);
  /**
   * Returns the preferences configuration record for the current telephony service
   * provider.
   */
  getConfig(): any;
}
export { SMSPreferenceHandler };
