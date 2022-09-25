declare class GlideImportLog {
  constructor(importSetRun?: any, source?: string);
  /**
   * Logs a message of type Error to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  error(message: string, source?: string): any;
  /**
   * Returns a sys_id of the Import Run record associated with this Import Log.
   */
  getImportRunHistory(): any;
  /**
   * Logs a message of type Info to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  info(message: string, source?: string): any;
  /**
   * Associates the GlideImportLog object with a specific Import Set Run record.
   * @param importRunHistory The sys_id of a record from the Transform History [sys_import_set_run]
   * table.
   */
  setImportRunHistory(importRunHistory: string): any;
  /**
   * Logs a message of type Warn to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  warn(message: string, source?: string): any;
}
export { GlideImportLog };
