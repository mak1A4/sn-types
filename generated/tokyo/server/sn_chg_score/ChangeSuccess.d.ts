declare class ChangeSuccess {
  /**
   * Returns the value specified in the system property
   * com.snc.change_management.success_score.entry_level_score.
   */
  getEntryLevelTeamScore(): any;
  /**
   * Returns the value specified in the system property
   * com.snc.change_management.success_score.maximum_score.
   */
  getMaximumPermittedTeamScore(): any;
  /**
   * Returns the value specified in the system property
   * com.snc.change_management.success_score.minimum_score.
   */
  getMinimumPermittedTeamScore(): any;
  /**
   * Returns the latest model success score based on the specified change request
   * GlideRecord.
   * @param chgGr Change request GlideRecord for which to return the model success score.
   */
  getModelScoreForChange(chgGr: any): void;
  /**
   * Returns the latest model success score for the specified model sys_id.
   * @param sys_id Sys_id of the group for which to return the model success score. Located in the
   * User Group [sys_user_grou]
   * table.
   * @param domain_id Optional. Sys_id of a domain to use when querying Performance Analytics for the
   * model success score.
   */
  getModelScoreForModelId(sys_id: string, domain_id?: string): void;
  /**
   * Returns the latest change team success score (original change success score based on
   * group), model success score, and type success score based on the specified change request
   * GlideRecord.
   * @param chgGr Change request GlideRecord.
   */
  getScoresForChange(chgGr: any): any;
  /**
   * Returns the latest change team success score (original change success score based on
   * group) based on the specified change request GlideRecord.
   * @param chgGr Change request GlideRecord for which to return the change team success
   * score.
   */
  getTeamScoreForChange(chgGr: any): any;
  /**
   * Returns the latest change team success score (original change success score based on
   * group) for the specified group.
   * @param sys_id Sys_id of the group for which to return the change team success score. Located
   * in the User Group [sys_user_group] table.
   * @param domain_id Optional.
   * Sys_id of a domain to use when querying Performance Analytics for the
   * team success score.
   */
  getTeamScoreForGroupId(sys_id: string, domain_id?: string): any;
  /**
   * Returns the latest type success score based on the specified change request
   * GlideRecord.
   * @param chgGr Change request GlideRecord for which to return the type success score.
   */
  getTypeScoreForChange(chgGr: any): any;
  /**
   * Returns the latest type success score for the specified change type.
   * @param type Type of change request for which to return the type success score, such as
   * "emergency".
   * @param domain_id Optional. Sys_id of a domain to use when querying Performance Analytics for the
   * type success score.
   */
  getTypeScoreForType(type: string, domain_id?: string): any;
  /**
   * Controls whether the associated method returns the details of the Performance Analytics
   * (PA) indicators used to generate each of the different types of scores (team, model and type).
   * By default, this information is not returned.
   * @param toggle Flag that indicates whether to include the details of the PA
   * indicators.Valid values:
   * true: Return the details of the PA indicators.
   *
   * false: Do not return the details of the PA indicators.
   *
   *
   *
   * Default: false
   */
  withIndicatorScores(toggle: boolean): any;
  /**
   * Only valid when called with the getScoresForChange() method.
   * Controls whether the getScoresForChange() method returns the model score. By
   * default the model score is returned.
   * @param toggle Flag that indicates whether to include the model success score.
   *
   * Valid values:
   * true: Return the model success score.
   *
   * false: Do not return the model success score.
   *
   *
   *
   *
   * Default: true
   */
  withModelScore(toggle: boolean): any;
  /**
   * Controls whether the method validates the user calling the associated method, ensuring
   * that they have the rights to read the requested content.
   * @param toggle Flag that indicates whether to validate the user calling the associated
   * method.Valid values:
   * true: Validate the user calling the associated method.
   *
   * false: Do not validate the user calling the associated method.
   *
   *
   *
   * Default: true
   */
  withSecurity(toggle: boolean): any;
  /**
   * Only valid when called with the getScoresForChange() method.
   * Controls whether the getScoresForChange() method returns the team score. By
   * default the team score is returned.
   * @param toggle Flag that indicates whether to include the team success score.Valid
   * values:
   * true: Return the team success score.
   *
   * false: Do not return the team success score.
   *
   *
   *
   * Default: true
   */
  withTeamScore(toggle: boolean): any;
  /**
   * Controls whether the associated method returns the details for all change success score
   * rating records. By default, this information is not returned.
   * @param toggle Flag that indicates whether to include the details for all team success score
   * rating records.Valid values:
   * true: Return the details for all change success score rating records.
   *
   * false: Do not return the details for all change success score rating
   * records.
   *
   *
   *
   * Default: false
   */
  withTeamScoreRatings(toggle: boolean): any;
  /**
   * Only valid when called with the getScoresForChange() method.
   * Controls whether the getScoresForChange() method returns the type score. By
   * default the type score is returned.
   * @param toggle Flag that indicates whether to include the type success score.Valid
   * values:
   * true: Return the type success score.
   *
   * false: Do not return the type success score.
   *
   *
   *
   * Default: true
   */
  withTypeScore(toggle: boolean): any;
}
export { ChangeSuccess };
