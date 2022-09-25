declare class PADomainUtils {
  constructor();
  constructor(domainFrom: string);
  /**
   * Copies Performance Analytics records to a different domain.
   * @param runAs The user whose domain you want to copy records to.
   */
  copy(runAs: string): any;
  /**
   * Copy a dashboard to another domain.
   * @param dashboardId The sys_id of the dashboard to copy.
   * @param runAs The user whose domain you want to copy the dashboard to.
   */
  copyDashboard(dashboardId: string, runAs: string): any;
  /**
   * Copies a Performance Analytics scheduled data collection job record to another domain.
   * @param paJob The sys_id of a Performance Analytics
   * scheduled data collection job [sysauto_pa] record.
   * @param runAs The user whose domain you want to copy the job to.
   */
  copyJob(paJob: string, runAs: string): any;
  /**
   * Evaluate if you can write to a specific record identified by table and
   * sys_id.
   * @param table The name of the table containing the record to query, such as
   * pa_indicators.
   * @param id The sys_id of the record to query.
   */
  isWriteable(table: string, id: string): any;
  /**
   * Moves Performance Analytics records to a different domain.
   * @param runAs The user whose domain you want to copy records to.
   */
  move(runAs: string): any;
  /**
   * Use this method to move or copy only foundational records in a hybrid domain
   * configuration.
   * @param foundation Indicates if only foundational records should be copied or moved by this
   * PADomainUtils object.
   */
  setFoundation(foundation: boolean): any;
  /**
   * Use this method before copying records to set the sys_override value of the new record
   * to the original parent record.
   * @param overrides Indicates that copied records in a child domain should override the source
   * record in the parent domain. This value is true by default.
   */
  setOverrides(overrides: boolean): any;
}
export { PADomainUtils };
