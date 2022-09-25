declare class CMDBUtil {
  /**
   * Applies proposed changes in a task_ci record that represent an update set for all CIs
   * associated with the task.
   * @param proposedChanges The collection of proposed changes in the change request (CHG).
   */
  baselineProposedChangesApplyChanges(proposedChanges: any): any;
  /**
   * Generates the XML for proposed changes diff, and adds it to the corresponding task_ci
   * record.
   * @param current The GlideRecord that contains the collection of proposed changes.
   * @param changeSet The sysid of the task_ci record that represents the change set to use.
   */
  baselineProposedChangesGenDiff(current: any, changeSet: string): any;
  /**
   * Bootstraps the environment by creating the database, creating the system dictionary
   * table, and having the system dictionary table describe itself.
   * @param dictFile The file name including path, of the dictionary to load.
   */
  bootstrap(dictFile: string): any;
  /**
   * Creates a CI relationship between fields.
   * @param tableName Optional. The name of the relationship target table.Default: CI Relationship
   * [cmdb_rel_ci] table.
   * @param parent Sys_id of the parent CI record in the Configuration Items [cmdb_ci]
   * table.
   * @param child Sys_id of the child CI record in the Configuration Items [cmdb_ci]
   * table.
   * @param parentField The parent relationship label listed in the CI Relationship Type
   * [cmdb_rel_type] table.
   * @param childField The child relationship label listed in the CI Relationship Type [cmdb_rel_type]
   * table.
   */
  createCIRelationship(
    tableName: string | undefined,
    parent: string,
    child: string,
    parentField: string,
    childField: string,
  ): any;
  /**
   * Gets all the child tables of the specified table as a comma-separated list.
   * @param baseTable The base table name.
   */
  getAllChildrenOfAsCommaList(baseTable: string): any;
  /**
   * Gets all the records in the CMDB View [cmdb_view] table.
   */
  getCMDBViews(): any;
  /**
   * Gets a list of all the parents of a table.
   * @param tableName The table name.
   */
  getTables0(tableName: string): any;
  /**
   * Determines whether a CI class is defined in the Business Rule Exclusion Lists
   * [cmdb_business_rule_exclusions] table. Use this method in an advanced condition to prevent a
   * business rule from executing on excluded CI classes.
   * @param className Name of the class to check for exclusion.
   */
  isExcludedFromBR(className: string): any;
  /**
   * Wraps the call to RelationshipEventProcessor(), which processes any
   * changes to CI relationships.
   * @param event The event record.
   * @param target The target record.
   */
  processCIChange(event: any, target: any): any;
  /**
   * Wraps the call to RelationshipEventProcessor(), which processes any
   * changes to CI relationships, with the specified type and triplet.
   * @param event The event record
   * @param current The current record, which is either the relation record or a user record if the
   * current process is a deletion.
   * @param relType The type of relation that changed.
   * @param triplet The child, parent, and class name from the relation that changed.
   */
  processRelChange(
    event: any,
    current: any,
    relType: string,
    triplet: string,
  ): any;
  /**
   * Deletes the specified CI relationship.
   * @param tableName Optional. Table nameDefault: CI Relationship [cmdb_rel_ci] table
   * @param parentField Parent field
   * @param childField Child field
   * @param parentDesc Parent relationship descriptor
   * @param childDesc Child relationship descriptor
   */
  removeCIRelationship(
    tableName: string | undefined,
    parentField: string,
    childField: string,
    parentDesc: string,
    childDesc: any,
  ): any;
  /**
   * Changes the parent of the given table to the new parent.
   * @param table The table to re-parent.
   * @param oldParent The old parent.
   * @param newParent The new parent.
   */
  reParentTable(table: string, oldParent: string, newParent: string): any;
}
export { CMDBUtil };
