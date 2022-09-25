declare class ProbeHandlerWMI {
  /**
   * Returns the parameters added by this probe handler.
   */
  getParameters(): any;
  /**
   * Generates a string containing the WMI fields to fetch.
   */
  getWMIFields(): any;
  /**
   * Runs the probe.
   */
  run(): any;
  /**
   * Sets the probe parameters.
   * @param params The probe parameters
   */
  setProbeParameters(params: any): any;
}
export { ProbeHandlerWMI };
