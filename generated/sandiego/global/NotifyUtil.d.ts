declare class NotifyUtil {
  constructor();
  /**
   * Returns all of the Notify telephone numbers and related Notify information from a
   * specified source record, such as an incident.
   * @param filterSMSCapableNums Optional. Flag that indicates if only numbers that are SMS-capable should be
   * returned.Valid values:
   * true: Only return SMS-capable telephone numbers and information.
   *
   * false: Return all notify telephone numbers and information.
   *
   *
   *
   * Default: false
   * @param notifyGroupSelectorSysId Optional. Sys_id of a Notify group for which to return the notify numbers and
   * information. Default: All groups
   * @param sourceSysId Sys_id of the source record for which to return the Notify numbers and
   * information. For example, this could be the sys_id of a record in the Incident
   * [incident] table.
   * @param sourceTable Name of the table that contains the source record that contains the desired
   * Notify numbers and information.
   */
  getListOfNotifyNumbersAndProviders(
    filterSMSCapableNums: boolean | undefined,
    notifyGroupSelectorSysId: string | undefined,
    sourceSysId: string,
    sourceTable: string,
  ): any;
  /**
   * Returns the SMS-capable number associated with the specified Notify user.
   * @param userGROrId Sys_id of the user record, located in the User [sys_user] table, or the
   * sys_user GlideRecord of the user for whom to return the SMS-capable telephone
   * number.
   */
  getSMSNumberForUser(userGROrId: string): any;
  /**
   * Returns a list of unique Notify telephone numbers.
   * @param getData Optional. Flag that indicates whether to return metadata along with the list of
   * unique phone numbers.Valid values:
   * true: Return metadata.
   *
   * false: Do not return metadata.
   *
   *
   *
   * Default: false
   * @param groups Optional. List of sys_id groups to check. Located in the Group [sys_user_group]
   * table.Default: Check all groups.
   * @param numbers Optional. List of specific Notify telephone numbers to check.Default: Check
   * all phone numbers.
   * @param type Optional. Type of telephone numbers to check.Valid values
   * (case-sensitive):
   * voice
   *
   * sms
   *
   *
   *
   * Default: Check all phone number types
   * @param users Optional. List of sys_ids of specific users to check. Located in the User
   * [sys_user] table. Default: Check all users
   */
  getUniquePhoneNumbersForUsersAndGroups(
    getData?: boolean,
    groups?: any[],
    numbers?: any[],
    type?: string,
    users?: any[],
  ): any;
  /**
   * Determines whether there are any active conference calls for the specified source
   * record.
   * @param sourceRecSysId Sys_id of the record to check for active conference calls. For example the
   * sys_id of a record in the Incident table.
   */
  hasActiveConferenceCalls(sourceRecSysId: string): any;
  /**
   * Validates a specified Notify telephone number.
   * @param number Notify number to validate.
   */
  validateOutboundNotifyPhoneNumber(number: string): any;
  /**
   * Verifies that the specified number is a valid E.164 telephone number.
   * @param number Telephone number to validate.
   */
  validatePhoneNumber(number: string): any;
}
export { NotifyUtil };
