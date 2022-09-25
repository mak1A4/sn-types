declare class GlideImportSetTable {
  constructor(tableLabel: string);
  /**
   * Creates a GlideDateTime column.
   * @param columnLabel Label of the GlideDateTime column to create in the Import Set table.
   */
  addDateTimeColumn(columnLabel: string): any;
  /**
   * Creates a string column.
   * @param columnLabel Label of the string column to create in the Import Set table.
   * @param length Optional. Maximum column length. Default: 40 characters
   */
  addStringColumn(columnLabel: string, length?: number): any;
  /**
   * Creates the Import Set table.
   */
  create(): any;
}
export { GlideImportSetTable };
