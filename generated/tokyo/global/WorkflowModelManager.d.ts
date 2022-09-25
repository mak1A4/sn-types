declare class WorkflowModelManager {
  constructor(contextId: string);
  /**
   * Retrieves the history activity that is cached by the
   * wf_history.sys_id provided in the argument.
   * @param haRecordSysId Sys_id of the desired Activity History  [wf_history] record.
   */
  getActivityHistoryRecordById(haRecordSysId: string): any;
  /**
   * Retrieves the history activities that executed and transitioned into the one represented
   * by the sys_id in the argument.
   * @param description ActivityHistoryRecord JavaScript object.
   */
  getAllTransitionedIntoActivity(description: any): any;
  /**
   * Retrieves the history activities that executed and transitioned into the one represented
   * by the sys_id in the argument.
   * The next status is based on the wf_activity.sys_id
   * associated with the activity represented in the haRecord existing as a TO in a transition
   * associated with any ActivityHistoryRecords that executed in the workflow's history. (This
   * differs from getPreviousByTransition, which returns only TO transitions
   * that come before the haRecord in the execution sequence (by time).) The return value is a
   * collection of ActivityHistoryRecords that identify the argument haRecord.wfaId as their TO
   * activity.
   * @param haRecordSysId The sys_id of the activity history (table wf_history).
   */
  getAllTransitionedIntoActivityId(haRecordSysId: string): any;
  /**
   * This is the worker method that must be called to initialize the
   * WorkflowModelManager object.   In the process of initializing the
   * WorkflowModelManager object, getExecutedHistory() creates and populates
   * the activityHistoryRecord data object array (which is a member of the
   * WorkflowModelManager class). Most
   * WorkflowModelManager methods return a subset of the
   * activityHistoryRecord array. Your script can then call one or more of
   * the activityHistoryRecord methods to accomplish further
   * work.
   */
  getExecutedHistory(): any;
  /**
   * Gets the list of wf_history.sys_ids of all activities that
   * successfully executed and were not rolled back or skipped up to the moment the function was
   * called.
   */
  getFinalExecutedActivityIdList(): any;
  /**
   * Queries the wf_history table by context and retrieves all the activities executed in the
   * workflow given by the context set in the construction of this object.
   */
  getFinalExecutedActivityList(): any;
  /**
   * Retrieves the history activity that executed just after the one provided in the argument.
   * @param haRecord ActivityHistoryRecord JavaScript object.
   */
  getNextByExecutedOrder(haRecord: any): any;
  /**
   * Retrieves the history activity that is cached by the
   * wf_history.sys_id provided in the argument and then calls into
   * getNextByExecutedOrder() with the retrieved JavaScript object.
   * @param haRecordSysId The sys_id of the activity history (table wf_history).
   */
  getNextByExecutedOrderId(haRecordSysId: string): any;
  /**
   * Retrieves the history activity that executed just after the one identified by the sys_id
   * provided in the argument.
   * @param haRecordSysId Sys_id of the desired Activity History  [wf_history] record.
   */
  getNextByTransitionId(haRecordSysId: string): any;
  /**
   * Retrieves the history activity that executed just previous to the one provided in the
   * argument.
   * @param haRecord ActivityHistoryRecord JavaScript object
   */
  getPreviousByExecutedOrder(haRecord: any): any;
  /**
   * Retrieves the history activity cached by the wf_history.sys_id
   * provided in the argument, then calls getPreviousByExecutedOrder() with the
   * retrieved JavaScript object.
   * @param haRecordSysId Workflow history system ID (wf_history.sys_id)
   */
  getPreviousByExecutedOrderId(haRecordSysId: string): any;
  /**
   * Retrieves the history activities that executed just prior to the one provided in the
   * argument.
   * @param haRecord ActivityHistoryRecord JavaScript object.
   */
  getPreviousByTransition(haRecord: any): any;
  /**
   * Retrieves the history activities that executed just prior to the one provided in the
   * argument.
   * @param haRecordSysId Sys_id of the activity history. Located in the wf_history table.
   */
  getPreviousByTransitionId(haRecordSysId: string): any;
}
export { WorkflowModelManager };
