declare class SLARepair {
  /**
   * Repair the task SLAs associated with the passed-in filter and source table.
   * @param filter Specify an encoded query that is used to retrieve a set of records from the
   * source table.
   * @param sourceTable Specify the name of a table that is (or extends) contract_sla, task_sla, or
   * task.
   */
  repairByFilter(filter: string, sourceTable: string): any;
  /**
   * Repair the task SLAs associated with the passed in GlideRecord.
   * @param gr Specify a GlideRecord for a table that is (or extends) contract_sla, task_sla,
   * or task.
   */
  repairByGlideRecord(gr: any): any;
  /**
   * Repair the task SLAs associated with the passed in sys_id and source table.
   * @param sysId Specify the ID of a table that is (or extends) contract_sla, task_sla, or
   * task.
   * @param sourceTable Specify the name of a table that is (or extends) contract_sla, task_sla, or
   * task.
   */
  repairBySysId(sysId: string, sourceTable: string): any;
  /**
   * Enables or disables auditing when running a repair.
   * @param onOrOff Determines whether to enable or disable auditing.
   */
  setAuditEnabled(onOrOff: boolean): any;
  /**
   * Enables or disables running a workflow for each of the Task SLA records being repaired.
   * @param onOrOff Determines whether to enable or disable workflow.
   */
  setRunWorkflow(onOrOff: boolean): any;
  /**
   * Validates the repair request.
   * @param onOrOff Determines whether to enable or disable validation.
   */
  setValidateOnly(onOrOff: boolean): any;
}
export { SLARepair };
