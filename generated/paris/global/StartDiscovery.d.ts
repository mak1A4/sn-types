declare class StartDiscovery {
  /**
   * Adds an IP (or comma-separated list of IPs) to an existing discovery (used by networks
   * discovery).
   * @param status The discovery status
   * @param ip An IP address, or a comma-separated list of IP addresses.
   * @param sensor The discovery sensor
   */
  addAdditionalIP(status: string, ip: string, sensor: string): any;
  /**
   * Handles discovery of devices (whether basic or advanced) from a schedule.
   * @param ip An IP address, or a comma-separated list of IP addresses.
   * @param samePhase
   * @param sensor The discovery sensor
   */
  discoverFromSchedule(ip: string, samePhase: boolean, sensor: string): any;
  /**
   * Returns the cancel script.
   */
  getCancelScript(): any;
  /**
   * If the schedule specifies a cancel time, schedules a job to cancel if
   * necessary.
   */
  scheduleCancelJob(): any;
  /**
   * Starts a discovery for a single IP using the specified schedule to get information such
   * as MID servers and behaviors.
   * @param schedule DiscoverySchedule instance for the schedule to use.
   * @param ip IP address to discover.Format: dot-formatted string
   */
  startFromIP(schedule: any, ip: string): any;
  /**
   * Invoked by the discovery script include to kick off a scheduled (or discover now)
   * discovery.
   * @param schedule The instance of discovery_schedule that this discovery is based on.
   * @param job The instance of sys_trigger that triggered this discovery.
   */
  startFromSchedule(schedule: any, job: any): any;
}
export { StartDiscovery };
