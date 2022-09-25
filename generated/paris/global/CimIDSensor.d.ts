declare class CimIDSensor {
  /**
   * Configures a triggered probe before it is launched.
   * @param probe An already configured probe that is ready to fire.
   */
  configureTriggeredProbe(probe: string): any;
  /**
   * Gets the instance hash token.
   */
  getInstanceHashToken(): any;
  /**
   * Prepares the probe results.
   */
  prepare(): any;
  /**
   * Processes all CIM probe query results for a CIM ID sensor.
   * @param results The query results
   * @param cimData The CI data of the device being identified.
   * @param sensor The wrapping sensor, extends CimIDSensor
   */
  process(results: any, cimData: any, sensor: any): any;
  /**
   * Runs a multi-probe script against a probe result.
   * @param script The script
   * @param probeResult The probe result
   * @param probeRecord The probe ID
   */
  runMultiProbeScript(
    script: string,
    probeResult: any,
    probeRecord: string,
  ): any;
  /**
   * Updates the device count.
   */
  updateDeviceCount(): any;
}
export { CimIDSensor };
