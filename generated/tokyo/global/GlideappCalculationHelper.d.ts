declare class GlideappCalculationHelper {
  /**
   * Adds a specific catalog item to an existing request. This API should be used only
   * before a request (REQ) is approved. After the REQ is approved, the RITM process is not
   * initiated.
   * @param requestID Sys_id of the request to which to add the catalog item(s)
   * @param catalogID Sys_id of the catalog item to add to the request
   * @param quantity Number (quantity) of the specified catalog item to be add to the
   * request.
   */
  addItemToExistingRequest(
    requestID: string,
    catalogID: string,
    quantity: string,
  ): any;
  /**
   * Recalculates the price of all of the items in a specified request.
   * @param requestID Sys_id of the request for which to recalculate the price
   */
  rebalanceRequest(requestID: string): any;
}
export { GlideappCalculationHelper };
