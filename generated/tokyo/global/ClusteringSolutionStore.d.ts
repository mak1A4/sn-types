declare class ClusteringSolutionStore {
  /**
   * Adds a new solution object to the store and returns a unique name.
   * @param mlSolution ClusteringSolution()
   * object to add to the store.
   */
  add(mlSolution: any): any;
  /**
   * Removes a specified solution object from the
   * store.
   * @param name Name of the ClusteringSolution()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets a solution object from the store.
   * @param name Name of a solution in the store.
   */
  get(name: string): any;
  /**
   * Gets the names of all solution definition
   * records in the store.
   * @param options Options for restricting results within the specified
   * properties.{
   * "label": "String",
   * "domainName": "String",
   * "scope": "String"
   * };
   */
  getAllNames(options: any): any;
  /**
   * Replaces an existing object in the store with the
   * object passed as a parameter. The object name provided must be empty or
   * match.
   * @param name Name of the solution to update.
   * @param mlSolution ClusteringSolution()
   * object properties to update.
   */
  update(name: string, mlSolution: any): any;
}
export { ClusteringSolutionStore };
