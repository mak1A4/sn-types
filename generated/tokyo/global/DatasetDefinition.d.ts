declare class DatasetDefinition {
  constructor(config: any);
  /**
   * Returns a list of fields that are eligible as either input fields (features) or
   * predicted fields regarding a solution of a given capability, for example, a classification
   * solution. Eligibility is determined based on the fields having the appropriate glide data
   * types.
   * @param capability Capability for which to retrieve fields eligible for training. This method
   * currently only supports classification solutions, any other value for the capability
   * throws a "capability not supported" exception.Valid values:
   * "classification"
   */
  getEligibleFields(capability: string): any;
}
export { DatasetDefinition };
