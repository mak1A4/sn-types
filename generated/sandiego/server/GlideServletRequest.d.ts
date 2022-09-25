declare class GlideServletRequest {
  /**
   * Returns the MIME type of the body of the request.
   */
  getContentType(): any;
  /**
   * Returns the header value.
   * @param name The name of the header to be retrieved.
   */
  getHeader(name: string): any;
  /**
   * Returns a comma-separated list of header names.
   */
  getHeaderNames(): any;
  /**
   * Returns the header values.
   * @param name Names of the headers to be retrieved.
   */
  getHeaders(name: string): any;
  /**
   * Returns the value of the parameter contained in the request URL.
   * @param name The name of the parameter to be retrieved. This can be the parameter endpoint
   * from the processor form.
   */
  getParameter(name: string): any;
  /**
   * Returns a list of URL parameters that were used in the request URI.
   */
  getParameterNames(): any;
  /**
   * Returns the query string from the request.
   */
  getQueryString(): any;
}
export { GlideServletRequest };
