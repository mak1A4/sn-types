declare class ScriptableFlowRunner {
  /**
   * Identifies the scope and name of the action to execute.
   * @param scopedActionName Scope and name of the action to execute. For example,
   * global.actionName.
   */
  action(scopedActionName: string): any;
  /**
   * Adds a single input. If the name passed as an argument already exists as a separate
   * input, the new value replaces the pre-existing value.
   * @param name The name of the input for the flow, subflow, or action.
   * @param value The value of the input for the flow, subflow, or action.
   */
  addInput(name: string, value: any): any;
  /**
   * Identifies the scope and name of the data stream action to execute.
   * @param scopedDatastreamName Scope and name of the Data Stream action to execute. For example,
   * global.dataStreamActionName.
   */
  datastream(scopedDatastreamName: string): any;
  /**
   * Identifies the scope and name of the flow to execute.
   * @param scopedFlowName Scope and name of the flow to execute. For example,
   * global.flowName.
   */
  flow(scopedFlowName: string): any;
  /**
   * Runs the flow, subflow, or action asynchronously. Once the flow object starts running,
   * script execution resumes immediately.
   */
  inBackground(): any;
  /**
   * Runs the flow, subflow, or action in the specified domain. Checks to ensure the domain
   * exists and is available.
   * @param domainId The sys_id or name for the domain of execution for the flow.
   */
  inDomain(domainId: string): any;
  /**
   * Runs the flow, subflow, or action synchronously. Script execution pauses while the flow
   * object is running.
   */
  inForeground(): any;
  /**
   * Runs a flow, subflow, action, or Data
   * Stream action from a server-side script synchronously or asynchronously without
   * creating execution details or other related records. Improves performance by
   * eliminating record-keeping overhead.
   * Use this API to increase the speed of high-volume processing, for
   * example multiple executions per second, in a production environment.
   */
  quick(): any;
  /**
   * Runs the flow, subflow, or action with the specified parameters.
   */
  run(): any;
  /**
   * Identifies the scope and name of the subflow to execute.
   * @param scopedSubflowName Scope and name of the subflow to execute. For example,
   * global.subflowName.
   */
  subflow(scopedSubflowName: string): any;
  /**
   * Sets a timeout for a flow, subflow, or action execution.
   * @param timeout Timeout in milliseconds.
   */
  timeout(timeout: number): any;
  /**
   * Overrides the Connections and Credentials alias associated with the flow,
   * action, or subflow. You can override the default parent alias with any of its child
   * aliases.
   * @param parentAliasSysID The sys_id of the parent alias, the alias you want to override.
   * @param overrideAliasSysID The sys_id of the child alias, the alias you want to use when running the flow,
   * subflow, or action.
   */
  withConnectionAliasOverride(
    parentAliasSysID: string,
    overrideAliasSysID: string,
  ): any;
  /**
   * Adds a collection of inputs. If a name in one of the name-value pairs already exists,
   * the new value replaces the pre-existing value.
   * @param inputs Map object containing the name-value pairs that define inputs for the flow,
   * subflow, or action.
   */
  withInputs(inputs: any): any;
}
export { ScriptableFlowRunner };
