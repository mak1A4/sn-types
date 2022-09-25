declare class ArrayUtil {
  /**
   * Merge two arrays.
   * @param parent An array to merge
   * @param child An array to merge
   */
  concat(parent: any[], child: any[]): any;
  /**
   * Searches the array for the specified element. Returns true if the element exists in the
   * array, otherwise returns false.
   * @param array Array to search.
   * @param element Element to search for.
   */
  contains(array: any[], element: any): any;
  /**
   * Converts a Java object to an array.
   * @param a Object to convert.
   */
  convertArray(a: any): any;
  /**
   * Finds the differences between two or more arrays.
   * @param a An array
   * @param b An array
   */
  diff(a: any[], b: any[]): any;
  /**
   * Returns an array from the specified object.
   * @param object Object from which to create an array.
   */
  ensureArray(object: any): any;
  /**
   * Searches the array for the element. Returns the element index if found, -1
   * otherwise.
   * @param array The array to search
   * @param element The element to search for
   */
  indexOf(array: any[], element: any): any;
  /**
   * Searches the array for the element. Returns the element index if found, -1
   * otherwise.
   * @param array Array to search.
   * @param element Element to search for.
   * @param startIndex Index to start searching from.
   */
  indexOf(array: any[], element: any, startIndex: number): any;
  /**
   * Finds the elements present in all arrays.
   * @param a An array
   * @param b An array
   */
  intersect(a: any[], b: any[]): any;
  /**
   * Merge two or more arrays.
   * @param a An array
   * @param b An array
   */
  union(a: any[], b: any[]): any;
  /**
   * Removes duplicate items from an array.
   * @param a The array to check for duplicate elements.
   */
  unique(a: any[]): any;
}
export { ArrayUtil };
