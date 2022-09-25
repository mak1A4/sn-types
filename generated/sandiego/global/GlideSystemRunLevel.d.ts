declare class GlideSystemRunLevel {
  /**
   * Retrieves the current system run level.
   */
  getCurrentLevel(): any;
  /**
   * Switches the system run level.
   * @param newLevel The ID value of the new system run level. This value is from the
   * ID field in the System Run Level [sys_run_level]
   * table.
   */
  switchLevel(newLevel: string): any;
}
export { GlideSystemRunLevel };
