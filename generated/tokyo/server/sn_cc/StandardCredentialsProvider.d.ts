declare class StandardCredentialsProvider {
  constructor();
  /**
   * Returns the credential record object identified by the specified sys_id.
   * @param sys_id Sys_id of the credential record. Located in the Credentials
   * [discovery_credentials] table.
   */
  getCredentialByID(sys_id: string): any;
  /**
   * Returns an array of all credentials that match the specified types and
   * tags.
   * @param tags Optional. Comma-separated list of tag names. For example, "ssh,
   * jdbc".Examples of valid calls:
   * var credentials = provider.getCredentials(null,
   * null);
   *
   *
   * var credentials = provider.getCredentials(["ssh"], "");
   *
   *
   * var credentials = provider.getCredentials(new ArrayList&lt;String&gt;(),
   * "ssh,admin");
   *
   *
   *
   * @param types Optional. Credential type names. For example, ["ssh", "windows"]Note: If
   * types is null or empty, any match returns a credential. If
   * types is specified, the credentials whose type matches one
   * of the types is returned.
   */
  getCredentials(tags?: string, types?: any[]): any;
}
export { StandardCredentialsProvider };
