declare class MIDServerSelector {
  constructor();
  /**
   * Finds the MID server based on the capabilities and target IP address.
   * @param target The target IP address
   */
  findAgent(target: string): any;
  /**
   * Gets the error messages for the current MID server.
   */
  getError(): any;
  /**
   * Gets the warning messages for the current MID server.
   */
  getWarning(): any;
  /**
   * Sets the technologies for which to look.
   * @param capabilities A list of capabilities, for example -  capabilities =
   * ["ssh","wmi","snmp",{"os_domain":"disco"},{"phase":1}];
   */
  setCapabilities(capabilities: any[]): any;
}
export { MIDServerSelector };
