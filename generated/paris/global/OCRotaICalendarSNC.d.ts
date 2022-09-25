declare class OCRotaICalendarSNC {
  /**
   * Records in the cmn_rota_resp_cache table that have a From date prior to
   * today.
   */
  cleanExpiredCache(): any;
  /**
   * Returns list of AJAXScheduleItems for the user's on-call.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   */
  createCalendarEvents(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
  ): any;
  /**
   * Creates a VEVENT based on the scheduleItemSpan provided.
   * @param groupName Name of the on-call group.
   * @param scheduleItemSpan Span of time for the on-call period.
   * @param calendarLink A link back to the on-call calendar in the instance.
   */
  createCustomEvent(
    groupName: string,
    scheduleItemSpan: any,
    calendarLink: string,
  ): any;
  /**
   * Creates a formatted iCalendar if the user has no upcoming on-call.
   * @param rotaGR The cmn_rota glide record.
   * @param dateRangeObj Contains the from and to dates for the data set.
   * @param calendarLink A link to the on-call calendar for this user.
   */
  createPlaceholderCalendar(
    rotaGR: any,
    dateRangeObj: any,
    calendarLink: string,
  ): any;
  /**
   * Returns the formatted iCalendar for the user's rotation.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   * @param useCache If true, makes use of the cache table cmn_rota_resp_cache.
   */
  getCalendarEvents(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
    useCache: boolean,
  ): any;
  /**
   * Returns the formatted iCalendar for the user's rotation if found in the
   * cmn_rota_resp_cache table.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   */
  getEventsFromTable(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
  ): any;
  /**
   * Checks whether the provided timeSpan intersects with one of the rota span
   * items.
   * @param timeSpan A single span for the user's on-call.
   * @param rotaSpanItems Contains the user's standard on-call spans.
   */
  getIntersectRotaSpanItem(timeSpan: any, rotaSpanItems: any[]): any;
  /**
   * Creates the subscribable URL for the user's iCalendar.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   */
  getMemberCalendarURL(groupId: string, rotaId: any, userId: string): any;
  /**
   * Returns a URL to the on-call calendar based on the rota record.
   * @param rotaGR A cmn_rota record.
   */
  getOnCallCalendarURL(rotaGR: any): any;
  /**
   * Returns an array of the user's overrides (extra coverage).
   * @param scheduleItem A list of AJAXScheduleItems.
   */
  handleOverrideMember(scheduleItem: any): any;
  /**
   * Returns an object containing the user's override (extra coverage) and excluded
   * spans.
   * @param scheduleItem A list of AJAXScheduleItems.
   * @param rotaSpanItems Contains the user's standard on-call spans.
   * @param definitionItems Contains the rota's standard on-call spans.
   * @param repeatRotaSpanIdArr An array of rota span sys ids.
   */
  handleRotaMember(
    scheduleItem: any,
    rotaSpanItems: any,
    definitionItems: any,
    repeatRotaSpanIdArr: any[],
  ): any;
  /**
   * Used by business rules on the cmn_rota_member, cmn_schedule_span, and
   * roster_schedule_span tables tp update the cmn_rota_resp_cache table.
   * @param rotaRespCacheGR Record that has been updated.
   */
  invalRotaRespCache(rotaRespCacheGR: any): any;
  /**
   * Checks whether the provided timeSpan matches one of the rotaSpanItems.
   * @param timeSpan A single span for the user's on-call.
   * @param rotaSpanItems Contains the user's standard on-call spans.
   * @param repeatRotaSpanIdArr An array of rota span sys ids.
   * @param seriesStartTimes Start time of the rota spans.
   */
  matchRotaSpanRule(
    timeSpan: any,
    rotaSpanItems: any[],
    repeatRotaSpanIdArr: any[],
    seriesStartTimes: any,
  ): any;
  /**
   * Used by fixed job to populate the calendar subscription fields on the cmn_rota
   * form
   */
  populateCalendarSubscriptionSettings(): any;
  /**
   * Returns an object containing the user's rotations.
   * @param scheduleItems The user's on-call rotation as an AJAXScheduleItem list.
   * @param repeatRotaSpanIdArr An array of the cmn_rota schedule span record sys_ids.
   * @param userId The user sys id.
   */
  processSeriesEvent(
    scheduleItems: any,
    repeatRotaSpanIdArr: any[],
    userId: string,
  ): any;
  /**
   * Inserts the user's iCalendar into the cmn_rota_resp_cache table.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   * @param result The user's iCalendar.
   */
  saveCalendarEvents(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
    result: string,
  ): any;
  /**
   * Queues events to send an email to all members of the rotation.
   * @param rotaGR A cmn_rota record.
   */
  sendCalendarURL(rotaGR: any): any;
  /**
   * Returns an object that contains all of the timeSpans that need to be excluded from the
   * user's iCalendar.
   * @param scheduleItem One AJAXScheduleItem.
   * @param timeSpan A single user's standard on-call span.
   * @param rotaSpanItems Contains the user's standard on-call spans.
   */
  updateExceptionList(
    scheduleItem: any,
    timeSpan: any,
    rotaSpanItems: any[],
  ): any;
}
export { OCRotaICalendarSNC };
