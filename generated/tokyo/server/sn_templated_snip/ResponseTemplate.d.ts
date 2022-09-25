declare class ResponseTemplate {
  constructor();
  /**
   * Returns all response templates from a specified table that match the passed in query
   * criteria.
   * @param tableName Name of the table to use to search the sn_templated_snip_note_template table to
   * locate corresponding response templates. For example, incident or
   * sn_hr_core_case.
   * @param recordId Sys ID of the record to use to render the variables in the response
   * template.
   * @param searchTerm Optional. Text to use to filter the list of matching response templates. The
   * method performs a CONTAINS search of this text on the name and body fields and a
   * STARTS WITH search on the short name field. For example, if the search term is
   * "crash", the method returns any response template that matches the query criteria
   * and has crash in the name or body or the short name starts with
   * crash.
   * Response templates with exact matches on short name appear first in
   * the return results. All other returned response templates are sorted by
   * name.
   * Default: Return all matching response templates.
   * @param limit Optional. Maximum number of response templates to return.Default:
   * 50
   * @param offset Optional. For pagination, the index at which to start the search.Default:
   * 0
   * @param includeEvaluatedBody Optional. Flag that indicates whether to render the template variables.Valid
   * values:
   *
   * false: Do not render the template variables. The response contains the message
   * variables.For example:
   * Please note that your case ${number} has been escalated to ${assignment_group}.
   *
   *
   *
   * true: Renders the template variables and returns evaluated_response
   * in the return results. For example:
   * Please note that your case INC100001 has been escalated to Facilities.
   *
   *
   *
   *
   * Default: false
   * @param errorFormat Optional. HTML formatting to use for errors. For
   * example:
   * "&lt;span
   * style='color:#ffff00'&gt;${%s}&lt;/span&gt;"
   * Default: "&lt;span
   * style='color:#ff0000'&gt;${%s}&lt;/span&gt;"
   * @param opts Optional. Parameters to pass to the
   * sn_templated_snip.response_template extension point. The format and content of these
   * parameters are dependent on the implementation of the extension point. For additional
   * information on extension points, see Using extension points to extend
   * application functionality.
   */
  query(
    tableName: string,
    recordId: string,
    searchTerm?: string,
    limit?: number,
    offset?: number,
    includeEvaluatedBody?: boolean,
    errorFormat?: string,
    opts?: any,
  ): any;
  /**
   * Renders the HTML body of a specified response template.
   * @param templateId Sys ID of the response template to render.
   * @param tableName Name of the table to use when rendering the variables on the response
   * template.
   * @param recordId Sys ID of the record to use when rendering the variables on the response
   * template. This record must be in the table specified by
   * tableName.
   * @param errorFormat Optional. HTML formatting to use for errors. For
   * example:
   * "&lt;span
   * style='color:#ffff00'&gt;${%s}&lt;/span&gt;"
   * Default: "&lt;span
   * style='color:#ff0000'&gt;${%s}&lt;/span&gt;"
   * @param opts Optional. Parameters to pass to the
   * sn_templated_snip.response_template extension point. The format and content of these
   * parameters are dependent on the implementation of the extension point. For additional
   * information on extension points, see Using extension points to extend
   * application functionality.
   */
  render(
    templateId: string,
    tableName: string,
    recordId: string,
    errorFormat?: string,
    opts?: any,
  ): any;
}
export { ResponseTemplate };
