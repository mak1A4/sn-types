declare class ActivityHistoryRecord {
  /**
   * Changes the arrivedState of already known ids to
   * true.
   * @param activityIds Array of wf_activity.sys_ids that are headed towards join.
   */
  addArrivedActivityToJoin(activityIds: string): any;
  /**
   * Seeds all the expected wf_activity sys_ids that are expected to pass
   * through this join and sets their arriveState = false.
   * @param activityIds Array of wf_activity.sys_ids that are headed towards join.
   */
  addJoinFromActivityIds(activityIds: string): any;
  /**
   * As model is cached by _getExecutedTransitions(), this method adds
   * transitions that have gone FROM this activity towards the .to activity.
   * @param InTransition ExecutedTransition Javascript object to add to this activity.
   */
  addTransition(InTransition: any): any;
  /**
   * Prints debug information.
   */
  debugDump(): any;
  /**
   * Tests the incoming wf_activity sys_id,
   * presumed to be seeded in this history record.
   * If it is, it is tested to see if it is an activity that
   * would come through this join.
   */
  doesJoinContainActivity(): any;
  /**
   * Returns the log string from the history record.
   */
  getLogString(): any;
  /**
   * Returns the sys_ids of the history records that transition to this Join activity that have already come through.
   */
  getSatisfiedJoinActivities(): any;
  /**
   * Returns the transition count for this activity.
   */
  getTransitionCount(): any;
  /**
   * Returns the sys_ids of the history records that transition to this Join activity that the join is still waiting for.
   */
  getUnSatisfiedJoinActivities(): any;
  /**
   * Determines if this activity is one of the Rollback activities.
   */
  isARollback(): any;
  /**
   * Determines if the sys_id passed in is a destination of any of the transitions associated
   * with this instance of an ActivityHistoryRecord.
   * @param ahrSys_id Activity history sys_id from table wf_history.
   */
  isIdADestination(ahrSys_id: string): any;
  /**
   * Determines if this activity is a join.
   */
  isJoin(): any;
  /**
   * Examines the value of the arriveState.
   */
  isJoinSatisfied(): any;
  /**
   * Tests the incoming wf_activity sys_id, presumed to be seeded in this history record.
   * @param activityIds Array of wf_activity.sys_ids that are headed towards join.
   */
  isJoinWaitingForActivity(activityIds: string): any;
  /**
   * Determines if this workflow was rolled back.
   */
  isRolledBack(): any;
  /**
   * Determines if this activity is a turnstile.
   */
  isTurnstile(): any;
}
export { ActivityHistoryRecord };
