declare class GlideUICompatibility {
  constructor(scopeName: string);
  /**
   * Returns the terms "block" or "allow" based upon the browser version.
   */
  getCompatibility(): any;
  /**
   * Determines if the browser is not supported.
   */
  isBlocked(): any;
}
export { GlideUICompatibility };
