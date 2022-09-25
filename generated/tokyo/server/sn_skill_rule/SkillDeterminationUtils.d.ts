declare class SkillDeterminationUtils {
  constructor();
  /**
   * Assigns an array of active skill objects to a work item.
   * @param skills Array of active skill objects to be assigned.
   * @param now_GR GlideRecord of the work item on which to assign skills.
   */
  assignSkillsToWorkItem(skills: any[], now_GR: any): any;
  /**
   * Gets skills for a specified work item, indicates if the skills are mandatory, and lists
   * any skill levels.
   * @param now_GR GlideRecord of a work item from any interaction or task table
   * extension.
   */
  determineWorkItemSkills(now_GR: any): any;
}
export { SkillDeterminationUtils };
