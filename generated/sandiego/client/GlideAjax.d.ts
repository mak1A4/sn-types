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
export { GlideAjax };
