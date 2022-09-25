declare class CMDBDuplicateTaskUtils {
  constructor();
  /**
   * Create a De-duplication task in which the sys_ids of duplicate
   * tasks are specified.
   * @param sysIDs A comma separated list of sys_IDs.
   */
  createDuplicateTask(sysIDs: string): any;
}
export { CMDBDuplicateTaskUtils };
