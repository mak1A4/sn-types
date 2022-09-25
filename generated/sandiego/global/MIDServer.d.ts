declare class MIDServer {
  hostname: string;
  hostOS: string;
  ip: string;
  name: string;
  network: string;
  routerIP: string;
  status: string;
  sysID: string;
  url: string;
  version: string;
  windowsDomain: string;
  /**
   * Returns the specified MID server.
   * @param name The MID server name
   */
  getByName(name: string): any;
  /**
   * Returns the MID server associated with the specified schedule (the MID server with the
   * same name). If there is no associated MID server, gets the next MID server in the ecc_agent
   * table.
   * @param schedule The discovery schedule
   */
  getDefault(schedule: any): any;
  /**
   * Returns the MID Server with the specified schedule and range set.
   * @param schedule The discovery schedule
   * @param range The discovery range set
   */
  getForPing(schedule: any, range: any): any;
}
export { MIDServer };
