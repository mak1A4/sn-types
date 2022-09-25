declare class SOAPResponseV2 {
  /**
   * Returns all headers contained in the response, including any duplicate
   * headers.
   */
  getAllHeaders(): any;
  /**
   * Gets the content of the SOAP response body.
   */
  getBody(): any;
  /**
   * Returns all cookies included in the response.
   */
  getCookies(): any;
  /**
   * Gets the numeric error code if there was an error during the SOAP
   * transaction.
   */
  getErrorCode(): any;
  /**
   * Gets the error message if there was an error during the SOAP transaction.
   */
  getErrorMessage(): any;
  /**
   * Gets the value for a specified HTTP header.
   * @param name Name of the header that you want the value for, such as Set-Cookie.
   */
  getHeader(name: string): any;
  /**
   * Gets all HTTP headers returned in the SOAP response and the associated
   * values.
   */
  getHeaders(): any;
  /**
   * Gets the numeric HTTP status code returned by the SOAP provider.
   */
  getStatusCode(): any;
  /**
   * Indicates if there was an error during the SOAP transaction.
   */
  haveError(): any;
  /**
   * Sets the amount of time the instance waits for a response from the web service
   * provider.
   * @param timeoutSecs Amount of time, in seconds, to wait for this response.
   */
  waitForResponse(timeoutSecs: number): any;
}
export { SOAPResponseV2 };
