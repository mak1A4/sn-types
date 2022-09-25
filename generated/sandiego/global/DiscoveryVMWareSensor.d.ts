declare class DiscoveryVMWareSensor {
  /**
   * Creates a link to the virtual servers.
   * @param images The VMWare images
   * @param vmWare The CI of the VMWare, which can be the ESXi box, or a VMWare application running
   * on top.
   */
  createLinkToVirtualServers(images: any, vmWare: any): any;
  /**
   * Deletes the VM images.
   * @param vmWare The VMWare images to delete.
   * @param imageProcessed The processed image
   */
  deleteVMImagesFromVMWare(vmWare: any, imageProcessed: any): any;
  /**
   * Parses the result returned from the discovery sensor.
   * @param result The result returned by the sensor.
   */
  parseResult(result: any): any;
  /**
   * Parses the VM file.
   * @param file The file
   */
  parseVMFile(file: string): any;
  /**
   * Returns the VMware host (ESXi box) where the current application is
   * running.
   * @param vms The VM node
   */
  parseVMNodes(vms: any): any;
  /**
   * Updates the VMware images and links to the virtual servers.
   * @param instance The instance to process
   */
  processInstances(instance: any): any;
  /**
   * Returns the VM version information.
   * @param vmList The result returned by the sensor.
   */
  processVersion(vmList: any): any;
  /**
   * Updates the VMware images.
   * @param instances An array of instances to process.
   * @param vmWare The VMWare images to update.
   */
  updateVMWareImages(instances: any[], vmWare: any): any;
}
export { DiscoveryVMWareSensor };
