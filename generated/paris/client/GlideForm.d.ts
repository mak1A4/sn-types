declare class GlideForm {
  /**
   * Adds an icon on a field’s label.
   * @param fieldName The field name.
   * @param icon The font icon to show next to the field. Supported icons - icon-user,
   * icon-user-group, icon-lightbulb, icon-home, icon-mobile, icon-comment, icon-mail,
   * icon-locked, icon-database, icon-book, icon-drawer, icon-folder, icon-catalog,
   * icon-tab, icon-cards, icon-tree-right, icon-tree, icon-book-open, icon-paperclip,
   * icon-edit, icon-trash, icon-image, icon-search, icon-power, icon-cog, icon-star,
   * icon-star-empty, icon-new-ticket, icon-dashboard, icon-cart-full, icon-view,
   * icon-label, icon-filter, icon-calendar, icon-script, icon-add, icon-delete,
   * icon-help, icon-info, icon-check-circle, icon-alert, icon-sort-ascending,
   * icon-console, icon-list, icon-form, and icon-livefeed.
   * @param title The text title for the icon.
   */
  addDecoration(fieldName: string, icon: string, title: string): any;
  /**
   * Adds an icon on a field’s label.
   * @param fieldName The field name.
   * @param icon The font icon to show next to the field. Supported icons - icon-user,
   * icon-user-group, icon-lightbulb, icon-home, icon-mobile, icon-comment, icon-mail,
   * icon-locked, icon-database, icon-book, icon-drawer, icon-folder, icon-catalog,
   * icon-tab, icon-cards, icon-tree-right, icon-tree, icon-book-open, icon-paperclip,
   * icon-edit, icon-trash, icon-image, icon-search, icon-power, icon-cog, icon-star,
   * icon-star-empty, icon-new-ticket, icon-dashboard, icon-cart-full, icon-view,
   * icon-label, icon-filter, icon-calendar, icon-script, icon-add, icon-delete,
   * icon-help, icon-info, icon-check-circle, icon-alert, icon-sort-ascending,
   * icon-console, icon-list, icon-form, and icon-livefeed.
   * @param title The text title for the icon.
   * @param color A CSS color.
   */
  addDecoration(
    fieldName: string,
    icon: string,
    title: string,
    color: string,
  ): any;
  /**
   * Displays the specified error message at the top of the form.
   * @param message Message to display.
   */
  addErrorMessage(message: string): any;
  /**
   * Adds the specified informational message to the top of the form.
   * @param message Message to display.
   */
  addInfoMessage(message: string): any;
  /**
   * Adds a choice to the end of a choice list field.
   * @param fieldName The name of the field.
   * @param choiceValue The value to be stored in the database.
   * @param choiceLabel The value displayed.
   */
  addOption(fieldName: string, choiceValue: string, choiceLabel: string): any;
  /**
   * Adds a choice to the end of a choice list field.
   * @param fieldName The field name.
   * @param choiceValue The value stored in the database.
   * @param choiceLabel The value displayed.
   * @param choiceIndex Order of the choice in the list. The index is into a zero based array.
   */
  addOption(
    fieldName: string,
    choiceValue: string,
    choiceLabel: string,
    choiceIndex: number,
  ): any;
  /**
   * Removes all informational and error messages from the top of the form.
   */
  clearMessages(): any;
  /**
   * Removes all options from the choice list.
   * @param fieldName Name of the field.
   */
  clearOptions(fieldName: string): any;
  /**
   * Removes any value(s) from the field.
   * @param fieldName Name of the field.
   */
  clearValue(fieldName: string): any;
  /**
   * Prevents file attachments from being added.
   */
  disableAttachments(): any;
  /**
   * Allows file attachments to be added. Shows the paper clip icon.
   */
  enableAttachments(): any;
  /**
   * Used to draw attention to a particular field. Flashes the specified color for a
   * specified duration of time in the specified field.
   * @param fieldName Specifies the field to highlight in the following format:
   * "&lt;table-name&gt;.&lt;field-name&gt;".
   * @param color RGB color or acceptable CSS color.
   * @param count Specifies how long the label will flash. Options include:
   * 2: Flashes for 1 second
   *
   * 0: Flashes for 2 seconds
   *
   * -2: Flashes for 3 seconds
   *
   * -4: Flashes for 4 seconds
   *
   *
   */
  flash(fieldName: string, color: string, count: number): any;
  /**
   * Returns the most recent action name, or, for a client script, the sys_id of the UI
   * action clicked.
   */
  getActionName(): any;
  /**
   * Returns a Boolean value for the specified field.
   * @param fieldName Name of the field.
   */
  getBooleanValue(fieldName: string): any;
  /**
   * Returns the HTML element for the specified field.
   * @param fieldName Name of the field.
   */
  getControl(fieldName: string): any;
  /**
   * Returns the decimal value of the specified field.
   * @param fieldName The name of the field.
   */
  getDecimalValue(fieldName: string): any;
  /**
   * Returns the HTML element specified by the parameter.
   * @param id The field id.
   */
  getElement(id: string): any;
  /**
   * Returns the HTML element for the form.
   */
  getFormElement(): any;
  /**
   * Returns the HTML element of the help text for the specified field.
   * @param fieldName Name of the field.
   */
  getHelpTextControl(fieldName: string): any;
  /**
   * Returns the integer value of the field.
   * @param fieldName The field name.
   */
  getIntValue(fieldName: string): any;
  /**
   * Returns the plain text value of the field label.
   * @param fieldName The field name
   */
  getLabelOf(fieldName: string): any;
  /**
   * Returns the option element for a selected box named fieldName
   * where choiceValue matches the option value.
   * @param fieldName Name of the field.
   * @param choiceValue Value of the option.
   */
  getOption(fieldName: string, choiceValue: string): any;
  /**
   * Returns the GlideRecord for a specified field.
   * @param fieldName Name of the field.
   * @param callBack Name of the call back function.
   */
  getReference(fieldName: string, callBack: any): any;
  /**
   * Returns an array of related lists from the current form in the order in which they
   * appear on that form.
   */
  getRelatedListNames(): any;
  /**
   * Returns all section names, whether visible or not.
   */
  getSectionNames(): any;
  /**
   * Returns an array of the form's sections.
   */
  getSections(): any;
  /**
   * Returns the name of the table to which this record belongs.
   */
  getTableName(): any;
  /**
   * Returns the sys_id of the record displayed in the form.
   */
  getUniqueValue(): any;
  /**
   * Returns the value of the specified form field.
   * @param fieldName Name of the field whose value to return.
   */
  getValue(fieldName: string): any;
  /**
   * Hides all field messages.
   */
  hideAllFieldMsgs(): any;
  /**
   * Hides all field messages.
   * @param type The type of message, info or error.
   */
  hideAllFieldMsgs(type: string): any;
  /**
   * Hides the error message placed by showErrorBox().
   * @param fieldName The name of the field or control.
   */
  hideErrorBox(fieldName: string): any;
  /**
   * Hides the last message placed by showFieldMsg().
   * @param fieldName Name of the field.
   */
  hideFieldMsg(fieldName: string): any;
  /**
   * Hides the last message placed by showFieldMsg().
   * @param fieldName Name of the field.
   * @param clearAll When true, all messages for the field are cleared. When false, only the last
   * message is removed.
   */
  hideFieldMsg(fieldName: string, clearAll: boolean): any;
  /**
   * Hides the specified related list on the form.
   * @param listTableName Name of the related list. Use the sys_id to hide a list through a relationship.
   */
  hideRelatedList(listTableName: string): any;
  /**
   * Hides all related lists on the form.
   */
  hideRelatedLists(): any;
  /**
   * Returns true while a live update is being done on the record the form is showing.
   */
  isLiveUpdating(): any;
  /**
   * Returns true if the field is mandatory.
   * @param fieldName Name of the field.
   */
  isMandatory(fieldName: string): any;
  /**
   * Returns true if the record has never been saved.
   */
  isNewRecord(): any;
  /**
   * Returns true if the section is visible.
   */
  isSectionVisible(): any;
  /**
   * Registers a custom event listener that detects when any field in the current form is
   * modified by a user.
   * @param fn Function to call when a user changes the value of a field within the current
   * form. This is actually the function code, not just the function name. This
   * function must accept the following three arguments:
   *
   * field name
   *
   * original field value
   *
   * updated field value
   *
   *
   */
  onUserChangeValue(fn: any): any;
  /**
   * You can update a list collector variable.
   * @param fieldName Name of the slush bucket.
   */
  refreshSlushbucket(fieldName: string): any;
  /**
   * Removes the icon from the specified field that matches the icon and title.
   * @param fieldName Field name.
   * @param icon Name of the icon to remove.
   * @param title The icon's text title (name).
   */
  removeDecoration(fieldName: string, icon: string, title: string): any;
  /**
   * Removes the icon from the specified field that matches the icon and title.
   * @param fieldName Field name.
   * @param icon Name of the icon to remove.
   * @param title The icon's text title (name).
   * @param color A CSS color
   */
  removeDecoration(
    fieldName: string,
    icon: string,
    title: string,
    color: string,
  ): any;
  /**
   * Removes the specified option from the choice list.
   * @param fieldName Name of the field.
   * @param choiceValue The value stored in the database. This is not the label.
   */
  removeOption(fieldName: string, choiceValue: string): any;
  /**
   * Saves the record without navigating away (update and stay).
   */
  save(): any;
  /**
   * Makes the specified field available or unavailable.
   * @param fieldName Name of the field.
   * @param disable When true disables the field. When false enables the field.
   */
  setDisabled(fieldName: string, disable: boolean): any;
  /**
   * Displays or hides a field.
   * @param fieldname Name of the field.
   * @param display When true displays the field, when false hides the field.
   */
  setDisplay(fieldname: string, display: boolean): any;
  /**
   * Sets the plain text value of the field label.
   * @param fieldName The field name.
   * @param label The field text label.
   */
  setLabelOf(fieldName: string, label: string): any;
  /**
   * Makes the specified field mandatory.
   * @param fieldName Name of the field.
   * @param mandatory When true makes the field mandatory. When false makes the field
   * optional.
   */
  setMandatory(fieldName: string, mandatory?: boolean): any;
  /**
   * Makes the specified field read only or editable.
   * @param fieldName Name of the field.
   * @param readOnly Flag that determines whether the associate field is editable or
   * read-only.Possible values:
   * true: Set field to read-only
   *
   * false: Set field to be editable
   *
   *
   *
   */
  setReadOnly(fieldName: string, readOnly: boolean): any;
  /**
   * Shows or hides a section.
   * @param sectionName The section name is lower case with an underscore replacing the first space in
   * the name, and with the remaining spaces being removed, for example "Section Four is
   * Here" becomes "section_fourishere". Other non-alphanumeric characters, such as
   * ampersand (&), are removed. Section names can be found by using the
   * getSectionNames() method.
   * @param display When true shows the section. When false hides the section.
   */
  setSectionDisplay(sectionName: string, display: boolean): any;
  /**
   * Sets the value of a specified form field to the passed in value.
   * @param fieldName Name of the form field to update.
   * @param value String value to set in the specified field.
   */
  setValue(fieldName: string, value: string): any;
  /**
   * Sets the value of a specified form field to the passed in value.
   * @param fieldName Name of the form field to update.
   * @param value Sys_id of the reference record to use to update the field.If the specified
   * field is a GlideList, this parameter can contain an array of sys_ids. In this
   * case, the method performs a lookup of all records specified in the array and those
   * values are used to update the contents of the specified field (related
   * list).
   * @param displayValue Field within the specified reference record to use to update the specified
   * field. For example, in the User [sys_user] table it might be userName. If the
   * specified field is a GlideList, this parameter can contain an array of display
   * value names.
   * For additional information on display values, see Display
   * value.
   */
  setValue(fieldName: string, value: string, displayValue: string): any;
  /**
   * Displays or hides the field.
   * @param fieldName The field name.
   * @param display When true displays the field. When false hides the field.
   */
  setVisible(fieldName: string, display: boolean): any;
  /**
   * Displays an error message under the specified form field (either a control object or
   * the name of the field). If the control or field is currently off the screen, the form scrolls to
   * the control or field.
   * @param name The name of the control or field.
   * @param message The message to be displayed.
   */
  showErrorBox(name: string, message: string): any;
  /**
   * Displays an error message under the specified form field (either a control object or
   * the name of the field). If the control or field is currently off the screen, the form scrolls to
   * the control or field.
   * @param name Name of the field or control.
   * @param message Message to display.
   * @param scrollForm When true scrolls the form to the field. When false the form does not scroll to
   * the field.
   */
  showErrorBox(name: string, message: string, scrollForm: boolean): any;
  /**
   * Displays either an informational or error message under the specified form field
   * (either a control object or the name of the field). If the control or field is off the screen,
   * the form is scrolled to the field.
   * @param field Name of the field or control.
   * @param message Message to display.
   * @param type "error","info", or "warning".
   */
  showFieldMsg(field: string, message: string, type: string): any;
  /**
   * Displays either an informational or error message under the specified form field
   * (either a control object or the name of the field). If the control or field is off the screen,
   * the form is scrolled to the field.
   * @param field Name of the field or control.
   * @param message Message to display.
   * @param type "error","info", or "warning".
   * @param scrollForm When true, the form scrolls to the field if it is off screen. When false, the
   * form does not scroll.
   */
  showFieldMsg(
    field: string,
    message: string,
    type: string,
    scrollForm: boolean,
  ): any;
  /**
   * Displays the specified related list on the form.
   * @param listTableName Name of the related list.
   */
  showRelatedList(listTableName: string): any;
  /**
   * Displays all the form's related lists.
   */
  showRelatedLists(): any;
  /**
   * Saves the record.
   */
  submit(): any;
  /**
   * Saves the record.
   * @param verb An action_name from a sys_ui_action record. The action name must be for a
   * visible form button.
   */
  submit(verb: string): any;
}
export { GlideForm };
