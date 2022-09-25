declare class CatalogJS {
  constructor(now_GR: any);
  constructor(sys_id: string);
  /**
   * Determines whether a user can view the current category on a mobile device or
   * desktop.
   * @param mobile Flag that indicates whether to check if the user can view the current catalog on
   * a mobile view or desktop view.
   *
   * Valid values:
   * true: Mobile view
   *
   * false: Desktop view
   *
   *
   *
   * @param userId Optional. Sys_id of the user to check if they can view the catalog.Default:
   * Current user
   */
  canView(mobile: boolean, userId?: string): any;
  /**
   * Returns the available active catalog.
   */
  getAvailableCatalog(): any;
  /**
   * Returns the catalog background color.
   */
  getBackgroundColor(): any;
  /**
   * Returns the number of catalogs active in the catalog table.
   */
  getCatalogCount(): any;
  /**
   * Returns the categories for the current catalog.
   */
  getCategories(): any;
  /**
   * Specifies the sys_ids of the categories in the current catalog.
   */
  getCategoryIds(): any;
  /**
   * Returns the description of the current catalog.
   */
  getDescription(): any;
  /**
   * Returns the catalog desktop image file name.
   */
  getDesktopImageSRC(): any;
  /**
   * Returns the current catalog's GlideRecord.
   */
  getGr(): any;
  /**
   * Returns the current catalog's header icon.
   */
  getHeaderIconSRC(): any;
  /**
   * Returns the sys_id of the current catalog.
   */
  getID(): any;
  /**
   * Returns the title of the current catalog.
   */
  getTitle(): any;
  /**
   * Specifies if the current catalog has categories.
   */
  hasCategories(): any;
  /**
   * Specifies if the current catalog has catalog items.
   */
  hasItems(): any;
  /**
   * Specifies if the wish list is enabled for the current catalog.
   */
  isWishlistEnabled(): any;
}
export { CatalogJS };
