declare class CatalogItemVariable {
  /**
   * Inserts the specified catalog item variable.
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
   * Deletes the defined catalog item variable.
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
   * Returns a mapping of catalog item variable attribute values.
   * @param columns Set of columns for which to return values.
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
   * Defines attribute values for this catalog item variable.
   * @param attributes An object mapping column names to values.
   */
  setAttributes(attributes: any): any;
  /**
   * Updates current catalog item variable with set values.
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
export { CatalogItemVariable };
