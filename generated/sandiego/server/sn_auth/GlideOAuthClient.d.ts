declare class GlideOAuthClient {
  /**
   * Retrieves the access and refresh tokens for the client.
   * @param requestID Request ID from the OAuth Requestor Profile [oauth_requestor_profile] table,
   * which references the OAuth Entity Profile [oauth_entity_profile] table.
   * @param oauthProfileID OAuth profile ID from the OAuth Entity Profile [oauth_entity_profile]
   * table.
   */
  getToken(requestID: string, oauthProfileID: string): any;
  /**
   * Retrieves the token for the client, with the request parameters encoded in JSON
   * format.
   * @param clientName The client name.
   * @param jsonString The JSON string for the client.
   */
  requestToken(clientName: string, jsonString: string): any;
  /**
   * Retrieves the token for the client, with the client name and the request set into a
   * GlideOAuthClientResponse object.
   * @param clientName The client name.
   * @param request The request.
   */
  requestTokenByRequest(clientName: string, request: any): any;
  /**
   * Revokes the access or refresh token for the client, with the request and optional
   * header parameters set into a GlideOAuthClientRequest object.
   * @param clientName The client name.
   * @param accessToken The access token.
   * @param refreshToken The refresh token.
   * @param request The request.
   */
  revokeToken(
    clientName: string,
    accessToken: string,
    refreshToken: string,
    request: any,
  ): any;
}
export { GlideOAuthClient };
