declare class GlideFilter {
  constructor(filter: string, title: string);
  /**
   * Compares a specified filter to the contents of a specified GlideRecord.
   * @param now_GR GlideRecord to evaluate.
   * @param filter Encoded query string in standard Glide format.
   * See Encoded query
   * strings.To exclude null values from GlideFilter query results, add
   * ISNOTEMPTY to the query condition.
   * Note: The filter values
   * are case-sensitive. In addition, you cannot use setCaseSensitive(false) to change the change the
   * case-sensitive value.
   * @param match Optional. Flag that indicates whether all conditions must be met if the
   * filter parameter contains multiple conditions. Valid
   * values:
   *
   * true: All conditions must be met for the method to return true.
   *
   * false: Only one of the conditions must be met for the method to return
   * true.
   *
   *
   * Default: true
   */
  checkRecord(now_GR: any, filter: string, match?: boolean): any;
  /**
   * Evaluates a filter against a specified GlideRecord.
   * @param now_GR GlideRecord to evaluate.
   * @param match Flag that indicates whether all filter conditions must match.
   *
   * Valid values:
   * true: All filter conditions must match.
   *
   * false: Filter condition match is not required.
   *
   *
   *
   *
   * Default: false
   */
  match(now_GR: any, match: boolean): any;
  /**
   * Enables or disables case-sensitive filter results.
   * @param caseSensitive Flag that indicates whether the filter is case-sensitive.Valid values:
   * true: The filter is case-sensitive.
   *
   * false: The filter is case-insensitive.
   *
   *
   *
   * Default: true
   */
  setCaseSensitive(caseSensitive: boolean): any;
}
export { GlideFilter };
