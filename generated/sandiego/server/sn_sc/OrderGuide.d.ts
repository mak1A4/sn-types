declare class OrderGuide {
  constructor(sys_id: string);
  /**
   * Returns the sys_id of the order guide.
   */
  getID(): any;
  /**
   * Initialises the order guide with the specified catalog items and the variables, and
   * returns the order guide.
   * @param request A JSON object with the Catalog item and variable details.
   */
  init(request: any): any;
  /**
   * Specifies if the Show Include Toggle (include_items) check box
   * is selected for the specified order guide.
   */
  isIncludeItems(): any;
  /**
   * Specifies if the two-step checkout is enabled.
   */
  isTwoStep(): any;
  /**
   * Specifies if a separate cart (different from that for catalog items) usage is enabled
   * for a two-step order guide.
   */
  isUseCustomCart(): any;
  /**
   * Navigates to the catalog items of an order guide.
   * @param itemDetails A JSON object with details of catalog items in the order guide.
   */
  navigateFromMap(itemDetails: any): any;
}
export { OrderGuide };
