declare class Stream {
  constructor(nextFn: any);
  /**
   * Returns results in batches of arrays, each containing the number of records passed to
   * the method.
   * @param count Number of records in each array returned from the stream.
   */
  chunk(count: number): any;
  /**
   * Applies a predicate function to every item in the Stream object. If the predicate
   * returns true for every item in the stream, the method returns true. If the predicate returns
   * false for any item in the stream, the method returns false.
   * @param predicate Predicate function to apply to every record or item inside the Stream object.
   * The function must take each item in the stream as input and return a boolean.
   */
  every(predicate: any): any;
  /**
   * Applies a predicate function to each item in the Stream object. If the predicate
   * returns true, the method returns the stream. If the predicate returns false, it returns an empty
   * Stream object.
   * @param predicate Predicate function to apply to every record or item inside the Stream object.
   * The function must take each item in the stream as input and return a
   * boolean.
   */
  filter(predicate: any): any;
  /**
   * Returns the first record or item in the Stream object that matches the predicate
   * function. If no predicate function is provided, then the method returns the first record or item
   * in the Stream.
   * @param predicate Optional. Predicate function to apply to the items inside the Stream object.
   * The function must take each item in the stream as input and return a
   * boolean.
   */
  find(predicate?: any): any;
  /**
   * Applies a function to every item in a stream. Returns another stream that you can
   * iterate over.
   * @param fn Function to apply to the result of the query that returns a Stream object.
   */
  flatMap(fn: any): any;
  /**
   * Applies the specified function to each record or item in the stream.
   * @param fn Function to apply to each item in the stream.
   */
  forEach(fn: any): any;
  /**
   * Returns a Stream object that contains the values from the provided array.
   * @param arr Array of values to create the stream from.
   */
  fromArray(arr: any[]): any;
  /**
   * Limits the number of results returned by the stream.
   * @param count Number of records to return.
   */
  limit(count: number): any;
  /**
   * Applies a function to each item in a stream and returns the updated Stream
   * object.
   * @param fn Function to apply to the result of the query that takes the each item in the
   * stream as input.
   */
  map(fn: any): any;
  /**
   * Executes a reducer function on each item in the stream, resulting in single output
   * value.
   * @param reducerFn Function to apply to each item in the stream that reduces the stream to a
   * single value. This function must take two arguments:
   *
   * acc: Accumulator that accumulates all values returned by
   * the function.
   *
   * cur: Current item being accumulated in the array.
   *
   *
   *
   * @param initialValue Value passed to the function as the initial value.
   */
  reduce(reducerFn: any, initialValue: any): any;
  /**
   * Applies a predicate function, a function that takes a single value and returns true or
   * false, to each item in the stream. If the predicate returns true for any item in the stream, the
   * method returns true.
   * @param predicate Predicate function to apply to the items inside the Stream object. Must return
   * a Boolean value.
   */
  some(predicate: any): any;
  /**
   * Returns an array containing the given number of items from the stream.
   * @param count The maximum number of items from the stream to return in the array.
   */
  toArray(count: number): any;
}
export { Stream };
