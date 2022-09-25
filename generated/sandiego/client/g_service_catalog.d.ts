declare class g_service_catalog {
  /**
   * Returns the value of the specified field on the catalog item form when used in a client
   * script on multi-row variable sets (MRVS).
   * @param variableName Name of the variable in the catalog item form to return.
   */
  getValue(variableName: string): any;
}
export { g_service_catalog };
