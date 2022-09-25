declare class HttpRequestData {
  constructor();
  /**
   * Adds a header to the HttpRequestData object.
   * @param key Name of the HTTP header.
   * @param value Value of the HTTP Header.
   */
  addHeader(key: string, value: string): any;
  /**
   * Adds a query parameter to the HttpRequestData object.
   * @param key Name of the query parameter.
   * @param value Value of the query parameter.
   */
  addQueryParam(key: string, value: string): any;
  /**
   * Removes a header from the HttpRequestData object.
   * @param key Name of the HTTP header to remove.
   */
  deleteHeader(key: string): any;
  /**
   * Returns the sys_id of the Connection & Credential alias associated with the IntegrationHub REST step.
   */
  getConnectionAliasID(): any;
  /**
   * Returns the value of a connection attribute associated with the Connection &
   * Credential alias associated with IntegrationHub REST step.
   * @param name Name of the connection attribute.
   */
  getConnectionExtendedAttribute(name: string): any;
  /**
   * Returns the content of the request in the HttpRequestData object.
   */
  getContent(): any;
  /**
   * Returns the date when the request was signed.
   */
  getDate(): any;
  /**
   * Returns whether the signature is applied to the request in the header or as a query
   * parameter.
   */
  getDirective(): any;
  /**
   * Returns the endpoint set for the request.
   */
  getEndpoint(): any;
  /**
   * Returns the time in seconds before the signature expires starting when the request was
   * signed using the generateAuth() method in the
   * RequestAuthAPI class.
   */
  getExpiry(): any;
  /**
   * Returns the value associated with the given HTTP header.
   * @param key Name of HTTP header.
   */
  getHeader(key: string): any;
  /**
   * Returns an object containing the headers included in the request.
   */
  getHeaderMap(): any;
  /**
   * Returns the host used in the request.
   */
  getHost(): any;
  /**
   * Returns the HTTP method used in the request.
   */
  getHttpMethod(): any;
  /**
   * Returns the value of the specified query parameter.
   * @param key Name of the query parameter to get the value of.
   */
  getQueryParam(key: string): any;
  /**
   * Returns an object containing the query parameters included in the request.
   */
  getQueryParamMap(): any;
  /**
   * Returns the region for the request that will be used in signing.
   */
  getRegion(): any;
  /**
   * Returns the service defined in the request.
   */
  getService(): any;
  /**
   * Defines the content to send in the request.
   * @param content Content to send in the request.
   */
  setContent(content: string): any;
  /**
   * Defines the date of the request used for signing.
   * @param date The difference between January 1, 1970 UTC and the date used to sign the
   * request.Unit: Milliseconds
   */
  setDate(date: number): any;
  /**
   * Defines whether to apply the signature to the request in a header or as a query
   * parameter.
   * @param directive Whether to apply the signature to the header or as a query parameter. Values
   * include:
   *
   * query: Applies signature as a query parameter.
   *
   * header: Applies signature to the request header.
   *
   *
   * Default: header
   */
  setDirective(directive: string): any;
  /**
   * Defines the endpoint to send the request to.
   * @param endpoint Endpoint to send the request to. The endpoint can include query parameters,
   * path, and version.
   */
  setEndpoint(endpoint: string): any;
  /**
   * Sets the amount of time before the signature expires starting when the request is
   * signed using the generateAuth() method in the
   * RequestAuthAPI class.
   * @param expiry Amount of time before the signature expires.Unit: Seconds
   */
  setExpiry(expiry: number): any;
  /**
   * Defines the host used in the request.
   * @param host Name of the HTTP request host.
   */
  setHost(host: string): any;
  /**
   * Sets the HTTP method to use in the request.
   * @param httpMethod HTTP method to use in the request.
   */
  setHttpMethod(httpMethod: string): any;
  /**
   * Defines the region to use for the request in signing.
   * @param region The region to use to sign the request. Available values are determined by the
   * third-party API's requirements.
   */
  setRegion(region: string): any;
  /**
   * Defines the service for the request.
   * @param service The service for the request.
   */
  setService(service: string): any;
}
export { HttpRequestData };
