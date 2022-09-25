declare class DiscoveryMacProfileUtils {
  /**
   * Returns the child elements for a specified node as an array.
   * @param el The node for which to get the child elements.
   */
  getArrayFromNode(el: string): any;
  /**
   * Returns the base element for a specified output.
   * @param output The output for which to get the base element.
   */
  getBaseElement(output: string): any;
  /**
   * Returns the child elements for a specified node as a hash map.
   * @param el The node for which to get the child elements
   */
  getHashFromNode(el: string): any;
}
export { DiscoveryMacProfileUtils };
