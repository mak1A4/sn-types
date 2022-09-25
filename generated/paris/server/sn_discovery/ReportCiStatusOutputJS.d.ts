declare class ReportCiStatusOutputJS {
  /**
   * Used to return the state of the scanned CI.
   */
  getCiOperationStatus(): any;
  /**
   * Used to return the value in the cmdb_ci field from the discovery_device_history table
   * for the CI being scanned.
   */
  getCmdbCI(): any;
  /**
   * Used to return the value from the State field in the Discovery
   * Status [discovery_status] table.
   */
  getDiscoveryState(): any;
  /**
   * Used to return the value from the source field in the discovery_device_history table
   * for the CI being scanned.
   */
  getIpAddress(): any;
  /**
   * Used to return the value from the issues field in the discovery_device_history table
   * for the CI being scanned.
   */
  getIssues(): any;
  /**
   * Used to return the value from the issues_link field in the discovery_device_history
   * table for the CI being scanned.
   */
  getIssuesLink(): any;
  /**
   * Used to serialized the ReportCiStatusOutputJS object.
   */
  toJson(): any;
}
export { ReportCiStatusOutputJS };
