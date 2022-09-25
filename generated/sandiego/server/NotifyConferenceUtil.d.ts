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
  addToConferenceByPhoneNumber(toNumber: string, confGR: any): any;
  /**
   * Adds a participant to the conference call referenced by the passed in GlideRecord using
   * their unique user identifier.
   * @param userId Sys ID of the participant to add to the specified conference call. This
   * information is located in the User [sys_user] table.
   * @param confGR GlideRecord of the conference call to add the specified participant. These
   * records are located in the Notify Conference Call [notify_conference_call]
   * table.
   */
  addToConferenceByUserId(userId: string, confGR: any): any;
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
  isActionSupported(action: number): any;
  /**
   * Removes the participant associated with the passed in GlideRecord from the current
   * conference call.
   * @param notifyParticipantGR GlideRecord object of the participant to remove from the conference call. These
   * records are located in the Notify Participant [notify_participant] table.
   */
  kickByParticipantGR(notifyParticipantGR: any): any;
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
  unmuteByParticipantGR(notifyParticipantGR: any): any;
}
export { NotifyConferenceUtil };
