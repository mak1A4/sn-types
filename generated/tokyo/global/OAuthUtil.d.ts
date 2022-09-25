declare class OAuthUtil {
  /**
   * Adds a name:value pair to the request parameters.
   * @param requestParamMap The name:value pair you want to add.
   */
  interceptRequestParameters(requestParamMap: string): any;
  /**
   * Parses the token received into a parameter map.
   * @param accessTokenResponse The access token response that you want to parse.
   */
  parseTokenResponse(accessTokenResponse: string): any;
}
export { OAuthUtil };
