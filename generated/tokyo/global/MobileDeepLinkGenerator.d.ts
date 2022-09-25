declare class MobileDeepLinkGenerator {
  constructor(clientType: string);
  /**
   * Create a link to a form applet.
   * @param formScreenId Sys ID of the applet record in the Applets [sys_sg_screen] table.
   * @param tableName Name of the table containing the record in the recordSysId
   * parameter.
   * @param recordSysId Sys ID of the record to open in the applet.
   */
  getFormScreenLink(
    formScreenId: string,
    tableName: string,
    recordSysId: string,
  ): any;
  /**
   * Create a link to a list applet.
   * @param documentId Sys ID of the applet record in the Applets [sys_sg_screen] table.
   * @param uiParams Optional. JSON object containing any URL parameters to include in the link.
   * Determine which URL parameters to include by inspecting the URL you want to link to.
   * In general, URL parameters filter records in the list. For example, var
   * param = {'&lt;company-sys-id&gt;': 'servicenow'}, where
   * &lt;company-sys-id&gt; is the Sys ID of a company UI parameter from
   * the UI Parameters [sys_sg_ui_parameter] table for a specific mobile screen.
   */
  getScreenLink(documentId: string, uiParams?: any): any;
}
export { MobileDeepLinkGenerator };
