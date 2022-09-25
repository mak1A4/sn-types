declare class GlideDialogWindow {
  constructor(id: string, readOnly?: boolean, width?: number, height?: number);
  /**
   * Adjusts the body height of a dialog window to be the window height minus the header
   * height.
   */
  adjustBodySize(): any;
  /**
   * Closes the dialog window.
   */
  destroy(): any;
  /**
   * Renders the dialog window.
   */
  render(): any;
  /**
   * Sets a given window property to a specified value.
   * @param name The window property to set.
   * @param value The value for the window property.
   */
  setPreference(name: string, value: string): any;
  /**
   * Sets the size of the dialog window.
   * @param width The width of the dialog window.
   * @param height The height of the dialog window.
   */
  setSize(width: number, height: number): any;
  /**
   * Sets the title of the dialog window.
   * @param title The title for the current window.
   */
  setTitle(title: string): any;
}
export { GlideDialogWindow };
