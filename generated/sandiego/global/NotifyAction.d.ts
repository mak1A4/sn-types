declare class NotifyAction {
  /**
   * Adds a conference action to move the current call into the current conference
   * call.
   */
  addConference(): any;
  /**
   * Forwards a call to a specified phone number or Notify Client.
   */
  addDial(): any;
  /**
   * Presents a specified interactive phone menu to the caller.
   */
  addGather(): any;
  /**
   * Ends an active phone call.
   */
  addHangUp(): any;
  /**
   * Plays an audio file on the call.
   */
  addPlay(): any;
  /**
   * Queues the call, which puts the call on hold.
   */
  addQueue(): any;
  /**
   * Adds an action to record the call to the current NotifyAction object.
   */
  addRecord(): any;
  /**
   * Rejects an incoming call.
   */
  addReject(): any;
  /**
   * Defines the text-to-speech to read on the call.
   */
  addSay(): any;
  /**
   * Sends an SMS message.
   */
  addSMS(): any;
  /**
   * Appends the specified NotifyAction object to the current client's NotifyAction
   * object.
   * @param action NotifyAction object to append to the NotifyAction object of the current
   * caller.
   */
  append(action: any): any;
  /**
   * Deserialize a NotifyAction object from a JSON string.
   * @param json A JSON string representation of a NotifyAction
   * object.
   */
  fromJson(json: string): any;
  /**
   * Defines the Notify call record in which to add subsequent actions.
   * @param callRecord GlideRecord containing the record of the caller (within the notify_call table)
   * for which to add actions. This caller stays in affect until this method is called
   * again with a different caller.
   */
  setCallRecord(callRecord: any): any;
  /**
   * Serialize the NotifyAction object to a JSON string.
   */
  toJson(): any;
}
export { NotifyAction };
