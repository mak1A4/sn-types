declare class HostnameJS {
  /**
   * Formats the specified host name according to the property settings.
   * @param hostname The host name to format
   * @param source The property settings source
   */
  format(hostname: string, source: string): any;
  /**
   * Returns the DNS domain name.
   */
  getDomainName(): any;
  /**
   * Returns the current system name.
   */
  getSysName(): any;
}
export { HostnameJS };
