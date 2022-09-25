declare class ServiceRegistryQuery {
  constructor(source: any);
  /**
   * Parses an array of IDs for the given port probe.
   * @param portProbe The port probe
   */
  findForPortProbe(portProbe: any): any;
  /**
   * Retrieves a registry service by id, regardless of child class.
   * @param source The registry service GlideRecord or sys_id.
   */
  get(source: any): any;
  /**
   * Returns the Shazzam! querier class name.
   */
  getShazzamQuerierClassname(): any;
  /**
   * Retrieves the port probe XML and creates a map.
   */
  toPortProbeMap(): any;
  /**
   * Creates XML output for Shazzam! port probes.
   */
  toPortProbeXml(): any;
}
export { ServiceRegistryQuery };
