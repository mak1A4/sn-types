declare class OnCallRotation {
  constructor();
  /**
   * Add the current escalation member to the list of notified users so that the API knows
   * who has been contacted. This API is applicable for a single shift, overlapping shifts, and
   * custom escalation.
   */
  addCurrentToNotified(): any;
  /**
   * Cancels any escalations for the GlideRecord that were started with the
   * startEscalations API. This API is applicable for a single shift,
   * overlapping shifts, and custom escalation.
   * @param escalationGr GlideRecord of Rotation escalation(cmn_rota_escalation
   */
  cancelEscalations(escalationGr: any): any;
  /**
   * Continue the escalations for a document(incident gr) and group. This API is applicable
   * for a single shift, overlapping shifts, and custom escalation.
   * @param escalationGr GlideRecord of Rotation escalation(cmn_rota_escalation
   */
  continueEscalations(escalationGr: any): any;
  /**
   * Gets the sys_id of the catch all person. Use together with the
   * getCatchAllType() method to determine the source of the returned id. This
   * API is applicable for a single shift, overlapping shifts, and custom escalation.
   * @param rotaID The sys_id of the rota.
   */
  getCatchAll(rotaID: string): any;
  /**
   * Gets the type of _catch all_ that lives at the end of the escalation chain. When the
   * escalation chain finishes without assigning an on-call person, if configured, the incident is
   * assigned to the _catch all_. This API is applicable for a single shift, overlapping shifts, and
   * custom escalation.
   * @param rotaID The sys_id of the rota.
   */
  getCatchAllType(rotaID: string): any;
  /**
   * Gets an item to escalate to, either a user [sys_user], group, or notification device
   * [cmn_notif_device], for a group's shift at the specified date and time and at a certain position
   * in the escalation lineup. This API is applicable for a single shift.
   * @param groupID The sys_id for the group from which to get the item to escalate.
   * @param dateTime The date and time when the escalation lineup should begin.
   * @param position The position in the lineup to determine the item to escalate to (1-based, which
   * means the count starts with 1).
   */
  getEscalateeAt(groupID: string, dateTime: any, position: number): any;
  /**
   * Gets a list of escalatees that are on-call for a given time. If no time is specified,
   * then the current time is used. If no groupSysIds are provided, empty list is returned. This API
   * is applicable for a single shift, overlapping shifts, and custom escalation.
   * @param groupSysIds Comma-separated list of sys_ids of the sys_user_group, to filter the records
   * by.
   * @param rotaSysIds Comma-separated list of cmn_rota sys_ids to filter the records by.
   * @param rosterSysIds Comma-separated list of cmn_rota_roster sys_ids  to filter the records
   * by.
   * @param gdt Date in the UTC timezone
   * @param taskGr Optional. Current task record. If taskGr is empty, this method returns the
   * default escalation plan. If taskGr is passed, escalation policies are  evaluated in
   * order and this method returns the corresponding escalation plan.
   */
  getEscalatees(
    groupSysIds: string,
    rotaSysIds: string,
    rosterSysIds: string,
    gdt: any,
    taskGr?: any,
  ): any;
  /**
   * Gets the escalatees (either a user, group, or device records depending on the
   * notification rules) at a specific time and position. This API is applicable for a single shift,
   * overlapping shifts and custom escalation.
   * @param groupSysId ys_id of the group.
   * @param gdt yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is now.
   * @param position Position of the escalation step.
   * @param taskGr Optional. Current task record.  If taskGr is empty, this method returns the
   * default escalation plan. If taskGr is passed, escalation policies are  evaluated in
   * order and this method returns the corresponding escalation plan.
   */
  getEscalateesAt(
    groupSysId: string,
    gdt: any,
    position: number,
    taskGr?: any,
  ): any;
  /**
   * Gets a list of objects to escalate to, escalation plans that consist of either a user
   * [sys_user] or notification device [cmn_notif_device], for a group's shift at the specified date
   * and time. This API is applicable for a single shift, overlapping shifts, and custom
   * escalation.
   * @param groupID sys_id for the group for which you need the escalation plan.
   * @param gdt Date and time when the escalation lineup should begin. Default is now.
   * yyyy-MM-dd HH:mm:ss is the format in UTC timezone.
   * @param rotaSysIds Comma-separated list of cmn_rota sys_ids to filter the records by.
   * @param taskGr Optional. Current task record. If taskGr is empty, this method returns the
   * default escalation plan. If taskGr is passed, escalation policies are  evaluated in
   * order and this method returns the corresponding escalation plan.
   */
  getEscalationPlan(
    groupID: string,
    gdt: any,
    rotaSysIds: string,
    taskGr?: any,
  ): any;
  /**
   * Gets the type of escalation based on a simple calculation. If there is one active
   * roster in the rota, rotate through members. If there is more than one active roster in the rota,
   * rotate through rosters. This API is applicable for a single shift, overlapping shifts, and
   * custom escalation.
   * @param rotaID The sys_id for the rota to check for rosters.
   */
  getEscalationType(rotaID: string): any;
  /**
   * Gets the sys_id of the current primary contact when there is a single
   * shift.
   */
  getPrimaryUser(): any;
  /**
   * Gets the sys_id of the current primary user of the specified shift. This API is
   * applicable for a single shift and overlapping shifts.
   * @param rotaId sys_id of the cmn_rota.
   */
  getPrimaryUserByRota(rotaId: string): any;
  /**
   * Gets the name of the current primary contact. This API is applicable for a single
   * shift.
   */
  getPrimaryUserName(): any;
  /**
   * Gets the name of the current primary user of the specified shift. This API is
   * applicable for a single shift and overlapping shifts.
   * @param rotaId sys_id of the cmn_rota.
   */
  getPrimaryUserNameByRota(rotaId: string): any;
  /**
   * Gets the list of primary contacts for a shift. This API is applicable for a single
   * shift, overlapping shifts, and custom escalation.
   */
  getPrimaryUsers(): any;
  /**
   * Checks if the parent span and child spans overlap.
   * @param parent The parent spans to compare.
   * @param child The child spans to compare.
   * @param timeZone The name of the time zone.
   */
  spansOverlap(parent: any, child: any, timeZone: string): any;
  /**
   * Start the escalations for a document(incident gr) and group, and specify the event name
   * for the escalation notifications. In addition, specify the name of the business rule to call
   * when an escalation occurs. This method should be used after a succesful call to
   * who or whoAt methods. This API is applicable for a
   * single shift, overlapping shifts, and custom escalation.
   * @param gr Document glide record. For example, Incident GlideRecord.
   * @param eventName Event name for the escalation notifications.
   * @param escalationScriptName Business rule to call when escalation occurs
   */
  startEscalations(
    gr: any,
    eventName: string,
    escalationScriptName: string,
  ): any;
  /**
   * Specifies if there is an on-call user, group, or device. This API is applicable for a
   * single shift, overlapping shifts, and custom escalation.
   * @param groupSysId Sys ID of the group to check for.
   * @param gdt yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is now.
   * @param nullifyOverrideRoster True if notification list for this group is not for a specific roster, false
   * otherwise.
   * @param rotaSysIds Comma-separated list of cmn_rota sys_ids to filter the records by.
   * @param overrideCustomEscalation True to override default escalation policy with custom escalation, false
   * otherwise.
   * @param taskGR Optional. Current task record. If invoked with the optional taskGr parameter,
   * this method populates escalatees  based on escalation conditions.
   */
  who(
    groupSysId: string,
    gdt: any,
    nullifyOverrideRoster: boolean,
    rotaSysIds: string,
    overrideCustomEscalation: boolean,
    taskGR?: string,
  ): any;
  /**
   * Specifies if there is an on-call user, group, or device. This API is applicable for a
   * single shift, overlapping shifts, and custom escalation.
   * @param groupSysId Sys ID of the group.
   * @param gdt yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is now.
   * @param rotaSysIds Comma-separated list of cmn_rota Sys IDs to filter the records by.
   */
  whoAt(groupSysId: string, gdt: any, rotaSysIds: string): any;
  /**
   * Escalation business rules determine who in the shift should be contacted next. The
   * escalation record passed to the method tracks the escalation between invocations of the business
   * rule. This API is applicable for a single shift, overlapping shifts, and custom
   * escalation.
   * @param escalationGr GlideRecord of Rotation escalation [cmn_rota_escalation].
   */
  whoIsNext(escalationGr: any): any;
  /**
   * Gets the list of users that are on-call at a given time. If no time is specified, then
   * current time is used. This API is applicable for a single shift and overlapping
   * shifts.
   * @param groupSysIds Comma-separated list of sys_ids of the sys_user_group, to filter the records
   * by.
   * @param rotaSysIds Comma-separated list of cmn_rota sys_ids to filter the records by.
   * @param rosterSysIds Comma-separated list of cmn_rota_roster sys_ids  to filter the records
   * by.
   * @param gdt Date in the UTC timezone
   */
  whoIsOnCall(
    groupSysIds: string,
    rotaSysIds: string,
    rosterSysIds: string,
    gdt: any,
  ): any;
}
export { OnCallRotation };
