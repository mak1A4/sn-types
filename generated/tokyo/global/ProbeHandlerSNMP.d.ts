declare class ProbeHandlerSNMP {
  /**
   * Adds a boolean value to the parameter map.
   * @param dbName The database name
   * @param paramName The parameter name
   * @param paramMap The parameter map
   */
  addBoolean(dbName: string, paramName: string, paramMap: string): any;
  /**
   * Adds debugging to the probe handler.
   * @param paramMap The parameter map
   */
  addDebug(paramMap: string): any;
  /**
   * Adds a JavaScript handler.
   * @param paramMap The parameter map
   */
  addJavascriptHandlers(paramMap: string): any;
  /**
   * Adds OID automatic resolution.
   * @param paramMap The parameter map
   */
  addOIDAutoResolve(paramMap: string): any;
  /**
   * Adds OID specifications to the parameter map.
   * @param paramMap The parameter map
   */
  addOIDSpec(paramMap: string): any;
  /**
   * Adds a sensor handler.
   * @param paramMap The parameter map
   */
  addSensorHandler(paramMap: string): any;
  /**
   * Adds the stage to the parameter map.
   * @param paramMap The parameter map
   */
  addStage(paramMap: string): any;
  /**
   * Adds timing specifications to the parameter map.
   * @param paramMap The parameter map
   */
  addTimingSpecs(paramMap: string): any;
  /**
   * Returns the parameters added by this probe handler.
   */
  getParameters(): any;
  /**
   * Runs the probe.
   */
  run(): any;
  /**
   * Sets the value of a given XML parameter element.
   * @param params The probe's parameters
   */
  setProbeParameters(params: string): any;
}
export { ProbeHandlerSNMP };
