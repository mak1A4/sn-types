declare class GlideOAuthClientResponse {
  /**
   * Retrieves all of the response information, including instance information.
   */
  getBody(): any;
  /**
   * Retrieves the HTTP response content header from an external OAuth provider.
   */
  getContentType(): any;
  /**
   * Retrieves the error message if authentication is not successful.
   */
  getErrorMessage(): any;
  /**
   * Retrieves the HTTP response code from the external OAuth provider.
   */
  getResponseCode(): any;
  /**
   * Retrieves the error message if authentication is not successful.
   */
  getResponseParameters(): any;
  /**
   * Retrieves the refresh token.
   */
  getToken(): any;
}
export { GlideOAuthClientResponse };
