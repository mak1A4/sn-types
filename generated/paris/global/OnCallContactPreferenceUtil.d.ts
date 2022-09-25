declare class OnCallContactPreferenceUtil {
  constructor();
  /**
   * Gets a list of catch-all contacts and preferences.
   * @param rotaId Sys ID of the shift from the [cmn_rota] table.
   * @param gdt Optional. yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is
   * now.
   */
  getCatchAllContacts(rotaId: string, gdt?: any): any;
  /**
   * Gets a list of contacts with the escalatee object. Each returned contact contains a
   * list of user contact preferences.
   * @param escalatee Mandatory. Escalatee object returned by the getEscalationPlan()  method.
   * @param contactAttempt Optional. The attempt you are trying to contact [ default value = 1 ].
   * 1: First attempt
   *
   * 2: First reminder
   *
   * 3 or more: Subsequent reminders
   *
   *
   * @param gdt Optional. yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is
   * now.admin
   * @param rotaSysIds Optional. Comma-separated string of Sys IDs of shifts from the [cmn_rota]
   * table. Default value returns Sys IDs of the shifts at current time.
   */
  getContactsAtByEscalatee(
    escalatee: any,
    contactAttempt?: number,
    gdt?: any,
    rotaSysIds?: string,
  ): any;
  /**
   * Gets the list of contact preferences at the time at which the user has opted for
   * communication. If no time is specified, then current time is used. This method is applicable to
   * single and overlapping shifts.
   * @param userSysId Sys ID of the user from the [sys_user] table.
   * @param contactAttempt Optional. The attempt you are trying to contact [ default value = 1 ].
   * 1: First attempt
   *
   * 2: First reminder
   *
   * 3 or more: Subsequent reminders
   *
   *
   * @param gdt Optional. yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is
   * now.
   * @param communicationTypes Optional. Comma-separated string containing one or more of the following
   * values:
   * email
   *
   * sms
   *
   * voice
   *
   *
   * Default includes all available communication types.
   */
  getUserPreferences(
    userSysId: string,
    contactAttempt?: number,
    gdt?: any,
    communicationTypes?: string,
  ): any;
}
export { OnCallContactPreferenceUtil };
