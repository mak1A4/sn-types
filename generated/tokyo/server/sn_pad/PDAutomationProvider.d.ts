declare class PDAutomationProvider {
  /**
   * Adds a specified optional activity to a process to be run relative to another activity
   * during process execution.
   * @param contextID Sys_id of the activity execution in which to
   * add the optional activity. To access, click the process listed in the Process
   * Executions [sys_pd_context] table. The execution selected must be in a state of
   * In Progress.
   * @param activityId Sys_id of the optional activity listed in the
   * Activities [sys_pd_activity] table.
   * Note: To create an optional activity, it must have
   * the Start rule set to Manual in
   * the Activities [sys_pd_activity] table.
   *
   * @param where Indicates where to place the activity in the
   * process.Valid values:
   * AFTER –
   * Execute this activity after the relative activity context.
   *
   * WITH –
   * Execute the activity at the same time as another relative
   * activity context.
   *
   *
   *
   * @param relativeToId ID of the relative activity context that the optional activity will run after
   * or with. Listed in the Activity Context [sys_pd_activity_context] table.
   */
  addOptionalActivityRelativeToActivityContext(
    contextID: string | undefined,
    activityId: string | undefined,
    where: string,
    relativeToId?: string,
  ): any;
  /**
   * Assigns an optional activity to a lane to run during that lane’s execution
   * context.
   * @param contextID Sys_id of the activity execution in which to
   * add the optional activity. To access, click the process listed in the Process
   * Executions [sys_pd_context] table. The execution selected must be in a state of
   * In Progress.
   * @param activityId Sys_id of the optional activity listed in the
   * Activities [sys_pd_activity] table.
   * Note: To create an optional activity, it must have
   * the Start rule set to Manual in
   * the Activities [sys_pd_activity] table.
   *
   * @param where Indicates where to place the activity in the
   * process.Valid values:
   * LAST –
   * Execute as the final activity in a lane context.
   *
   * NEXT –
   * Execute in the next activity in a lane context.
   *
   *
   *
   * @param relativeToId ID of the relative lane context in which the optional activity is to run.
   * Listed in the Lane Context [sys_pd_lane_context] table.
   */
  addOptionalActivityRelativeToLaneContext(
    contextID: string | undefined,
    activityId: string | undefined,
    where: string,
    relativeToId?: string,
  ): any;
}
export { PDAutomationProvider };
