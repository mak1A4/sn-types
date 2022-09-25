declare class GlideHTTPRequest {
  /**
   * Adds a header to your HTTP request.
   * @param name Header name, such as Accept or
   * Content-Type.
   * @param value Header value, such as application/json.
   */
  addHeader(name: string, value: string): any;
  /**
   * Adds a parameter to your HTTP request.
   * @param name Parameter to add, such as sysparm_limit.
   * @param value Value for the parameter.
   */
  addParameter(name: string, value: string): any;
  /**
   * Performs a delete request on a specified endpoint.
   */
  del(): any;
  /**
   * Retrieves a specified record(s) from a resource (REST endpoint).
   */
  get(): any;
  /**
   * Updates the specified resource only with the specified fields.
   * @param content Name-value pairs of the fields to update in the specified GlideHTTPRequest
   * object (record).
   */
  patch(content: any): any;
  /**
   * Posts a record to the specified resource.
   * @param content Name-value pairs of the fields to pass to the specified GlideHTTPRequest
   * object.
   */
  post(content: any): any;
  /**
   * Updates a specified record in a resource.
   * @param content Name-value pairs of the fields to update in the specified GlideHTTPRequest
   * object (record).
   */
  put(content: any): any;
  /**
   * Sets a user name and password for basic authentication.
   * @param userName User name to use for authentication.
   * @param password User's password to use for authentication.
   */
  setBasicAuth(userName: string, password: string): any;
  /**
   * Sets the Content-Type header for your HTTP request to the specified value.
   * @param type Content type to set, such as application/json or
   * multipart/form-data. For additional information on Content-Type,
   * see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type.
   */
  setContentType(type: string): any;
  /**
   * Enables or disables the follow redirect option for a REST endpoint call.
   * @param followRedirect Flag that indicates whether the endpoint should follow any URL redirect
   * returned by the endpoint. Valid values:
   * true: Following any returned redirect.
   *
   * false: Ignore any returned redirect.
   *
   *
   *
   * Default: true
   */
  setFollowRedirect(followRedirect: boolean): any;
  /**
   * Sets the HTTP timeout value in milliseconds.
   * @param timeout Timeout value to set.Unit: Milliseconds
   */
  setHttpTimeout(timeout: number): any;
  /**
   * Sets the log level for an HTTP request.
   * @param logLevel The level of logging available.
   * Note: For performance reasons, in production it is advisable to leave HTTP request
   * logging at basic.
   *
   * Valid values:
   *
   * basic: Covers many of the attributes of the HTTP transaction including host,
   * path, response status, and so on.
   *
   * elevated: Includes all of basic, as well as all request
   * headers, the query string, and all response headers.
   *
   * all: Includes all of elevated, as well as the request
   * body and the response body.
   *
   *
   * Default: basic
   */
  setLogLevel(logLevel: string): any;
  /**
   * Sets the proxy host and port for the associated REST call.
   * @param host Proxy host
   * @param port Proxy port
   */
  setupProxy(host: string, port: string): any;
}
export { GlideHTTPRequest };
