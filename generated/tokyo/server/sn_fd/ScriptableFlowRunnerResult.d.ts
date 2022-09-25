declare class ScriptableFlowRunnerResult {
  /**
   * Returns information about the executed flow, subflow, or action, including the context
   * ID, domain ID, and execution outputs.
   */
  debug(): any;
  /**
   * Returns the context ID of the flow, subflow, or action.
   */
  getContextId(): any;
  /**
   * Returns the stream of data from a data stream action.
   */
  getDataStream(): any;
  /**
   * Returns the date and time when a Flow Designer action, flow, or subflow
   * ran as a GlideDateTime object.
   */
  getDate(): any;
  /**
   * Returns the sys_id of the domain that the Flow Designer action, flow, or
   * subflow ran in.
   */
  getDomainId(): any;
  /**
   * Returns the scope and internal name of the Flow Designer action, flow,
   * or subflow run.
   */
  getFlowObjectName(): any;
  /**
   * Returns the type of Flow Designer object run.
   */
  getFlowObjectType(): any;
  /**
   * Returns the outputs of a completed Flow Designer action, flow, or
   * subflow.
   */
  getOutputs(): any;
}
export { ScriptableFlowRunnerResult };
