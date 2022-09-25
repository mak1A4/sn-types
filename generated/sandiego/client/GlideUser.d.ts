declare class GlideUser {
  firstName: string;
  lastName: string;
  userID: string;
  userName: string;
  /**
   * Returns a client value set using setClientData() or
   * GlideSession -- putClientData().
   * @param key Name of the client data to retrieve.
   */
  getClientData(key: string): any;
  /**
   * Returns the first and last name of the current user.
   */
  getFullName(): any;
  /**
   * Returns true if the current user has the specified role or the admin role.
   * @param role Role to check.
   * @param includeDefaults Optional. Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Roles.
   * Default:
   * false
   */
  hasRole(role: string, includeDefaults?: boolean): any;
  /**
   * Determines whether the current user has the specified role.
   * @param includeDefaults Optional. Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Explicit roles.
   * Default: false
   * @param role Role to check.
   */
  hasRoleExactly(includeDefaults: boolean | undefined, role: string): any;
  /**
   * Returns true if the current user has at least one of the specified roles or has the
   * admin role.
   * @param roles Comma-separated list of roles to check
   * @param includeDefaults Optional. Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Roles.
   * Default:
   * false
   */
  hasRoleFromList(roles: string, includeDefaults?: boolean): any;
  /**
   * Returns true if the current user has any role.
   * @param includeDefaults Optional. Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Roles.
   * Default:
   * false
   */
  hasRoles(includeDefaults?: boolean): any;
  /**
   * Sets a client value that you can retrieve using
   * getClientData().
   * @param key Name of the client data to store as a key.
   * @param value Value to assign to the key.
   */
  setClientData(key: string, value: number): any;
}
export { GlideUser };
