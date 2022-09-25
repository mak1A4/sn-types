declare class PreferenceDestination {
  /**
   * Returns the channel that is used to send notifications to the destination.
   */
  getChannel(): any;
  /**
   * Returns the identifier for the destination.
   */
  getDeliverTo(): any;
  /**
   * Returns the type of destination, such as personal email or work email.
   */
  getDestinationType(): any;
  /**
   * Checks if the destination has permission to receive a notification.
   * @param notification Optional. Specify a notification to check if the destination has permission to
   * receive that notification. An exception is thrown if the notification doesn't exist
   * or if the notification isn't readable by the destination's user. If no notification
   * is specified, this method checks if the destination has permission to receive any
   * notifications.
   */
  isActive(notification?: any): any;
  /**
   * Checks if a notification overrides a user's preferences for the
   * destination.
   * @param notification Specify
   * a notification to check if it overrides user preferences for the destination. The
   * notification should be a GlideRecord from the Notification [sys_notification]
   * table.
   */
  isOverriden(notification: any): any;
  /**
   * Sets the user preference for a destination to receive or not receive
   * notifications.
   * @param notification Optional. If a notification is specified, the user preference is set for the
   * destination to receive or not receive that notification. The notification should be
   * a GlideRecord from the Notification [sys_notification] table. If no notification is
   * specified, the user preference is set for the destination to receive or not receive
   * all notifications.
   * @param active Flag that indicates whether the destination has permission to receive a
   * notification.
   *
   * Valid values:
   * true: The destination has permission receive a notification.
   *
   * false: The destination doesn't have permission to receive a
   * notification.
   *
   *
   *
   */
  setActive(notification: any | undefined, active: boolean): any;
}
export { PreferenceDestination };
