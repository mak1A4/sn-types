declare class DiscoveryAjax {
  /**
   * Retrieves the number of records in the ECC queue, and the maximum entries.
   */
  ajaxFunction_countECCRecords(): any;
  /**
   * Gets the IP address for the next device that is ready for discovery.
   */
  ajaxFunction_discoverIP(): any;
  /**
   * Gets the Discovery status of a device that has started and is active.
   */
  ajaxFunction_discoverStatus(): any;
  /**
   * Gets the sys_id for the current Discovery CI.
   */
  ajaxFunction_getSysID(): any;
  /**
   * Sets the status of all processed devices to ready.
   */
  ajaxFunction_setAllToReady(): any;
}
export { DiscoveryAjax };
