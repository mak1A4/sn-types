declare class DiscoveryApplicationDiscoMatcher {
  /**
   * Determines if this is a new CI.
   */
  isNewCI(): any;
  /**
   * Attempts to match with an application. If no match is found, creates a new application
   * entry.
   */
  match(): any;
}
export { DiscoveryApplicationDiscoMatcher };
