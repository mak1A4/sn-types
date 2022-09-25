declare class PAScorecard {
  /**
   * Add a query parameter to filter the returned scores.
   * @param uuid Enter a colon-separated list of sys_id values to specify which indicators,
   * breakdowns, aggregates, and domains to query. The parameter follows this
   * format:&lt;indicator sys_id&gt;:&lt;breakdown sys_id&gt;:&lt;element
   * sys_id&gt;:&lt;lvl-2 breakdown sys_id&gt;:&lt;lvl-2 element sys_id&gt;:&lt;aggregate
   * sys_id&gt;:&lt;domain_sys_id&gt;
   * The parameter must begin with the sys_id of an indicator record.
   * Optionally, you can append the sys_id values of a breakdown and breakdown element
   * to group the response based on the breakdown, and the sys_id of an aggregate to
   * apply that aggregate. You can use a breakdown with an aggregate, or use only
   * one.
   * For information about obtaining the sys_id values of records, see Unique record identifier (sys_id).
   *
   * Note: If an indicator is configured to use a
   * Default time series, all Analytics Hub values for that indicator use that time series aggregation.
   * @param breakdown Sys_id of a breakdown to return chart information
   * organized as defined by the breakdown. For example, the sys_id of a priority
   * breakdown to return separate task chart information for each priority value, such as
   * the number of open incidents / Priority / 2 - High.Data type: String
   * @param breakdown_relation Specify the sys_id of a breakdown relation to break down the returned data
   * using that relation. You can view available breakdown relations by setting the
   * include_available_breakdowns parameter to
   * true.
   * @param elements_filter Specify the sys_id of an elements filter to apply that filter to the returned
   * data.
   * @param display Flag that indicates the type of indicators to
   * return.Valid values:
   * true: Return only indicators that display on the Analytics Hub.
   *
   * all: Return all indicators.
   *
   *
   *
   * Data type: String
   * Default: true
   * @param favorites Flag that indicates whether to return only indicators
   * that are favorites of the querying user.Valid values:
   * true: Return only indicators that are favorites of the querying user.
   *
   * false: Return all indicators.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param key Flag that indicates whether to return results only for
   * key indicators.Valid values:
   * true: Return the trendline_scores element.
   *
   * false: Do not return the trendline_scores element .
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param target Flag that indicates whether to return results only for
   * indicators that have a target set on the Analytics Hub.Valid values:
   * true: Only return results for indicators that have a target set.
   *
   * false: Return results for all applicable indicators.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param contains Comma-separated list of names or descriptions to return
   * results only from indicators with a matching value. All the comma-separated list
   * items must match, or no results are returned: The list follows AND logic, not OR
   * logic.Data type: String
   * @param tags Enter an indicator group sys_id to return the indicators in that group. Do not
   * use uuid with this parameter.
   * @param per_page Maximum number of indicators each query can return on a
   * page. Data type: Number
   * Default: 10
   * Maximum: 100
   * @param page Specify the page number. For example, when querying 20 Analytics Hubs with the default per_page value (10), specify a page value of 2 to retrieve Analytics Hubs 11-20.
   * @param sortby Value to use when sorting results. Valid values:
   * bullet
   *
   * change
   *
   * changeperc
   *
   * date
   *
   * default
   *
   * direction
   *
   * duedate
   *
   * frequency
   *
   * gap
   *
   * gapperc
   *
   * group
   *
   * indicator_group
   *
   * name
   *
   * order
   *
   * target
   *
   * trend
   *
   * value
   *
   *
   *
   * Data type: String
   * Default: value
   * @param sortdir Sort direction.Valid values:
   * asc: Denotes ascending
   *
   * des: Denotes descending
   *
   *
   *
   * Data type: String
   * Default: Descending
   * @param display_value Data retrieval operation for reference and choice fields.Based on this
   * value, the display value and/or the actual value in the database are retrieved.
   * true returns display values for all of the fields.
   *
   * false returns actual values from the database. If a value
   * is not specified, this parameter defaults to false.
   *
   * all returns both actual and display values.
   *
   *
   *
   * @param exclude_reference_link Flag that indicates whether to hide additional
   * information provided for reference fields, such as the URI to the reference
   * resource.Valid values:
   * true: Hide additional information provided for reference fields.
   *
   * false: Do not hide additional information provided for reference
   * fields.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_scores Flag that indicates whether to
   * return indicator scores for the entire time range selected on the Analytics Hub. If a value is not specified, this parameter defaults to false and returns only
   * the most recent score value.To constrain the date range of the scores that are returned, combine this
   * parameter with the from and to
   * parameters.
   * @param from Earliest date to return scores
   * from. Only scores from this date or later are returned. This parameter requires that include_scores is set to
   * true.
   * @param to Latest date from which to return
   * scores. Only scores from this date or earlier are returned.  This parameter requires that include_scores is set to
   * true.
   * @param step Numeric value to skip scores, based on the indicator
   * frequency. For example, specify a value of 3 to return only scores from every third
   * day for a daily indicator, or from every third week for a weekly indicator. Data
   * type: Number
   * @param limit Maximum number of scores to return.Data type:
   * Number
   * @param include_available_breakdowns Flag that indicates whether to return all available
   * breakdowns for an indicator.Valid values:
   * true: Return all available breakdowns for an indicator.
   *
   * false: Return no breakdowns.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_available_aggregates Flag that indicates whether to return all possible
   * aggregates for an indicator, including aggregates that have already been
   * applied.Valid values:
   * true: Return all possible aggregates for an indicator, including aggregates
   * that have already been applied.
   *
   * false: Return no aggregates.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_realtime Flag that indicates whether to return the
   * realtime_enabled element which indicates if real-time scores are enabled for the
   * indicator, and the realtime_value element which contains the real-time score value.
   * This parameter is not supported for formula indicators.Valid values:
   * true: Return the realtime_enabled element.
   *
   * false: Do not return the realtime_enabled element.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_target_color_scheme Flag that indicates whether to return the
   * target_color_scheme element that contains the minimum and maximum values, and the
   * color of each section of the target color scheme for the Analytics Hub.Valid values:
   * true: Return the target_color_scheme element.
   *
   * false: Do not return the target_color_scheme element.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_forecast_scores Flag that indicates whether
   * to return the forecast_scores element that contains an array of date-value pairs
   * that define the forecast data for the Analytics Hub.This paramater requires that the include_scores
   * parameter is also set to true.
   * @param include_trendline_scores Flag that indicates whether
   * to return the trendline_scores element that contains an array of date-value pairs
   * that define the Analytics Hub trendline.This paramater requires that the include_scores
   * parameter is also set to true.
   */
  addParam(
    uuid: string | undefined,
    breakdown: string,
    breakdown_relation: string,
    elements_filter: string,
    display: string,
    favorites: string,
    key: string,
    target: string,
    contains: string,
    tags: string,
    per_page: string,
    page: string,
    sortby: string,
    sortdir: string,
    display_value: string,
    exclude_reference_link: string,
    include_scores: string,
    from: string,
    to: string,
    step: string,
    limit: string,
    include_available_breakdowns: string,
    include_available_aggregates: string,
    include_realtime: string,
    include_target_color_scheme: string,
    include_forecast_scores: string,
    include_trendline_scores: string,
  ): any;
  /**
   * Perform a query based on the specified parameters and return the results as an
   * object.
   */
  query(): any;
  /**
   * Get the last query result as an object.
   */
  result(): any;
}
export { PAScorecard };
