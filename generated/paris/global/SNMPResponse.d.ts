declare class SNMPResponse {
  /**
   * Builds an index to all SNMP entities in the current object.
   * @param cur The current object
   * @param name The index name
   * @param extName The index extension
   */
  buildIndex(cur: any, name: string, extName: string): any;
  /**
   * Builds references to actual instances for all identified indexes (in the
   * discovery_snmp_ref table) that can be resolved.
   */
  buildReferences(): any;
  /**
   * Returns an array of OIDs that match the given ref_base and which have a defined,
   * non-null ref_leaf.
   * @param refBase The reference base
   * @param refLeaf The reference leaf
   */
  getAmbiguousOIDs(refBase: string, refLeaf: string): any;
  /**
   * Returns the integer contained in the OID object with the given MIB name.
   * @param name The MIB name
   */
  getOIDInt(name: string): any;
  /**
   * Retrieves the OID object with the given MIB name from the response.
   * @param name The MIB name
   */
  getOIDObj(name: string): any;
  /**
   * Returns a hashmap of table entries under the given parent MIB name, with the given
   * entry MIB names.
   * @param parentName The parent MIB name
   * @param entryName The entry MIB name
   */
  getOIDTable(parentName: string, entryName: string): any;
  /**
   * Returns the text contained in the OID object with the given MIB name.
   * @param name The MIB name
   */
  getOIDText(name: string): any;
  /**
   * Resolves SNMP tables into hashmaps and OID values into primitives.
   * @param cur The SNMP table or OID value.
   */
  normalize(cur: any): any;
}
export { SNMPResponse };
