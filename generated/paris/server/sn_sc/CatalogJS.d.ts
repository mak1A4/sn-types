declare class CatalogJS {
  constructor(gr: any);
  constructor(sys_id: string);
  /**
   * Specifies if the catalog is viewable for the user.
   * @param mobile True if the view is mobile view. Else, false.
   */
  canView(mobile: boolean): any;
  /**
   * If only one active catalog exists, that catalog is returned. Else, the earliest catalog
   * created is returned, from the list of the catalogs that the user can view. If no catalog is
   * available, null is returned.
   */
  getAvailableCatalog(): any;
  /**
   * Returns the catalog background color.
   */
  getBackgroundColor(): any;
  /**
   * Specifies the number of catalogs active in the catalog table.
   */
  getCatalogCount(): any;
  /**
   * Returns the categories for the specified catalog.
   */
  getCategories(): any;
  /**
   * Specifies the sys_ids of the categories in the specified catalog.
   */
  getCategoryIds(): any;
  /**
   * Specifies the catalog description.
   */
  getDescription(): any;
  /**
   * Returns the catalog desktop image value.
   */
  getDesktopImageSRC(): any;
  /**
   * Returns the catalog gliderecord.
   */
  getGr(): any;
  /**
   * Returns the catalog header icon.
   */
  getHeaderIconSRC(): any;
  /**
   * Specifies the sys_id of the catalog.
   */
  getID(): any;
  /**
   * Returns the title of the catalog.
   */
  getTitle(): any;
  /**
   * Specifies if the catalog has categories.
   */
  hasCategories(): any;
  /**
   * Specifies if the catalog has catalog items.
   */
  hasItems(): any;
  /**
   * Specifies if the wish list is enabled for a catalog.
   */
  isWishlistEnabled(): any;
}
export { CatalogJS };
