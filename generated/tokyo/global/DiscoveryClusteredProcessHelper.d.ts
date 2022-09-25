declare class DiscoveryClusteredProcessHelper {
  /**
   * Returns all classified processes that have a "Runs on::Runs" relationship with the
   * given child.
   */
  getClassifiedProcesses(): any;
  /**
   * Returns the first valid cluster where the current CI is a node.
   */
  getCluster(): any;
  /**
   * Returns a classified process that already exists on the cluster.
   * @param procName The process to get
   */
  getExistingProc(procName: string): any;
  /**
   * Determines which classified processes support clustering, by creating a array of
   * supported processes.
   */
  getSupportedProcs(): any;
  /**
   * Checks if the specified process is a cluster resource.
   * @param process The process to check
   */
  isClusterResource(process: any): any;
  /**
   * Determines if the specified process is listening on all TCP connections.
   * @param pid The process identifier of the process to check
   */
  isListeningOnAll(pid: string): any;
  /**
   * Builds up TCP half connections for clustered processes that are listening on *
   * (enumerate over cluster IPs in addition to the CI IPs that are already there).
   * @param deviceGR The device record
   */
  layer7Connections(deviceGR: any): any;
  /**
   * If the current device is a member of a cluster, processes classified processes that can
   * be clustered.
   * @param deviceGR The record of the device to process.
   */
  process(deviceGR: any): any;
  /**
   * Processes any existing classified processes associated with the cluster, and newly
   * discovered classified processes from one of the cluster nodes.
   */
  processClusteredProcs(): any;
  /**
   * Rewrites the "@host" portion of an existing cluster process name if a node has
   * overwritten it.
   * @param classyProc The cluster process name.
   */
  processExisting(classyProc: any): any;
  /**
   * Processes a new classified process.
   * @param classyProc The classification process
   */
  processNew(classyProc: any): any;
  /**
   * Removes the relationship between the classified process and the cluster
   * node.
   * @param process The classified process
   */
  removeNodeRelationship(process: any): any;
}
export { DiscoveryClusteredProcessHelper };
