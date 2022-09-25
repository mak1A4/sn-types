declare class SCIM2ClientUtil {
  /**
   * Returns the unique identifier of a specified resource from a specified external
   * provider system for a unique resource ID in a ServiceNow instance using a
   * filter expression to describe the desired
   * resource.
   * @param provider Required. Name of the configured SCIM service provider. The service provider name
   * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
   * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
   * in the resource_name field in the SCIM Provider Resource Mapping
   * [sys_scim_provider_resource_mapping] table.
   * @param filter Required. Filter expression to apply to the return results.For additional
   * information on the available filter parameters and their associated format, refer to
   * the following section in the Internet Engineering Task Force document: System for
   * Cross-domain Identity Management: Protocol
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2
   */
  getProviderIdByFilter(
    provider: string,
    resourceName: string,
    filter: string,
  ): any;
  /**
   * Returns the unique identifier of a specified resource from a specified external
   * provider system for a unique resource ID in a ServiceNow
   * instance.
   * @param provider Required. Name of the configured SCIM service provider. The service provider name
   * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
   * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
   * in the resource_name field in the SCIM Provider Resource Mapping
   * [sys_scim_provider_resource_mapping] table.
   * @param resourceId Required. Sys_id of the resource saved in the ServiceNow
   * instance (the client). This value is located in the primary_table field in the SCIM
   * Provider Resource Mapping [sys_scim_provider_resource_mapping] table.
   */
  getProviderIdByResourceId(
    provider: string,
    resourceName: string,
    resourceId: string,
  ): any;
}
export { SCIM2ClientUtil };
