declare class ConnectionInfoProvider {
  constructor();
  /**
   * This function retrieves a ConnectionInfo object identified by the given aliasID in the
   * current domain.
   * @param aliasID The sys_id of a connection alias.
   */
  getConnectionInfo(aliasID: string): any;
  /**
   * This function retrieves a ConnectionInfo object identified by the given aliasID for a
   * specific domain.
   * @param aliasID The sys_id of a connection alias.
   * @param domainID The sys_id of a domain or global.
   */
  getConnectionInfoByDomain(aliasID: string, domainID: string): any;
}
export { ConnectionInfoProvider };
