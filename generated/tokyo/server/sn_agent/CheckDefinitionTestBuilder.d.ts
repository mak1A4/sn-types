declare class CheckDefinitionTestBuilder {
  constructor();
  /**
   * Builds the test check request with the arguments
   * set.
   */
  build(): any;
  /**
   * Sets the sys_id of the check definition to
   * test.
   * @param checkId Sys_id of the check definition listed
   * in the Check Definitions [sn_agent_check_def] table.
   */
  withCheckId(checkId: string): any;
  /**
   * Sets the sys_id of the configuration item to run the
   * test against.
   * @param ciId Sys_id of a CMDB Configuration Item.
   */
  withCiId(ciId: string): any;
  /**
   * Sets the credentials alias sys_id to use during
   * the test.
   * @param credentialsAliasId Sys_id of a credentials record.
   */
  withCredentialsAliasId(credentialsAliasId: string): any;
  /**
   * Sets the credentials alias name to use during the
   * test. If the given value matches the name of multiple credentials aliases records, then one
   * of them is chosen randomly.
   * @param credentialsAliasName Name of a credentials alias.
   */
  withCredentialsAliasName(credentialsAliasName: string): any;
  /**
   * Sets the credentials sys_id to use during the
   * test.
   * @param credentialsId Sys_id of a credentials record.
   */
  withCredentialsId(credentialsId: string): any;
  /**
   * Sets the credentials name to use during the test. If
   * the given value is the name of several credentials records, then one of them is chosen
   * randomly.
   * @param credentialsName Name of the credentials record.
   */
  withCredentialsName(credentialsName: string): any;
}
export { CheckDefinitionTestBuilder };
