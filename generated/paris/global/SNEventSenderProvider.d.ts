declare class SNEventSenderProvider {
  /**
   * Returns an IEventSender object to use to send events from a MID Server
   * to a ServiceNow instance.
   */
  getEventSender(): any;
}
export { SNEventSenderProvider };
