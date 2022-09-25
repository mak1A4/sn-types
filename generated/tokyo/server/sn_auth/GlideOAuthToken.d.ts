declare class GlideOAuthToken {
  /**
   * Retrieves the access token associated with the GlideOAuthToken object.
   */
  getAccessToken(): any;
  /**
   * Deprecated. Retrieves the sys_id of the token ID associated with the GlideOAuthToken
   * object.
   */
  getAccessTokenSysID(): any;
  /**
   * Retrieves the lifespan of the access token associated with the GlideOAuthToken
   * object.
   */
  getExpiresIn(): any;
  /**
   * Refreshes the token associated with the GlideOAuthToken object.
   */
  getRefreshToken(): any;
  /**
   * Deprecated. Retrieves the sys_id of the refresh token.
   */
  getRefreshTokenSysID(): any;
  /**
   * Retrieves the token scope, which is the amount of access granted by the access
   * token.
   */
  getScope(): any;
}
export { GlideOAuthToken };
