declare class DiscoveryPortScanner {
  constructor();
  /**
   * Fires the port probe for the specified port.
   * @param port The port to probe.
   */
  firePortProbeByPort(port: string): any;
  /**
   * Gets a list of all service ports.
   */
  getAllServicePorts(): any;
  /**
   * Brief description of the method.
   * @param name Name of the port probe
   */
  getPortProbeByName(name: string): any;
  /**
   * Gets all the current port probes for the current device.
   */
  getPortProbes(): any;
  /**
   * Returns the port probes for a specified service port.
   * @param servicePort The service port
   */
  getPPFromSP(servicePort: string): any;
  /**
   * Returns the service ports for a specified port probe.
   * @param portProbe The port probe
   */
  getSPFromPP(portProbe: any): any;
  /**
   * Returns the service ports for a specified probe process ID.
   * @param ppid The probe process ID.
   */
  getSPFromPPId(ppid: string): any;
  /**
   * Puts the specified probe and port on the discovery schedule.
   * @param portProbe The port probe to schedule
   * @param port The port to probe
   */
  scheduleProbe(portProbe: any, port: string): any;
  /**
   * Updates the service ports for a specified CMDB configuration item.
   * @param openPorts The ports that are open
   * @param scannedPorts The ports that have been scanned
   * @param cmdbCi The CMDB configuration item
   */
  updateCIServicePorts(
    openPorts: any[],
    scannedPorts: string,
    cmdbCi: string,
  ): any;
}
export { DiscoveryPortScanner };
