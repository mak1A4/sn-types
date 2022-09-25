declare class DiscoveryFunctionalityDefinition {
  constructor(source: any);
  /**
   * Gets an array of DiscoveryFunctionalityCriterion instances associated with the given
   * functionality.
   */
  getAll(): any;
  /**
   * Gets the specified DiscoveryFunctionalityCriterion instance.
   * @param name The name of the DiscoveryFunctionalityCriterion
   */
  getNamed(name: string): any;
  /**
   * Checks if the trigger type is Run Once, i.e., at one specific date and
   * time.
   */
  isRunOnce(): any;
}
export { DiscoveryFunctionalityDefinition };
