declare class MLSolutionResult {
  constructor();
  /**
   * Returns the solution object.
   * @param solutionName Name of the clustering ml_solution record.
   */
  findActiveSolution(solutionName: string): any;
  /**
   * Returns all members of a clustering solution.
   * @param solutionName Name of active cluster solution.
   * @param options Optional. Narrows down the returned results by group and level within a
   * clustering solution. Default: Return cluster memberships for all
   * clusters.
   */
  getClusterAssignments(solutionName: string, options?: any): any;
  /**
   * Returns all outcome information for a clustering solution.
   * @param solutionName Name of active cluster solution.
   * @param options Optional. Narrows down the returned results by group and level within a
   * clustering solution. Default: Return cluster memberships for all
   * clusters.
   */
  getClusterInfo(solutionName: string, options?: any): any;
}
export { MLSolutionResult };
