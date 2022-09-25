declare class GlideList2 {
  /**
   * Adds a single term to the list query filter.
   * @param filter Query string condition to add.
   */
  addFilter(filter: string): any;
  /**
   * Returns the GlideList2 object for the list that contains the specified
   * item.
   * @param DOMelement The DOM element ID for the list for which you want the
   * GlideList2 object.
   */
  get(DOMelement: any): any;
  /**
   * Returns the GlideList2 object for the list that contains the specified
   * item.
   * @param ListID The list ID for which you want the GlideList2
   * object.
   */
  get(ListID: string): any;
  /**
   * Returns a comma-separated list of the sys_ids for the items that are checked in the list.
   */
  getChecked(): any;
  /**
   * Returns the sysparm_fixed query.
   */
  getFixedQuery(): any;
  /**
   * Returns the field or comma-separated list of fields that are used to group the list.
   */
  getGroupBy(): any;
  /**
   * Returns the name of the list, which is usually the table name.
   */
  getListName(): any;
  /**
   * Returns the first field used to order the list.
   */
  getOrderBy(): any;
  /**
   * Returns the name of the parent table for a related list (the table associated with the form).
   */
  getParentTable(): any;
  /**
   * Returns the encoded query string for the list.
   * @param orderBy (Optional) If true, includes the orderBy in the encoded
   * query string.
   * @param groupBy (Optional) If true, includes the groupBy in the encoded
   * query string.
   * @param fixed (Optional) If true, includes fixed query in the encoded
   * query string.
   * @param all (Optional) If true, includes orderBy, groupBy, and fixed
   * query.
   */
  getQuery(
    orderBy?: boolean,
    groupBy?: boolean,
    fixed?: boolean,
    all?: boolean,
  ): any;
  /**
   * Returns the related list field that associates the related list to the parent form.
   */
  getRelated(): any;
  /**
   * Returns the table name for the list.
   */
  getTableName(): any;
  /**
   * Returns the list title.
   */
  getTitle(): any;
  /**
   * Returns the view used to display the list.
   */
  getView(): any;
  /**
   * Returns true if the list has been personalized by the user by
   * choosing the list mechanic and changing the list layout.
   */
  isUserList(): any;
  /**
   * Refreshes the list.  The orderBy part of the list filter is ignored
   * so that the list uses its natural ordering when it is refreshed.
   * @param firstRow (Optional) The first row to appear in the list. If not specified, the first row
   * of the current is used.
   * @param additionalParms (Optional) name-value pairs that are submitted with the list refresh
   * request.
   */
  refresh(firstRow?: number, additionalParms?: string): any;
  /**
   * Refreshes the list. The orderBy part of the list filter is included
   * if it is specified for the list.
   * @param firstRow (Optional) The first row to appear in the list.
   * @param description (Optional)  name=value pairs that are submitted with the list refresh request.
   */
  refreshWithOrderBy(firstRow?: number, description?: string): any;
  /**
   * Sets the encoded query string for the list, ignoring the orderBy and
   * groupBy parts of the query string.
   * @param filter Encoded query string.
   */
  setFilter(filter: string): any;
  /**
   * Sets the encoded query string for the list, including the orderBy
   * and groupBy if specified, and then refreshes the list using the new
   * filter.
   * @param filter Encoded query string.
   */
  setFilterAndRefresh(filter: string): any;
  /**
   * Sets the first row that appears in the list when the list is refreshed.
   * @param rowNum Row number of the first row to display.
   */
  setFirstRow(rowNum: number): any;
  /**
   * Sets the list groupBy criteria for a single field.
   * @param groupBy Optional. The groupBy criteria for the list.
   */
  setGroupBy(groupBy?: string): any;
  /**
   * Sets the orderBy criteria for the list.
   * @param orderBy Single or multiple order by fields.
   */
  setOrderBy(orderBy: string): any;
  /**
   * Sets the number of rows per page to display.
   * @param rows The number of rows to display
   */
  setRowsPerPage(rows: number): any;
  /**
   * Shows or hides all the groups within the list and saves the current collapsed/expanded
   * state of the groups as a user preference.
   * @param showFlag If true, shows the groups within the list.
   */
  showHideGroups(showFlag: boolean): any;
  /**
   * Displays or hides the list and saves the current collapsed/expanded state of the list as a user preference.
   * @param showFlag If true, displays the list.
   */
  showHideList(showFlag: boolean): any;
  /**
   * Sorts the list in ascending order and saves the choice.
   * @param field Specifies the field used to sort the list.
   */
  sort(field: string): any;
  /**
   * Sorts the list in descending order and saves the choice.
   * @param field Specifies the field used to sort the list.
   */
  sortDescending(field: string): any;
  /**
   * Toggles the display of the list and saves the current collapsed/expanded state of the list as a user preference.
   */
  toggleList(): any;
  /**
   * Toggles the display of the list but does not save the current collapsed/expanded state of the list as a user preference.
   */
  toggleListNoPref(): any;
}
export { GlideList2 };
