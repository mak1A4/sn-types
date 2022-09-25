declare class v_table {
  /**
   * Adds rows to the remote table.
   * @param row JavaScript object containing field name and value map in which the key is the
   * field name, for example, {number: "INC0001", sys_id:
   * "a34"}.{ "&lt;field name&gt;": "value" }
   *
   */
  addRow(row: any): any;
}
export { v_table };
