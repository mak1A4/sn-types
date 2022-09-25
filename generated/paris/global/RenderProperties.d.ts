declare class RenderProperties {
  /**
   * Returns the encoded query from the URL sent to the page.
   */
  getEncodedQuery(): any;
  /**
   * Returns the list control object for the page.
   */
  getListControl(): any;
  /**
   * Returns the value of the specified URL parameter.
   * @param parameterName Name of the parameter passed on the URL.
   */
  getParameterValue(parameterName: string): any;
  /**
   * Returns the URL where the request originated.
   */
  getReferringURL(): any;
  /**
   * Returns the view the page is using.
   */
  getViewID(): any;
  /**
   * Returns the name of the view in use.
   */
  getViewName(): any;
  /**
   * Returns the window's properties.
   */
  getWindowProperties(): any;
  /**
   * Returns true if the page is part of Studio.
   */
  isInDevStudio(): any;
  /**
   * Returns true if this is an interactive session. An interactive session is when a user
   * has logged in as opposed to a REST request.
   */
  isInteractive(): any;
  /**
   * Returns true when the sysparm_collection_related_file URL parameter is
   * set.
   */
  isManyToMany(): any;
  /**
   * Returns true when the sys_is_related_list URL-parameter is true.
   * Returns false if the parameter is not present.
   */
  isRelatedList(): any;
}
export { RenderProperties };
