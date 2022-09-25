declare class GlideRecordUtil {
  /**
   * Returns the GlideRecord object for the specified configuration item (CI) using just the
   * sys_id of the CI.
   * @param sys_id Sys_id of the desired CI.
   */
  getCIGR(sys_id: string): any;
  /**
   * Returns an array of all the fields in the specified GlideRecord.
   * @param gr GlideRecord instance positioned to a valid record.
   */
  getFields(gr: any): any;
  /**
   * Returns a GlideRecord instance for the given table, positioned to the given sys_id, and
   * of the right class (table).
   * @param baseTable The name of the base table containing the sys_id.
   * @param sys_id The sys_id of the desired record.
   */
  getGR(baseTable: string, sys_id: string): any;
  /**
   * Returns a Java ArrayList of the ancestors of the specified table name.
   * @param tableName Name of the table.
   */
  getTables(tableName: string): any;
  /**
   * Sets the fields in the specified GlideRecord with the field values contained in the
   * specified hashmap, unless that field name is in the ignore hashmap.
   * @param hashMap An Object instance (used as a hashmap), with properties named for fields and
   * containing the fields' value.
   * @param GlideRecord GlideRecord instance to receive the field values.
   * @param ignore Optional. Hashmap of field names to ignore.
   */
  mergeToGR(hashMap: any, GlideRecord: any, ignore?: any): any;
  /**
   * Populates the given hashmap from the given GlideRecord instance. Each field in the
   * GlideRecord becomes a property in the hashmap.
   * @param hashMap An object being used as a hashmap.
   * @param gr A GlideRecord instance positioned to a valid record.
   * @param ignore An optional hashmap of file names not to populate.
   */
  populateFromGR(hashMap: any, gr: any, ignore?: any): any;
}
export { GlideRecordUtil };
