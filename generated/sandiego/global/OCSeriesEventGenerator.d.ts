declare class OCSeriesEventGenerator {
  /**
   * Returns an array of the repeating on-call events.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   * @param memberSchedules The user's schedule.
   * @param calendarLink A link back to the on-call calendar in the instance.
   */
  getMemberCalendar(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
    memberSchedules: any,
    calendarLink: string,
  ): any;
  /**
   * Returns an array of VEVENTs that represent the on-call for the provided
   * rotaScheduleSpanGR and the memberScheduleSpanGR.
   * @param rotaScheduleSpanGR A cmn_schedule_span glide record for a rota.
   * @param memberScheduleSpanGR A cmn_schedule_span glide record for a rota member.
   * @param seriesStartTimes An array of the repeating rota span start times.
   * @param excludeItems The schedule items that need to be excluded.
   * @param repeatUntil A formatted ScheduleDateTime string.
   * @param timeZone Time zone for the on-call rota.
   * @param calendarLink A link to the on-call calendar for this user.
   */
  getRosterICalEvents(
    rotaScheduleSpanGR: any,
    memberScheduleSpanGR: any,
    seriesStartTimes: any[],
    excludeItems: any,
    repeatUntil: string,
    timeZone: string,
    calendarLink: string,
  ): any;
  /**
   * Returns an array of the repeating on-call VEVENTS.
   * @param rotaMemberGR A cmn_rota_member record.
   * @param seriesStartTimes An array of the repeating rota span start times.
   * @param excludeItems The schedule items that need to be excluded.
   * @param repeatUntil A formatted ScheduleDateTime string.
   * @param calendarLink A link to the on-call calendar for this user.
   */
  getRosterMemberEvents(
    rotaMemberGR: any,
    seriesStartTimes: any[],
    excludeItems: any,
    repeatUntil: string,
    calendarLink: string,
  ): any;
}
export { OCSeriesEventGenerator };
