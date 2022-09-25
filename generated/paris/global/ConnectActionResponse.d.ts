declare class ConnectActionResponse {
  /**
   * Create a GlideRecord in the specified table with the specified values.
   * @param table Name of the table where the record is to be added.
   * @param values An object of name value pairs where the names are field names in the table and
   * the values are the field values.
   * @param view The form view to load. This parameter is optional.
   */
  newRecord(table: string, values: any, view?: string): any;
}
export { ConnectActionResponse };
