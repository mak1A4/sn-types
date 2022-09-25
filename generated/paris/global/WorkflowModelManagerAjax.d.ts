declare class WorkflowModelManagerAjax {
  /**
   * Puts the execution history into the return parameter based on the query
   * string.
   */
  getExecutedHistory(): any;
  /**
   * Puts the final execution activity list into the return parameter based on the query
   * string.
   */
  getFinalExecutedActivityIdList(): any;
  /**
   * Puts the rollback activity list into the return parameter based on the query
   * string.
   */
  getRolledBackActivityIdList(): any;
}
export { WorkflowModelManagerAjax };
