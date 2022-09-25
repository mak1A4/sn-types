declare class ScriptableDataStream {
  /**
   * Closes the connection to a data stream. Always call this method after performing any
   * desired operations on a data stream.
   */
  close(): any;
  /**
   * Returns the current index of an item in a data stream.
   */
  getItemIndex(): any;
  /**
   * Returns the current index of an item within the current page in a data
   * stream.
   */
  getItemInPageIndex(): any;
  /**
   * Returns the current index of a page in a data stream.
   */
  getPageIndex(): any;
  /**
   * Returns true if there are more items in the data stream.
   */
  hasNext(): any;
  /**
   * Returns the next item in a data stream.
   */
  next(): any;
}
export { ScriptableDataStream };
