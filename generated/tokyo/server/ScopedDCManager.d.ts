declare class ScopedDCManager {
  /**
   * Assigns pre-defined or user-defined data classifications
   * to existing dictionary entries.
   * @param dictEntries The sys_ids of the records you want to classify. The
   * sys_ids are from the Dictionary [sys_dictionary] table. Entered as a comma-separated list
   * enclosed in a string.
   * @param dataClasses The sys_ids of the data classifications you want to assign. The
   * sys_ids are from the Data Classification [data_classification] table. Entered as a
   * comma-separated list enclosed in a string.
   */
  classify(dictEntries: string, dataClasses: string): any;
  /**
   * Removes all data classifications for the specified
   * dictionary entries.
   * @param dictEntries The sys_ids of the records you want to remove
   * classifications from. The sys_ids are from the Dictionary [sys_dictionary] table. Entered
   * as a comma-separated list enclosed in a string.
   */
  clearClassification(dictEntries: string): any;
  /**
   * Returns a list of all data classifications
   * available in the current domain.
   */
  getAllDataClasses(): any;
  /**
   * Retrieves all data classifications for the specified
   * dictionary entries.
   * @param dictEntries The sys_ids of the records you want to retrieve
   * classifications for. The sys_ids are from the Dictionary [sys_dictionary] table. Entered as
   * a comma-separated list enclosed in a string.
   */
  getClassification(dictEntries: string): any;
}
export { ScopedDCManager };
