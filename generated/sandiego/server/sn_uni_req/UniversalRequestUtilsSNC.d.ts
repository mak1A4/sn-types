declare class UniversalRequestUtilsSNC {
  /**
   * Creates a universal request and returns the sys_id of the newly created universal
   * request record.
   * @param copyFields JSON object containing field names and values to set on a new record in the
   * Universal Requests [universal_request] table.Provide details by field name and
   * field value in the format { '&lt;field_name&gt;': '&lt;field_value&gt;'
   * }. The following fields are considered the most useful details to
   * assign to a primary
   * ticket.
   *
   * {
   * 'assignment_group': 'String',
   * 'assigned_to': 'String',
   * 'contact_type': 'String',
   * 'description': 'String',
   * 'opened_by': 'String',
   * 'opened_for': 'String',
   * 'priority': 'String',
   * 'restricted': Boolean,
   * 'short_description': 'String'
   * };Other
   * fields not listed might be eligible for your use case. For a
   * list of table fields and related fields in the system, view the data
   * dictionary.
   * Note: Do not include the primary_ticket or sys_id fields in
   * the copyFields JSON object.
   */
  createUniversalRequest(copyFields: any): any;
}
export { UniversalRequestUtilsSNC };
