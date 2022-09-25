declare class CimCIData {
  /**
   * Adds a serial number to the current CI, by type.
   * @param type The serial number type. If out-of-box, use the CimCIData.serialType
   * enum.
   * @param serial The serial number
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
   * Sets the make and model for the current CI.
   * @param make The manufacturer
   * @param model The model
   */
  setMakeAndModel(make: string, model: string): any;
}
export { CimCIData };
