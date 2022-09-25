declare class ShazzamLaunch {
  constructor(status: any, schedule: any);
  /**
   * Adds a single port probe to our MID services collection.
   * @param midPPs A hashmap with two properties.
   * midServer: a MIDServer instance
   *
   * portProbes: a hashmap (by port probe name) of DiscoveryPortProbe
   * instances.
   *
   *
   * @param portProbes A hashmap (byMIDServer name) that contains these properties.
   * range: An IPMetaCollection containing the ranges to be probed.
   *
   * midserver: A MIDServer instance for the MID server to be probed.
   *
   * portProbes: a hashmap (by port probe name) of DiscoveryPortProbe instances to
   * be probed.
   *
   *
   * @param ipiec The range to be probed.
   */
  addPortProbe(midPPs: string, portProbes: string, ipiec: any): any;
  /**
   * Adds the specified range and this discovery's port probes to scan (as defined by
   * behavior) to the collection of MID servers and port probes that need to be probed.
   * @param ipc The range to be discovered
   * @param portProbes A hashmap (by MID server name) of hashmaps containing these properties.
   * range: an IPMetaCollection containing the ranges to be probed.
   *
   * midServer: a Mid server instance for the MID server to be probed.
   *
   * portProbes: a hashmap (by port probe name) of DiscoveryPortProbe instances to
   * be probed.
   *
   *
   * @param samePhase True if this should use the same phase as is currently running.
   */
  addRange(ipc: any, portProbes: string, samePhase: boolean): any;
  /**
   * Fires a Shazzam probe for the MID server and services in the given hash
   * map.
   * @param portProbe A hashmap containing these properties.
   * range: an IPMetaCollection containing the ranges to be probed.
   *
   * midServer: a MIDServer instance for the MID server to be probed.
   *
   *
   * @param ip A comma-separated list of IPs to fire probes for.
   * @param sensor The sys_id of the sensor that launched this probe (network discovery
   * only).
   */
  fireShazzamProbe(portProbe: string, ip: string, sensor: string): any;
  /**
   * Launches Shazzam probes as necessary, depending on the current phase of each behavior
   * used.
   * @param ip A comma-separated list of IPs to fire probes for.
   * @param samePhase True if this launch should use the same phase as is currently running.
   * @param sensor The sys_id of the sensor that launched this (only in network
   * discovery).
   */
  launch(ip: string, samePhase: boolean, sensor: string): any;
  /**
   * Makes an XML port probe spec for the given port probe hashmap.
   * @param portProbe A hashmap containing these properties.
   * range: an IPMetaCollection containing the ranges to be probed.
   *
   * midServer: a MIDServer instance for the MID server to be probed.
   *
   * portProbes: a hashmap (by port probe name) of DiscoveryPortProbe instances to
   * be probed.
   *
   *
   */
  makeProbeSpec(portProbe: string): any;
}
export { ShazzamLaunch };
