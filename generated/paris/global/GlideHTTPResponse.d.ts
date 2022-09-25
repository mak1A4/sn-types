declare class GlideHTTPResponse {
  /**
   * Returns a list of all headers.
   */
  getAllHeaders(): any;
  /**
   * Returns a string containing the body for the HTTP response.
   */
  getBody(): any;
  /**
   * Returns the list of cookies associated with an endpoint call.
   */
  getCookies(): any;
  /**
   * Returns the current error code returned by an endpoint.
   */
  getErrorCode(): any;
  /**
   * Returns the last error encountered.
   */
  getErrorMessage(): any;
  /**
   * Returns the header specified in the passed-in parameter.
   * @param name Name of the response header to return, such as
   * Content-Type.
   */
  getHeader(name: string): any;
  /**
   * Returns all headers associated with the endpoint response.
   */
  getHeaders(): any;
  /**
   * Returns the HTTP method associated with the specified endpoint call.
   */
  getHttpMethod(): any;
  /**
   * Returns the last status code for an endpoint call.
   */
  getStatusCode(): any;
  /**
   * Returns a flag that indicates whether there were any errors while processing the
   * endpoint call.
   */
  haveError(): any;
}
export { GlideHTTPResponse };
