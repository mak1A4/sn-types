declare class FlowAPI {
  /**
   * Cancels a paused or running flow, subflow, or action.
   * @param contextId Sys_id of the execution details record for the flow, subflow, or action. Access
   * the execution details by navigating to the Flow Executions tab in Flow Designer, or pass the sys_id of the context record returned by the
   * startFlow(), startSubflow(), or
   * startAction() methods.
   * @param reason Optional. Reason for canceling the flow, subflow, or action. Appears in the
   * Message field of the Flow engine log entries [sys_flow_log]
   * table.
   */
  cancel(contextId: string, reason?: string): any;
  /**
   * Runs an action from a server-side script synchronously.
   * @param name The scope and name of the action to be executed, for example
   * global.action_name.
   * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
   * label.
   * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
   * second default timeout specified by the
   * com.glide.hub.flow_api.default_execution_time system property. After
   * the timeout expires, an exception is thrown.
   */
  executeAction(name: string, inputs: any, timeout?: number): any;
  /**
   * Run an action from a server-side script synchronously from the current user session
   * without creating execution details or other related records. Improve performance by eliminating
   * record-keeping overhead. Use this API to increase the speed of high-volume processing, for
   * example multiple executions per second, in a production environment.
   * @param name Scope and internal name of the action to execute. For example,
   * global.action_name. Locate the Internal
   * name field in the list of Flow Designer
   * actions.
   * @param inputs Name-value pairs that define action inputs. You can find the available action
   * inputs and required data types under Inputs in the action outline. Use the input
   * name, not the input label. For example,
   * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
   * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
   * second default timeout specified by the
   * com.glide.hub.flow_api.default_execution_time system property. After
   * the timeout expires, an exception is thrown.
   */
  executeActionQuick(name: string, inputs: any, timeout?: number): any;
  /**
   * Runs a Data Stream action synchronously from a server-side script and returns a
   * ScriptableDataStream object.
   * @param name The scope and name of the Data Stream action to execute. For example,
   * global.data_stream_action_name.
   * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
   * label. If the action does not have any inputs, do not include this
   * parameter.
   * @param timeout Optional. Amount of time before the action times out. After the timeout
   * expires, an exception is thrown. The timeout only applies to the
   * executeDataStreamAction method, not to methods in the
   * ScriptableDataStream class.Default: 30000, specified by the
   * com.glide.hub.flow_api.default_execution_time system
   * property
   * Unit: Milliseconds
   */
  executeDataStreamAction(name: string, inputs: any, timeout?: number): any;
  /**
   * Runs a flow from a server-side script synchronously.
   * @param name The scope and name of the flow to be executed, for example
   * global.flow_name.
   * @param inputs Name-value pairs that define trigger inputs. Use the input name, not the input
   * label.
   * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
   * second default timeout specified by the
   * com.glide.hub.flow_api.default_execution_time system property. After
   * the timeout expires, an exception is thrown.
   */
  executeFlow(name: string, inputs: any, timeout?: number): any;
  /**
   * Runs a flow, subflow, action, or Data
   * Stream action from a server-side script synchronously or asynchronously without
   * creating execution details or other related records. Improves performance by
   * eliminating record-keeping overhead.
   * Use this API to increase the speed of high-volume processing, for
   * example multiple executions per second, in a production environment.
   * @param name Scope and internal name of the flow to execute. For example,
   * global.flow_name. Locate the Internal name
   * field in the list of Flow Designer
   * flows.
   * @param inputs Name-value pairs that define trigger inputs. You can find the available trigger
   * inputs and required data types in the Trigger section of the flow. Use the input
   * name, not the input label. For example,
   * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
   * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
   * second default timeout specified by the
   * com.glide.hub.flow_api.default_execution_time system property. After
   * the timeout expires, an exception is thrown.
   */
  executeFlowQuick(name: string, inputs: any, timeout?: number): any;
  /**
   * Runs an subflow from a server-side script synchronously.
   * @param name The scope and name of the subflow to be executed, for example
   * global.subflow_name.
   * @param inputs Name-value pairs that define subflow inputs. Use the input name, not the input
   * label.
   * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
   * second default timeout specified by the
   * com.glide.hub.flow_api.default_execution_time system property. After
   * the timeout expires, an exception is thrown.
   */
  executeSubflow(name: string, inputs: any, timeout?: number): any;
  /**
   * Run a subflow from a server-side script synchronously from the current user session
   * without creating execution details or other related records. Improve performance by eliminating
   * record-keeping overhead. Use this API to increase the speed of high-volume processing, for
   * example multiple executions per second, in a production environment.
   * @param name Scope and internal name of the subflow to execute. For example,
   * global.subflow_name. Locate the Internal
   * name field in the list of Flow Designer
   * subflows.
   * @param inputs Name-value pairs that define subflow inputs. You can find the available subflow
   * inputs and required data types under Inputs in the subflow. Use the input name, not
   * the input label. For example,
   * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
   * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
   * second default timeout specified by the
   * com.glide.hub.flow_api.default_execution_time system property. After
   * the timeout expires, an exception is thrown.
   */
  executeSubflowQuick(name: string, inputs: any, timeout?: number): any;
  /**
   * Returns the outputs of a completed action or subflow.
   * @param contextId The sys_id of the action or subflow whose outputs you want to get.
   */
  getOutputs(contextId: string): any;
  /**
   * Returns a ScriptableFlowRunner builder object for a flow or action
   * that you want to run.
   */
  getRunner(): any;
  /**
   * Checks if a flow within a give scope contains any Ask for Approval actions.
   * @param scopedFlowName Scope and internal name of the flow to execute. For example,
   * global.flow_name. Locate the Internal name
   * field in the list of Flow Designer flows.
   */
  hasApprovals(scopedFlowName: string): any;
  /**
   * Builds password2 values inside a script step.
   * @param password Encrypted password2 value.
   */
  setEncryptedOutput(password: string): any;
  /**
   * Runs an action from a server-side script asynchronously.
   * @param name The scope and name of the action to be executed, for example
   * global.action_name.
   * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
   * label.
   */
  startAction(name: string, inputs: any): any;
  /**
   * Runs an action from a server-side script asynchronously without creating execution
   * details or other related records. Improve performance by eliminating record-keeping overhead.
   * Use this API to increase the speed of high-volume processing, for
   * example multiple executions per second, in a production environment.
   * @param name Scope and internal name of the action to execute. For example,
   * global.action_name. Locate the Internal
   * name field in the list of Flow Designer
   * actions.
   * @param inputs Name-value pairs that define action inputs. You can find the available action
   * inputs and required data types under Inputs in the action outline. Use the input
   * name, not the input label. For example,
   * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
   */
  startActionQuick(name: string, inputs: any): any;
  /**
   * Runs a flow from a server-side script.
   * @param name The scope and name of the flow to be executed, for example
   * global.flow_name.
   * @param inputs Name-value pairs that define trigger inputs. Use the input name, not the input
   * label.
   */
  startFlow(name: string, inputs: any): any;
  /**
   * Runs a flow from a server-side script asynchronously without creating execution details
   * or other related records. Improve performance by eliminating record-keeping overhead. Use this API to increase the speed of high-volume processing, for
   * example multiple executions per second, in a production environment.
   * @param name Scope and internal name of the flow to execute. For example,
   * global.flow_name. Locate the Internal name
   * field in the list of Flow Designer
   * flows.
   * @param inputs Name-value pairs that define trigger inputs. You can find the available trigger
   * inputs and required data types in the Trigger section of the flow. Use the input
   * name, not the input label. For example,
   * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
   */
  startFlowQuick(name: string, inputs: any): any;
  /**
   * Runs a subflow from a server-side script.
   * @param name The scope and name of the subflow to be executed, for example
   * global.subflow_name.
   * @param inputs Name-value pairs that define subflow inputs. Use the input name, not the input
   * label.
   */
  startSubflow(name: string, inputs: any): any;
  /**
   * Runs a subflow from a server-side script asynchronously without creating execution
   * details or other related records. Improve performance by eliminating record-keeping overhead.
   * Use this API to increase the speed of high-volume processing, for
   * example multiple executions per second, in a production environment.
   * @param name Scope and internal name of the subflow to execute. For example,
   * global.subflow_name. Locate the Internal
   * name field in the list of Flow Designer
   * subflows.
   * @param inputs Name-value pairs that define subflow inputs. You can find the available subflow
   * inputs and required data types under Inputs in the subflow. Use the input name, not
   * the input label. For example,
   * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
   */
  startSubflowQuick(name: string, inputs: any): any;
}
export { FlowAPI };
