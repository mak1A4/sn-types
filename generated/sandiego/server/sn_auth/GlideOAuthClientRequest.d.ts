declare class GlideOAuthClientRequest {
  /**
   * Retrieves the grant type.
   */
  getGrantType(): any;
  /**
   * Retrieves the HTTP headers for the string you provide.
   * @param name The name of the parameter.
   */
  getHeader(name: string): any;
  /**
   * Retrieves the HTTP headers.
   */
  getHeaders(): any;
  /**
   * Retrieves the parameters for the parameter name you provide.
   * @param name The parameter name for which you want the parameters.
   */
  getParameter(name: string): any;
  /**
   * Retrieves the password.
   */
  getPassword(): any;
  /**
   * Retrieves the refresh token.
   */
  getRefreshToken(): any;
  /**
   * Retrieves the scope.
   */
  getScope(): any;
  /**
   * Retrieves the user name.
   */
  getUserName(): any;
  /**
   * Sets the grant type for the string you provide.
   * @param name The grant type.
   */
  setGrantType(name: string): any;
  /**
   * Retrieves the HTTP headers for the string you provide.
   * @param name The name of the parameter.
   * @param value The value of the parameter.
   */
  setHead(name: string, value: string): any;
  /**
   * Sets the parameters for the name:value pair of strings you provide.
   * @param name The parameter name for which you want the parameters.
   * @param value The value of the parameter.
   */
  setParameter(name: string, value: string): any;
  /**
   * Sets the password with the string you provide.
   * @param password The user name.
   */
  setPassword(password: string): any;
  /**
   * Sets the refresh token with the string you provide.
   * @param refreshToken The refresh token.
   */
  setRefreshToken(refreshToken: string): any;
  /**
   * Sets the scope for the string you provide.
   * @param scope The scope.
   */
  setScope(scope: string): any;
  /**
   * Sets the user name with the string you provide.
   * @param userName The user name.
   */
  setUserName(userName: string): any;
}
export { GlideOAuthClientRequest };
