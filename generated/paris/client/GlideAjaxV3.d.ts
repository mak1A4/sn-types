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
  getParam(name: string): any;
  /**
   * Returns the name-value pairs for the request.
   */
  getParams(): any;
  /**
   * Returns the server-side script that the request is going to use.
   */
  getProcessor(): any;
  /**
   * Returns the target URL.
   */
  getURL(): any;
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
export { GlideAjaxV3 };
