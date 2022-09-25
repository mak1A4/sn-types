declare class CMDBGroupAPI {
  /**
   * Returns all configuration items (CIs) for the specified group. The results include all
   * manual CIs and the list of CIs from the query builder's saved query.
   * @param groupId Sys_id of the Configuration Management Database (CMDB) group.
   * @param requireCompleteSet Optional, but must be passed if
   * requireAllQueryNodesCis is passed. Flag that indicates
   * whether an empty string is returned if any CIs are filtered out by access control
   * list (ACL) restrictions.
   * Valid values:
   * true: Return empty string.
   *
   * false: Don't return value.
   *
   *
   *
   * Default: false
   * @param requireAllQueryNodesCis Optional. Flag that indicates whether to
   * return CIs from all CMDB classes of the query. Valid values:
   * true: Return CIs from all columns.
   *
   * false: Only return CIs from the starting node of the query builder query.
   *
   *
   *
   * Default: false
   */
  getAllCI(
    groupId: string,
    requireCompleteSet?: boolean,
    requireAllQueryNodesCis?: boolean,
  ): any;
  /**
   * Returns all configuration items (CIs) returned from all saved query builders' query IDs
   * for the specified group.
   * @param groupId Sys_id of the Configuration Management Database (CMDB) group.
   * @param requireCompleteSet Optional, but must be passed if
   * requireAllQueryNodesCis is passed. Flag that indicates
   * whether an empty string is returned if any CIs are filtered out by access control
   * list (ACL) restrictions.
   * Valid values:
   * true: Return empty string.
   *
   * false: Don't return value.
   *
   *
   *
   * Default: false
   * @param requireAllQueryNodesCis Optional. Flag that indicates whether to
   * return CIs from all CMDB classes of the query. Valid values:
   * true: Return CIs from all columns.
   *
   * false: Only return CIs from the starting node of the query builder query.
   *
   *
   *
   * Default: false
   */
  getAllCIFromQueryBuilder(
    groupId: string,
    requireCompleteSet?: boolean,
    requireAllQueryNodesCis?: boolean,
  ): any;
  /**
   * Returns the CMDB group's manual CI list.
   * @param groupId The sysId of the CMDB group.
   * @param requireCompleteSet When true, returns an error string if any CIs are filtered out by ACL
   * restrictions.
   */
  getManualCIList(groupId: string, requireCompleteSet: boolean): any;
  /**
   * Returns the query builder's query IDs for the specified CMDB group.
   * @param groupId The sysId of the CMDB group.
   * @param requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL
   * restrictions.
   */
  getSavedQueryIdList(groupId: string, requireCompleteSet: boolean): any;
  /**
   * Sets the manual CI list for the specified group. The existing manual CI list is
   * overwritten. CI sysIds not found in the cmdb_ci table are ignored.
   * @param groupId The sysId of the CMDB group.
   * @param ciSysIds Comma separated list of CI sysIds.
   */
  setManualCIList(groupId: string, ciSysIds: string): any;
  /**
   * Sets the saved query ID list for the specified group. The existing query ID list is
   * overwritten. Query sysIds not found in the qb_saved_query table are ignored.
   * @param groupId The sysId of the CMDB group.
   * @param queryIds Comma separated list of saved query sysIds.
   */
  setSavedQueryIdList(groupId: string, queryIds: string): any;
}
export { CMDBGroupAPI };
