declare class DiscoveryRunningProcessSensor {
  /**
   * Adds a discovered sensor to the specified process.
   * @param fc The process to add the sensor to.
   */
  addDiscovered(fc: string): any;
  /**
   * After the reconciler finishes processing, finishes other tasks and starts application
   * mapping.
   */
  after(): any;
  /**
   * Determines if the cluster has any relationships.
   * @param ci The cluster node cmdb_ci
   */
  hasClusterRelationship(ci: any): any;
  /**
   * Adds any inserts to the specified process.
   * @param correlationId The correlation ID
   * @param classifiedProcess The classified process
   */
  insertCiProcess(correlationId: string, classifiedProcess: any): any;
  /**
   * Performs both pending inserts and updates to the specified process.
   * @param classifiedProcess The process into which inserts of updates will be made.
   */
  insertOrUpdate(classifiedProcess: any): any;
  /**
   * Determines if a classified process can be clustered.
   * @param classifiedProcess The classified process
   */
  isClusterable(classifiedProcess: any): any;
  /**
   * Implement your own map process by overwriting this method with a class extending this
   * object.
   * @param result The result from the discovery sensor
   */
  mapProcesses(result: any): any;
  /**
   * Triggers the probe when the process is discovered.
   */
  processDiscovered(): any;
  /**
   * Sets the field values of the CI, if values are available.
   * @param ci The CI whose fields are to be set.
   * @param fields The fields to set
   */
  setFields(ci: any, fields: any): any;
  /**
   * Adds any updates to the specified process.
   * @param ci The CI of the process to update
   * @param correlationid The correlation ID
   * @param classifiedProcess The classified process
   */
  updateCiProcess(ci: any, correlationid: string, classifiedProcess: any): any;
}
export { DiscoveryRunningProcessSensor };
