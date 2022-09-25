declare class AccAgentsAPI {
  constructor();
  /**
   * Checks the status of a grab log request.
   * @param requestId Sys_id of a request in the Agent Client
   * Collector Requests [sn_agent_request] table.
   */
  checkGrabLogRequestProgress(requestId: string): any;
  /**
   * Gets the information of a specified agent.
   * @param agentID Unique ID of an agent listed in the Agent ID
   * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
   */
  getAgent(agentID: string): any;
  /**
   * Gets a list of agents with related information.
   * @param encodedQuery Encoded query string in standard Glide format.
   * See Encoded query
   * strings.
   * @param limit Optional. Restricts results to a maximum number of agents. Use null or
   * undefined for both if they are not required.Default/Max: 20,000
   */
  getAgentsList(encodedQuery: string, limit?: number): any;
  /**
   * Restarts a specified agent with alive/up status.
   * @param agentID Unique ID of an agent listed in the Agent ID
   * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
   */
  restartAgent(agentID: string): any;
  /**
   * Runs a discovery check to locate CIs related to an agent. The
   * specified agent must be in alive/up status.
   * @param agentID Unique ID of an agent listed in the Agent ID
   * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
   */
  runDiscovery(agentID: string): any;
  /**
   * Set the given data collection status (true/false if enabled or not) for a specified
   * agent.
   * @param agentID Unique ID of an agent listed in the Agent ID
   * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
   * @param status Flag that indicates whether data collection is enabled for the agent.
   *
   * Valid values:
   * true: Enables data collection for this agent.
   *
   * false: Disables data collection for this agent.
   *
   *
   *
   *
   * Default: true
   */
  setDataCollectionStatus(agentID: string, status: boolean): any;
  /**
   * Requests the log of a specified agent with alive/up
   * status.
   * @param agentID Unique ID of an agent listed in the Agent ID
   * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
   */
  submitGrabLogRequest(agentID: string): any;
}
export { AccAgentsAPI };
