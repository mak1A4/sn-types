declare class GlideSysListControl {
  constructor(tableName: string);
  /**
   * Returns the sys_id for the control.
   */
  getControlID(): any;
  /**
   * Returns true if the edit button is not displayed.
   */
  isOmitEditButton(): any;
  /**
   * Returns true when the New button is not displayed.
   */
  isOmitNewButton(): any;
}
export { GlideSysListControl };
