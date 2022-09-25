declare class CTIOperationResponse {
  constructor();
  /**
   * Returns the authentication token that was set on the CTIOperationResponse
   * object.
   */
  getAuthToken(): any;
  /**
   * Returns the error object associated with the current CTIOperationResponse
   * object.
   */
  getError(): any;
  /**
   * Returns the sys_id of the interaction record associated with the call session that was
   * set on the CTIOperationResponse object.
   */
  getInteractionSysId(): any;
  /**
   * Returns the major version of the computer telephony integrator (CTI) software set on
   * the current CTIOperationResponse object.
   */
  getMajorVersion(): any;
  /**
   * Returns the message string set on the current CTIOperationResponse object.
   */
  getMessage(): any;
  /**
   * Returns the minor version of the computer telephony integrator (CTI) software set on
   * the current CTIOperationResponse object.
   */
  getMinorVersion(): any;
  /**
   * Returns the value of a specified key previously set on the current CTIOperationResponse
   * object.
   * @param key The name of the key value to return.
   */
  getParameter(key: string): any;
  /**
   * Returns the key-value pairs for all parameters that were previously set on the current
   * CTIOperationResponse object.
   */
  getParameters(): any;
  /**
   * Returns the value for a specified session attribute key set on the current
   * CTIOperationResponse object.
   * @param key The name of the key value to return.
   */
  getSessionAttribute(key: string): any;
  /**
   * Returns the key-value pairs for all session attributes that were previously set on the
   * current CTIOperationResponse object.
   */
  getSessionAttributes(): any;
  /**
   * Returns the status code set on the current CTIOperationResponse object.
   */
  getStatusCode(): any;
  /**
   * Sets an authentication token on the current CTIOperationResponse object.
   */
  setAuthToken(): any;
  /**
   * Sets the error object in the current CTIOperationResponse object.
   * @param error Information about the error that was detected while processing the requested
   * operation. The format of this object is determined by the CTI provider.
   */
  setError(error: any): any;
  /**
   * Sets the sys_id of the interaction record associated with the operation request on the
   * current CTIOperationResponse object.
   * @param sys_id The sys_id to set for the current interaction.
   */
  setInteractionSysId(sys_id: string): any;
  /**
   * Sets the major version of the computer telephony integrator (CTI) provider software
   * making the request on the associated CTIOperationResponse object.
   * @param majorVersion Major version of the CTI provider software making the operation request.If
   * this value was not previously set, returns
   * 1.
   */
  setMajorVersion(majorVersion: number): any;
  /**
   * Sets a text message on the current CTIOperationResponse object.
   * @param message Message text
   */
  setMessage(message: string): any;
  /**
   * Sets the minor version of the computer telephony integrator (CTI) provider software
   * making the request on the associated CTIOperationResponse object.
   * @param minorVersion Minor version of the CTI provider software making the operation request.If
   * this value was not previously set, returns
   * 0.
   */
  setMinorVersion(minorVersion: number): any;
  /**
   * Sets the specified key-value pair on the associated CTIOperationResponse
   * object.
   * @param key Name of the key under which to store the associated value.
   * @param value Value to store for the key.Valid data types:
   * string
   *
   * int
   *
   * float
   *
   * number
   *
   * boolean
   *
   * date
   *
   * object
   *
   *
   *
   */
  setParameter(key: string, value: any): any;
  /**
   * Sets the specified session attribute key-value pair on the associated
   * CTIOperationResponse object.
   * @param key Name of the session attribute key under which to set the associated
   * value.
   * @param value Value to set.Valid data types:
   * string
   *
   * int
   *
   * float
   *
   * number
   *
   * boolean
   *
   * date
   *
   * object
   *
   *
   *
   */
  setSessionAttribute(key: string, value: any): any;
  /**
   * Sets the status code of the current operation request on the CTIOperationResponse
   * object.
   * @param statusCode Integer that uniquely identifies the status of the requested operation.
   */
  setStatusCode(statusCode: number): any;
}
export { CTIOperationResponse };
