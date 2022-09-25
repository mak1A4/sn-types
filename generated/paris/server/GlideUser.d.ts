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
   * Returns the identifier of the user's current session domain.
   */
  getDomainID(): any;
  /**
   * Returns the user's email address.
   */
  getEmail(): any;
  /**
   * Returns the user's first name.
   */
  getFirstName(): any;
  /**
   * Gets the sys_id of the current user.
   */
  getID(): any;
  /**
   * Returns the user's last name.
   */
  getLastName(): any;
  /**
   * Returns the user ID, or login name, of the current user.
   */
  getName(): any;
  /**
   * Gets the specified user preference value for the current user.
   * @param name The name of the preference.
   */
  getPreference(name: string): any;
  /**
   * Returns a list of roles that includes explicitly granted roles, inherited roles, and
   * roles acquired by group membership.
   */
  getRoles(): any;
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
   * Determines if the current user is a member of the specified group.
   * @param group Group to check
   */
  isMemberOf(group: string): any;
  /**
   * Saves a user preference value to the database.
   * @param name The preference to save.
   * @param value The preference value.
   */
  savePreference(name: string, value: string): any;
}
export { GlideUser };
