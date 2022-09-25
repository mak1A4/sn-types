declare class DiscoveryMultiSensor {
  /**
   * Logs the event if the sensor script has no payload data to process.
   * @param name The sensor name
   */
  logEmptyPayload(name: string): any;
  /**
   * Prepares the sensor by loading the CI data.
   */
  prepare(): any;
  /**
   * Determines if the script is valid. Logs an error if the script is invalid.
   * @param script The script to validate
   * @param msgr The multisensor record
   */
  validateScript(script: string, msgr: any): any;
}
export { DiscoveryMultiSensor };
