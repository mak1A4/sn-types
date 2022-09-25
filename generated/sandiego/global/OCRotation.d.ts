declare class OCRotation {
  /**
   * Builds the on-call coverage based on your groups, rotas, and rosters. This is used by
   * the OCRotationV2 - getSpans method.
   */
  buildRotas(): any;
  /**
   * Returns the end date for the time period for which you want to retrieve on-call
   * coverage.
   */
  getEndDate(): any;
  /**
   * Returns a comma separated list of group sys_id (sys_user_group) values for an on-call
   * schedule.
   */
  getGroupIds(): any;
  /**
   * Returns the rosters according to the selected rotas.
   */
  getRosterIds(): any;
  /**
   * Returns a GlideRecord for the cmn_rota table filtered by groups, rota, users, and
   * roster.
   * @param rotaIds Comma separated list of rota sys_id (cmn_rota) values for an on-call
   * schedule.
   * @param groupIds Comma separated list of group sys_id (sys_user_group) values for an on-call
   * schedule.
   * @param rosterIds Comma separated list of roster sys_id (cmn_rota_roster) values for an on-call
   * schedule.
   * @param userIds Comma separated list of user sys_id (sys_user) values for an on-call
   * schedule.
   */
  getRotaGr(
    rotaIds: string,
    groupIds: string,
    rosterIds: string,
    userIds: string,
  ): any;
  /**
   * Returns the rotas for the groups on your calendar.
   */
  getRotaIds(): any;
  /**
   * Returns the start date for the time period for which you want to retrieve on-call
   * coverage.
   */
  getStartDate(): any;
  /**
   * Returns the timezone that your on-call calendar will use.
   */
  getTimezone(): any;
  /**
   * This will filter the schedules return by users. Get comma separated list of user sys_id
   * (sys_user) values used to filter on-call schedules.
   */
  getUserIDs(): any;
  /**
   * Set the end date for the time period for which you want to retrieve on-call coverage.
   * If the end date is not set, then the last day of the next month is applied by default. Use in
   * conjunction with OCRotationV2 - getSpans.
   * @param endDate [Optional] End date of the on-call schedule.
   * @param inclusive [Optional] When true, the end date is included in the time span. If not
   * specified, this value defaults to true.
   */
  setEndDate(endDate?: string, inclusive?: boolean): any;
  /**
   * Filters the schedules return by groups. Set comma separated list of group sys_id
   * (sys_user_group) values for an on-call schedule. Use in conjunction with OCRotationV2 -
   * getSpans.
   * @param groupIds Comma separated list of group sys_id (sys_user_group) values for an on-call
   * schedule.
   */
  setGroupIds(groupIds: string): any;
  /**
   * Sets the rosters according to the selected rotas. Use in conjunction with OCRotationV2
   * - getSpans.
   * @param RosterIds Rosters according to the selected rotas.
   */
  setRosterIds(RosterIds: string): any;
  /**
   * Sets the rotas for the groups on your calendar. Use in conjunction with OCRotationV2 -
   * getSpans.
   * @param RotaIds Rotas for the groups on your calendar.
   */
  setRotaIds(RotaIds: string): any;
  /**
   * Sets the start date for the time period for which you want to retrieve on-call
   * coverage. If the start date is not set, then the first day of the previous month is applied by
   * default. Use in conjunction with OCRotationV2 - getSpans.
   * @param startDate [Optional] Start date for the time period for which you want to retrieve
   * on-call coverage.
   */
  setStartDate(startDate?: string): any;
  /**
   * Sets the timezone that your on-call calendar will use. Use in conjunction with
   * OCRotationV2 - getSpans.
   * @param Timezone Timezone that your on-call calendar will use. For example,
   * Europe/Madrid and
   * US/Pacific.
   */
  setTimezone(Timezone: string): any;
  /**
   * Sets comma separated list of user sys_id (sys_user) values used to filter on-call
   * schedules. Use in conjunction with OCRotationV2 - getSpans.
   * @param UserIds Comma separated list of user sys_id (sys_user) values used to filter on-call
   * schedules.
   */
  setUserIds(UserIds: string): any;
}
export { OCRotation };
