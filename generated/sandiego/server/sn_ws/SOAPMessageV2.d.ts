declare class SOAPMessageV2 {
  constructor();
  constructor(soapMessage: string, soapFunction: string);
  /**
   * Sends the SOAP message to the endpoint.
   */
  execute(): any;
  /**
   * Sends the SOAP message to the ECC queue.
   */
  executeAsync(): any;
  /**
   * Gets the endpoint for the SOAP message.
   */
  getEndpoint(): any;
  /**
   * Returns the content of the SOAP message body.
   */
  getRequestBody(): any;
  /**
   * Gets the value for an HTTP header specified by the SOAP client.
   * @param headerName Request header you want to get the value for.
   */
  getRequestHeader(headerName: string): any;
  /**
   * Gets HTTP headers that were set by the SOAP client and the associated
   * values.
   */
  getRequestHeaders(): any;
  /**
   * Sets basic authentication headers for the SOAP message.
   * @param userName Username to use when authenticating the SOAP message.
   * @param userPass Password for the specified user.
   */
  setBasicAuth(userName: string, userPass: string): any;
  /**
   * Associates outbound requests and the resulting response record in the ECC
   * queue.
   * @param correlator Unique identifier
   */
  setEccCorrelator(correlator: string): any;
  /**
   * Overrides a value from the database by writing to the SOAP message payload.
   * @param name Name of the ECC parameter.
   * @param value Value to assign to the specified ECC parameter.
   */
  setEccParameter(name: string, value: string): any;
  /**
   * Sets the endpoint for the SOAP message.
   * @param endpoint URL of the SOAP web service provider you want to interface with.
   */
  setEndpoint(endpoint: string): any;
  /**
   * Sets the amount of time the SOAP message waits for a response from the web service
   * provider before the request times out.
   * @param timeoutMs Amount of time to wait for a response from the web service provider, in
   * milliseconds.
   */
  setHttpTimeout(timeoutMs: number): any;
  /**
   * Sets the log level for this message and the corresponding response.
   * @param level The log level. Valid values are basic, elevated, and all.
   */
  setLogLevel(level: string): any;
  /**
   * Configures the SOAP message to be sent through a MID Server.
   * @param midServerName Name of the MID Server you want to send the SOAP message
   * through. Your instance must have an active MID Server with the
   * specified name.
   */
  setMIDServer(midServerName: string): any;
  /**
   * Sets the mutual authentication protocol profile for the SOAP message.
   * @param profileName Name of the protocol profile to use for mutual authentication.
   */
  setMutualAuth(profileName: string): any;
  /**
   * Sets the body content to send to the web service provider.
   * @param requestBody Body of the SOAP message.
   */
  setRequestBody(requestBody: string): any;
  /**
   * Sets an HTTP header in the SOAP message to the specified value.
   * @param headerName Name of the header.
   * @param headerValue Value to assign to the specified header.
   */
  setRequestHeader(headerName: string, headerValue: string): any;
  /**
   * Defines the SOAP action this SOAP message performs.
   * @param soapAction SOAP action this SOAP message performs.
   */
  setSOAPAction(soapAction: string): any;
  /**
   * Sets a variable with the specified name from the SOAP message record to the specified
   * value.
   * @param name Name of the SOAP message variable.
   * @param value Value to assign to the specified variable.
   */
  setStringParameter(name: string, value: string): any;
  /**
   * Sets a variable with the specified name from the SOAP message record to the specified
   * value.
   * @param name Name of the SOAP message variable.
   * @param value Value to assign to the specified variable.
   */
  setStringParameterNoEscape(name: string, value: string): any;
  /**
   * Sets web service security values for the SOAP message.
   * @param keystoreId Sys_id of the Java or PKCS12 key store to use.
   * @param keystoreAlias Alias that identifies the public and private keys.
   * @param keystorePassword Password assigned to the key store record.
   * @param certificateId Sys_id of the trusted server certificate.
   */
  setWSSecurity(
    keystoreId: string,
    keystoreAlias: string,
    keystorePassword: string,
    certificateId: string,
  ): any;
}
export { SOAPMessageV2 };
