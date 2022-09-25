declare class DiscoveryFunctionalityCriterion {
  constructor(source: any, functionality?: string);
  /**
   * Retrieves an array of DiscoveryFunctionalityCriterion instances associated with the
   * given functionality.
   * @param functionality The functionality
   */
  getForFunctionality(functionality: string): any;
}
export { DiscoveryFunctionalityCriterion };
