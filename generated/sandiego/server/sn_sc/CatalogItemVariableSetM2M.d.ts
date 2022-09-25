declare class CatalogItemVariableSetM2M {
  /**
   * Inserts the defined catalog item variable set M2M.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable engines and workflow.
   *
   * false: Do not enable engines and workflow.
   *
   *
   *
   */
  create(standardUpdate: boolean): any;
  /**
   * Deletes the defined catalog item variable set M2M.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable engines and workflow.
   *
   * false: Do not enable engines and workflow.
   *
   *
   *
   */
  deleteRecord(standardUpdate: boolean): any;
  /**
   * Returns a mapping of catalog item variable set M2M attribute values.
   * @param columns Set of columns that you would like the values for.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable engines and workflow.
   *
   * false: Do not enable engines and workflow.
   *
   *
   *
   */
  read(columns: any, standardUpdate: boolean): any;
  /**
   * Defines attribute values for this catalog item variable set M2M.
   * @param attributes An object mapping column names to values.
   */
  setAttributes(attributes: any): any;
  /**
   * Updates current catalog item variable set M2M with set values.
   * @param columnValues An object mapping column names to values.
   * @param standardUpdate Flag that indicates whether to enable the running of engines and
   * workflow.Valid values:
   * true: Enable engines and workflow.
   *
   * false: Do not enable engines and workflow.
   *
   *
   *
   */
  update(columnValues: any, standardUpdate: boolean): any;
}
export { CatalogItemVariableSetM2M };
