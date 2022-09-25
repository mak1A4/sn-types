declare class CatalogSearch {
  constructor();
  /**
   * Searches a catalog item based on a search term. The search can be narrowed down to a
   * catalog category level.
   * @param catalogID Identifier of the catalog to search.
   * @param categoryID Identifier of the catalog category to search.
   * @param term Search term.
   * @param mobile Flag that indicates whether catalog items exposed for mobile are
   * searched.Valid values:
   * true: Search for mobile catalog items.
   *
   * false: Do not search for mobile catalog items.
   *
   *
   *
   * @param noDepthSearch Flag that indicates whether to search subcategories.Valid values:
   * true: Do not search subcategories.
   *
   * false: Search subcategories.
   *
   *
   *
   */
  search(
    catalogID: string,
    categoryID: string,
    term: string,
    mobile: boolean,
    noDepthSearch: boolean,
  ): any;
}
export { CatalogSearch };
