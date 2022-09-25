declare class VMUtils {
  /**
   * Converts a correlation ID into a UUID for a virtual machine in the ServiceNow
   * system.
   * @param correlationId The correlation ID to convert
   */
  turnCorrelationIdToUuid(correlationId: string): any;
  /**
   * Converts a WMware universal unique identifier (UUID) to a format that matches the
   * original format in the ServiceNow system.
   * @param uuid The UUID to convert.
   */
  turnUuidToCorrelationId(uuid: string): any;
}
export { VMUtils };
