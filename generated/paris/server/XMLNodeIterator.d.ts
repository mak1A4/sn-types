declare class XMLNodeIterator {
  /**
   * Returns true if the iteration has more elements.
   */
  hasNext(): any;
  /**
   * Gets the next element in the iteration. The returned element may be a #text node for
   * the spaces/tabs if XML is "pretty formatted".
   */
  next(): any;
}
export { XMLNodeIterator };
