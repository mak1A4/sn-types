declare class IdentificationEngine {
  /**
   * Inserts or updates
   * configuration items (CI) and non-Configuration Management Database (CMDB) CIs
   * (classes not extending from cmdb_ci) in the CMDB based on identification and reconciliation rules. Use this API instead of
   * updating the CMDB directly.
   * @param input Required. Input payload. A JSON formatted string of
   * configuration items to add or update.
   * "input" {
   * "items": [Array],
   * "referenceItems": [Array],
   * "relations": [Array]
   * }
   * @param source Identifies the data source of the CI information. This value must be one of the
   * choice values defined for the discovery_source field of the cmdb_ci table.
   */
  createOrUpdateCI(input: string, source: string): any;
  /**
   * Inserts or updates
   * configuration items (CI) and non-Configuration Management Database (CMDB) CIs
   * (classes not extending from cmdb_ci) in the CMDB based on identification and reconciliation rules. Use this API instead of
   * updating the CMDB directly.
   * @param input Required. Input payload. A JSON formatted string of
   * configuration items to add or update.
   * "input" {
   * "items": [Array],
   * "referenceItems": [Array],
   * "relations": [Array]
   * }
   * @param options Optional, but {} or null must be passed-in. Options to enable
   * or disable features.Note: By default or if partial_payloads is
   * set to true, both partial_commits and
   * deduplicate_payloads are enabled, even if they are set to
   * false, as those features are essential for partial payloads
   * functionality.
   * "options": {
   * "deduplicate_payloads": "Boolean",
   * "generate_summary": "Boolean",
   * "partial_commits": "Boolean",
   * "partial_payloads": "Boolean",
   * "skip_updating_last_scan_to_now": "Boolean",
   * "skip_updating_source_last_discovered_to_now": "Boolean"
   * }
   * @param source Data source of the CI information. This value must be one of
   * the choice values defined for the discovery_source field of the Configuration Item
   * [cmdb_ci] table.
   */
  createOrUpdateCIEnhanced(
    input: string,
    options: any | undefined,
    source: string,
  ): any;
  /**
   * Determines the operation (insert/update) to perform with the specified payload without
   * committing the operation in the database.
   * @param jsonString A JSON formatted string of configuration items to be added or updated. Each
   * input string is in the format  'items: [{}], relations:[{}]', where each item within
   * the items and relations lists contains name-value pairs. The possible name-value
   * pairs within the items list are:
   * className - Sys_class_name of the CI to be created or updated.
   *
   * values:{} - Field information for the CI as name-value pairs, where the name
   * is the field name.
   *
   * lookup:[{}] - List of records with each item having name-value pairs like
   * the items list.
   *
   *
   *
   * The possible name-value pairs within the relations list are:
   * parent - Index of the parent item in the dependency relation
   *
   * child - Index of the child item in the dependency relation
   *
   * type - Relationship type. This is one of the name field values from the
   * cmdb_rel_type table.
   *
   *
   *
   */
  identifyCI(jsonString: string): any;
  /**
   * Determines the Configuration Management Database (CMDB) operation (insert/update)
   * to perform with the specified payload (request body), without committing the operations in the
   * database.
   * @param input Required. Input payload. A JSON formatted string of
   * configuration items to add or update.
   * "input" {
   * "items": [Array],
   * "referenceItems": [Array],
   * "relations": [Array]
   * }
   * @param options Optional, but {} or null must be passed-in. Options to enable
   * or disable features.Note: By default or if partial_payloads is
   * set to true, both partial_commits and
   * deduplicate_payloads are enabled, even if they are set to
   * false, as those features are essential for partial payloads
   * functionality.
   * "options": {
   * "deduplicate_payloads": "Boolean",
   * "generate_summary": "Boolean",
   * "partial_commits": "Boolean",
   * "partial_payloads": "Boolean",
   * "skip_updating_last_scan_to_now": "Boolean",
   * "skip_updating_source_last_discovered_to_now": "Boolean"
   * }
   * @param source Data source of the CI information. This value must be one of
   * the choice values defined for the discovery_source field of the Configuration Item
   * [cmdb_ci] table.
   */
  identifyCIEnhanced(
    input: string,
    options: any | undefined,
    source: string,
  ): any;
  /**
   * Runs an identification audit against the specified configuration item (CI) to detect
   * duplicates.
   * @param now_GR CI on which to run the audit to detect duplicates. The CI must have independent
   * identification rules.
   */
  runIdentificationAudit(now_GR: any): any;
}
export { IdentificationEngine };
