declare class GlideUser {
  /**
   * Returns the current user's company sys_id.
   */
  getCompanyID(): any;
  /**
   * Returns the current user's display name.
   */
  getDisplayName(): any;
  /**
   * Returns the display value of the user's session domain.
   */
  getDomainDisplayValue(): any;
  /**
   * Returns the user's email address.
   */
  getEmail(): any;
  /**
   * Returns the user's first name.
   */
  getFirstName(): any;
  /**
   * Returns the sys_id of the current user.
   */
  getID(): any;
  /**
   * Returns the user's last name.
   */
  getLastName(): any;
  /**
   * Returns an iterator containing the list of all groups to which the user belongs. Only
   * active groups are returned.
   */
  getMyGroups(): any;
  /**
   * Returns the user ID, or login name, of the current user.
   */
  getName(): any;
  /**
   * Returns a list of roles associated with the user. Includes explicitly granted roles,
   * inherited roles, and roles acquired by group membership.
   */
  getRoles(): any;
  /**
   * Returns the user object associated with the passed-in user ID (sys_id in sys_user) or
   * user_name.
   * @param id Unique ID (sys_id) or user_name of the desired user record.
   */
  getUserByID(id: string): any;
  /**
   * Returns the list of roles explicitly granted to the user.
   */
  getUserRoles(): any;
  /**
   * Determines if the current user has the specified role.
   * @param role Role to check
   */
  hasRole(role: string): any;
  /**
   * Determines if the current user is a member of the specified group. Only active groups
   * are evaluated by this method.
   * @param group Group to check
   */
  isMemberOf(group: string): any;
}
export { GlideUser };
