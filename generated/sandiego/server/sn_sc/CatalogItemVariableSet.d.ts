declare class CatalogItemVariableSet {
  /**
   * Inserts the defined catalog item variable set.
   * @param standardUpdate Flag indicating whether to enable the  running of engines and workflow.Valid
   * values:
   * true: Enable the  running of engines and workflow.
   *
   * false: Do not enable the  running of engines and workflow.
   *
   *
   *
   */
  create(standardUpdate: boolean): any;
  /**
   * Deletes a variable set.
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
   * Returns a mapping of catalog item variable set attribute values.
   * @param columns Specify the set of columns that you would like the values for.
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
   * Sets attributes for a variable set.
   * @param attributes An object mapping column names to values.
   */
  setAttributes(attributes: any): any;
  /**
   * Updates a variable set.
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
export { CatalogItemVariableSet };
