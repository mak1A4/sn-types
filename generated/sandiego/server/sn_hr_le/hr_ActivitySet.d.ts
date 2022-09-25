declare class hr_ActivitySet {
  constructor();
  /**
   * Creates a lifecycle event case based on a specified HR service.
   * @param hrService Sys ID of HR service in the HR Services [sn_hr_core_service] table to be
   * assigned to the lifecycle event case.
   * @param caseValues Key-value pairs containing a value for each case field.
   */
  createLECaseByService(hrService: string, caseValues: any): any;
  /**
   * Checks for a case matching the specified combination of subject person user, HR
   * service, and job.
   * @param spUser Sys ID of subject person user in the Users [sys_user] table.
   * @param hrService Sys ID of HR service in the HR Services [sn_hr_core_service] table.
   * @param jobId Sys ID of subject user's job title in the HR Services [sn_hr_core_service]
   * table.
   */
  hasActiveCaseByService(spUser: string, hrService: string, jobId: string): any;
}
export { hr_ActivitySet };
