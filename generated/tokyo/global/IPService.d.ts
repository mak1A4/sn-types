declare class IPService {
  creates: string;
  description: string;
  name: string;
  port: string;
  protocol: string;
  serviceName: string;
  sysID: string;
  constructor(source: any);
  /**
   * Returns an array of IPService instances specified by a Java ArrayList of
   * sys_ids.
   * @param list List of sys_ids.
   */
  getFromArrayList(list: any[]): any;
}
export { IPService };
