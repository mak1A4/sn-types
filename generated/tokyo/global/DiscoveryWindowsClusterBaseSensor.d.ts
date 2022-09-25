declare class DiscoveryWindowsClusterBaseSensor {
  /**
   * Associates Windows clusters with resources in the result returned by the
   * sensor
   * @param result The result from the sensor
   */
  associateClustersToResources(result: any): any;
  /**
   * Associates Windows clusters with specific nodes in the result returned by the
   * sensor.
   * @param result The result from the sensor
   */
  associateClustertoNodes(result: any): any;
  /**
   * Associates resources with specific nodes in the result returned by the
   * sensor.
   * @param result The result from the sensor
   */
  associateResourcesToNodes(result: any): any;
  /**
   * Changes the CI sys_id for the current device to the specified CI sys_id.
   * @param newCIGR The new CI sys_id for the device.
   */
  changeCI(newCIGR: string): any;
  /**
   * Finds the specified cluster record.
   * @param name The cluster record to find
   */
  findCluster(name: string): any;
  /**
   * Finds the Windows clusters in the result returned by the sensor.
   * @param result The result from the sensor
   */
  findClusters(result: any): any;
  /**
   * Finds the Windows cluster nodes in the result returned by the sensor, and creates an
   * object for each with information about the node, including name, status, description, state,
   * caption, and server.
   * @param result The result from the sensor
   */
  findNodes(result: any): any;
  /**
   * Finds the requested cluster; if it does not exist, creates a new cluster record under
   * the specified name.
   * @param name The cluster name to find or, if it does not exist, the name for the new cluster
   * record.
   */
  findOrCreateCluster(name: string): any;
  /**
   * Finds the Windows cluster resources and puts them into an array of resource
   * information.
   * @param result The result from the sensor
   */
  findResources(result: any): any;
  /**
   * Returns the value of a specified property.
   * @param name The property
   * @param source The property's source
   */
  getPropValue(name: string, source: string): any;
  /**
   * Converts the specified value to a string.
   * @param value The value to convert
   */
  primStr(value: any): any;
  /**
   * Converts cluster properties to a readable format.
   * @param properties The properties to convert
   */
  propertiesToHumanReadable(properties: string): any;
  /**
   * Queries the Windows Cluster (cmdb_ci_win_cluster) table for the specified
   * cluster.
   * @param name The cluster for which to search.
   */
  queryForCluster(name: string): any;
}
export { DiscoveryWindowsClusterBaseSensor };
