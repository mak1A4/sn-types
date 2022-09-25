declare class GlideImportSetTransformer {
  constructor();
  /**
   * Gets the Import Set Run object associated with a GlideImportSetTransformer
   * object.
   */
  getImportSetRun(): any;
  /**
   * Returns a Boolean value specifying whether or not there was an error during a
   * transformation.
   */
  isError(): any;
  /**
   * Associates an Import Set record with a specific GlideImportSetTransformer
   * object.
   * @param id The sys_id of an Import Set record from the Import Sets [sys_import_set]
   * table.
   */
  setImportSetID(id: string): any;
  /**
   * Associates an Import Set Run object with a specific GlideImportSetTransformer
   * object.
   * @param importSetRun GlideImportSetRun object representing the ImportSetRun record to track the
   * transformation history.
   */
  setImportSetRun(importSetRun: any): any;
  /**
   * Associates a GlideImportLog object with a specific GlideImportSetTransformer
   * object.
   * @param log GlideImportLog object to link to the Import Set history. Once set, any call
   * from the GlideImportLog object is associated with the Import Set run history for
   * that specific transform.
   */
  setLogger(log: any): any;
  /**
   * Associates a Transform Map with a specific GlideImportSetTransformer
   * object.
   * @param mapID A sys_id from the Table Transform Maps [sys_transform_map] table.
   */
  setMapID(mapID: string): any;
}
export { GlideImportSetTransformer };
