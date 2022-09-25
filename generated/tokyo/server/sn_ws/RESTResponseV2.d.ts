declare class RESTResponseV2 {
  /**
   * Returns all headers contained in the response, including any duplicate
   * headers.
   */
  getAllHeaders(): any;
  /**
   * Gets the content of the REST response body.
   */
  getBody(): any;
  /**
   * Returns all cookies included in the response.
   */
  getCookies(): any;
  /**
   * Gets the numeric error code if there was an error during the REST transaction.
   */
  getErrorCode(): any;
  /**
   * Gets the error message if there was an error during the REST transaction.
   */
  getErrorMessage(): any;
  /**
   * Gets the value for a specified header.
   * @param name Name of the header that you want the value for, such as Set-Cookie.
   */
  getHeader(name: string): any;
  /**
   * Gets all headers returned in the REST response and the associated values.
   */
  getHeaders(): any;
  /**
   * Gets the fully-resolved query sent to the REST endpoint..
   */
  getQueryString(): any;
  /**
   * Gets the sys_id value of the attachment created from the response body
   * content.
   */
  getResponseAttachmentSysid(): any;
  /**
   * Gets the numeric HTTP status code returned by the REST provider.
   */
  getStatusCode(): any;
  /**
   * Indicates if there was an error during the REST transaction.
   */
  haveError(): any;
  /**
   * Set the amount of time the instance waits for a response from the web service
   * provider.
   * @param timeoutSecs The amount of time, in seconds, to wait for this response.
   */
  waitForResponse(timeoutSecs: number): any;
}
export { RESTResponseV2 };
