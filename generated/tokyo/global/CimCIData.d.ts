declare class CimCIData {
  /**
   * Adds a serial number to the current configuration item (CI), by type.
   * @param type Serial number type. For the base system, use the CimCIData.serialType
   * enum.
   * @param serial Serial number to add.
   */
  addSerial(type: string, serial: string): any;
  /**
   * Creates a new serial record.
   * @param type The serial type to assign to the CI. If out-of-box, uses the
   * CimCIData.serialType enum.
   * @param serial The serial number to assign.
   */
  SerialRecord(type: string, serial: string): any;
  /**
   * Sets the make and model for the current configuration item (CI).
   * @param make Name of the manufacturer to set for the CI.
   * @param model Name of the model to set for the CI.
   */
  setMakeAndModel(make: string, model: string): any;
}
export { CimCIData };
