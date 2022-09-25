declare class DiscoveryAPI {
  /**
   * Discovers a specified IPv4 address.
   * @param application Optional. Application configured for the MID Server.To define a
   * source parameter but not an
   * application parameter, use "NULL" as the place
   * holder.
   * Default: Discovery
   * @param ipAddress IP address to discover.
   * @param source Optional. Source of the Discovery. This same value appears in the optional
   * Source field in the Discovery Status record, which
   * indicates how the Discovery was triggered. Default: Discovery_API
   */
  discoverIpAddress(
    application: string | undefined,
    ipAddress: string,
    source?: string,
  ): any;
  /**
   * Used to return a summary of a configuration item's Discovery status given the specific
   * status sys_id and IPv4 address.
   * @param ipAddress The IPv4 address that was scanned.
   * @param discoveryStatusSysId The sys_id of the Discovery status record for the IP address that was
   * scanned.
   */
  reportCiIpAddressStatus(ipAddress: string, discoveryStatusSysId: string): any;
  /**
   * Used to return a summary of a CI Discovery status given a specific Discovery Status
   * sys_id.
   * @param sys_id The sys_id of a Discovery status record.
   */
  reportCiStatus(sys_id: string): any;
}
export { DiscoveryAPI };
