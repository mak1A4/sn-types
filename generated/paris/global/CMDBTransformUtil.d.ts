declare class CMDBTransformUtil {
  constructor();
  /**
   * Use this method in onBefore transform map scripts to get the error when  the
   * identifyAndReconcile() method was called.
   */
  getError(): any;
  /**
   * Use this method in onBefore transform map scripts to get the JSON payload after the
   * identifyAndReconcile() method is called.
   */
  getOutputPayload(): any;
  /**
   * Use this method in onBefore transform map scripts to get the sys_id of the CI that was
   * inserted/updated.
   */
  getOutputRecordSysId(): any;
  /**
   * Use this method in onBefore transform map scripts to determine if there was an error
   * when  the identifyAndReconcile() method was called.
   */
  hasError(): any;
  /**
   * Inserts or updates a configuration item (CI) in the Configuration Management Database (CMDB).
   * @param source Global object available in transform map scripts that holds the incoming
   * record.
   * @param map Map object available in transform map scripts that holds the current transform
   * map record.
   * @param log Log object available in transform map scripts.
   */
  identifyAndReconcile(source: any, map: any, log: any): any;
  /**
   * Use this method in onComplete transform map scripts to log the number of CIs inserted,
   * updated, skipped, or had errors.
   * @param log This is the log object available in transform map scripts.
   */
  logTransformStats(log: any): any;
  /**
   * Use this method in onBefore transform map scripts to set the data source to be used
   * when  the identifyAndReconcile() method is called. If this method is not
   * called, the default value 'ImportSet' is used.
   * @param source The data source for the source CI record.
   */
  setDataSource(source: string): any;
}
export { CMDBTransformUtil };
