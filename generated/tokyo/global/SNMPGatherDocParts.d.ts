declare class SNMPGatherDocParts {
  /**
   * Returns the given XML document with any data gathered by prior SNMP probes.
   * @param doc The XML document for this sensor
   * @param probe The probe instance
   */
  gather(doc: string, probe: any): any;
}
export { SNMPGatherDocParts };
