declare class RequestAuthAPI {
  constructor(data: any, credential: any);
  /**
   * Signs the HttpRequestData object and returns an HttpRequestAuthedData object to use to
   * send in the REST request.
   */
  generateAuth(): any;
  /**
   * Returns the credential record used to sign the request.
   */
  getAuthCredential(): any;
  /**
   * Returns the HttpRequestData object that was used to instantiate the
   * RequestAuthAPI class.
   */
  getHttpRequestData(): any;
  /**
   * Generates a temporary, limited privilege token that you can use to provide trusted
   * users with temporary security credentials to control third-party resources.
   */
  resetAuthCredential(): any;
}
export { RequestAuthAPI };
