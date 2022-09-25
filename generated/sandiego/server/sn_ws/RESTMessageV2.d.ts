declare class RESTMessageV2 {
  constructor();
  constructor(name: string, methodName: string);
  /**
   * Sends the REST message to the endpoint.
   */
  execute(): any;
  /**
   * Sends the REST message to the endpoint asynchronously. The instance does not wait for a
   * response from the web service provider when making asynchronous calls.
   */
  executeAsync(): any;
  /**
   * Gets the URL of the endpoint for the REST message.
   */
  getEndpoint(): any;
  /**
   * Gets the content of the REST message body.
   */
  getRequestBody(): any;
  /**
   * Gets the value for an HTTP header specified in the REST message.
   * @param headerName Request header you want to get the value for.
   */
  getRequestHeader(headerName: string): any;
  /**
   * Gets HTTP headers that were set by the REST client and the associated
   * values.
   */
  getRequestHeaders(): any;
  /**
   * Configures the REST message to save the returned response body as an attachment
   * record.
   * @param tableName Specify the table that contains the record you want to attach the saved file
   * to.
   * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
   * @param fileName Specify the file name to give to the saved file.
   */
  saveResponseBodyAsAttachment(
    tableName: string,
    recordSysId: string,
    fileName: string,
  ): any;
  /**
   * Configures the REST message to save the returned response body as an attachment
   * record.
   * @param tableName Specify the table that contains the record you want to attach the saved file
   * to.
   * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
   * @param fileName Specify the file name to give to the saved file.
   * @param encryptContext Specify the sys_id of an encryption context. The saved file is encrypted using
   * this context.
   */
  saveResponseBodyAsAttachment(
    tableName: string,
    recordSysId: string,
    fileName: string,
    encryptContext: string,
  ): any;
  /**
   * Sets the credentials for the REST message using an existing basic auth or OAuth 2.0
   * profile.
   * @param type The type of authentication profile to use. Valid values are 'basic' to use
   * basic authentication, or 'oauth2' to use OAuth 2.0.
   * @param profileId The sys_id of an authentication profile record. When using basic auth, specify
   * the sys_id of a Basic Auth Configuration [sys_auth_profile_basic] record. When using
   * OAuth 2.0, specify the sys_id of a OAuth Entity Profile [oauth_entity_profile]
   * record.
   */
  setAuthenticationProfile(type: string, profileId: string): any;
  /**
   * Sets basic authentication headers for the REST message.
   * @param userName Username you want to use to authenticate the REST message.
   * @param userPass Password for the specified user.
   */
  setBasicAuth(userName: string, userPass: string): any;
  /**
   * Associates outbound requests and the resulting response record in the ECC queue. This
   * method only applies to REST messages sent through a MID Server.
   * @param correlator Unique identifier
   */
  setEccCorrelator(correlator: string): any;
  /**
   * Overrides a value from the database by writing to the REST message payload. This method
   * only applies to REST messages sent through a MID Server.
   * @param name The name of the parameter, such as source.
   * @param value The value to assign to the specified parameter.
   */
  setEccParameter(name: string, value: string): any;
  /**
   * Sets the endpoint for the REST message.
   * @param endpoint The URL of the REST provider you want to interface with.
   */
  setEndpoint(endpoint: string): any;
  /**
   * Sets the HTTP method this REST message performs, such as GET or PUT.
   * @param method HTTP method to perform.
   */
  setHttpMethod(method: string): any;
  /**
   * Sets the amount of time the REST message waits for a response from the web service
   * provider before the request times out.
   * @param timeoutMs Amount of time, in milliseconds, before the call to the REST provider times
   * out.
   */
  setHttpTimeout(timeoutMs: number): any;
  /**
   * Sets the log level for this message and the corresponding response.
   * @param level The log level. Valid values are basic, elevated, and all.
   */
  setLogLevel(level: string): any;
  /**
   * Configures the REST message to communicate through a MID Server.
   * @param midServer Name of the MID Server to use. Your instance must have an active
   * MID Server with the specified name.
   */
  setMIDServer(midServer: string): any;
  /**
   * Sets the mutual authentication protocol profile for the REST message.
   * @param profileName The Name of the protocol profile to use for mutual
   * authentication.
   */
  setMutualAuth(profileName: string): any;
  /**
   * Appends a parameter to the end of the request URL with the form name=value.
   * @param name Name of the URL parameter to pass.
   * @param value Value to assign the URL parameter.
   */
  setQueryParameter(name: string, value: string): any;
  /**
   * Sets the body content to send to the web service provider when using PUT or POST HTTP
   * methods.
   * @param body Request body to send.
   */
  setRequestBody(body: string): any;
  /**
   * Sets the request body using an existing attachment record.
   * @param attachmentSysId Sys_id of the Attachment [sys_attachment] record you want to send in this REST
   * message.
   */
  setRequestBodyFromAttachment(attachmentSysId: string): any;
  /**
   * Sets an HTTP header in the REST message to the specified value.
   * @param name Name of the header.
   * @param value Value to assign to the specified header.
   */
  setRequestHeader(name: string, value: string): any;
  /**
   * Overrides the default requestor profile for the REST message in order to retrieve an
   * OAuth access token associated with a different requestor.
   * @param requestorContext
   * @param requestorId
   */
  setRequestorProfile(requestorContext: string, requestorId: string): any;
  /**
   * Sets a REST message function variable with the specified name from the REST message
   * record to the specified value.
   * @param name Name of the REST message variable. This parameter must be defined in the REST
   * message record before you can assign a value to it.
   * @param value Value to assign the variable.
   */
  setStringParameter(name: string, value: string): any;
  /**
   * Sets a REST message function variable with the specified name from the REST message
   * record to the specified value.
   * @param name Name of the REST message variable. This parameter must be defined in the REST
   * message record before you can assign a value to it.
   * @param value Value to assign the variable.
   */
  setStringParameterNoEscape(name: string, value: string): any;
}
export { RESTMessageV2 };
