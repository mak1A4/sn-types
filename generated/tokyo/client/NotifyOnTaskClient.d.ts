declare class NotifyOnTaskClient {
  /**
   * Adds the specified participants to a specified conference call.
   * @param data Object that describes the conference call.
   */
  addParticipants(data: any): any;
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
   * Terminates the specified conference call.
   * @param data Object that describes the conference call.
   */
  endConference(data: any): any;
  /**
   * Returns a JSON data template to use with the doConferenceAction()
   * method. Using this template automatically structures the data object so that you don't have to
   * manually create it.
   */
  getNotifyActionTemplate(): any;
  /**
   * Starts a new conference call.
   * @param data Object that describes the conference call.
   */
  start(data: any): any;
}
export { NotifyOnTaskClient };
