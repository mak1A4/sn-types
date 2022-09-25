declare class GlideSPSearchAnalytics {
  /**
   * Sends search data to the Search Events [sys_search_event] and Search Source Events
   * [sys_search_source_event] tables for search results, or to the Search Result Clicked
   * [sys_search_result_clicked] table when a user clicks a search result.
   * @param payload JSON payload in String format containing the search data to send to the Search
   * Events [sys_search_event] and Search Source Events [sys_search_source_event] tables
   * for search results, or the Search Result Clicked [sys_search_result_clicked] table
   * when a user clicks a search result. Structure the payload as key-value pairs
   * according to the type of search data you would like to collect.
   * Collect data when the user searches for a term:
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * page_id: String. Sys_id of the page record from
   * the Pages [sp_page] table.
   *
   * results_per_source: Array. Number of results returned
   * from each search source.
   * source_id: String. Sys_id of the search source record
   * from the Search Sources [sp_search_source] table.
   *
   * number_of_results: Number. Number of results returned
   * from the query for the specific search source.
   *
   *
   *
   *
   *
   *
   * search_results: Array. Results returned in the first page
   * of search results.
   * record_id: String. Sys_id of the search result
   * record.
   *
   * table_name: String. Name of the table in which the
   * search result record was found.
   *
   *
   *
   *
   * refinement_occurred: Boolean. True if the
   * user filtered the search results; otherwise false.
   *
   *
   *
   *
   *
   * Collect data when a user refines their search results:
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * page_id: String. Sys_id of the page record from
   * the Pages [sp_page] table.
   *
   * refinement_occurred: Boolean. True if the
   * user filtered the search results; otherwise false.
   *
   *
   *
   *
   * Collect the rank of the search result that the user selected.
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * click_rank: Number. Rank of the item the
   * user selected. For example, if the user clicked the third item in a list of search
   * results, the value is 3.
   *
   *
   *
   *
   * Collect information on the search result that the user clicks. Data logs to
   * the Search Result Clicked [sys_search_result_clicked] table.
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * page_id: String. Sys_id of the page record from
   * the Pages [sp_page] table.
   *
   * results_per_source: Array. Number of results returned
   * from each search source.
   * source_id: String. Sys_id of the search source record
   * from the Search Sources [sp_search_source] table.
   *
   * number_of_results: Number. Number of results returned
   * from the query for the specific search source.
   *
   *
   *
   *
   * refinement_occurred: Boolean. True if the
   * user filtered the search results; otherwise false.
   *
   * click_rank: Number. Rank of the item the
   * user selected. For example, if the user clicked the third item in a list of search
   * results, the value is 3.
   *
   * browser_info: String. Logs browser name, version, and
   * platform.
   *
   * location: Float. Logs latitude and longitude coordinates
   * of the user location.
   *
   * result_clicked_sys_id: String. Sys_id of the result the
   * user selected.
   *
   * label_description: String. Description of the result that
   * the user selected.
   *
   * source_table: String. Name of the source table containing
   * the selected result.
   *
   *
   *
   *
   * Collect data when a user searches for a term and collect the rank of the
   * search result that the user clicked:
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * page_id: String. Sys_id of the page record from
   * the Pages [sp_page] table.
   *
   * results_per_source: Array. Number of results returned
   * from each search source.
   * source_id: String. Sys_id of the search source record
   * from the Search Sources [sp_search_source] table.
   *
   * number_of_results: Number. Number of results returned
   * from the query for the specific search source.
   *
   *
   *
   *
   *
   *
   * search_results: Array. Summary of records returned in the
   * first page of search results.
   * record_id: String. Sys_id of the search result
   * record.
   *
   * table_name: String. Name of the table in which the
   * search result record was found.
   *
   *
   *
   *
   * click_rank: Number. Rank of the item the
   * user selected. For example, if the user clicked the third item in a list of search
   * results, the value is 3.
   *
   *
   *
   *
   *
   *
   */
  publish(payload: string): any;
}
export { GlideSPSearchAnalytics };
