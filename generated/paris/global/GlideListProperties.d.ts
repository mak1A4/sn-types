declare class GlideListProperties {
  constructor();
  /**
   * Returns the unique ID for a list.
   */
  getListID(): any;
  /**
   * Returns the name of the list.
   */
  getListName(): any;
  /**
   * Get the title of a list.
   */
  getTitle(): any;
  /**
   * Returns whether or not the Actions on select rows option is
   * enabled for a list.
   */
  hasActions(): any;
  /**
   * Returns whether or not a list has navigation at the bottom.
   */
  hasBottomNav(): any;
  /**
   * Returns whether or not the page navigation controls appear in the footer of a
   * list.
   */
  hasBottomVCR(): any;
  /**
   * Returns whether or not a list has a filter.
   */
  hasFilter(): any;
  /**
   * Returns whether or not a list has a header.
   */
  hasHeader(): any;
  /**
   * Returns whether or not a header context menu is enabled for a list.
   */
  hasHeaderContextMenu(): any;
  /**
   * Returns whether list personalization is enabled for a list.
   */
  hasListMechanic(): any;
  /**
   * Returns whether or not a list can have popup windows.
   */
  hasPopup(): any;
  /**
   * Returns whether or not rows in a list have a context menu.
   */
  hasRowContextMenu(): any;
  /**
   * Returns whether or not the search bar is enabled for a list.
   */
  hasSearch(): any;
  /**
   * Returns whether or not the list title appears in the list header.
   */
  hasTitle(): any;
  /**
   * Returns whether a context menu appears in a list header.
   */
  hasTitleContextMenu(): any;
  /**
   * Returns whether or not the page navigation controls appear in the header of a
   * list.
   */
  hasTopVCR(): any;
  /**
   * Returns whether or not the omit filter option has been selected.
   */
  isOmitFilter(): any;
  /**
   * Returns whether the Save Filter button is hidden in the condition builder.
   */
  isSaveFilterHidden(): any;
  /**
   * Returns whether or not a list shows links.
   */
  isShowLinks(): any;
  /**
   * Returns whether or not toggling the header columns is available for a list.
   */
  isToggleHeader(): any;
  /**
   * Determine whether the user can change the view for the list.
   * @param onOff If false users cannot change the list view. By default,
   * changing views is enabled.
   */
  setCanChangeView(onOff: boolean): any;
  /**
   * Determine whether users can group items in a list.
   * @param onOff If false, the group by option does not appear in the
   * column context menu. By default the group by option appears in the list context
   * menu.
   */
  setCanGroup(onOff: boolean): any;
  /**
   * Determine whether the sort option is available in a list.
   * @param onOff If false, the sort option does not appear in column list
   * context menu, and users cannot click the column title to change the order of the
   * list.
   */
  setCanSort(onOff: boolean): any;
  /**
   * Displays or hides all of the available context menus for a list.
   * @param onOff If set to true displays the title context menu, header
   * context menu, and list context menu for a list.
   */
  setContextMenus(onOff: boolean): any;
  /**
   * Determine whether the Actions on select rows  options display at
   * the bottom of a list.
   * @param onOff If true displays action options for a list.
   */
  setHasActions(onOff: boolean): any;
  /**
   * Determine whether the navigation actions at the bottom of a list are hidden or not.
   * @param onOff When true adds navigation to the bottom of a
   * list.
   */
  setHasBottomNav(onOff: boolean): any;
  /**
   * Determine whether the first page, last page, next page, and previous page buttons
   * appear at the bottom of the list.
   * @param onOff If true, the first page, last page, next page, and
   * previous page buttons appear at the bottom of the list.
   */
  setHasBottomVCR(onOff: boolean): any;
  /**
   * Determine whether or not breadcrumbs appear at the top of a list.
   * @param onOff If true breadcrumbs appear at the top of a list.
   */
  setHasBreadcrumbs(onOff: boolean): any;
  /**
   * Determine whether or not the filter displays as part of a list.
   * @param onOff If true a filter icon appears at the top of the list.
   * Users can use the filter to narrow search results.
   */
  setHasFilter(onOff: boolean): any;
  /**
   * Determine whether or not a list displays a header.
   * @param onOff If true the list displays a header.
   */
  setHasHeader(onOff: boolean): any;
  /**
   * Determine whether or not the context menu appears next to each column in a
   * list.
   * @param onOff If true the context menu appears next to each column in
   * a list.
   */
  setHasHeaderContextMenu(onOff: boolean): any;
  /**
   * Determine whether or not a list has the option for personalization.
   * @param onOff If true the list mechanic is enabled and the Personalize
   * List icon appears on the page.
   */
  setHasListMechanic(onOff: boolean): any;
  /**
   * Determine whether the list has a popup or modal window.
   * @param onOff If truethe list can have popup windows.
   */
  setHasPopup(onOff: boolean): any;
  /**
   * Determines whether or not list rows have a context menu.
   * @param onOff When true list rows can have a context  menu.
   */
  setHasRowContextMenu(onOff: boolean): any;
  /**
   * Determine whether search appears for a list.
   * @param onOff If true the search bar appears in the list
   * header.
   */
  setHasSearch(onOff: boolean): any;
  /**
   * Determine whether the list title appears in the header.
   * @param onOff If true the title of the list appears in the list
   * header.
   */
  setHasTitle(onOff: boolean): any;
  /**
   * Determine whether or not a list has a context menu in the header.
   * @param onOff If true the context menu appears next to the list title
   * in the header
   */
  setHasTitleContextMenu(onOff: boolean): any;
  /**
   * Determine whether or not a list has the page navigation controls in the list
   * header.
   * @param onOff If true the page navigation controls appear in the
   * header of a list.
   */
  setHasTopVCR(onOff: boolean): any;
  /**
   * Determine whether rows are visible in a list.
   * @param onOff If true all of the rows are hidden for a list.
   */
  setHideRows(onOff: boolean): any;
  /**
   * Set the unique ID for a list.
   * @param Unique_ID The unique ID for the list.
   */
  setListID(Unique_ID: string): any;
  /**
   * Defines a name for the list.
   * @param name Name of the list.
   */
  setListName(name: string): any;
  /**
   * Determine whether the Save Filter button appears in the condition builder.
   * @param onOff If true the Save Filter button is hidden.
   */
  setSaveFilterHidden(onOff: boolean): any;
  /**
   * Whether or not a list includes links.
   * @param onOff If true list includes related links.
   */
  setShowLinks(onOff: boolean): any;
  /**
   * Defines the list title.
   * @param title Title for the list.
   */
  setTitle(title: string): any;
  /**
   * Determine whether users can show or hide column headers for a table.
   * @param onOff If true an icon appears in the header that allows users
   * to show or hide the column headers.
   */
  setToggleHeader(onOff: boolean): any;
  /**
   * Determine whether the first page, last page, next page, and previous page buttons appear
   * at the top and bottom of the list.
   * @param onOff If false, the list does not have any of the page
   * navigation buttons for a list.
   */
  setVCR(onOff: boolean): any;
}
export { GlideListProperties };
