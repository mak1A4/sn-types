// @ts-nocheck
/// <reference no-default-lib="true"/>

declare class CustomEvent {
  /**
   * Show the embedded-help content specified by the qualifier parameter in the right
   * sidebar.
   * @param event The event to send. Must be the string
   * "embedded_help:load_embedded_help"
   * @param qualifier The qualifier name created in the Embedded Help application.
   */
  fireAll(event: string, qualifier: string): any;
}
declare class DynamicTranslation {
  /**
   * Detects the language of the passed in text.
   * @param text Text to use to detect the language.
   * @param parms Optional. JSON object that contains additional translation parameters.
   */
  getDetectedLanguage(text: string, parms?: any): any;
  /**
   * Translates the passed in text to one or more languages.
   * @param textToTranslate Text to translate.
   * @param parms Optional. JSON object that contains additional translation parameters.
   */
  getTranslation(textToTranslate: string, parms?: any): any;
  /**
   * Determines whether the
   * getDetectedLanguage() and getTranslation()
   * methods are enabled for a translation service.
   * @param translator Optional. Translation service to verify whether the  methods are active.
   * Translation services are configured under the Translator Configuration
   * menu.Possible values - not case-sensitive:
   *
   * Google
   *
   * IBM
   *
   * Microsoft
   *
   * &lt;custom&gt;
   *
   *
   * Note: To use custom translation services you must first configure the translation
   * service in your instance. For details, see Integrate with a translation
   * service provider.
   */
  isEnabled(translator?: string): any;
}
declare class GlideAgentWorkspace {
  /**
   * Closes the currently open record, such as a form, in a subtab within Agent Workspace.
   */
  closeRecord(): any;
  /**
   * Opens a specified record, such as a form, in a subtab within Agent Workspace.
   * @param table Name of the table that contains the record to open.
   * @param sysId Sys ID of the record to open.
   * @param params Optional. Name/value pairs of the parameters to pass to the
   * record."params": {
   * "readOnlyForm": Boolean;
   * "defaultTab": "String";
   * "hideDetails": Boolean
   * }
   */
  openRecord(table: string, sysId: string, params?: any): any;
}
declare var g_aw = new GlideAgentWorkspace();
declare class GlideAjax {
  constructor(class_name: string);
  /**
   * Specifies a parameter name and value to be passed to the server-side function associated
   * with this GlideAjax object.
   * @param parm_name The name of the parameter to pass. (The name must begin with the
   * sysparm_ .)
   * @param parm_value The value to assign to parm_name.
   */
  addParam(parm_name: string, parm_value: string): any;
  /**
   * Retrieves the results from a server-side method called from the client via
   * getXMLWait().
   */
  getAnswer(): any;
  /**
   * Sends the server a request to execute the method and parameters associated with this
   * GlideAjax object.
   * @param callback The name of the callback function to process the results returned by the server.
   */
  getXML(callback: any): any;
  /**
   * Calls the processor asynchronously and gets the answer element of the response in XML
   * format.
   * @param callback Callback function. The function receives the answer element of the response in
   * XML format as an argument.
   * @param additionalParam Optional. Name-value pair of additional parameters.
   * @param responseParam Optional. Second argument for the callback function.
   */
  getXMLAnswer(callback: any, additionalParam?: any, responseParam?: any): any;
  /**
   * Sends the server a request to execute the method and parameters associated with this
   * GlideAjax object.
   */
  getXMLWait(): any;
}
declare class GlideAjaxV3 {
  constructor(processor: string);
  constructor(processor: string, targetURL?: string);
  /**
   * Set a name-value pair to be sent to the processor.
   * @param name The name of the parameter. This usually has the prefix 'sysparm_'.
   * @param value The parameter value.
   */
  addParam(name: string, value: string): any;
  /**
   * Call the processor asynchronously and get the answer element of the response in JSON
   * format.
   * @param callback The callback function. The function receives the answer element of the response
   * as a JSON object.
   */
  getJSON(callback: any): any;
  /**
   * Returns the value of the specified parameter.
   * @param name The name of the parameter to return.
   */
  getParam(name: string): string;
  /**
   * Returns the name-value pairs for the request.
   */
  getParams(): any;
  /**
   * Returns the server-side script that the request is going to use.
   */
  getProcessor(): string;
  /**
   * Returns the target URL.
   */
  getURL(): string;
  /**
   * Call the processor asynchronously and get the response in XML format.
   * @param callback The callback function. The function receives the response as an
   * argument.
   */
  getXML(callback: any): any;
  /**
   * Call the processor asynchronously and get the answer element of the response in XML
   * format.
   * @param callback The callback function. The function receives the answer element of the response
   * in XML format as an argument.
   */
  getXMLAnswer(callback: any): any;
  /**
   * Sets a callback function to be called if the Ajax request fails.
   * @param callback The function to be called if the Ajax request fails. The callback function has
   * one parameter, the XMLHttpRequest object.
   */
  setErrorCallback(callback: any): any;
  /**
   * Sets the request's server-side script. The server-side script is also called the
   * processor.
   * @param serverScript The server-side script (processor) to receive the request.
   */
  setProcessor(serverScript: string): any;
}
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
declare class GlideDocumentV3 {
  /**
   * Returns a node found in the specified DOM based context or created from the HTML
   * context.
   * @param selector Selector expression
   * @param context Optional. DOM Element, document, or JQuery object to search.
   */
  getElement(selector: string, context?: string): any;
  /**
   * Returns a node list found in the specified DOM based context or created if an HTML
   * context is specified.
   * @param selector The selector expression
   * @param context (Optional) A DOM Element, document, or JQuery object to be searched.
   */
  getElements(selector: string, context?: string): any;
}
declare class GlideFlow_static {
  /**
   * Get an existing execution instance by ID.
   * @param executionId The ID of the execution to be retrieved.
   */
  getExecution(executionId: string): any;
  /**
   * Start an action.
   * @param scopedName The scoped name of the flow to be executed.
   * @param inputs An object containing inputs defined for the action.
   */
  startAction(scopedName: string, inputs: any): any;
  /**
   * Start a flow.
   * @param scopedName The scoped name of the flow to be executed.
   * @param inputs An object containing inputs defined for the flow.
   */
  startFlow(scopedName: string, inputs: any): any;
  /**
   * Start a subflow.
   * @param scopedName The scoped name of the flow to be executed.
   * @param inputs An object containing inputs used for the subflow.
   */
  startSubflow(scopedName: string, inputs: any): any;
}
declare var GlideFlow = new GlideFlow_static();
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
  getActionName(): string;
  /**
   * Returns a Boolean value for the specified field.
   * @param fieldName Name of the field.
   */
  getBooleanValue(fieldName: string): boolean;
  /**
   * Returns the HTML element for the specified field.
   * @param fieldName Name of the field.
   */
  getControl(fieldName: string): any;
  /**
   * Returns the decimal value of the specified field.
   * @param fieldName The name of the field.
   */
  getDecimalValue(fieldName: string): string;
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
  getIntValue(fieldName: string): number;
  /**
   * Returns the plain text value of the field label.
   * @param fieldName The field name
   */
  getLabelOf(fieldName: string): string;
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
  getReference(fieldName: string, callBack: any): GlideRecord;
  /**
   * Returns an array of related lists from the current form in the order in which they
   * appear on that form.
   */
  getRelatedListNames(): any[];
  /**
   * Returns all section names, whether visible or not.
   */
  getSectionNames(): any[];
  /**
   * Returns an array of the form's sections.
   */
  getSections(): any[];
  /**
   * Returns the name of the table to which this record belongs.
   */
  getTableName(): string;
  /**
   * Returns the sys_id of the record displayed in the form.
   */
  getUniqueValue(): string;
  /**
   * Returns the value of the specified form field.
   * @param fieldName Name of the field whose value to return.
   */
  getValue(fieldName: string): string;
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
  isLiveUpdating(): boolean;
  /**
   * Returns true if the field is mandatory.
   * @param fieldName Name of the field.
   */
  isMandatory(fieldName: string): boolean;
  /**
   * Returns true if the record has never been saved.
   */
  isNewRecord(): boolean;
  /**
   * Returns true if the section is visible.
   */
  isSectionVisible(): boolean;
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
  setSectionDisplay(sectionName: string, display: boolean): boolean;
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
declare var g_form = new GlideForm();
declare class GlideGuidV3 {
  /**
   * Creates a globally unique identifier 32 characters long, or as specified with the
   * optional length argument.
   * @param stringLength The desired string length, must be between 1 and 32 inclusive. This parameter
   * is optional. If not specified, the returned string will be 32 characters
   * long.
   */
  generate(stringLength?: number): string;
}
declare var g_guid = new GlideGuidV3();
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
  getChecked(): string;
  /**
   * Returns the sysparm_fixed query.
   */
  getFixedQuery(): string;
  /**
   * Returns the field or comma-separated list of fields that are used to group the list.
   */
  getGroupBy(): string;
  /**
   * Returns the name of the list, which is usually the table name.
   */
  getListName(): string;
  /**
   * Returns the first field used to order the list.
   */
  getOrderBy(): string;
  /**
   * Returns the name of the parent table for a related list (the table associated with the form).
   */
  getParentTable(): string;
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
  ): string;
  /**
   * Returns the related list field that associates the related list to the parent form.
   */
  getRelated(): string;
  /**
   * Returns the table name for the list.
   */
  getTableName(): string;
  /**
   * Returns the list title.
   */
  getTitle(): string;
  /**
   * Returns the view used to display the list.
   */
  getView(): string;
  /**
   * Returns true if the list has been personalized by the user by
   * choosing the list mechanic and changing the list layout.
   */
  isUserList(): boolean;
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
declare var g_list = new GlideList2();
declare class GlideListV3 {
  /**
   * Adds a single term to the list query filter.
   * @param filter Query string condition to add.
   */
  addFilter(filter: string): any;
  /**
   * Returns the GlideList object for the specified DOM element.
   * @param DomElement The DOM element ID for which you want the GlideList object.
   */
  get(DomElement: any): any;
  /**
   * Returns the GlideList object for the specified DOM element.
   * @param listId The list name.
   */
  get(listId: string): any;
  /**
   * Returns a comma-separated list of sys_ids for checked items in the list. Does not
   * return items that are not allowed to be executed.
   */
  getChecked(): string;
  /**
   * Returns the sysparm_fixed query.
   */
  getFixedQuery(): string;
  /**
   * Returns the form's target attribute.
   */
  getFormTarget(): string;
  /**
   * Returns the field or comma-separated list of fields that are used to group the
   * list.
   */
  getGroupBy(): string;
  /**
   * Returns the name of the list, which is usually the table name.
   */
  getListName(): string;
  /**
   * Returns the first field used to order the list.
   */
  getOrderBy(): string;
  /**
   * Returns the name of the parent table (the table associated with the form).
   */
  getParentTable(): string;
  /**
   * Returns the encoded query string for the list.
   * @param options The options can be one or more of the following.
   * orderby - include ORDERBY in the query
   *
   * groupby - include GROUPBY in the query
   *
   * fixed - include sysparm_fixed_query in the query
   *
   * all - include all the options in the query
   *
   *
   */
  getQuery(options: any): string;
  /**
   * Returns the referring URL.
   */
  getReferringUrl(): string;
  /**
   * Returns the related list field that associates the related list to the parent
   * form.
   */
  getRelated(): string;
  /**
   * Returns the related list type.
   */
  getRelatedListType(): string;
  /**
   * Returns the relationship record id, if this is type REL related list.
   */
  getRelationshipId(): string;
  /**
   * Returns the number of rows returned by the query.
   */
  getRowCount(): number;
  /**
   * Returns the number of rows to be displayed on a page.
   */
  getRowsPerPage(): number;
  /**
   * Returns the table name of the list.
   */
  getTableName(): string;
  /**
   * Returns the list title.
   */
  getTitle(): string;
  /**
   * Returns the view used to display the list.
   */
  getView(): string;
  /**
   * Returns true if the list has been personalized by the user.
   */
  isUserList(): boolean;
  /**
   * Refreshes the list. The orderBy part of the list filter is ignored so that the list's
   * natural ordering is used.
   * @param firstRow (Optional) The first row to display in the list. If not specified, the list's
   * current first row is used.
   * @param additionalParams (Optional) Name- value pairs that are submitted with the list refresh
   * request.
   */
  refresh(firstRow?: number, additionalParams?: any): any;
  /**
   * Refreshes the list using the orderBy fields.
   * @param firstRow (Optional) The first row to display in the list. If not specified, the list's
   * current first row is used.
   * @param additionalParams (Optional) Name- value pairs that are submitted with the list refresh
   * request.
   */
  refreshWithOrderBy(firstRow?: number, additionalParams?: any): any;
  /**
   * Sets the encoded query string for the list ignoring the orderBy and groupBy parts of
   * the query string.
   * @param filter An encoded query string.
   * @param saveOrderBy The default is false. When true uses the orderBy part of the query.
   * @param saveGroupBy The default is false. When true uses the groupBy part of the query.
   */
  setFilter(filter: string, saveOrderBy: boolean, saveGroupBy: boolean): any;
  /**
   * Sets the encoded query string for the list, and then refreshes the list using the new
   * filter.
   * @param filter Encoded query string.
   */
  setFilterAndRefresh(filter: string): any;
  /**
   * Sets the first row to be displayed when the list is refreshed.
   * @param firstRow The row number in the list.
   */
  setFirstRow(firstRow: number): any;
  /**
   * Specifies where to display the response from the form.
   * @param target The form.target attribute value to use.
   */
  setFormTarget(target: string): any;
  /**
   * Sets the groupBy criteria for the list, for a single field or
   * multiple fields.
   * @param String The group by criteria for the list.
   */
  setGroupBy(String: string): any;
  /**
   * Sets the orderBy criteria for the list.
   * @param orderBy Single or multiple order by fields.
   */
  setOrderBy(orderBy: string): any;
  /**
   * Sets the parent form referring url.
   * @param url The parent form's URL
   */
  setReferringUrl(url: string): any;
  /**
   * Set the number of rows to display on a page.
   * @param numRows The number of rows to display on a page.
   */
  setRowsPerPage(numRows: number): any;
  /**
   * Displays or hides all of the groups within the list and saves the current
   * collapsed/expanded state of the groups as a user preference.
   * @param showFlag When true, displays the groups within the list.
   */
  showHideGroups(showFlag: boolean): any;
  /**
   * Displays or hides the list and saves the current collapsed/expanded state of the list
   * as a user preference.
   * @param showFlag When true, displays the list.
   */
  showHideList(showFlag: boolean): any;
  /**
   * Sort the list in ascending order.
   * @param field The field to be used to sort the list.
   */
  sort(field: string): any;
  /**
   * Sorts the list in descending order.
   * @param field The field used to sort the list.
   */
  sortDescending(field: string): any;
  /**
   * Toggles the list display between collapsed and expanded, and saves the state as a user
   * preference.
   */
  toggleList(): any;
  /**
   * Toggles the list display between collapsed and expanded, but does not save the state as
   * a user preference.
   */
  toggleListNoPref(): any;
}
declare class GlideMenu {
  /**
   * Clears the image for an item.
   * @param item Specifies the item to have its image removed from display.
   */
  clearImage(item: any): any;
  /**
   * Clears any selection images from items in the menu.
   */
  clearSelected(): any;
  /**
   * Returns a menu item by item ID.
   * @param itemID Specifies the item to be returned.
   */
  getItem(itemID: string): any;
  /**
   * Disables a menu item so that it cannot be selected. The disabled menu item is displayed
   * in a lighter color (grayed out) to indicate it is disabled.
   * @param item The item to be disabled.
   */
  setDisabled(item: any): any;
  /**
   * Enables the specified menu item.
   * @param item The item to be enabled.
   */
  setEnabled(item: any): any;
  /**
   * Hides the specified menu item.
   * @param item The item to be hidden.
   */
  setHidden(item: any): any;
  /**
   * Sets an image for an item.
   * @param item the item to have the image displayed.
   * @param imgSrc the image to attach to the menu item.
   */
  setImage(item: any, imgSrc: string): any;
  /**
   * Sets the display label for a menu item. The label may contain HTML.
   * @param item the item to be labeled.
   * @param label the label to be displayed. The string may contain HTML.
   */
  setLabel(item: any, label: string): any;
  /**
   * Displays the specified item.
   * @param item The item to be displayed.
   */
  setVisible(item: any): any;
}
declare var g_menu = new GlideMenu();
declare class GlideModalFormV3 {
  constructor(title: string, tableName: string, onCompletionCallback: any);
  /**
   * Sets the specified parameter to the specified value.
   * @param name The parameter name.
   * @param value The parameter value.
   */
  addParm(name: string, value: string): any;
  /**
   * Shows the form.
   */
  render(): any;
  /**
   * Sets the function to be called when the form has been successfully submitted and
   * processed by the server.
   * @param callbackFunction The callback function to be called when the form has been successfully
   * processed.
   */
  setCompletionCallback(callbackFunction: any): any;
  /**
   * Sets the function to be called after the form has been loaded.
   * @param callbackFunction The function to be called after the form has been loaded. The callback function
   * has the form callBackFunction(GlideModalForm obj)
   */
  setOnloadCallback(callbackFunction: any): any;
  /**
   * Sets the object's sys_id preference.
   * @param sys_id The id preference. One of the query parameters passed to the form.
   */
  setSysID(sys_id: string): any;
}
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
  getPreference(name: string): string;
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
declare class GlideNavigationV3 {
  /**
   * Redirects to a new URL.
   * @param url The URL to load. It can be any URL supported by the browser.
   * @param target Optional. The frame in which to load the content specified by the URL.
   * Default: Current frame
   */
  open(url: string, target?: string): any;
  /**
   * Opens a popup window.
   * @param url URL to open.
   * @param name Window name.
   * @param features Comma-separated list of features for the popup window.
   * @param noStack Flag that indicates whether to append sysparm_stack=no to the
   * URL. This parameter helps prevent unexpected behavior when using the form back
   * button.Valid values:
   * true: Append sysparm_stack=no to the URL.
   *
   * false: Do not append sysparm_stack=no to the URL.
   *
   *
   *
   */
  openPopup(url: string, name: string, features: string, noStack: boolean): any;
  /**
   * Redirects to a record. The record displays in the navigator frame.
   * @param tableName Name of the table containing the record to display.
   * @param sys_id Sys_id of the record to display.
   */
  openRecord(tableName: string, sys_id: string): any;
  /**
   * Refreshes content in the navigator frame.
   */
  refreshNavigator(): any;
  /**
   * Reloads the current frame.
   */
  reloadWindow(): any;
}
declare var g_navigation = new GlideNavigationV3();
declare class GlideRecord {
  constructor(tableName: string);
  /**
   * Adds a column to order by in the query.
   * @param column The column by which to order the result set.
   */
  addOrderBy(column: string): any;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param name Name of the field to check.
   * @param operator Query operator. The available values are dependent on the data type of the
   * value parameter.Numbers:
   * =
   *
   * !=
   *
   * &gt;
   *
   * &gt;=
   *
   * &lt;
   *
   * &lt;=
   *
   *
   *
   * Strings (must be in upper case):
   * =
   *
   * !=
   *
   * IN
   *
   * NOT IN
   *
   * STARTSWITH
   *
   * ENDSWITH
   *
   * CONTAINS
   *
   * DOES NOT CONTAIN
   *
   * INSTANCEOF
   *
   *
   *
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(name: string, operator: any, value: any): any;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param name Name of the field to check.
   * @param value Value on which to query.
   */
  addQuery(name: string, value: any): any;
  /**
   * Deletes the current record and calls the specified response function when
   * complete.
   * @param responseFunction Response function for the Ajax callback.
   */
  deleteRecord(responseFunction: any): any;
  /**
   * Executes a GlideRecord query for a record with the specified sys_id. This method is
   * expected to be used to query for single records, so a next operation is performed before
   * returning.
   * @param sys_id The sys_id of the record to be found.
   */
  get(sys_id: any): boolean;
  /**
   * Retrieves the query condition of the current result set as an encoded query
   * string.
   */
  getEncodedQuery(): string;
  /**
   * Returns the limit for records to be returned by the GlideRecord query.
   */
  getLimit(): number;
  /**
   * Retrieves the name of the table associated with this GlideRecord.
   */
  getTableName(): string;
  /**
   * Determines if there are any more records in the GlideRecord.
   */
  hasNext(): boolean;
  /**
   * Inserts a new record using the field values that have been set for the current
   * record.
   * @param responseFunction Function to execute once the record is inserted.
   */
  insert(responseFunction: any): string;
  /**
   * Moves to the next record in the GlideRecord.
   */
  next(): boolean;
  /**
   * Specifies an orderBy column. May be called more than once to order by multiple
   * columns.
   * @param column The column name to be used to order the result set.
   */
  orderBy(column: string): any;
  /**
   * Runs the query against the table based on the addQuery() filter. This queries the
   * GlideRecord table as well as any references of the table.
   * @param responseFunction The response function for the Ajax callback.
   */
  query(responseFunction: any): any;
  /**
   * Adds a specified encoded query string to the current query clause.
   * @param encodedQuery Encoded query string to add to the current query clause.
   */
  setEncodedQuery(encodedQuery: string): any;
  /**
   * Sets the limit for how many records are in the GlideRecord.
   * @param maxQuery The limit for the number of records to retrieve.
   */
  setLimit(maxQuery: number): any;
}
declare class GlideRecordV3 {
  constructor(tableName: string);
  /**
   * Adds a column to order by in the query.
   * @param column The column by which to order the result set.
   */
  addOrderBy(column: string): any;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param fieldName Name of the field to be checked.
   * @param operator An operator for the query.
   * @param value The value to use.
   */
  addQuery(fieldName: string, operator: any, value: any): any;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param fieldName Name of the field to be checked.
   * @param value The value or list of values on which to query.
   */
  addQuery(fieldName: string, value: any): any;
  /**
   * Deletes the current record.
   * @param responseFunction The response function.
   */
  deleteRecord(responseFunction: any): boolean;
  /**
   * Get a record by sysID.
   * @param sysId The sysID of the record for which to search.
   */
  get(sysId: string): boolean;
  /**
   * Retrieves all query conditions as an encoded query string.
   */
  getEncodedQuery(): string;
  /**
   * Gets the name of the table associated with the GlideRecord.
   */
  getTableName(): string;
  /**
   * Determines if there are any more records in the GlideRecord.
   */
  hasNext(): boolean;
  /**
   * Inserts a new record using the field values that have been set for the current
   * record.
   * @param responseFunction The response function.
   */
  insert(responseFunction: any): string;
  /**
   * Moves to the next record in the GlideRecord.
   */
  next(): boolean;
  /**
   * Specifies an orderBy column. May be called more than once to order by multiple
   * columns.
   * @param column The column to add to sort the result set.
   */
  orderBy(column: string): any;
  /**
   * Performs a query using the current query conditions. Takes zero or more parameters.
   * Parameters may be in any order. Any function is considered to be a response function. Any pair
   * of literals is considered a query pair (field : value).
   * @param name The name of a field to query. (optional)
   * @param responseFunction The function called when the query results are available. (optional)
   * @param value The field value to query for. (optional)
   */
  query(name?: string, responseFunction?: any, value?: string): any;
}
declare class GlideUIScripts {
  /**
   * Calls a UI script with the UI Type set to All or Desktop from a client script or other
   * client-side code. Returns a promise.
   * @param scriptName API name of the UI script to run.
   */
  getUIScript(scriptName: string): any;
}
declare var g_ui_scripts = new GlideUIScripts();
declare class GlideURL {
  constructor(contextPath: string);
  /**
   * Adds a query string name-value pair to the URL.
   * @param name Name of the query string parameter.
   * @param value Query string value.
   */
  addParam(name: string, value: string): string;
  /**
   * Get the entire context path and query string parameters as a single URI.
   * @param additionalParams A name-value pair object that contains parameters that are added to this URL
   * request only. These additional parameters are not saved to the GlideURL
   * object.
   */
  getURL(additionalParams: any): string;
}
declare class GlideUser {
  firstName: string;
  lastName: string;
  userID: string;
  userName: string;
  /**
   * Returns a client value set using setClientData() or
   * GlideSession -- putClientData().
   * @param key Name of the client data to retrieve.
   */
  getClientData(key: string): string;
  /**
   * Returns the first and last name of the current user.
   */
  getFullName(): string;
  /**
   * Returns true if the current user has the specified role or the admin role.
   * @param role Role to check
   * @param includeDefaults Optional. Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Roles.
   * Default:
   * false
   */
  hasRole(role: string, includeDefaults?: boolean): boolean;
  /**
   * Determines whether the current user has the specified role.
   * @param includeDefaults Optional. Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Explicit roles.
   * Default: false
   * @param role Role to check.
   */
  hasRoleExactly(includeDefaults: boolean | undefined, role: string): boolean;
  /**
   * Returns true if the current user has at least one of the specified roles or has the
   * admin role.
   * @param roles Comma-separated list of roles to check
   * @param includeDefaults Optional. Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Roles.
   * Default:
   * false
   */
  hasRoleFromList(roles: string, includeDefaults?: boolean): boolean;
  /**
   * Returns true if the current user has any role.
   * @param includeDefaults Optional. Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Roles.
   * Default:
   * false
   */
  hasRoles(includeDefaults?: boolean): boolean;
  /**
   * Sets a client value that you can retrieve using
   * getClientData().
   * @param key Name of the client data to store as a key.
   * @param value Value to assign to the key.
   */
  setClientData(key: string, value: number): any;
}
declare var g_user = new GlideUser();
declare class Guided {
  /**
   * Sets a function to retrieve filtered tour results when the
   * getAllTours() method is called.
   * @param filter_func Filter function that takes a single tour object from the
   * tours[] array returned from getAllTours()
   * method.
   */
  applyListFilter(filter_func: any): any;
  /**
   * Stops a currently playing tour. This method silently exits if no tours are
   * playing.
   */
  endTour(): any;
  /**
   * Gets a list of tours on the current page from which this method is called. Because this
   * method is asynchronous, a callback function must be passed to determine operation success and
   * get a list of tours.
   * @param cb_function Callback function called by getAllTours() after attempt to
   * fetch all tours for the current page from which getAllTours()
   * method is called.
   */
  getAllTours(cb_function: any): any;
  /**
   * Loads the guided tours player on a page in which guided tours player is not present by
   * default.
   */
  loadPlayer(): any;
  /**
   * Starts a tour. Because this method is asynchronous, you must pass a callback function
   * to determine operation success.
   * @param tour_id Sys ID of the tour from the Guided Tours [sys_embedded_tour_guide]
   * table.
   * @param step_number Optional. Step at which to start the tour. If not provided (or step number is
   * 0), tour starts from the beginning.
   * @param cb_function Optional. Callback function called by startTour() method after
   * attempt to launch the tour.
   */
  startTour(tour_id: string, step_number?: number, cb_function?: any): any;
}
declare class i18NV3 {
  /**
   * Formats a string containing named tokens with values from a map.
   * @param message The message to have the tokens added.
   * @param map The map of name/value pairs to replace in the message.
   */
  format(message: string, map: any): string;
  /**
   * Retrieves a translated message.
   * @param msgKey The message to be retrieved.
   * @param callback The function to be called when the message has been retrieved. The callback
   * function has one argument, a string that is the translated message.
   */
  getMessage(msgKey: string, callback: any): any;
  /**
   * Retrieves a set of messages.
   * @param msgKeys An array of keys specifying the messages to be retrieved.
   * @param callback The function to be called when the messages have been retrieved. The callback
   * function has one argument, an object containing key-value pairs, where key is the
   * requested message key, and the value is the translated string.
   */
  getMessages(msgKeys: any[], callback: any): any;
}
declare class Mobile {
  /**
   * Adds a decorative icon next to a field.
   * @param fieldName The field name.
   * @param icon The font icon to show next to the field.
   * @param text The text title for the icon (used for screen readers).
   */
  addDecoration(fieldName: string, icon: string, text: string): any;
  /**
   * Gets the form label text.
   * @param fieldName The field name.
   */
  getLabel(fieldName: string): string;
  /**
   * Determines if a field is present on the form.
   * @param fieldName The field to look for.
   */
  hasField(fieldName: string): boolean;
  /**
   * Removes a decorative icon from next to a field.
   * @param fieldName The field name.
   * @param icon The icon to remove.
   * @param text The text title for the icon.
   */
  removeDecoration(fieldName: string, icon: string, text: string): any;
  /**
   * Sets the form label text.
   * @param fieldName The field name.
   * @param label The field label text.
   */
  setLabel(fieldName: string, label: string): any;
}
declare class NotifyClient {
  constructor(initializeVendorClientLazily: boolean, notifyConfig: any);
  /**
   * Registers an event handler to listen for changes in a Notify client.
   * @param event Name of the event to listen for. Instead of passing strings, use the
   * constants defined in SNC.Notify.STD_EVENTS.
   *
   * CALL_START: call has started and is in progress.
   *
   * CALL_CANCEL: caller canceled the call.
   *
   * CALL_INIT: WebRTC connected to a call (incoming or outgoing).
   *
   * CALL_DISCONNECT: current call has been disconnected.
   *
   * ERROR: Error occurred. Parameters: message(string),
   * errCode(string)
   * message: error message to display.
   *
   * errCode: Optional. Associated error code.
   *
   *
   *
   *
   * INCOMING_CALL: Call is coming in. Parameters: from(string),
   * to(string), callId(string), parentId(string), sysId(string),
   * isFromClient(boolean)
   * from: caller's phone number.
   *
   * to: called phone number.
   *
   * callId: SID of the call.
   *
   * parentId: parent notify_call reference. If skipParentId
   * is set to true, this parameter should not be passed.
   *
   * sysId: WebRTC-to-WebRTC calls only. Unique identifier
   * (sys_id) of the caller.
   *
   * isFromClient: WebRTC-to-WebRTC calls only. Flag that
   * indicates whether the call is from another WebRTC client.
   *
   *
   *
   *
   * CALL_MUTE: client is muted.
   *
   * CALL_UNMUTE: client is unmuted.
   *
   * OFFLINE: WebRTC session is not active.
   *
   * ONLINE: WebRTC session is ready. Must be set after calling the init()
   * method.
   *
   *
   */
  addEventListener(event?: string): any;
  /**
   * Calls the specified phone number or the phone number associated with a specified
   * user.
   * @param identifier JSON object that contains either a phone number to call or the sys_id of a
   * WebRTC user. Passing a user sys_id causes the call to be made through
   * browser-to-browser communication.You can obtain the user sys_id from the Notify
   * WebRTC Session table.
   * Note: If you provide both a phone number and user sys_id,
   * the method only uses the phone number.
   */
  call(identifier: any): any;
  /**
   * Kills the current Notify client, rendering it unusable.
   */
  destroy(): any;
  /**
   * Forwards an ongoing incoming or outgoing phone call to either a different phone number
   * or a different WebRTC client.
   * @param argument JSON object that contains the necessary information for forwarding the call to
   * either a phone number or a WebRTC client (user sys_id). You can obtain this sys_id
   * from the Notify WebRTC Session table.
   */
  forwardCall(argument: any): any;
  /**
   * Returns a list of clients available to accept calls.
   * @param callback Function to use to parse the list of clients. This function accepts a single
   * parameter, an array of JSON objects with the following
   * format:[{
   * sys_id: "...",  // user's sys_id
   * name: "..." // user's name
   * }]
   */
  getAvailableClients(callback: any): any;
  /**
   * Returns the parent call identifier for a specified call identifier, if one
   * exists.
   * @param callId Unique identifier of the call for which to return the parent call
   * identifier.
   * @param callback Function that obtains the JSON object that contains either the parent call
   * identifier or an error message if the identifier could not be obtained after several
   * tries.
   */
  getParentId(callId: string, callback: any): string;
  /**
   * Returns the normalized status of the current call.
   */
  getStatus(): string;
  /**
   * End the current call.
   */
  hangupCall(): any;
  /**
   * Initializes the client driver.
   */
  init(): any;
  /**
   * Mute or unmute the current client.
   * @param muted Mutes or unmutes the current call.
   * false: (or any non-true value) unmutes the current call.
   *
   * true: mutes the current call.
   *
   *
   */
  mute(muted: boolean): any;
  /**
   * Answers and connects to an incoming call from a WebRTC client.
   */
  pickupCall(): any;
  /**
   * Send one or more DTMF-valid digits over the current call.
   * @param digits One or more DTMF-valid digits.
   */
  sendDtmf(digits: string): any;
  /**
   * Sets the caller ID for the current client session.
   * @param value Phone number to use to make and receive calls.
   * @param autoSelectVendorCallback Optional.initializeVendorClientLazily must be set
   * to "true" in the constructor to use this function, otherwise an error is thrown.
   * Name of the callback function to call once the vendor is automatically set for
   * the specified phone number. With this option, the vendor does not need to be
   * specified in the constructor (notifyConfig.vendor). Auto
   * vendor selection is an asynchronous operation. Therefore, this callback is
   * required to indicate when it is safe to call
   * notifyConfig.init(), as this method requires that the vendor
   * be set before it is called. In addition, you must also check if
   * notifyConfig.vendor has been set in the callback to ensure
   * that a vendor has been specified.
   */
  setCallerId(value: string, autoSelectVendorCallback?: any): any;
  /**
   * Sets the availability of an active WebRTC client agent.
   * @param available Flag that indicates whether an active WebRTC client wants to receive calls.
   * false: client does not want to receive calls.
   *
   * true: client does want to receive calls.
   *
   *
   */
  setClientAvailable(available: boolean): any;
}
declare class NotifyOnTaskClient {
  /**
   * Adds the specified participants to a specified conference call.
   * @param data Object that describes the conference call.
   */
  addParticipants(data: any): any;
  /**
   * Performs the specified conference call action, such as starting/ending a conference
   * call or joining, removing, muting, or unmuting participants from a conference call.
   * @param action Defines the conference call action to perform.The
   * following are the available conference call actions:
   * start: Starts the conference call identified in
   * data.confId
   *
   * end: Terminates the conference call identified in
   * data.confId
   *
   * join: Adds the participant specified in the data.items
   * array to the conference call identified in data.confId
   *
   * multiJoin: Adds the participants specified in the
   * data.items array to the conference call identified in
   * data.confId
   *
   * selfJoin: Adds the currently logged in user to the conference call (no entry
   * in data.items required.)
   *
   * kick: Removes the participant specified in the data.items
   * array from the conference call identified in
   * data.confId
   *
   * multiKick: Removes the participants specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   * mute: Mutes the participant specified in the data.items
   * array on the conference call identified in data.confId
   *
   * multiMute: Mutes the participants specified in the
   * data.items array on the conference call identified in
   * data.confId
   *
   * unmute: Unmutes the participant specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   * multiUnmute: Unmutes the participants specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   *
   *
   * @param data Object that describes the conference call.
   */
  doConferenceAction(action: string, data: any): any;
  /**
   * Terminates the specified conference call.
   * @param data Object that describes the conference call.
   */
  endConference(data: any): any;
  /**
   * Returns a JSON data template to use with the doConferenceAction()
   * method. Using this template automatically structures the data object so that you don't have to
   * manually create it.
   */
  getNotifyActionTemplate(): any;
  /**
   * Starts a new conference call.
   * @param data Object that describes the conference call.
   */
  start(data: any): any;
}
declare class openFrameAPI {
  /**
   * Hides the OpenFrame in the TopFrame.
   */
  hide(): any;
  /**
   * Initialize OpenFrame, must be the first method called.
   * @param config An object of key value pairs. The possible keys are height, width, title,
   * subTitle, and titleIcon. All keys are optional.
   * @param successCallback The callback function used if the init method succeeds. The
   * openframe configuration stored in the system is passed as a parameter to the
   * callback function.
   * @param failureCallback The callback function used if the init method fails.
   */
  init(
    config: any | undefined,
    successCallback: any,
    failureCallback: any,
  ): any;
  /**
   * Checks to see if the OpenFrame is visible in the TopFrame.
   * @param callback The callback function receives a parameter with a value of true or false. True
   * if OpenFrame is visible and false if not visible.
   */
  isVisible(callback: any): any;
  /**
   * Opens a custom URL in TopFrame.
   * @param Url A string of 2083 or fewer characters.
   */
  openCustomURL(Url: string): any;
  /**
   * Opens a form URL.
   * @param details Key-value pairs that identify the form URL to open.
   * "details": {
   * "entity": "String";
   * "interaction_sys_id": "String";
   * "query": "String"
   * }
   */
  openServiceNowForm(details: any): any;
  /**
   * Opens a list URL in TopFrame.
   * @param details An object of key value pairs. The possible keys are
   * entity, the table name
   *
   * query, an encoded query string
   *
   *
   */
  openServiceNowList(details: any): any;
  /**
   * Sets the OpenFrame mode.
   * @param Mode Set OpenFrame Mode. Enumerated options:
   * openFrameAPI.FRAME_MODE.COLLAPSE
   *
   * openFrameAPI.FRAME_MODE.EXPAND
   *
   *
   */
  setFrameMode(Mode: string): any;
  /**
   * Sets the OpenFrame height.
   * @param Height Height in pixels
   */
  setHeight(Height: number): any;
  /**
   * The OpenFrame header can include icons that are placed next to the close
   * icon.
   * @param icons A list of icon configurations, where each icon configuration is an object with
   * key values imageURL, imageTitle, and any other needed context.
   */
  setIcons(icons: any[]): any;
  /**
   * Sets the presence indicator to display agent availability in a workspace.
   * @param state Presence state of the agent.Default states:
   *
   * Available
   *
   * Away
   *
   * Offline
   *
   *
   * You can also specify custom states.
   * @param color Presence indicator color on workspace. Supported colors:
   *
   * red
   *
   * orange
   *
   * grey
   *
   * green
   *
   *
   */
  setPresenceIndicator(state: string, color: string): any;
  /**
   * Sets the OpenFrame size.
   * @param width Should be greater than zero.
   * @param height Should be greater than zero.
   */
  setSize(width: number, height: number): any;
  /**
   * Sets the OpenFrame subtitle.
   * @param subTitle A string of 256 or fewer characters.
   */
  setSubtitle(subTitle: string): any;
  /**
   * Sets the OpenFrame title.
   * @param title A string of 256 or fewer characters.
   */
  setTitle(title: string): any;
  /**
   * Sets the OpenFrame's title icon.
   * @param icon Object of key value pairs. Keys include imageURL, imageTitle, and any other
   * context needed.
   */
  setTitleIcon(icon: any): any;
  /**
   * Sets the OpenFrame width.
   * @param Width Width in pixels
   */
  setWidth(Width: number): any;
  /**
   * Makes the OpenFrame visible in the TopFrame.
   */
  show(): any;
  /**
   * Subscribes to the event.
   * @param event One of the following events:
   * openframe_awa_agent_presence: In Advanced Work Assignment (AWA), this event occurs when there is any change
   * in the agent presence state. Computer Telephony Integration (CTI) developers can
   * subscribe to the this event to receive presence state changes.
   *
   * openframe_before_destroy: Occurs before the TopFrame is unloaded.
   *
   * openframe_collapse: Occurs when the collapse icon is clicked on the OpenFrame
   * header.
   *
   * openframe_communication: Application-specific and can be customized.
   *
   * openframe_communication_failure: Occurs when communication to TopFrame
   * fails.
   *
   * openframe_expand: Occurs when the expand icon is clicked on the OpenFrame
   * header.
   *
   * openframe_header_icon_clicked: Deprecated. Use openframe_icon_clicked or
   * openframe_title_icon_clicked instead.
   *
   * openframe_hidden: Occurs when the OpenFrame is hidden.
   *
   * openframe_icon_clicked: Occurs when any icon other than the close icon is
   * clicked on the OpenFrame footer. The callback receives the icon object as a
   * parameter.
   *
   * openframe_shown: Occurs when the OpenFrame is shown.
   *
   * openframe_title_icon_clicked: Occurs when the title icon is clicked on the
   * OpenFrame. The callback receives the titleIcon object as a parameter.
   *
   *
   * @param eventCallback Function called when the specified event occurs.
   */
  subscribe(event: any, eventCallback: any): any;
  /**
   * Returns the OpenFrame API version.
   */
  version(): string;
}
declare class ScriptLoader {
  /**
   * Loads scripts asynchronously.
   * @param scripts Array of scripts to load.
   * @param callback Function to call when the scripts have been loaded. The callback function must
   * not have any arguments.
   */
  getScripts(scripts: any[], callback: any): any;
  /**
   * Loads scripts asynchronously.
   * @param filePath Path, including the file name, that contains one or more scripts.
   * @param callback Function to call after the scripts have been loaded. This callback function
   * should not have arguments.
   */
  getScripts(filePath: string, callback: any): any;
}
declare class spAriaUtil {
  /**
   * Announce a message to a screen reader.
   * @param message The message to be shown.
   */
  sendLiveMessage(message: string): any;
}
declare class spContextManager {
  /**
   * Initializes a key and adds widget data as the value. For example, add data to the
   * 'agent-chat' key to make it available to Agent Chat.
   * @param key Name of the key to send the data. Available keys
   * include:
   * agent-chat: Sends widget data to Agent Chat when it opens
   * in a Service Portal
   * page.
   *
   *
   *
   * @param context Widget data in JSON format to send to the
   * application or service specified in the key parameter. For example,
   * {'approval_count': 5}.
   */
  addContext(key: string, context: any): any;
  /**
   * Returns each key and associated data object defined by any widget on the
   * page.
   */
  getContext(): any;
  /**
   * Returns the widget data associated with a key.
   * @param key Name of the key to get context from. Available keys include:
   *
   * agent-chat: Sends widget data to Agent Chat when it opens
   * in a Service Portal
   * page.
   *
   *
   *
   *
   * @param returnPromise Flag that determines whether to return the data associated with a key as a
   * promise or an object. Values include:
   *
   * True: return the data as a promise. Use this option if another widget on the
   * page uses the addContext() method to initialize the same
   * key. Returning a promise prevents returning an undefined object when the key
   * is not yet initialized.
   *
   * False: returns an object containing the data associated with the key.
   *
   *
   *
   *
   */
  getContextForKey(key: string, returnPromise: boolean): any;
  /**
   * Sends data to an existing key. For example, if another widget on the page uses the
   * 'agent-chat' key to pass data to the Agent Chat configuration, you must
   * update the context of the key rather than using the addContext()
   * method.
   * @param key Name of the key to send the data. Available keys
   * include:
   * agent-chat: Sends widget data to Agent Chat when it opens
   * in a Service Portal
   * page.
   *
   *
   *
   * @param context Widget data in JSON format to send to the
   * application or service specified in the key parameter. For example,
   * {'approval_count': 5}.
   */
  updateContextForKey(key: string, context: any): any;
}
declare class spModal {
  /**
   * Displays an alert.
   * @param message The message to display.
   */
  alert(message: string): boolean;
  /**
   * Displays a confirmation message.
   * @param message The message to display.
   */
  confirm(message: string): boolean;
  /**
   * Opens a modal window using the specified options.
   * @param options An object that may have these properties.
   * title - a string that can be HTML that goes in the header. The default is
   * empty.
   *
   * message - a string that can be HTML that goes in the header. The default is
   * empty.
   *
   * buttons - an array that contains the buttons to show on the dialog. The
   * default is Cancel and OK.
   *
   * input - a Boolean. When true shows an input field on the dialog. The default
   * is false.
   *
   * value - a string containing the value of the input field. The default is
   * empty.
   *
   * widget - a string that identifies the widget ID or sys_id to embed in the
   * dialog. The default is empty.
   *
   * widgetInput - an object to send the embedded widget as input. The default is
   * null.
   *
   * shared - a client-side object to share data with the embedded widget client
   * script.
   *
   * size - a string indicating the size of the window. Can be 'sm' or 'lg'. The
   * default is empty.
   *
   *
   */
  open(options: any): any;
  /**
   * Displays a prompt for user input.
   * @param message The message to display.
   * @param default_ A default value to use if the user does not provide a response.
   */
  prompt(message: string, default_?: string): string;
}
declare class spUtil {
  /**
   * Displays a notification error message.
   * @param message Error message to display.
   */
  addErrorMessage(message: string): any;
  /**
   * Displays a notification info message.
   * @param message Message to display.
   */
  addInfoMessage(message: string): any;
  /**
   * Displays a trivial notification message.
   * @param message Message to display.
   */
  addTrivialMessage(message: string): any;
  /**
   * Create a unique ID.
   */
  createUid(): string;
  /**
   * Formats a string as an alternative to string concatenation.
   * @param template String template with values for substitution.
   * @param data Object containing variables for substitution.
   */
  format(template: string, data: any): string;
  /**
   * Returns a widget model by ID or sys_id.
   * @param widgetId Widget ID or sys_id of the widget to embed.
   * @param data (Optional) Name/value pairs of parameters to pass to the widget model.
   */
  get(widgetId: string, data?: any): any;
  /**
   * Retrieve all headers to be used for API calls.
   */
  getHeaders(): any;
  /**
   * Get complete host domain.
   */
  getHost(): string;
  /**
   * Execute callback with User Preference response by passing Preference name.
   * @param preference The name of the preference.
   * @param callback Define the callback function.
   */
  getPreference(preference: string, callback: any): any;
  /**
   * Get current service portal url information.
   */
  getURL(): string;
  /**
   * Check if current client is a mobile device.
   */
  isMobile(): boolean;
  /**
   * Brief description of the method.
   * @param attributes String containing comma separated attributes, such as the
   * Attributes field of a dictionary record.
   */
  parseAttributes(attributes: string): any;
  /**
   * Watches for updates to a table or filter and returns the value from the callback
   * function.
   * @param $scope Scope of the data object updated by the callback function.
   * @param table Watched table.
   * @param filter Filter for fields to watch.
   * @param callback Optional. Parameter to define the callback function.
   */
  recordWatch($scope: any, table: string, filter: string, callback?: any): any;
  /**
   * Calls the server and replaces the current options and
   * data with the server response.
   * @param $scope The scope defined for the update.
   */
  refresh($scope: any): any;
  /**
   * Sscroll to element with specified selector, over specified period of time.
   * @param selector The selector to scroll to.
   * @param time The time, in milliseconds, taken to scroll to the specified selector.
   */
  scrollTo(selector: string, time: number): any;
  /**
   * Update the header breadcrumbs.
   * @param $scope The scope defined for the table.
   * @param breadcrumbs An array of conditions used to create the breadcrumb filter.
   */
  setBreadCrumb($scope: any, breadcrumbs: any[]): any;
  /**
   * Set a user preference.
   * @param preference The preference name
   * @param value The preference value
   */
  setPreference(preference: string, value: string): any;
  /**
   * Update the search page.
   * @param searchPage The name of the search page.
   */
  setSearchPage(searchPage: string): any;
  /**
   * Updates the data object on the server within a given scope.
   * @param $scope The scope defined for the update.
   */
  update($scope: any): any;
}
declare class StopWatch {
  constructor();
  constructor(initialDate: any);
  /**
   * Returns the number of milliseconds since the timer started.
   */
  getTime(): number;
  /**
   * Resets the timer to the current time.
   */
  restart(): any;
  /**
   * The elapsed time as HH:MM:SS.SSS.
   */
  toString(): string;
}
