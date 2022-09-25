declare class CatItem {
  /**
   * Adds the Available For user criteria to the current catalog
   * item.
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
   * Verifies whether the current catalog item is viewable in the selected domain (domain
   * selected in the domain picker).
   */
  canViewInDomain(): any;
  /**
   * Determines if the user has access to view the catalog item on global
   * search.
   * @param isMobile Flag that indicates whether to perform the search for the mobile or desktop
   * view.
   *
   * Valid values:
   * true: Perform the search for the mobile view.
   *
   * false: Perform the search for the desktop view.
   *
   *
   *
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
   * Deletes a catalog item.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable the running of engines and workflow.
   *
   * false: Do not enable the running of engines and workflow.
   *
   *
   *
   */
  deleteRecord(standardUpdate: boolean): any;
  /**
   * Returns the first category that the user can view in a catalog.
   * @param catalogId Sys_id of the catalog.
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
   * item.Default: Checks whether the calling user has acquisition rights to the
   * item.
   */
  isDelegationAllowed(delegatedUser?: string): any;
  /**
   * Determines if the current catalog item is available in service portal.
   */
  isVisibleServicePortal(): any;
  /**
   * Adds the Not Available For user criteria to a catalog
   * item.
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
   * Returns a mapping of catalog item attribute values.
   * @param columns Name-value pairs of columns for which to return values.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable the running of engines and workflow.
   *
   * false: Do not enable the running of engines and workflow.
   *
   *
   *
   */
  read(columns: any, standardUpdate: boolean): any;
  /**
   * Sets attributes for a catalog item.
   * @param attributes Name-value pairs of the columns for which to set.
   */
  setAttributes(attributes: any): any;
  /**
   * Defines the catalogs that this catalog item is associated with.
   * @param catalogs Comma-separated list of sys_ids of the catalogs to associate with the item the
   * item.
   */
  setCatalogs(catalogs: string): any;
  /**
   * Defines the categories that this catalog item is associated with.
   * @param categories Comma-separated list of sys_ids of the categories to associate with the item
   * the item.
   */
  setCategories(categories: string): any;
  /**
   * Adds an image to a catalog item.
   * @param dbImageSysId Sys_id of the image from the Images table [db_image].
   * @param type Type of image. Valid values:
   * picture
   *
   * icon
   *
   *
   *
   */
  setImage(dbImageSysId: string, type: string): any;
  /**
   * Defines the table name for this catalog item.
   * @param tableName Name of the table that extends Catalog Item [sc_cat_item].
   */
  setTableName(tableName: string): any;
  /**
   * Creates a record using a specified Service Catalog record
   * producer.
   * @param values Contains the field values and record producer to use when creating the
   * record.{
   * "variables": {Object},
   * "sysparm_id": "String"
   * }
   */
  submitProducer(values: any): any;
  /**
   * Updates the values for specified fields of a catalog item.
   * @param columnValues Name-value pairs of the fields to update and their associated values.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable the running of engines and workflow.
   *
   * false: Do not enable the running of engines and workflow.
   *
   *
   *
   */
  update(columnValues: any, standardUpdate: boolean): any;
}
export { CatItem };
