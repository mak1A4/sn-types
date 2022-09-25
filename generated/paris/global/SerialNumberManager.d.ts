declare class SerialNumberManager {
  /**
   * Adds the specified serial number.
   * @param sType The serial number type
   * @param value The serial number
   */
  add(sType: number, value: number): any;
  /**
   * Returns the serial number.
   */
  get(): any;
  /**
   * Returns serial number information for CI Data, including the type, serial number, and
   * validity.
   */
  getSerialsForCIData(): any;
  /**
   * Checks if the number is a valid serial number.
   * @param value The number to check
   */
  isValid(value: number): any;
}
export { SerialNumberManager };
