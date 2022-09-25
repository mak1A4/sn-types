declare class Discovery {
  constructor();
  /**
   * Called when the completed business rule is called because the discovery_status started
   * has completed.
   */
  completed(): any;
  /**
   * Starts a discovery of the CI with the given sysID, returning the sysID of the status
   * record.
   * @param cmdb_ci The sys_id of the CI to be discovered.
   */
  discoveryFromCI(cmdb_ci: string): any;
  /**
   * Starts the current discovery job.
   */
  discoveryStartJob(): any;
  /**
   * Gets an array of IP addresses in the CI with a given sysID.
   * @param ci_sysID The sys_id for the CI to look for
   */
  getIPsinCI(ci_sysID: string): any;
  /**
   * Gets the DiscoverySchedule instance for any IP address in a given array and the IP
   * address to be discovered.
   * @param ips An array of IP addresses
   */
  getScheduleContainingAnyIP(ips: any[]): any;
  /**
   * Determines if the current discovery schedule is valid.
   * @param schedule The sys_id of the schedule to check.
   */
  isValidDiscoverySchedule(schedule: string): any;
  /**
   * Determines if the IP range for the specified discovery schedule is valid.
   * @param schedule The sys_id of the schedule to check
   */
  isValidRange(schedule: string): any;
  /**
   * Logs a warning message.
   * @param message The warning message
   */
  warnMsg(message: string): any;
}
export { Discovery };
