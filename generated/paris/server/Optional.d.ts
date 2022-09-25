declare class Optional {
  /**
   * Returns an empty Optional object. Use this method in an Else clause to handle a query
   * that might not return a result.
   * @param reason Optional. Reason displayed in the log when Optional.get() is
   * called on the empty Optional object.
   */
  empty(reason?: string): any;
  /**
   * Applies a predicate function, a function that takes a single value and returns true or
   * false, to the record inside the Optional object. If the function returns true, the method
   * returns the Optional record unchanged. If the function returns false, it returns an empty
   * Optional object.
   * @param predicate Predicate function to apply to the value inside the Optional object. Must
   * return a Boolean value.
   */
  filter(predicate?: any): any;
  /**
   * Applies a function that returns an Optional object to the result of a query. Use this
   * method to perform a second query using the result of the first.
   * @param fn Function
   * to apply to the results of the query that returned the Optional
   * object.
   */
  flatMap(fn?: any): any;
  /**
   * Returns the record inside the Optional object, or throws an error if the query does not
   * return a record.
   */
  get(): any;
  /**
   * Applies a function to the record within an Optional object. If the Optional object does
   * not contain a record, the function does not execute.
   * @param fn The function to apply to the record within the Optional object.
   */
  ifPresent(fn?: any): any;
  /**
   * Returns true if the Optional object is empty.
   */
  isEmpty(): any;
  /**
   * Checks whether an Optional object contains a value.
   */
  isPresent(): any;
  /**
   * Returns a new Optional object. Instead of containing the record, the object contains a
   * function to get the record that is only called if and when requested in the code.
   * @param lazyGetFn Function that returns a single record as a result of a query. For example:
   * var userGr = new GlideRecord('sys_user');
   */
  lazy(lazyGetFn: any): any;
  /**
   * Applies a function to the result of a query.
   * @param fn Function to apply to the result of the query.
   */
  map(fn: any): any;
  /**
   * Wraps a given value in an Optional object. For example, you can wrap the result of a
   * GlideRecord query in an Optional object to use the associated methods.
   * @param value Value inside the Optional object.
   */
  of(value?: any): any;
  /**
   * Adds a default value within the Optional object if the query does not return any
   * results.
   * @param defaultValue Value within the Optional object if the query does not return any
   * results.
   */
  orElse(defaultValue?: any): any;
}
export { Optional };
