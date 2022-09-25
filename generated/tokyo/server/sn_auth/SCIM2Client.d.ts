declare class SCIM2Client {
  /**
   * Deletes a specified resource from an external service provider system.
   * @param provider Required. Name of the configured SCIM service provider. The service provider name
   * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
   * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
   * in the resource_name field in the SCIM Provider Resource Mapping
   * [sys_scim_provider_resource_mapping] table.
   * @param providerResourceId Required. Unique identifier of the associated resource on the external service
   * provider system.
   */
  executeDelete(
    provider: string,
    resourceName: string,
    providerResourceId: string,
  ): any;
  /**
   * Returns all resources from a specified external provider system that match the passed
   * criteria.
   * @param provider Required. Name of the configured SCIM service provider. The service provider name
   * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
   * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
   * in the resource_name field in the SCIM Provider Resource Mapping
   * [sys_scim_provider_resource_mapping] table.
   * @param queryParams Required. SCIM compliant query parameters passed to the external SCIM service
   * provider endpoint.For additional information on the available query parameters and
   * their associated format, refer to the following sections in the Internet Engineering
   * Task Force document: System for Cross-domain Identity Management: Protocol
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2
   *
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.4
   *
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.3
   *
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.5
   *
   *
   *
   */
  executeGet(provider: string, resourceName: string, queryParams: string): any;
  /**
   * Returns a resource from the external provider system with the specified unique resource
   * ID.
   * @param provider Required. Name of the configured SCIM service provider. The service provider name
   * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
   * @param providerResourceId Required. Unique identifier of the associated resource on the external service
   * provider system.
   * @param queryParams Required. SCIM compliant query parameters passed to the external SCIM service
   * provider endpoint.For additional information on the available query parameters and
   * their associated format, refer to the following sections in the Internet Engineering
   * Task Force document: System for Cross-domain Identity Management: Protocol
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2
   *
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.4
   *
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.3
   *
   * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.5
   *
   *
   *
   */
  executeGetById(
    provider: string,
    providerResourceId: string,
    queryParams: string,
  ): any;
  /**
   * Creates or updates a resource in an external service provider system for a specified
   * sys_id.
   * @param provider Required. Name of the configured SCIM service provider. The service provider name
   * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
   * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
   * in the resource_name field in the SCIM Provider Resource Mapping
   * [sys_scim_provider_resource_mapping] table.
   * @param resourceId Required. Sys_id of the resource saved in the ServiceNow
   * instance (the client). This value is located in the primary_table field in the SCIM
   * Provider Resource Mapping [sys_scim_provider_resource_mapping] table.
   */
  provision(provider: string, resourceName: string, resourceId: string): any;
  /**
   * Creates a new resource in an external service provider system for a specified
   * sys_id.
   * @param provider Required. Name of the configured SCIM service provider. The service provider name
   * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
   * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
   * in the resource_name field in the SCIM Provider Resource Mapping
   * [sys_scim_provider_resource_mapping] table.
   * @param resourceId Required. Sys_id of the resource saved in the ServiceNow
   * instance (the client). This value is located in the primary_table field in the SCIM
   * Provider Resource Mapping [sys_scim_provider_resource_mapping] table.
   */
  provisionNew(provider: string, resourceName: string, resourceId: string): any;
}
export { SCIM2Client };
