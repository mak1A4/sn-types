declare class PlaybookExperience {
  /**
   * Cancels playbook executions for a given parent record.
   * @param parentRecord The parent record to cancel playbook executions for. The parent record can be
   * any record that has playbook executions, such as an interaction record or an
   * onboarding case record.
   * @param cancellationReason The reason for cancelling the playbook executions.
   * @param scopedName Optional. The scoped name of the playbook to cancel. The scoped name is from
   * the Process Definition [sys_pd_process_definition] table in the format
   * scope.name. If provided, only executions of this playbook are
   * cancelled for the given parent record. If not provided, all executions of all
   * playbooks are cancelled for the given parent record.
   * @param playbookExperienceId Optional. Sys_id of the playbook experience record in the Playbook Experience
   * [sys_playbook_experience] table to use for the cancellation. Use this parameter if
   * you’ve defined custom activity state mappings. See Playbook activity state
   * mapping.Default: Sys_id of the Global Playbook Experience
   * record.
   */
  cancelPlaybooksByParentRecord(
    parentRecord: any,
    cancellationReason: string,
    scopedName?: string,
    playbookExperienceId?: string,
  ): any;
  /**
   * Gets a list of playbook executions for a given parent record.
   * @param parentRecord The parent record to get playbook executions for. The parent record can be any
   * record that can have playbook executions, such as an interaction record or an
   * onboarding case record.
   */
  getPlaybooksForParentRecord(parentRecord: any): any;
  /**
   * Checks whether a parent record has playbook executions.
   * @param parentRecord The parent record to check for playbook executions. The parent record can be
   * any record that can have playbook executions, such as an interaction record or an
   * onboarding case record.
   * @param scopedName Optional. The scoped name of the playbook to check for. The scoped name is from
   * the Process Definition [sys_pd_process_definition] table in the format
   * scope.name. If provided, only executions of this playbook are
   * checked for. If not provided, executions of all playbooks are checked for.
   */
  parentRecordContainsPlaybook(parentRecord: any, scopedName?: string): any;
  /**
   * Initiates a playbook for a parent record.
   * @param scopedName The scoped name of the playbook to initiate. The scoped name is from the
   * Process Definition [sys_pd_process_definition] table in the format
   * scope.name.
   * @param parentRecord The parent record to initiate a playbook for. The parent record can be any
   * record that can have playbook executions, such as an interaction record or an
   * onboarding case record.
   */
  triggerPlaybook(scopedName: string, parentRecord: any): any;
}
export { PlaybookExperience };
