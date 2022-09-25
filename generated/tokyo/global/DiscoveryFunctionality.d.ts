declare class DiscoveryFunctionality {
  active: string;
  behavior: any;
  criteria: any[];
  functionality: any;
  matchCriteria: string;
  midServer: any;
  midServers: any[];
  phase: number;
  sysID: string;
  constructor(source: any, behavior?: string);
  /**
   * Evaluates the criteria in this functionality using the provided left-hand and
   * right-hand values.
   * @param lhValue A hashmap of left-hand criteria values.
   * @param rhValue A hashmap of right-hand criteria values.
   */
  evaluateCriteria(lhValue: any, rhValue: any): any;
  /**
   * Gets a JavaScript array of DiscoveryFunctionality instances related to the specified
   * behavior.
   * @param behavior A DiscoveryBehaviorRecord instance
   */
  getForBehavior(behavior: any): any;
  /**
   * Retrieves a hashmap of information from the current functionality if a port probe that
   * probes the given service name can be found and for which the functionality criteria are met with
   * the given left-hand values and right-hand values. Returns null if no such port probe
   * exists.
   * @param name Name of the service for which a port probe is desired
   * @param lhCriteria A hashmap of left-hand criteria values, for example
   * "win_domain"="service-now.com"
   * @param rhCriteria A hashmap of right-hand criteria values, for example
   * "mid_win_domain"="bogus.com"
   */
  getStuffForServiceName(name: string, lhCriteria: any, rhCriteria: any): any;
  /**
   * Retrieves a JavaScript array of one synthetic DiscoveryFunctionality instance, for the
   * given MID server.
   * @param midServer A MidServer instance
   * @param discover What kind of discovery, 'IPs', 'CIs', or 'Nets'
   */
  getSyntheticBasic(midServer: string, discover: string): any;
}
export { DiscoveryFunctionality };
