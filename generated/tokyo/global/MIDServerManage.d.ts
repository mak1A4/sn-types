declare class MIDServerManage {
  constructor();
  /**
   * Gets the logs for the specified MID server.
   * @param agentName The MID server name
   * @param logs The type of log to get (Optional)
   */
  grab_logs(agentName: string, logs?: string): any;
  /**
   * Restarts the specified MID server.
   * @param agentName The MID server name
   */
  restart(agentName: string): any;
  /**
   * Stops the specified MID server.
   * @param agentName The MID server name
   */
  stop(agentName: string): any;
  /**
   * Creates a system message for the specified MID server.
   * @param agentName The MID server name
   * @param cmd The value of the probe source field
   * @param name The name of the probe
   */
  system_msg(agentName: string, cmd: string, name: string): any;
  /**
   * Sends a test probe for the specified MID server.
   * @param agentName The MID server name
   * @param probeId The ID of the probe to send
   * @param topic The information for the topic field
   * @param ename The name for the probe
   * @param source The information for the source field
   */
  text_probe(
    agentName: string,
    probeId: string,
    topic: string,
    ename: string,
    source: string,
  ): any;
  /**
   * Upgrades the specified MID server.
   * @param agentName The MID server name
   */
  upgrade(agentName: string): any;
}
export { MIDServerManage };
