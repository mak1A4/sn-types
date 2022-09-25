declare class ClassificationSolution {
  constructor(config: any);
  /**
   * Cancels a job for a solution object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active
   * ClassificationSolutionVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of a classification solution.
   */
  getAllVersions(): any;
  /**
   * Gets the latest version of a solution.
   */
  getLatestVersion(): any;
  /**
   * Gets the name of the object to use for interaction
   * with the store.
   */
  getName(): any;
  /**
   * Gets solution object
   * properties.
   */
  getProperties(): any;
  /**
   * Gets a solution by provided version number.
   * @param version Existing version number of a solution.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of a
   * solution in the store.
   * @param version Name of the ClassificationSolution() object version to
   * activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
export { ClassificationSolution };
