declare class GlideDBFunctionBuilder {
  constructor();
  /**
   * Adds the values of two or more integer fields.
   */
  add(): any;
  /**
   * Builds the database function defined by the GlideDBFunctionBuilder object.
   */
  build(): any;
  /**
   * Concatenates the values of two or more fields.
   */
  concat(): any;
  /**
   * Defines a constant value to use in the function. If used with the
   * dayofweek() method, the string defines whether to use Sunday or Monday as
   * the first day of the week.
   * @param constant A constant value used in a function. When used with the
   * dayofweek() method, the value defines whether the week starts
   * on a Sunday or Monday.
   *
   *
   * 1: Week begins on Sunday.
   *
   * 2: Week begins on Monday.
   *
   *
   *
   *
   * This definition enables the dayofweek() method to return
   * the correct day of the week from a given date. If a value other than 1 or 2 is
   * provided, the dayofweek() method uses Sunday as the first day
   * of the week.
   */
  constant(constant: string): any;
  /**
   * Determines the duration using a given start date/time and end date/time.
   */
  datediff(): any;
  /**
   * Returns an integer representing the day of the week for a given date.
   */
  dayofweek(): any;
  /**
   * Divides the value of one integer field by another.
   */
  divide(): any;
  /**
   * Defines a field on which a SQL operation is performed.
   * @param field The field on which you are performing the SQL operation.
   */
  field(field: string): any;
  /**
   * Determines the number of code units in a field.
   */
  length(): any;
  /**
   * Multiplies the values of two integer fields.
   */
  multiply(): any;
  /**
   * Subtracts the value of one integer field from another.
   */
  subtract(): any;
}
export { GlideDBFunctionBuilder };
