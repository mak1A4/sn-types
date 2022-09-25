declare class IPAddressFixup {
  /**
   * Removes duplicates of the specified IP address in the specified table.
   * @param tableName The table to check for duplicates
   * @param ip The IP address to check for
   */
  dedupe(tableName: string, ip: string): any;
  /**
   * Removes all duplicate IP addresses from the tables.
   */
  dedupeAll(): any;
  /**
   * Removes all duplicate IP addresses and ensures that the parent ip_address record is set
   * to one of the NIC's IP addresses.
   */
  fix(): any;
  /**
   * Returns the parent IP address for the current device.
   */
  getParentIP(): any;
  /**
   * Sets the IP address field for the current CI.
   * @param ip The IP address for the current CI.
   */
  setParentIP(ip: string): any;
  /**
   * Ensures that the parent ip_address record is set to one of the NIC's IP addresses, or
   * leaves it alone if there were no NICs.
   */
  syncIP(): any;
}
export { IPAddressFixup };
