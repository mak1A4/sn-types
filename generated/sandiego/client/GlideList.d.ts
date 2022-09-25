declare class GlideList {
  /**
   * Adds a single term to the list query
   * filter.
   * @param filter Encoded query string in standard Glide format. See
   * Encoded query
   * strings.
   */
  addFilter(filter: string): any;
  /**
   * Returns a comma-separated list of the
   * sys_ids for the items that are checked in the associated list.
   */
  getChecked(): any;
  /**
   * Returns the fixed query.
   */
  getFixedQuery(): any;
  /**
   * Returns the field or comma-separated list
   * of fields that are used to group the list.
   */
  getGroupBy(): any;
  /**
   * Returns the name of the list, which is
   * usually the table name.
   */
  getListName(): any;
  /**
   * Returns the first field used to order the
   * list.
   */
  getOrderBy(): any;
  /**
   * Returns the name of the parent table
   * for a related list (the table associated with the form).
   */
  getParentTable(): any;
  /**
   * Returns the encoded query string for the
   * list.
   * @param <object> Optional. By default, this method includes orderBy, groupBy, and fixed query in
   * the results. You can set object properties to restrict results to one or more of the
   * three available options.
   */
  getQuery(paramObj?: any): any;
  /**
   * Returns the related list field that
   * associates the related list to the parent form.
   */
  getRelated(): any;
  /**
   * Returns the table name for the
   * list.
   */
  getTableName(): any;
  /**
   * Returns the list title.
   */
  getTitle(): any;
  /**
   * Returns the view used to display the
   * list.
   */
  getView(): any;
  /**
   * Refreshes the list. The
   * orderBy part of the list filter is ignored so that the list
   * uses its natural ordering when it is refreshed.
   * @param firstRow The first row to appear in the list.Default:
   * First row of the current view.
   */
  refresh(firstRow: number): any;
  /**
   * Refreshes the list. The
   * orderBy part of the list filter is included if it is
   * specified for the list.
   * @param firstRow The first row to appear in the list.Default:
   * First row of the current view.
   */
  refreshWithOrderBy(firstRow: number): any;
  /**
   * Sets the encoded query string for the list,
   * ignoring the orderBy and groupBy parts
   * of the query string.
   * @param filter Encoded query string in standard Glide format. See
   * Encoded query
   * strings.
   */
  setFilter(filter: string): any;
  /**
   * Sets the list groupBy
   * criteria for a single field.
   * @param groupBy The groupBy criteria for the
   * list.
   */
  setGroupBy(groupBy: string): any;
  /**
   * Sets the orderBy
   * criteria for the list.
   * @param orderBy Single
   * or multiple orderBy fields.
   */
  setOrderBy(orderBy: string): any;
  /**
   * Sets the number of rows per page to
   * display.
   * @param rows The number of rows to display.
   */
  setRowsPerPage(rows: number): any;
  /**
   * Sorts the list in ascending order and sets the
   * field as an orderBy
   * column.
   * @param field Field to use to sort the list.
   */
  sort(field: string): any;
  /**
   * Sorts a single field in the list in descending
   * order and sets the field as an orderByDescField
   * column.
   * @param field Field to use to sort the list.
   */
  sortDescending(field: string): any;
}
export { GlideList };
