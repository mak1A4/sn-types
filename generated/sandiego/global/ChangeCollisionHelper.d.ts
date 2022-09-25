declare class ChangeCollisionHelper {
  /**
   * Adds the CI to the change's affected CI list.
   * @param ci The sys_id of the configuration item
   * @param changeId The change record's sys_id
   */
  addCiToChangeAffectedCis(ci: string, changeId: string): any;
  /**
   * Returns the Affected CI sys_ids for the given change.
   * @param changeId A change record's sys_id
   */
  getAffectedCisByChangeId(changeId: string): any;
  /**
   * Returns any blackout that overlap the period defined by startDate and
   * endDate.
   * @param startDate The beginning date
   * @param endDate The ending date
   */
  getBlackoutsByDate(startDate: any, endDate: any): any;
  /**
   * Returns changes scheduled in the timespan (defined by startDate and endDate) that have
   * the given CI in their Affected CIs list.
   * @param ci The configuration item's sys_id
   * @param startDate The beginning date
   * @param endDate The ending date of the time span
   */
  getChangesWithAffectedCi(ci: string, startDate: any, endDate: any): any;
  /**
   * Returns the changes that are in the timespan (startDate, endDate) and that are linked
   * to the given CI.
   * @param ci The configuration item's sys_id
   * @param startDate The beginning date
   * @param endDate The ending date of the time span
   */
  getChangesWithCi(ci: string, startDate: any, endDate: any): any;
  /**
   * Returns the Maintenance Schedule for a CI.
   * @param ci The configuration item's sys_id
   */
  getCiMaintenanceSchedule(ci: string): any;
  /**
   * Returns all the CIs that depend on the given CI.
   * @param ci A configuration item's sys_id
   */
  getDependants(ci: string): any;
  /**
   * Returns all the CIs that the given CI depends on.
   * @param ci The configuration item's sys_id
   */
  getDependencies(ci: string): any;
  /**
   * Check if an CI is already in the change's affected CIs list.
   * @param ci The sys_id of the configuration item
   * @param changeId The change record's sys_id
   */
  isCiInAffectedCis(ci: string, changeId: string): any;
  /**
   * Checks if the time span defined by startDate and endDate falls in the CI's maintenance
   * window.
   * @param startDate The beginning date
   * @param endDate The ending date
   * @param maintenanceWindow The configuration item's sys_id
   */
  isDateInCiMaintenanceWindows(
    startDate: any,
    endDate: any,
    maintenanceWindow: string,
  ): any;
}
export { ChangeCollisionHelper };
