declare class PredictabilityEstimateStore {
  /**
   * Adds a new predictability estimate object to the store and returns a unique name.
   * @param mlEstimate PredictabilityEstimate()
   * object to add to the store.
   */
  add(mlEstimate: any): any;
  /**
   * Removes a specified predictability estimate object from the store.
   * @param name Name of the PredictabilityEstimate()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets a predictability estimate object from a store.
   * @param name Name of a predictability estimate in a store.
   */
  get(name: string): any;
  /**
   * Gets the names of all predictability estimate definition records in the
   * store.
   * @param options Options for restricting results within the specified
   * properties.{
   * "label": "String",
   * "domainName": "String",
   * "scope": "String"
   * };
   */
  getAllNames(options: any): any;
  /**
   * Updates a predictability estimate object in a store.
   * @param name Name of the predictability estimate to update.
   * @param mlEstimate PredictabilityEstimate()
   * object properties to update.
   */
  update(name: string, mlEstimate: any): any;
}
export { PredictabilityEstimateStore };
