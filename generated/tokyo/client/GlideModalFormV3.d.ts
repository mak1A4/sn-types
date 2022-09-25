declare class GlideModalFormV3 {
  constructor(
    title: string,
    tableName: string,
    onCompletionCallback: any,
    readOnly?: boolean,
  );
  /**
   * Sets the specified form field to the specified value.
   * @param name Form field name. If the specified name is not a field in the associated modal
   * form, it is ignored.
   * @param value Value to set the specified form field to.
   */
  addParm(name: string, value: string): any;
  /**
   * Shows the modal form.
   */
  render(): any;
  /**
   * Sets the function to be called when the form has been successfully submitted and
   * processed by the server.
   * @param callbackFunction Callback function to call when the form has been successfully processed. The
   * callback function has the form callbackFunction(String action_verb, String
   * sys_id, String table, String displayValue) where:
   * action_verb: action_name from a sys_ui_action
   * record
   *
   * sys_id: Sys_id of the affected record
   *
   * table: Name of the table containing the record
   *
   * displayValue: Value that appears on the form
   *
   *
   *
   */
  setCompletionCallback(callbackFunction: any): any;
  /**
   * Sets the function to be called after the form has been loaded.
   * @param callbackFunction Function to call after the form has been loaded. The callback function has the
   * form callBackFunction(GlideModalForm obj)
   */
  setOnloadCallback(callbackFunction: any): any;
  /**
   * Sets the object's sys_id preference.
   * @param sys_id The id preference. One of the query parameters passed to the form.
   */
  setSysID(sys_id: string): any;
}
export { GlideModalFormV3 };
