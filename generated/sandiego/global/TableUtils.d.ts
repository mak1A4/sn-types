declare class TableUtils {
  constructor(tableName: string);
  /**
   * Drops a database table.
   * @param tableName Name of the table to drop
   */
  drop(tableName: string): any;
  /**
   * Drops a database table and cleans up references to the table.
   * @param tableName Name of the table to drop
   */
  dropAndClean(tableName: string): any;
  /**
   * Drops a database table, all of it's extended tables, and cleans up references to the
   * tables.
   * @param tableName The table to drop
   */
  dropTableAndExtensions(tableName: string): any;
  /**
   * Returns the base table name from which the table was extended.
   */
  getAbsoluteBase(): any;
  /**
   * Returns the list of tables that extend a table, includes the base table.
   */
  getAllExtensions(): any;
  /**
   * Returns a list of all classes participating in the hierarchy of the specified
   * table.
   */
  getHierarchy(): any;
  /**
   * Returns a list of tables that extend a table.
   */
  getTableExtensions(): any;
  /**
   * Returns the table hierarchy.
   */
  getTables(): any;
  /**
   * Determines if a table has been extended.
   */
  hasExtensions(): any;
  /**
   * Determines if a table is a base class, meaning it has no parents and has
   * extensions.
   */
  isBaseClass(): any;
  /**
   * Determines if the table has no parents and no extensions.
   */
  isSoloClass(): any;
  /**
   * Checks to see if a table exists.
   */
  tableExists(): any;
}
export { TableUtils };
