declare class ProbeHandlerCim {
  /**
   * Returns a string containing the CIM fields to fetch
   */
  getCimQueries(): any;
  /**
   * Returns the CIM name space.
   */
  getNamespace(): any;
  /**
   * Returns a hash map of the parameters added by this probe handler.
   */
  getParameters(): any;
  /**
   * Runs the probe.
   */
  run(): any;
  /**
   * Sets the probe parameters.
   * @param params The parameters to add
   */
  setProbeParameters(params: any): any;
}
export { ProbeHandlerCim };
