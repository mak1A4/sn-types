declare class SOAPMessageV2 {
  constructor();
  constructor(soapMessage: string, soapFunction: string);
  /**
   * Send the SOAP message to the endpoint.
   */
  execute(): any;
  /**
   * Send the SOAP message to
   * the ECC queue.
   */
  executeAsync(): any;
  /**
   * Get the endpoint for the SOAP message.
   */
  getEndpoint(): any;
  /**
   * Returns the content of the SOAP message body.
   */
  getRequestBody(): any;
  /**
   * Get the value for an HTTP header specified by the SOAP client.
   * @param headerName The request header you want to get the value for.
   */
  getRequestHeader(headerName: string): any;
  /**
   * Get HTTP headers that were set by the SOAP client and the associated
   * values.
   */
  getRequestHeaders(): any;
  /**
   * Set basic authentication headers for the SOAP message.
   * @param userName The username to use when authenticating the SOAP message.
   * @param userPass The password for the specified user.
   */
  setBasicAuth(userName: string, userPass: string): any;
  /**
   * Associate outbound requests and the resulting response record in the ECC
   * queue.
   * @param correlator A unique identifier.
   */
  setEccCorrelator(correlator: string): any;
  /**
   * Override a value from the database by writing to the SOAP message payload.
   * @param name The name of the ECC parameter.
   * @param value The value to assign to the specified ECC parameter.
   */
  setEccParameter(name: string, value: string): any;
  /**
   * Set the endpoint for the SOAP message.
   * @param endpoint The URL of the SOAP web service provider you want to interface with.
   */
  setEndpoint(endpoint: string): any;
  /**
   * Set the amount of time the SOAP message waits for a response from the web service
   * provider before the request times out.
   * @param timeoutMs The amount of time to wait for a response from the web service provider, in
   * milliseconds.
   */
  setHttpTimeout(timeoutMs: number): any;
  /**
   * Sets the log level for this message and the corresponding response.
   * @param level The log level. Valid values are basic, elevated, and all.
   */
  setLogLevel(level: string): any;
  /**
   * Configure the SOAP message to be sent through a MID Server.
   * @param midServerName The name of the MID Server you want to send the SOAP message through. Your
   * instance must have an active MID Server with the specified name.
   */
  setMIDServer(midServerName: string): any;
  /**
   * Set the mutual authentication
   * protocol
   * profile for the SOAP message.
   * @param profileName The name of the protocol profile to use for mutual authentication.
   */
  setMutualAuth(profileName: string): any;
  /**
   * Set the body content to send to the web service provider.
   * @param requestBody The body of the SOAP message.
   */
  setRequestBody(requestBody: string): any;
  /**
   * Set an HTTP header in the SOAP message to the specified value.
   * @param headerName The name of the header.
   * @param headerValue The value to assign to the specified header.
   */
  setRequestHeader(headerName: string, headerValue: string): any;
  /**
   * Define the SOAP action this SOAP message performs.
   * @param soapAction The SOAP action this SOAP message performs.
   */
  setSOAPAction(soapAction: string): any;
  /**
   * Set a variable with the specified name from the SOAP message record to the specified
   * value.
   * @param name The name of the SOAP message variable.
   * @param value The value to assign to the specified variable.
   */
  setStringParameter(name: string, value: string): any;
  /**
   * Set a variable with the specified name from the SOAP message record to the specified
   * value.
   * @param name The name of the SOAP message variable.
   * @param value The value to assign to the specified variable.
   */
  setStringParameterNoEscape(name: string, value: string): any;
  /**
   * Sets web service security values for the SOAP message.
   * @param keystoreId The sys_id of the Java or PKCS12 key store to use.
   * @param keystoreAlias The alias that identifies the public and private keys.
   * @param keystorePassword The password assigned to the key store record.
   * @param certificateId The sys_id of the trusted server certificate.
   */
  setWSSecurity(
    keystoreId: string,
    keystoreAlias: string,
    keystorePassword: string,
    certificateId: string,
  ): any;
}
export { SOAPMessageV2 };
