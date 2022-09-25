declare class CTIOperationRequest {
  constructor(origin?: string);
  /**
   * Returns the authentication token set on the associated CTIOperationRequest
   * object.
   */
  getAuthToken(): any;
  /**
   * Returns the interaction GlideRecord associated with the operation request.
   */
  getInteractionRecord(): any;
  /**
   * Returns the sys_id of the interaction record associated with the current
   * CTIOperationRequest object.
   */
  getInteractionSysId(): any;
  /**
   * Returns the ISO 639.1 language code that was set on the current CTIOperationRequest
   * object.
   */
  getLanguage(): any;
  /**
   * Returns the major version of the computer telephony integrator (CTI) software set on
   * the current CTIOperationRequest object.
   */
  getMajorVersion(): any;
  /**
   * Returns the minor version of the computer telephony integrator (CTI) software
   * associated with a CTIOperationRequest object.
   */
  getMinorVersion(): any;
  /**
   * Returns the name of the operation that the computer telephony integration (CTI)
   * provider is requesting to execute.
   */
  getOperationName(): any;
  /**
   * Returns the substep operation handler name set on the current CTIOperationRequest
   * object.
   */
  getOperationSubStepName(): any;
  /**
   * Returns the value of a specified key previously set on the current CTIOperationRequest
   * object.
   * @param key The name of the key value to return.
   */
  getParameter(key: string): any;
  /**
   * Returns the key-value pairs for all parameters that were previously set on the current
   * CTIOperationRequest object.
   */
  getParameters(): any;
  /**
   * Returns the value of a specified session attribute key set on the current
   * CTIOperationRequest object.
   * @param key The name of the key value to return.
   */
  getSessionAttribute(key: string): any;
  /**
   * Returns a key-value pair map of all session attributes set on the current
   * CTIOperationRequest object.
   */
  getSessionAttributes(): any;
  /**
   * Returns the handling behavior for a subsep when a substep's operation handler is not
   * found.
   */
  getSubStepNotFoundBehaviour(): any;
  /**
   * Sets an authentication token on the current CTIOperationRequest object.
   * @param id The authentication token for the associated ServiceNow
   * Voice user.
   */
  setAuthToken(id: string): any;
  /**
   * Sets the sys_id of the interaction record associated with the operation request on the
   * current CTIOperationRequest object.
   * @param sys_id The sys_id of the interaction record to associate with the request.
   */
  setInteractionSysId(sys_id: string): any;
  /**
   * Sets the ISO 639.1 language code to use when processing the associated operation on a
   * CTIOperationRequest object.
   * @param languageCode The ISO 639.1 language code to use when processing the associated
   * operation.
   */
  setLanguage(languageCode: string): any;
  /**
   * Sets the major version of the computer telephony integrator (CTI) provider software
   * making the request on the associated CTIOperationRequest object.
   * @param majorVersion Major version of the CTI provider software making the operation request.If
   * this value was not previously set, returns
   * 1.
   */
  setMajorVersion(majorVersion: number): any;
  /**
   * Sets the minor version of the computer telephony integrator (CTI) provider software
   * making the request on the associated CTIOperationRequest object.
   * @param minorVersion Minor version of the CTI provider software making the operation request.If
   * this value was not previously set, returns
   * 0.
   */
  setMinorVersion(minorVersion: number): any;
  /**
   * Sets the name of the operation that the computer telephony integration (CTI) provider
   * is attempting to execute on the current CTIOperationRequest object.
   * @param name The name of the operation that the CTI provider is currently attempting to
   * execute. This name must be the same as the name of the operation handler to use
   * to process the request. If it is not, an error is thrown. You can locate the
   * available operation handlers in the Operation Handler [sn_cti_operation_handler]
   * table.
   */
  setOperationName(name: string): any;
  /**
   * Sets the operation substep name on the current CTIOperationRequest object.
   * @param name The name of the substep that the CTI provider is trying to execute.
   */
  setOperationSubStepName(name: string): any;
  /**
   * Sets the specified key-value pair on the parameter object of the current
   * CTIOperationRequest object.
   * @param key Name of the key under which to store the associated value.
   * @param value Value to store.Valid data types:
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
   * Sets the specified session attribute key-value pair on the current CTIOperationRequest
   * object.
   * @param key Name of the key under which to store the associated value.
   * @param value Value to store.Valid data types:
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
   * Sets the behavior to perform if the current substep's operation handler is not
   * found.
   * @param behaviour Behavior to use if a handling behavior is not specified for the substep. This
   * must be a behavior defined on the CTIOperationRequest.OperationNotFoundBehaviours
   * object.Possible values:
   * ThrowError: Throw an error.
   *
   * PassThrough: Do not perform any further processing on the request, just
   * return.
   *
   * RouteToOperation: Use the parent operation handler
   * &lt;operation_name&gt;.
   *
   *
   *
   */
  setSubStepNotFoundBehaviour(behaviour: any): any;
}
export { CTIOperationRequest };
