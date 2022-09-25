declare class AccCheckDefsAPI {
  /**
   * Gets a specified check definition with
   * details.
   * @param checkDefId Sys_id of the check definition listed
   * in the Check Definitions [sn_agent_check_def] table.
   * @param withParams Flag that indicates whether existing check
   * parameter details are returned. Information for each standard and secure check
   * parameter is included in a JSON object.Valid values:
   * true: Return check parameter details.
   *
   * false: Do not return check parameter details.
   *
   *
   *
   * Default: False
   */
  getCheck(checkDefId: string, withParams: boolean): any;
  /**
   * Gets a list of check definitions with
   * details.
   * @param encodedQuery An encoded query
   * string to
   * filter the check definition result list. Use null for an unfiltered list of check
   * definitions in the system.
   * @param limit Limits the number of returned records. Set to
   * null to use the default value.Default: 20,000
   * @param withParams Flag that indicates whether existing check
   * parameter details are returned. Information for each standard and secure check
   * parameter is included in a JSON object.Valid values:
   * true: Return check parameter details.
   *
   * false: Do not return check parameter details.
   *
   *
   *
   * Default: False
   */
  getChecksList(encodedQuery: string, limit: number, withParams: boolean): any;
  /**
   * Enables changing one or more field values of a
   * specified check definition.
   * @param checkDefId Sys_id of the check definition listed
   * in the Check Definitions [sn_agent_check_def] table.
   * @param updateJson Map of check definition fields to be updated to their new values. Refer to the
   * data dictionary for a comprehensive list of Check Definition fields and
   * types.{
   * "background": Boolean,
   * "check_group": "String",
   * "check_type": "String",
   * "command": "String",
   * "name": "String",
   * "plugins": [Array],
   * "proxy_valid": Boolean,
   * "timeout": Number
   * }
   */
  updateCheck(checkDefId: string, updateJson: any): any;
  /**
   * Enables changing one or more field values of a
   * specified check parameter.
   * @param checkDefParamId Sys_id of the check parameter listed in the Check Parameter Definitions
   * [sn_agent_check_param_def] table.
   * @param updateJson Map of check parameter fields to be updated to their new values.  Refer to the
   * data dictionary for a comprehensive list of Check Secure Parameter Definition fields
   * and types.{
   * "active": Boolean,
   * "default_value": "String",
   * "mandatory": Boolean,
   * "name": "String"
   * }
   */
  updateCheckParam(checkDefParamId: string, updateJson: any): any;
  /**
   * Enables changing one or more field values of a
   * specified check secure parameter.
   * @param checkDefSecureParamId Sys_id of the secure parameter listed in the Check Secure Parameter Definitions
   * [sn_agent_check_secure_param_def] table.
   * @param updateJson Map of check secure parameter fields to be updated to their new values. Refer
   * to the data dictionary for a comprehensive list of Check Secure Parameter Definition
   * fields and types.{
   * "active": Boolean,
   * "name": "String",
   * "order": Number
   * }
   */
  updateCheckSecureParam(checkDefSecureParamId: string, updateJson: any): any;
}
export { AccCheckDefsAPI };
