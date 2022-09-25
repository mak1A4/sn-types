declare class GlideAgentWorkspace {
  /**
   * Closes the currently open record, such as a form, in a subtab within Agent Workspace.
   */
  closeRecord(): any;
  /**
   * Opens a specified record, such as a form, in a subtab within Agent Workspace.
   * @param table Name of the table that contains the record to open.
   * @param sysId Sys ID of the record to open.
   * @param params Optional. Name/value pairs of the parameters to pass to the
   * record."params": {
   * "readOnlyForm": Boolean;
   * "defaultTab": "String";
   * "hideDetails": Boolean
   * }
   */
  openRecord(table: string, sysId: string, params?: any): any;
}
export { GlideAgentWorkspace };
