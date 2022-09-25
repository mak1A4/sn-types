declare class hr_Utils {
  constructor();
  /**
   * Gets the Sys ID of the active primary job for a provided user.
   * @param userID Sys ID of the HR user from the User [sys_user] table assigned an active or
   * future job in which Primary is true.
   */
  getPrimaryJob(userID: string): any;
  /**
   * Switches the primary job of a user.
   * @param userId Sys ID of HR user from the Users [sys_user] table.
   * @param jobId Job Sys ID from the Jobs [sn_hr_core_job] table.
   */
  switchPrimaryJob(userId: string, jobId: string): any;
}
export { hr_Utils };
