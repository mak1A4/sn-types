declare class CatCategory {
  /**
   * Adds the Available For user criteria to the current catalog
   * category.
   * @param action Action to perform.
   * add: Adds the user criteria to the Available
   * For list.
   *
   * delete: Deletes the user criteria from the
   * Available For list.
   *
   *
   * @param criteriaIDs Array of the user criteria sys_ids.
   */
  availableForUserCriteria(action: string, criteriaIDs: any[]): any;
  /**
   * Determines whether a specified user can view a specified category on a mobile device or
   * desktop.
   * @param isMobile Flag that indicates whether to verify the user for access on a mobile device or desktop.
   * true: Validate for mobile.
   *
   * false: Validate for desktop.
   *
   *
   * @param userSysId Sys_id of the user to validate.
   */
  canView(isMobile: boolean, userSysId: string): any;
  /**
   * Insert the defined category.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable engines and workflow.
   *
   * false: Do not enable engines and workflow.
   *
   *
   *
   */
  create(standardUpdate: boolean): any;
  /**
   * Deletes the category record on which the CatCategory class was initially
   * instantiated.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable engines and workflow.
   *
   * false: Do not enable engines and workflow.
   *
   *
   *
   */
  deleteRecord(standardUpdate: boolean): any;
  /**
   * Returns the sys_id of the current category.
   */
  getID(): any;
  /**
   * Adds the Not Available For user criteria to a catalog
   * category.
   * @param action Action to perform.
   * add: Adds the user criteria to the Not
   * Available For list.
   *
   * delete: Deletes the user criteria from the
   * Not Available For list.
   *
   *
   */
  notAvailableForUserCriteria(action: string): any;
  /**
   * Returns a mapping of the category.
   * @param columns Set of columns that you would like the values for.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable engines and workflow.
   *
   * false: Do not enable engines and workflow.
   *
   *
   *
   */
  read(columns: any, standardUpdate: boolean): any;
  /**
   * Defines the attribute values for this category.
   * @param attributes Attributes for the new field and value pairs.
   */
  setAttributes(attributes: any): any;
  /**
   * Defines the table name for this category.
   * @param tableName Name of the table that extends sc_category.
   */
  setTableName(tableName: string): any;
  /**
   * Updates the current category with the specified name-value pairs.
   * @param columnValues Mapping of column names to values.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable engines and workflow.
   *
   * false: Do not enable engines and workflow.
   *
   *
   *
   */
  update(columnValues: any, standardUpdate: boolean): any;
}
export { CatCategory };
