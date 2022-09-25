declare class PredictabilityEstimate {
  constructor(config: any);
  /**
   * Cancels a job for a predictability estimate object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active
   * PredictabilityEstimateVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of a predictability estimate.
   */
  getAllVersions(): any;
  /**
   * Gets the latest version of a predictability estimate.
   */
  getLatestVersion(): any;
  /**
   * Gets the name of the object to use for interaction
   * with the store.
   */
  getName(): any;
  /**
   * Gets predictability estimate object properties.
   */
  getProperties(): any;
  /**
   * Gets a predictability estimate by provided version number.
   * @param version Existing version number of a predictability estimate.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of a predictability estimate in the store.
   * @param version Name of the PredictabilityEstimate() object version to
   * activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
export { PredictabilityEstimate };
