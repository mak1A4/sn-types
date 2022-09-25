declare class AssessmentCreation {
  /**
   * Creates one or more assessments or surveys for the specified metric type or survey
   * definition.
   * @param typeID The sys_id of the metric type or survey definition for which to generate
   * assessments or surveys.
   * @param sourceRecordID One or more comma-separated survey definition sys_ids to include in the
   * assessments generated. There must be an assessable record associated with the
   * specified metric type for each source record. If this parameter is left blank, the
   * assessments generated includes all assessable records for the specified type. This
   * parameter is for use with assessments only.
   * @param userID One or more comma-separated sys_ids of users to which to send assessment or
   * survey instances. If this parameter is left blank, the assessment stakeholders or
   * survey users receive instances. This parameter is required for on-demand
   * assessments.
   */
  createAssessments(
    typeID: string,
    sourceRecordID: string,
    userID: string,
  ): any;
}
export { AssessmentCreation };
