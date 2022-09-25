declare class GlideApplicationProperty {
  /**
   * Returns the value for the specified application property and domain sys_id.
   * @param name Name of the application property to return.Note: If the application is not
   * global, you must prefix the name of the sys_application_property with the
   * application's scope.
   * @param domainSysId Optional. Sys_id of the domain associated with the application
   * property.Default: Session domain
   */
  getValue(name: string, domainSysId?: string): any;
  /**
   * Stores the specified value in the specified application property for the specified
   * domain, or the current session domain if not specified.
   * @param name Name of the application property to save.Note: If the application is not
   * global, you must prefix the name of the sys_application_property with the
   * application's scope.
   * @param value Value to store in the specified application property.
   * @param domainSysId Optional. Sys_id of the domain associated with the application
   * property.Default: Current session domain
   */
  setValue(name: string, value: string, domainSysId?: string): any;
}
export { GlideApplicationProperty };
