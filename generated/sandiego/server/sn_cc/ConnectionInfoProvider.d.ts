declare class ConnectionInfoProvider {
  constructor();
  /**
   * Retrieves a ConnectionInfo object identified by the given aliasID in the current
   * domain.
   * @param aliasID Sys_id of a connection alias.
   */
  getConnectionInfo(aliasID: string): any;
  /**
   * Retrieves a ConnectionInfo object identified by the given aliasID for a specific
   * domain.
   * @param aliasID Sys_id of a connection alias.
   * @param domainID Sys_id of a domain or global.
   */
  getConnectionInfoByDomain(aliasID: string, domainID: string): any;
}
export { ConnectionInfoProvider };
