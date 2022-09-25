declare class Encoder {
  constructor(config: any);
  /**
   * Cancels a job for a encoder object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active EncoderVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of an encoder.
   */
  getAllVersions(): any;
  /**
   * Gets the latest version of an encoder.
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
   * Gets an encoder by provided version number.
   * @param version Existing version number of an encoder.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of an encoder in the store.
   * @param version Name of the Encoder() object version to activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
export { Encoder };
