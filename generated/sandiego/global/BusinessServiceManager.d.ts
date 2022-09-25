declare class BusinessServiceManager {
  constructor();
  /**
   * Adds a CI to a manually-created application service.
   * @param service_id Sys ID of the application service to add a CI to. Must be of type
   * cmdb_ci_service_discovered.
   * @param source_id Sys ID of the CI whose outgoing connection joins the target CI.
   * @param target_id Sys ID of the CI to add to the service. Cannot be an excluded item. Excluded
   * items are CIs added to the sa.mapping.user.manual.citype.blacklist system property
   * that are excluded from specific operations.
   */
  addCI(service_id: string, source_id: string, target_id: string): any;
  /**
   * Adds a manually created connection to an application service.
   * @param source_id Sys ID of the CI to add to the connection.
   * @param manual_endpoint GlideRecord object in the cmdb_ci_endpoint_manual table to add to the
   * application service.
   * @param service_id Sys ID of the application service to add the connection to.
   */
  addManualConnection(
    source_id: string,
    manual_endpoint: any,
    service_id: string,
  ): any;
  /**
   * Converts a manual service to an application service.
   * @param service_id Sys ID of the manual service to convert.
   */
  migrateManualToApplicationService(service_id: string): any;
  /**
   * Populates an application service with relations and CIs from the designated entry
   * point.
   * @param service_id Sys ID of the application service to populate.
   * @param levels Number of levels of CIs to add from the CMDB.
   * @param black_listed_relation_types Relation types to exclude when populating the application service.
   */
  populateApplicationService(
    service_id: string,
    levels: number,
    black_listed_relation_types: string,
  ): any;
  /**
   * Removes a manually created CI from an application service.
   * @param service_id Sys ID of the application service to remove a CI from.
   *
   *
   * Note: Passing a GlideRecord object is also supported.
   *
   * @param target_id Sys ID of the CI to remove from the application service.
   *
   *
   * Note: Passing a GlideRecord object is also supported.
   *
   */
  removeCI(service_id: string, target_id: string): any;
  /**
   * Removes a manually created connection and the connected CI from an application
   * service.
   * @param source_id Sys ID of the CI connected to the endpoint.
   * @param endpoint_id Sys ID of the manually created connection to remove from the application
   * service
   * @param service_id Sys ID of the application service to remove the connection from.
   */
  removeManualConnection(
    source_id: string,
    endpoint_id: string,
    service_id: string,
  ): any;
}
export { BusinessServiceManager };
