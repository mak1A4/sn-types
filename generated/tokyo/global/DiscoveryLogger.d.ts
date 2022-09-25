declare class DiscoveryLogger {
  constructor(sys_id: string);
  /**
   * Logs error events.
   * @param msg The message detailing the outcome of the activity or the discovery
   * process.
   * @param source The activity, such as SNMP Identity or Windows Identity, where the event
   * occurred.
   * @param sensor The sensor that processed the results of the probe.
   * @param ci The device for which a matching CI was found in the CMDB.
   */
  error(msg: string, source: string, sensor: string, ci: string): any;
  /**
   * Logs information events.
   * @param msg The message detailing the outcome of the activity or the discovery
   * process.
   * @param source The activity, such as SNMP Identity or Windows Identity, where the event
   * occurred.
   * @param sensor The sensor that processed the results of the probe.
   * @param ci The device for which a matching CI was found in the CMDB.
   */
  info(msg: string, source: string, sensor: string, ci: string): any;
  /**
   * Logs all events.
   * @param msg The message detailing the outcome of the activity or the discovery
   * process.
   * @param source The activity, such as SNMP Identity or Windows Identity, where the event
   * occurred.
   * @param sensor The sensor that processed the results of the probe.
   * @param ci The device for which a matching CI was found in the CMDB.
   */
  log(msg: string, source: string, sensor: string, ci: string): any;
  /**
   * Logs warning events.
   * @param msg The message detailing the outcome of the activity or the discovery
   * process.
   * @param source The activity, such as SNMP Identity or Windows Identity, where the event
   * occurred.
   * @param sensor The sensor that processed the results of the probe.
   * @param ci The device for which a matching CI was found in the CMDB.
   */
  warn(msg: string, source: string, sensor: string, ci: string): any;
}
export { DiscoveryLogger };
