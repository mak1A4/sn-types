declare class OCRotationV2 {
  /**
   * Returns an array of groups that have active rotas.
   */
  getGroups(): any;
  /**
   * Returns an array of active rosters for a given rota ID.
   * @param rotaSysIds Comma separated list of rota sys_id (cmn_rota) values.
   */
  getRostersByRotas(rotaSysIds: string): any;
  /**
   * Returns an array of active rotas for a given group ID.
   * @param groupSysIds Comma separated list of group sys_id (sys_user_group) values.
   */
  getRotasByGroup(groupSysIds: string): any;
  /**
   * Get the spans from the specified start date to the specified end date. If no start and
   * end dates are provided, the start date defaults to a month before and the end date defaults to a
   * month after the current time. You can also use the groups IDs, rota IDs, roster IDs, user IDs to
   * further filter the spans.
   */
  getSpans(): any;
}
export { OCRotationV2 };
