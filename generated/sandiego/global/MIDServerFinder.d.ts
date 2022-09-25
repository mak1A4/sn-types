declare class MIDServerFinder {
  constructor();
  /**
   * Gets the names of MID servers available for a given range and capability.
   */
  getMIDServers(): any;
  /**
   * Gets the sys_ids of MID servers available for a given range and capability.
   */
  getMIDServersBySysId(): any;
  /**
   * Gets the state of the finder operation.
   */
  getStatusMessage(): any;
  /**
   * Sets whether to look for active or inactive MID servers. By default, searches are for
   * active MID servers unless inactive is specified by this method.
   * @param flag If true, look for inactive MID servers. If false, do not look for inactive MID
   * servers.
   */
  setActive(flag: boolean): any;
  /**
   * Sets the technologies for which to look.
   * @param capabilities Contains a list of capabilities, for example - capabilities =
   * ["ssh","wmi","snmp",{"os_domain":"disco"},{"phase":1}];
   */
  setCapabilities(capabilities: any[]): any;
  /**
   * Turns debugging on or off.
   * @param onOrOff True to turn on debugging; false to turn debugging off.
   */
  setDebug(onOrOff: boolean): any;
  /**
   * Sets the range of IP addresses for which to look.
   * @param ranges A comma-separated list in one of these formats.
   * IP addresses (10.10.10.1, 10.10.10.2)
   *
   * IP networks (10.10.10.0/23)
   *
   * IP ranges (10.10.10.1-10.10.11.254)
   *
   *
   */
  setRanges(ranges: string): any;
  /**
   * Determines if the input is a single IP or a hostname, and passes the IP or multiple IPs
   * to the setRanges() method.
   * @param ipOrHostname The IP address, IP range, or host name.
   */
  setRangesByIPOrHostname(ipOrHostname: string): any;
}
export { MIDServerFinder };
