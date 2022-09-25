declare class GlideImpersonate {
  /**
   * Verifies whether the specified user can perform debugging on scripts.
   * @param userSysId sys_Id of the user to verify for debugging capability.
   */
  canDebug(userSysId: string): any;
  /**
   * Verifies whether the current user can impersonate the specified user.
   * @param userSysId sys_Id of the user to impersonate
   */
  canImpersonate(userSysId: string): any;
  /**
   * Sets the user ID for the current administrator to the passed-in user ID, enabling the
   * administrator to act as that user.
   * @param userSysId sys_id of the user to impersonate
   */
  impersonate(userSysId: string): any;
  /**
   * Determines whether the current user is impersonating another user.
   */
  isImpersonating(): any;
}
export { GlideImpersonate };
