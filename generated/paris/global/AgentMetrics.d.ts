declare class AgentMetrics {
  constructor();
  /**
   * Handles counter metrics from the agent by putting them into an array that can be used
   * to update the ECC Agent Counter Metric table (ecc_agent_counter_metric).
   * @param metric The counter object from the agent
   * @param name The device name
   * @param midId The MID server sys_id
   */
  handleCounter(metric: string, name: string, midId: string): any;
  /**
   * Updates the memory metrics for the given agent.
   * @param metric The memory object from the agent
   * @param name The device name
   * @param midId The MID server sys_id
   */
  handleMemory(metric: string, name: string, midId: string): any;
  /**
   * Handles metric information from a remote glide record by putting it into an
   * array.
   * @param metric The remote object from the agent
   * @param name The device name
   * @param midId The MID server sys_id
   */
  handleRGR(metric: string, name: string, midId: string): any;
  /**
   * Handles scalar values from the agent by putting them into an array.
   * @param metric The counter object  from the agent
   * @param name The device name
   * @param midId The MID server sys_id
   */
  handleScalar(metric: string, name: string, midId: string): any;
  /**
   * Updates the specified metrics table with the new metric information.
   * @param tableName The metrics table to update
   * @param values The object containing the values to add to the table
   * @param metric The metric type to add to the table
   * @param midID The MID server sys_id
   */
  updateMetric(
    tableName: string,
    values: string,
    metric: string,
    midID: string,
  ): any;
}
export { AgentMetrics };
