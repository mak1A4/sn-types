declare class RESTAPIRequest {
  body: any;
  headers: any;
  pathParams: any;
  queryParams: any;
  queryString: string;
  uri: string;
  url: string;
  /**
   * Returns the value of a specific header from the web service request.
   * @param header The name of the header, such as accept or
   * content-type.
   */
  getHeader(header: string): any;
  /**
   * Get the content types specified in the request Accept header.
   */
  getSupportedResponseContentTypes(): any;
}
export { RESTAPIRequest };
