declare class DevOpsOrchestrationToolIntegrationHandler {
  /**
   * Returns the value of the orchestrationTaskName parameter from the
   * payload for POST /devops/tool/{capability}.
   * @param payload Payload containing data from the custom tool accepted by POST
   * /devops/tool/{capability}, where capability is
   * orchestration.
   */
  getNativeIdForOrchestrationTask(payload: any): any;
  /**
   * Checks if this handler is valid for the specified tool.
   * @param toolName Name of the tool. Located in the Tool Name field in the
   * DevOps Tool Integration [sn_devops_tool_integration] table.
   */
  handleTool(toolName: string): any;
}
export { DevOpsOrchestrationToolIntegrationHandler };
