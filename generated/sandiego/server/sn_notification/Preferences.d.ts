declare class Preferences {
  constructor(recipient: any);
  /**
   * Returns a user's notification destinations.
   */
  getDestinations(): any;
  /**
   * Returns a user's notification destinations that use a specified channel.
   * @param channel GlideRecord from the Notification Channel [sys_notification_channel] table for
   * the
   * channel you want to filter
   * on.
   */
  getDestinationsByChannel(channel: any): any;
}
export { Preferences };
