declare class DiscoveryPhaser {
  constructor(discoveryStatus: any);
  /**
   * Determines if any ports were scanned for the specified probe.
   * @param portProbes The probes to check
   */
  anyScanned(portProbes: string): any;
  /**
   * Determines if there are any remaining phases for the discovery probe.
   */
  hasNextPhase(): any;
}
export { DiscoveryPhaser };
