declare class DiscoveryFunctions {
  /**
   * Creates a relationship between two virtual machines.
   * @param parent The parent virtual machine.
   * @param child The child virtual machine
   * @param pDescription A description of the parent virtual machine
   * @param cDescription A description of the child virtual machine
   */
  createRelationship(
    parent: any,
    child: any,
    pDescription: string,
    cDescription: string,
  ): any;
  /**
   * Creates a relationship between the specified parent and child if none already
   * exists.
   * @param parent The parent virtual machine
   * @param child The child virtual machine
   * @param descriptor The relationship descriptor
   */
  createRelationshipIfNotExists(
    parent: any,
    child: any,
    descriptor: string,
  ): any;
  /**
   * Deletes a virtual machine by record (cmdb_ci_computer) and workflow application
   * (cmdb_ci_appl).
   * @param now_GR The cmdb_ci_computer for the virtual machine
   * @param workflow The workflow application cmdb_ci_appl
   */
  deleteCI(now_GR: any, workflow: any): any;
  /**
   * Deletes virtual machines by traversing through the relationship tree.
   * @param appList The application list
   */
  deleteCIAndRelationshipsRecursive(appList: string): any;
  /**
   * Deletes a virtual machine by its sys_id.
   * @param sysId The sys_id of the virtual machine to delete.
   * @param workflow The workflow of the virtual machine
   */
  deleteCIBySysId(sysId: string, workflow: any): any;
  /**
   * Finds the relationship type for the current VM given its reference table and
   * descriptor.
   * @param refTable The reference table
   * @param descriptor The relationship descriptor
   */
  findCIRelationshipType(refTable: string, descriptor: string): any;
  /**
   * Finds the relationship type for the current virtual machine given its parent and child
   * descriptors.
   * @param refTable The reference table
   * @param pDesc The parent descriptor
   * @param cDesc The child descriptor
   */
  findCIRelationshipTypeByDesc(
    refTable: string,
    pDesc: string,
    cDesc: string,
  ): any;
  /**
   * Finds the node value with a specified attribute.
   * @param node The current node
   * @param attrName The attribute for which to search
   */
  findNodeValueWithAttribute(node: any, attrName: string): any;
  /**
   * Brief description of the method.
   * @param currNode The current node
   * @param attrName The attribute name
   */
  findNodeWithAttribute(currNode: any, attrName: string): any;
  /**
   * Finds the registry node for a given registry item.
   * @param currNode The current node
   * @param regName The registry name
   */
  findRegistryNode(currNode: string, regName: string): any;
  /**
   * Gets the discovery type for the specified status ID.
   * @param statusID The discovery status ID
   */
  getDiscoveryType(statusID: string): any;
  /**
   * Gets the fields that have changed for the specified device.
   * @param now_GR The device
   */
  getFieldsThatChanged(now_GR: any): any;
  /**
   * Gets the schedule record.
   */
  getScheduleRecord(): any;
  /**
   * Gets the service assigned to the specified port.
   * @param port The port to check
   */
  getService(port: string): any;
  /**
   * Gets the status record.
   */
  getStatusRecord(): any;
  /**
   * Gets the XML memory table.
   * @param tableName The table name
   * @param doc The document where the table resides.
   * @param path The path to the table
   */
  getXMLMemoryTable(tableName: string, doc: string, path: string): any;
  /**
   * Inserts a new process ID.
   * @param pids The process ID
   * @param app_sys_id The application sys_id
   * @param ci_sys_id The virtual machine ID
   */
  insertPIDs(pids: string, app_sys_id: string, ci_sys_id: string): any;
  /**
   * Determines if the given IP address is within the current IP range.
   * @param ip The IP address to check
   */
  isInRange(ip: string): any;
  /**
   * Reclassifies a device.
   * @param device The device to reclassify
   * @param newClassName The new classification
   * @param reason The reason for the change
   */
  reclassify(device: any, newClassName: string, reason: string): any;
  /**
   * Determines whether a relationship already exists between the parent and
   * child.
   * @param parent The parent virtual machine
   * @param child The child virtual machine
   * @param descriptor The relationship descriptor
   */
  relationshipExists(parent: any, child: any, descriptor: any): any;
  /**
   * Updates the history of the current device.
   * @param now_GR The device
   * @param sensor The sensor
   * @param eccID The External Communication Channel (ECC) queue ID.
   */
  updatedHistory(now_GR: any, sensor: string, eccID: string): any;
  /**
   * Updates the process ID.
   * @param pids The process ID
   * @param app_sys_id The application sys_id
   * @param ci_sys_id The virtual machine ID
   */
  updatePIDS(pids: string, app_sys_id: string, ci_sys_id: string): any;
}
export { DiscoveryFunctions };
