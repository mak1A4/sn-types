declare class CimInstanceToken {
  /**
   * Parses the instance token.
   * @param cimomip
   */
  getHashToken(cimomip: string): any;
  /**
   * Parses the instance token.
   * @param instance The CIM instance
   */
  parse(instance: any): any;
}
export { CimInstanceToken };
