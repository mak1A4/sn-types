declare class HttpRequestAuthedData {
  constructor();
  /**
   * Adds a header to the HttpRequestAuthedData object.
   * @param key Name of the HTTP header.
   * @param value Value of the HTTP Header.
   */
  addHeader(key: string, value: string): any;
  /**
   * Adds a query parameter to the HttpRequestAuthedData object.
   * @param key Name of the query parameter.
   * @param value Value of the query parameter.
   */
  addQueryParam(key: string, value: string): any;
  /**
   * Returns whether the signature is applied to the request in the header or as a query
   * parameter.
   */
  getDirective(): any;
  /**
   * Returns an object containing the headers that were included when the request was
   * signed.
   */
  getHeaderMap(): any;
  /**
   * Returns an object containing the query parameters included when the request was
   * signed.
   */
  getQueryMap(): any;
  /**
   * Returns the status of the request signing.
   */
  getStatus(): any;
  /**
   * Returns a detailed message about the request signing. If the request signing fails,
   * this method returns the error message.
   */
  getStatusMessage(): any;
  /**
   * Defines whether to apply the signature to the signed request in the header or as a
   * query parameter.
   * @param directive Whether to apply the signature to the header or as a query parameter of the
   * signed request. Values include:
   *
   * query: Applies signature as a query parameter.
   *
   * header: Applies signature to the request header.
   *
   *
   */
  setDirective(directive: string): any;
  /**
   * Sets the status of the request signing.
   * @param status The status of the request signing. Possible values:
   *
   * success: The system successfully signed the request.
   *
   * fail: The system failed to sign the request.
   *
   * skipped: The system skipped signing because the information
   * was incomplete.
   *
   *
   */
  setStatus(status: string): any;
  /**
   * Sets a status message for the request signing.
   * @param statusMessage Message to set for the request signing status.
   */
  setStatusMessage(statusMessage: string): any;
}
export { HttpRequestAuthedData };
