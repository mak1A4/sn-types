declare class DSCScriptableAPI {
  constructor();
  /**
   * Checks a list of comma-separated tables for invalid domains.
   * @param tableNames Comma-separated list of table names.
   */
  chkDataInvalidDomainForTables(tableNames: string): any;
  /**
   * Checks a list of comma-separated tables for invalid domain paths.
   * @param tableNames Comma-separated list of table names.
   */
  chkDataInvalidPathForTables(tableNames: string): any;
}
export { DSCScriptableAPI };
