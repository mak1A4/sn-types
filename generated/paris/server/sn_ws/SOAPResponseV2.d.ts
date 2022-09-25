declare class SOAPResponseV2 {
  /**
   * Return all headers contained in the response, including any duplicate
   * headers.
   */
  getAllHeaders(): any;
  /**
   * Get the content of the SOAP response body.
   */
  getBody(): any;
  /**
   * Returns all cookies included in the response.
   */
  getCookies(): any;
  /**
   * Get the numeric error code if there was an error during the SOAP
   * transaction.
   */
  getErrorCode(): any;
  /**
   * Get the error message if there was an error during the SOAP transaction.
   */
  getErrorMessage(): any;
  /**
   * Get the value for a specified HTTP header.
   * @param name The name of the header that you want the value for, such as Set-Cookie.
   */
  getHeader(name: string): any;
  /**
   * Get all HTTP headers returned in the SOAP response and the associated
   * values.
   */
  getHeaders(): any;
  /**
   * Get the numeric HTTP status code returned by the SOAP provider.
   */
  getStatusCode(): any;
  /**
   * Indicate if there was an error during the SOAP transaction.
   */
  haveError(): any;
  /**
   * Set the amount of time the instance waits for a response from the web service
   * provider.
   * @param timeoutSecs The amount of time, in seconds, to wait for this response.
   */
  waitForResponse(timeoutSecs: number): any;
}
export { SOAPResponseV2 };
