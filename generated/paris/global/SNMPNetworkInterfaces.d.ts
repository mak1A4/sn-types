declare class SNMPNetworkInterfaces {
  /**
   * Analyzes the SNMP data and reconciles the discovered NICs to the CMDB's
   * NICs.
   * @param cmdb_ci The sys_id of the CI
   * @param doc The SNMP data in XML form
   * @param isComputer If true, this is a computer; otherwise, false.
   * @param agentName Name of the MID server
   * @param ecc_sys_id The sys_id of the ECC queue record with the input.
   */
  process(
    cmdb_ci: string,
    doc: string,
    isComputer: boolean,
    agentName: string,
    ecc_sys_id: string,
  ): any;
}
export { SNMPNetworkInterfaces };
