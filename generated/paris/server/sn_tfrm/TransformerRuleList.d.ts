declare class TransformerRuleList {
  /**
   * Creates an entry in the associated transformation rules list which defines a field to
   * create in the output.
   * @param rule Name of the element in the destination output.
   * @param path Optional. JSONPath or XPath to the data element in the source document.The
   * adapter methods thenConcat() and
   * thenConcatSymbol() do not require you to define this
   * parameter if no other adapter methods are defined for the rule. All other adapter
   * methods require this parameter.
   */
  addRule(rule: string, path?: string): any;
  /**
   * Defines a name for the associated TransformerRuleList object for logging
   * purposes.
   * @param name Name to use to identify the associated TransformerRuleList object. Although
   * the API does not force this name to be unique, it is helpful if they are unique
   * within an instance.
   */
  setName(name: string): any;
  /**
   * Adds an adapter to the current rule that ties the specified currency code to the output
   * field defined in the associated addRule() call.
   * @param currencyCode Currency code to tie to the destination data element, such as USD, EUR, and
   * GBP.
   * @param outputNumericCurrencyValue Optional. Flag that indicates whether to display the currency code.Valid
   * values:
   *
   * true: do not display the country code; numeric value only
   *
   * false: display the country code
   *
   *
   * Default: false
   */
  thenAdaptCurrency(
    currencyCode: string,
    outputNumericCurrencyValue?: boolean,
  ): any;
  /**
   * Adds an adapter to the current rule that converts the source field from one unit of
   * measure to another, such as from minutes to seconds or weeks to days.
   * @param inputDuration Current unit of measure of the source field.Valid values:
   *
   * NANOSECOND
   *
   * MICROSECOND
   *
   * MILLISECOND
   *
   * SECOND
   *
   * MINUTE
   *
   * HOUR
   *
   * DAY
   *
   * WEEK
   *
   *
   * @param outputDuration Unit of measure to convert the source field to in the output.Valid
   * values:
   *
   * NANOSECOND
   *
   * MICROSECOND
   *
   * MILLISECOND
   *
   * SECOND
   *
   * MINUTE
   *
   * HOUR
   *
   * DAY
   *
   * WEEK
   *
   *
   */
  thenAdaptDuration(inputDuration: string, outputDuration: string): any;
  /**
   * Adds an adapter to the current rule that adds the passed in value to the source
   * field.
   * @param operand Value to add to the source field.
   */
  thenAdd(operand: number): any;
  /**
   * Adds an adapter to the current rule that searches the associated source field for a
   * list of strings and replaces them in the output with the specified replacement
   * values.
   * @param map Name/value pairs.
   * name: text to locate in the source data element
   *
   *
   * value: text to replace it with in the output
   *
   *
   */
  thenApplyMap(map: any): any;
  /**
   * Adds an adapter to the current rule that matches a specified regex pattern to content
   * in the source field and then replaces/reformats that content with a second regex pattern and
   * stores that value in the output.
   * @param matchPattern Regex pattern to use to locate the text to replace/reformat.
   * @param outputPattern Regex pattern to use to update the located text.
   */
  thenApplyPattern(matchPattern: string, outputPattern: string): any;
  /**
   * Adds an action to the current rule to round the source field up at the decimal position
   * specified by the passed in value.
   * @param operand Decimal position to the right of the decimal point at which to round the number
   * up (apply ceiling). For example, if this value is 2 and the source data element
   * is 6.421, the resulting value is 6.43.
   */
  thenCeiling(operand: number): any;
  /**
   * Adds an adapter to the current rule that concatenates the passed in string to the
   * output field.
   * @param value Text to concatenate to the end of the current data element.
   */
  thenConcat(value: string): any;
  /**
   * Adds an adapter to the current rule that concatenates the value of a field previously
   * defined in the rules list to the current output field.
   * @param symbol Name of the rules list element to append to the output field.
   */
  thenConcatSymbol(symbol: string): any;
  /**
   * Adds an adapter to the current rule that divides the source field by the passed in
   * value.
   * @param operand Value by which to divide the source field.
   */
  thenDivideBy(operand: number): any;
  /**
   * Adds an adapter to the current rule that divides the passed in value by the source
   * field.
   * @param operand Value into which to divide the source field.
   */
  thenDivideInto(operand: number): any;
  /**
   * Adds an adapter to the current rule that rounds the source field down at the decimal
   * position specified by the passed in value and stores it in the output.
   * @param operand Decimal position to the right of the decimal point at which to round the number
   * down (apply floor). For example, if this value is 2 and the source data element
   * is 6.427, the resulting value is 6.42.
   */
  thenFloor(operand: number): any;
  /**
   * Adds an adapter to the current rule that reformats the content in the source field that
   * matches the specified match pattern, with the specified output pattern.
   * @param matchPattern Pattern to match against the source field.Valid values:
   *
   * @: any character
   *
   * #: decimal digit
   *
   * \: literal escape (\@ for the @ symbol)
   *
   *
   * @param outputPattern Pattern to replace the content with in the output.Valid values:
   *
   * @: any character
   *
   * #: decimal digit
   *
   * \: literal escape (\@ for the @ symbol)
   *
   *
   */
  thenFormat(matchPattern: string, outputPattern: string): any;
  /**
   * Adds an adapter to the current rule that compares the passed in value against the
   * source field and copies the greater of the two values to the output field.
   * @param operand Value to compare to the source field.
   */
  thenMax(operand: number): any;
  /**
   * Adds an adapter to the current rule that compares the passed in value against the
   * source field and copies the lower of the two values to the output field.
   * @param operand Value to compare to the source field.
   */
  thenMin(operand: number): any;
  /**
   * Adds an adapter to the current rule that multiplies the source field by the passed in
   * value.
   * @param operand Value by which to multiply the source field.
   */
  thenMultiply(operand: number): any;
  /**
   * Adds an adapter to the current rule that finds all text within the source field that
   * matches a specified string and replaces it with an updated string.
   * @param matchString String to match against the source field to identify the text to
   * replace.
   * @param replaceString String with which to replace the matching text.
   */
  thenReplace(matchString: string, replaceString: string): any;
  /**
   * Adds an adapter to the current rule that rounds the source data element up at the
   * decimal position specified by the passed in value.
   * @param operand Decimal position to the right of the decimal point at which to round the number
   * up. For example, if this value is 2 and the source data element is 6.422, the
   * resulting value is 6.43.
   */
  thenRoundUp(operand: number): any;
  /**
   * Adds an adapter to the current rule that rounds the source field down at the decimal
   * position specified by the passed in value.
   * @param operand Decimal position to the right of the decimal point at which to round the number
   * down. For example, if this value is 2 and the source data element is 6.427, the
   * resulting value is 6.42.
   */
  thenRoundDown(operand: number): any;
  /**
   * Adds an adapter to the current rule that splits, reorganizes, and replaces strings
   * within the source field and saves them in the output field.
   * @param splitPattern String that denotes how to split the text into segments.
   * @param replaceString String that defines the output string, including segment references and
   * constants. Not all segments need to be referenced. Reference the segments defined
   * by the splitPattern using $#, where # is the number of the
   * order of the segment in the source data element. Reference the entire source data
   * element using $0.
   */
  thenSplit(splitPattern: string, replaceString: string): any;
  /**
   * Adds an adapter to the current rule that subtracts the passed in value from the source
   * field and stores it in the output field.
   * @param operand Value to subtract from the source data element.
   */
  thenSubtract(operand: number): any;
}
export { TransformerRuleList };
