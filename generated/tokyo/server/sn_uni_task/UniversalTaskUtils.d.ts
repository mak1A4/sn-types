declare class UniversalTaskUtils {
  /**
   * Applies the specified universal task template to the specified universal task
   * record.
   * @param templateSysId Sys_id of universal task template to apply to the specified universal task
   * record. Located in the Universal Task Template [sn_uni_task_template] table.
   * @param uniTaskGr GlideRecord of the universal task record to which to apply the
   * template.
   */
  applyTemplate(templateSysId: string, uniTaskGr: any): any;
  /**
   * Returns the active child task records, in the form of a GlideRecord, for the specified
   * parent ticket.
   * @param parentSysId Sys_id of the parent ticket whose active child tickets to return.
   */
  getActiveChildTasks(parentSysId: string): any;
  /**
   * Checks whether the specified parent ticket has any universal tasks that are in the
   * work-in progress or complete state.
   * @param current GlideRecord of the parent ticket to check.
   */
  hasTasksToShow(current: any): any;
  /**
   * Changes the state of all active universal tasks under the specified parent ticket to
   * "Cancelled".
   * @param parentSysId Sys_id of the parent ticket whose active child universal tasks' state should be
   * changed to "Cancelled".
   */
  markActiveChildTasksCancelled(parentSysId: string): any;
  /**
   * Changes the state of all active child universal tasks associated with the specified
   * parent ticket to "Complete".
   * @param parentSysId Sys_id of the parent ticket whose active child universal tasks' state should be
   * changed to "Complete".
   */
  markActiveChildTasksCompleted(parentSysId: string): any;
}
export { UniversalTaskUtils };
