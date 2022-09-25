declare class CatItem {
  /**
   * Adds the Available For user criteria to a catalog
   * item.
   * @param action Specify add to add the user criteria to the
   * Available For list. Specify
   * delete to delete the user criteria from the
   * Available For list.
   * @param criteriaIDs Array of the user criteria sys_ids.
   */
  availableForUserCriteria(action: string, criteriaIDs: any[]): any;
  /**
   * Verifies whether the current catalog item is viewable in the selected domain (domain
   * selected in the domain picker).
   */
  canViewInDomain(): any;
  /**
   * Specifies if the user has access to view the catalog item on global search.
   * @param isMobile True if the search is in mobile view. Else, false.
   */
  canViewOnSearch(isMobile: boolean): any;
  /**
   * Inserts the defined catalog item.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable the running of engines and workflow.
   *
   * false: Do not enable the running of engines and workflow. Note that the
   * created and updated system date columns on the table are not updated.
   *
   *
   *
   */
  create(standardUpdate: boolean): any;
  /**
   * Delete the defined catalog item.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  deleteRecord(standardUpdate: boolean): any;
  /**
   * Specifies the first category that the user can view in a catalog.
   * @param catalogId sys_id of the catalog.
   */
  getFirstAccessibleCategoryForSearch(catalogId: string): any;
  /**
   * Returns an array of users for whom the associated item cannot be delegated (requested
   * on behalf of).
   * @param requestForUsers Array of user sys_ids to check whether the associated user can acquire the
   * current item and that the item can be requested on behalf of them. User sys_ids are
   * located in the Users [sys_user] table.
   */
  getInvalidDelegatedUsers(requestForUsers: any): any;
  /**
   * Returns the class name for the current catalog item record.
   */
  getRecordClass(): any;
  /**
   * Verifies whether the specified delegated user has acquisition rights to the current
   * service catalog item.
   * @param delegatedUser Optional. Sys_id of the user to request the service catalog item for
   * (delegate). The method verifies whether the user has acquisition rights to the
   * item. Default: Checks whether the calling user has acquisition rights to the
   * item.
   */
  isDelegationAllowed(delegatedUser?: string): any;
  /**
   * Specifies if the catalog item is available in service portal.
   */
  isVisibleServicePortal(): any;
  /**
   * Adds the Not Available For user criteria to a catalog
   * item.
   * @param action Specify add to add the user criteria to the
   * Not Available For list. Specify
   * delete to delete the user criteria from the
   * Not Available For list.
   */
  notAvailableForUserCriteria(action: string): any;
  /**
   * Get a mapping of catalog item attribute values.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   * @param columns Specify the set of columns that you would like the values for.
   */
  read(standardUpdate: boolean, columns: any): any;
  /**
   * Define attribute values for this catalog item.
   * @param attributes An object mapping column names to values.
   */
  setAttributes(attributes: any): any;
  /**
   * Define the catalogs that this catalog item is associated with.
   * @param catalogs Specify comma-separated list of catalogs that you would like the item to be
   * associated with.
   */
  setCatalogs(catalogs: string): any;
  /**
   * Define the categories that this catalog item is associated with.
   * @param categories Specify comma-separated list of categories that you would like the item to be
   * associated with.
   */
  setCategories(categories: string): any;
  /**
   * Set the image of a catalog item to a database image record.
   * @param dbImageSysId sys_id of an attachment referencing the db_image.
   * @param type Type can be picture or an icon.
   */
  setImage(dbImageSysId: string, type: string): any;
  /**
   * Define the table name for this catalog item.
   * @param tableName Specify the name of the table that extends sc_cat_item.
   */
  setTableName(tableName: string): any;
  /**
   * Use to update current catalog item with set values.
   * @param columnValues An object mapping column names to values.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  update(columnValues: any, standardUpdate: boolean): any;
}
export { CatItem };
