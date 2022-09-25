declare class DiscoverySensor {
  /**
   * Exposes the base values in CIData to the classifiers. Currently used by Windows, Unix,
   * and SNMP.
   * @param sensor The sensor object
   */
  addCIDataBaseValue(sensor: any): any;
  /**
   * Adds the CI to the related list.
   * @param tableName The table to add to
   * @param dataArray The data array
   * @param refName The reference name
   * @param keyName The key name
   */
  addToRelatedList(
    tableName: string,
    dataArray: any[],
    refName: string,
    keyName: string,
  ): any;
  /**
   * Optionally override this in the sensor to finish after processing and saving all
   * results. This method is invoked once after all results have been processed and
   * saved.
   */
  after(): any;
  /**
   * Checks if the device history is not yet created. If so, do not write to it.
   * @param result The result from the probe
   */
  checkEmptyPayload(result: any): any;
  /**
   * Checks whether an error has occurred, and if so calls the function to process the
   * error.
   * @param result The result from the probe
   */
  checkErrorPayload(result: any): any;
  /**
   * If debugging is turned on, logs the message.
   * @param msg The message to log
   */
  debug(msg: string): any;
  /**
   * Optionally override this in the sensor to finish after processing all results. This
   * method is invoked once after all results have been processed.
   */
  finish(): any;
  /**
   * Fires additional classifiers.
   */
  fireAdditionalClassifier(): any;
  /**
   * Returns the agent name for the probe.
   */
  getAgent(): any;
  /**
   * Returns the Configuration Management Database (CMDB) Configuration Item (CI) of the
   * current device.
   */
  getCmdbCi(): any;
  /**
   * Returns the current Configuration Management Database (CMDB) record.
   */
  getCmdbRecord(): any;
  /**
   * Returns the current device's CI object.
   */
  getDeviceCi(): any;
  /**
   * Returns the queue ID of the current probe.
   */
  getEccQueueId(): any;
  /**
   * Returns the ECC Queue record for the current probe.
   */
  getEccQueueRecord(): any;
  /**
   * Returns a specified parameter from the Discovery probe.
   */
  getParameter(): any;
  /**
   * Returns the name of the current sensor.
   */
  getSensorName(): any;
  /**
   * Returns the probe's Source field value.
   */
  getSource(): any;
  /**
   * Optionally override this method to handle errors.
   * @param error The error message
   */
  handleError(error: string): any;
  /**
   * Initializes the sensor.
   * @param definition The discovery definition
   */
  init(definition: any): any;
  /**
   * Checks to see if debugging mode is on.
   */
  isDebugging(): any;
  /**
   * Creates a log entry if the device history is empty.
   */
  logEmptyPayload(): any;
  /**
   * Checks for warnings and logs them.
   * @param result The result from the probe
   */
  logWarningPayload(result: any): any;
  /**
   * Provides main processing sequence for the script. Loops recursively until a sys_id is
   * found, then processes the CI.
   */
  main(): any;
  /**
   * Optionally override this in the sensor to prepare for processing results. This method
   * is invoked once before any results have been processed.
   */
  prepare(): any;
  /**
   * Override this in the sensor to process each result.
   * @param result The result from the probe
   */
  process(result: any): any;
  /**
   * Processes an error by eliminating duplicates, writing the error to the error map, and
   * sending the error to the error handler.
   * @param msg The message to process
   */
  processError(msg: string): any;
  /**
   * Processes a warning message by ignoring duplicate messages and calling
   * handleWarning().
   * @param msg The warning message
   */
  processWarning(msg: string): any;
  /**
   * Reclassifies a device to the specified classification.
   * @param ciClass The new classification
   */
  reclassify(ciClass: string): any;
  /**
   * Runs the sensor, including preparation, checking for and logging any warnings and
   * errors, and checking the payload to ensure that a valid sensor is available to process, and
   * calling finish().
   */
  run(): any;
  /**
   * Adds variables to the ci_data variable after running the classification script and
   * storing the variables in ci_data.
   * @param script The classification script
   * @param ciData The CI data
   */
  runClassificationScript(script: string, ciData: any): any;
  /**
   * If there is a device history, saves the processed data from the probe.
   */
  save(): any;
  /**
   * Sets the current sensor data from a Java map.
   * @param javaMap The sensor data
   */
  setCurrentFromJavaMap(javaMap: any): any;
  /**
   * Sets the trigger value from the probe.
   * @param value The probe trigger
   */
  setTriggerProbes(value: string): any;
  /**
   * Updates the sensor data and related lists.
   * @param data The sensor data
   */
  update(data: any): any;
  /**
   * Updates the status count and the device count.
   */
  updateCounts(): any;
  /**
   * Updates the count of completed devices.
   */
  updateDeviceCount(): any;
  /**
   * Updates the status count.
   */
  updateStatusCount(): any;
  /**
   * Override this in the sensor to change the behavior with no results.
   */
  zeroResults(): any;
}
export { DiscoverySensor };
