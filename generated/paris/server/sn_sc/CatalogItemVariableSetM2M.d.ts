declare class CatalogItemVariableSetM2M {
  /**
   * Insert the defined catalog item variable set M2M.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  create(standardUpdate: boolean): any;
  /**
   * Delete the defined catalog item variable set M2M.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  deleteRecord(standardUpdate: boolean): any;
  /**
   * Get a mapping of catalog item variable set M2M attribute values.
   * @param columns Specify the set of columns that you would like the values for.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  read(columns: any, standardUpdate: boolean): any;
  /**
   * Define attribute values for this catalog item variable set M2M.
   * @param attributes An object mapping column names to values.
   */
  setAttributes(attributes: any): any;
  /**
   * Updates current catalog item variable set M2M with set values.
   * @param columnValues An object mapping column names to values.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  update(columnValues: any, standardUpdate: boolean): any;
}
export { CatalogItemVariableSetM2M };
