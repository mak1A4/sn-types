declare class Workflow {
  constructor();
  /**
   * Sends the specified event (message) into the workflow context to pass along to the
   * executing activities.
   * @param contextId The context ID.
   * @param eventName The name of the event.
   */
  broadcastEvent(contextId: string, eventName: string): any;
  /**
   * Cancels all running workflows on this record by broadcasting the
   * cancel event to activities in all running workflows on this
   * record.
   * @param record GlideRecord on any table. All workflows running on this
   * record will be cancelled.
   */
  cancel(record: any): any;
  /**
   * Cancels this running context by broadcasting a cancel event to
   * activities in this workflow context.
   * @param context GlideRecord of the running context to cancel.
   */
  cancelContext(context: any): any;
  /**
   * Deletes all the workflows on the record.
   * @param current GlideRecord for which the caller wants to delete all
   * workflows. This can be any record on any table.
   */
  deleteWorkflow(current: any): any;
  /**
   * Fires the named event on the input record.
   * @param eventRecord The event record.
   * @param eventName The name of the event to send to the executing workflow.
   */
  fireEvent(eventRecord: any, eventName: string): any;
  /**
   * Fires the named event on the record specified by record ID.
   * @param eventRecordId The sys_id of the glide record.
   * @param eventName The name of the event to send to the executing workflow.
   */
  fireEventById(eventRecordId: string, eventName: string): any;
  /**
   * Returns all workflow contexts for a specified record.
   * @param record GlideRecord for which the caller wants a list of all
   * workflow contexts. This can be any record on any table for which the caller wants
   * the running workflow contexts.
   */
  getContexts(record: any): any;
  /**
   * Gets the estimated time for a workflow to complete.
   * @param workflowId Sys_id of the workflow (table wf_workflow) to get the estimated run
   * time.
   */
  getEstimatedDeliveryTime(workflowId: string): any;
  /**
   * Get the estimated elapsed execution time for the workflow version.
   * @param wfVersion GlideRecord on table wf_workflow_version of a specific
   * workflow version for which the caller wants the estimated during of
   * executing.
   */
  getEstimatedDeliveryTimeFromWFVersion(wfVersion: any): any;
  /**
   * Gets the appropriate workflow return value for the input workflow ID.
   * This is either the workflow checked out by the current user or the published workflow with the most recent date.
   * @param workflowID The sys_id of the workflow (table wf_workflow)
   * @param amount amount
   * @param result True, if true
   */
  getReturnValue(workflowID: string, amount: number, result: boolean): any;
  /**
   * Gets all the currently running workflow contexts for the input record.
   * @param record GlideRecord of the record for which the caller wants a list
   * of all running workflows.
   */
  getRunningFlows(record: any): any;
  /**
   * Gets the appropriate workflow version for the input workflow ID.
   * This is either the workflow checked out by the current user or the published workflow with the most recent date.
   * @param workflowID The sys_id of the workflow (table wf_workflow)
   */
  getVersion(workflowID: string): any;
  /**
   * Returns the appropriate workflow version for the input workflow name.
   * @param workflowName Name of the workflow (table wf_workflow)
   */
  getVersionFromName(workflowName: string): any;
  /**
   * Returns the sys_id of the workflow associated with the specified workflow
   * name.
   * @param workflowName Name of the workflow.
   */
  getWorkflowFromName(workflowName: string): any;
  /**
   * Determines if a specified record has any workflow contexts associated to it.
   * @param record GlideRecord under scrutiny. This
   * GlideRecord can be from any table.
   */
  hasWorkflow(record: any): any;
  /**
   * Recalculates the approvals and tasks for a workflow by adding new approvals and tasks
   * while not resetting current approvals and tasks.
   * @param current GlideRecord of the record this workflow is executing. This
   * can by any record on any table.
   * @param maintainStateFlag Flag that indicates whether to maintain all approvals and tasks in their
   * current state.Valid values:
   * true: Maintain all approvals and tasks in their current state.
   *
   * false: Update all approval and task states.
   *
   *
   *
   */
  restartWorkflow(current: any, maintainStateFlag: boolean): any;
  /**
   * Runs all workflows for a given record in a given table and its descendant tables.
   * @param record GlideRecord to run workflows against.
   * @param operation Database operation.Valid values:
   * insert
   *
   * update
   *
   * delete
   *
   *
   *
   */
  runFlows(record: any, operation: string): any;
  /**
   * Starts a specified workflow.
   * @param workflowId The sys_id of the workflow to start. This sys_id refers to table
   * wf_workflow.
   * @param current The record to use as current in this workflow. This is normally from the
   * Table field of the workflow properties for this
   * workflow.
   * @param operation The operation to perform on current. Possible values:
   * insert, update,
   * delete.
   * @param vars Collection of variables to add to the workflow
   */
  startFlow(
    workflowId: string,
    current: any,
    operation: string,
    vars: any[],
  ): void;
  /**
   * Helper method for business rule Auto start on context.
   * @param context GlideRecord on table wf_context of a new record (the "current" record in the
   * business rule).
   * @param operation Database operation being performed. One of insert,
   * update, delete.
   */
  startFlowFromContextInsert(context: any, operation: string): any;
  /**
   * Used by business rule Start Workflow on table task_sla. This starts
   * a workflow and the extra arguments to this method are used by activity "Timer" to pause the
   * execution of the workflow for some duration.
   * @param workflowID The sys_id of the workflow to start. This sys_id refers to table
   * wf_workflow.
   * @param retroactiveMSecs Delay in milliseconds used by Activity Timer.
   * @param current GlideRecord of the record to use as current in this workflow. This is normally
   * from the Table field of the workflow properties for this
   * workflow
   * @param operation Database operation being performed.One of insert,
   * update, delete.
   * @param vars Collection of variables to add to the workflow.
   * @param withSchedule Schedule used by Activity Timer
   */
  startFlowRetroactive(
    workflowID: string,
    retroactiveMSecs: number,
    current: any,
    operation: string,
    vars: any[],
    withSchedule: any,
  ): any;
}
export { Workflow };
