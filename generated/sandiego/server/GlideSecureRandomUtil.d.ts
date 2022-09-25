declare class GlideSecureRandomUtil {
  /**
   * Generates a pseudo-random integer.
   */
  getSecureRandomInt(): any;
  /**
   * Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value
   * that you pass into the method.
   * @param bound The bound value.
   */
  getSecureRandomIntBound(bound: number): any;
  /**
   * Generates pseudo-random long value.
   */
  getSecureRandomLong(): any;
  /**
   * Generates a random alpha-numeric String with the specified length.
   * @param length The length of the string in number of characters.
   */
  getSecureRandomString(length: number): any;
}
export { GlideSecureRandomUtil };
