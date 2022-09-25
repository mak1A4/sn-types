declare class GlideModalV3 {
  constructor(id: string, readOnly: boolean, width: number);
  /**
   * Get a GlideModal object by ID.
   * @param id The element id of the GlideModal object.
   */
  get(id: string): any;
  /**
   * Returns the value of the specified preference (property).
   * @param name Name of the preference value to retrieve. This value must have previously been
   * set on the modal using the GlideModalV3 - setPreference(String name, String value)
   * method.
   */
  getPreference(name: string): any;
  /**
   * Renders the UI page in the modal.
   */
  render(): any;
  /**
   * Display a modal with the specified HTML content.
   * @param html The HTML content to be shown in the modal.
   */
  renderWithContent(html: any): any;
  /**
   * Display a modal with the specified HTML content.
   * @param html The HTML content to be shown in the modal.
   */
  renderWithContent(html: string): any;
  /**
   * Sets the specified field on the current form to the specified value.
   * @param name Name of the form field to update. If this field does not exist on the
   * current form, the request is ignored.
   * @param value Value to store in the specified form field.
   */
  setPreference(name: string, value: string): any;
  /**
   * Set the properties and reload the modal.
   * @param properties An array of name-value pairs to be set.
   */
  setPreferenceAndReload(properties: any[]): any;
  /**
   * Sets the title of the modal.
   * @param title The title to be displayed
   */
  setTitle(title: string): any;
  /**
   * Set the width in pixels.
   * @param width The number of pixels.
   */
  setWidth(width: number): any;
  /**
   * Change the view and reload the modal.
   * @param newView The view to use.
   */
  switchView(newView: string): any;
}
export { GlideModalV3 };
