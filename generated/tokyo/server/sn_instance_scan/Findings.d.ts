declare class Findings {
  /**
   * Increases the count of the current finding.
   */
  increment(): any;
  /**
   * If the current finding is from a linter check, this method increments the current
   * finding count and simultaneously passes the linter node object to the finding.
   * @param node Node object from the linter check.
   */
  incrementWithNode(node: any): any;
  /**
   * Sets the source of the current finding based on the provided GlideRecord.
   * @param source The record to set as the source record for the current finding. This value is
   * added as a reference in the Source field of the Scan Findings [scan_finding]
   * table.
   */
  setCurrentSource(source: any): any;
}
export { Findings };
