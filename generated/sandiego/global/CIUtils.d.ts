declare class CIUtils {
  /**
   * Determines which business services are affected by the specific configuration item
   * (CI).
   * @param CI_sys_id The sys_id of a configuration item (cmdb_ci) to check.
   */
  servicesAffectedByCI(CI_sys_id: string): any;
  /**
   * Determines which business services are affected by the specified task.
   * @param task A task GlideRecord, for example incident, change_request, or problem.
   */
  servicesAffectedByTask(task: any): any;
}
export { CIUtils };
