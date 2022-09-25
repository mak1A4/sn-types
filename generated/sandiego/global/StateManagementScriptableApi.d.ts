declare class StateManagementScriptableApi {
  /**
   * Add a CI action to a list of CIs.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param sysIdList A list comma separated list of CI sys_ids.
   * @param ciActionName The CI action name.
   * @param ciActionListOld (Optional) A comma separated list of old CI actions that all CIs should be
   * in.
   * @param leaseTime (Optional) Time duration for which the lease is valid for specified CI Action.
   * In the format HH:MM:SS.
   */
  addBulkCIAction(
    requestorId: string,
    sysIdList: string,
    ciActionName: string,
    ciActionListOld?: string,
    leaseTime?: string,
  ): any;
  /**
   * Extend the CI-action-lease time for the registered user. If the previous lease has
   * expired, the new lease time starts now.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param ciSysId The CI's sys_id.
   * @param ciActionName The CI action name.
   * @param leaseTime Time duration for which the lease is valid for specified CI Action. In the
   * format HH:MM:SS.
   */
  extendCIActionLease(
    requestorId: string,
    ciSysId: string,
    ciActionName: string,
    leaseTime: string,
  ): any;
  /**
   * Returns a list of active CI actions for the specified CI.
   * @param ciSysId Sys_id of the CI.
   */
  getCIActions(ciSysId: string): any;
  /**
   * Returns the operational state of the CI.
   * @param ciSysId Sys_id of the CI.
   */
  getOperationalState(ciSysId: string): any;
  /**
   * Determines if the two specified actions are compatible.
   * @param actionName A CI action name
   * @param otherActionName A CI action name
   */
  isCompatibleCIAction(actionName: string, otherActionName: string): any;
  /**
   * Determines if the lease has expired for the requestor of a specified CI
   * Action.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param ciSysId The CI's sys_id.
   * @param ciActionName Name of the CI action.
   */
  isLeaseExpired(
    requestorId: string,
    ciSysId: string,
    ciActionName: string,
  ): any;
  /**
   * For a type of CI, determine if a CI action is not allowed for an operational
   * state.
   * @param ciType The CI type
   * @param opsLabel The operational state
   * @param actionName The CI action name
   */
  isNotAllowedAction(ciType: string, opsLabel: string, actionName: string): any;
  /**
   * For a type of CI, determine if an operational state transition is not
   * allowed.
   * @param ciType The CI type
   * @param opsLabel The label of the beginning operational state.
   * @param transitionOpsLabel The label of the ending operational state.
   */
  isNotAllowedOpsTransition(
    ciType: string,
    opsLabel: string,
    transitionOpsLabel: string,
  ): any;
  /**
   * Determines if the specified requestor is a valid active workflow user or a registered
   * user.
   * @param requestorId Sys_id of a workflow context or the GUID returned from the
   * registerOperator() method.
   */
  isValidRequestor(requestorId: string): any;
  /**
   * Registers an operator for a non-workflow user.
   */
  registerOperator(): any;
  /**
   * Removes a CI action for a list of CIs.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param sysIdList A comma separated list of CI sys_ids
   * @param ciActionName The CI action name
   */
  removeBulkCIAction(
    requestorId: string,
    sysIdList: string,
    ciActionName: string,
  ): any;
  /**
   * Set the operational state for list of CIs.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param sysIdList A comma separated list of CI sys_ids.
   * @param opsLabel This is the string label of an operational_status choice.
   * @param opsStateListOld (Optional) A comma separated list of old CI states that all CIs should be
   * in.
   */
  setBulkCIOperationalState(
    requestorId: string,
    sysIdList: string,
    opsLabel: string,
    opsStateListOld?: string,
  ): any;
  /**
   * Unregisters an operator for non-workflow users.
   * @param requestorId Sys_id of a workflow context or the GUID returned from the
   * registerOperator() method.
   */
  unregisterOperator(requestorId: string): any;
}
export { StateManagementScriptableApi };
