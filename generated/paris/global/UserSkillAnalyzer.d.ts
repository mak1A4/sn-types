declare class UserSkillAnalyzer {
  constructor();
  /**
   * Analyzes user skills against the required skills and sets the number of matching
   * skills, skill level gap, and qualification that can be collected from an instance.
   * @param requiredSkillsJson List of required skills to compare with user.Each skill is listed as a JSON
   * entry in the following format:
   * sys_id: String. Sys ID of skill from the Skills [cmn_skill] table.
   *
   * is_mandatory: Boolean. Flag that indicates whether the skill is
   * mandatory.
   *
   * level: String. Sys ID from the Skill Levels [cmn_skill_level] table.
   *
   *
   *
   * @param userID Sys ID from the User [sys_user] table.
   * @param isSkillLevelEnforced True if user must have a minimum skill level for all required mandatory skills,
   * false otherwise. Default: false.
   */
  analyzeUserByID(
    requiredSkillsJson: string,
    userID: string,
    isSkillLevelEnforced: boolean,
  ): any;
  /**
   * Analyzes user skills against the required skills and sets the number of matching
   * skills, skill-level gap, and qualification that can be collected from an instance.
   * @param requiredSkillsJson List of required skills to qualify the users against.Each skill is listed as
   * a JSON entry in the following format:
   * sys_id: String. Sys ID of skill from the Skills [cmn_skill] table.
   *
   * is_mandatory: Boolean. Flag that indicates whether the skill is
   * mandatory.
   *
   * level: String. Sys ID from the Skill Levels [cmn_skill_level] table.
   *
   *
   *
   * @param userSkillsJson List of user skills to determine qualification for required skills.Each
   * skill is listed as a JSON entry in the following format:
   * sys_id: String. Sys ID of skill from the Skills [cmn_skill] table.
   *
   * is_mandatory: Boolean. Flag that indicates whether the skill is
   * mandatory.
   *
   * level: String. Sys ID from the Skill Levels [cmn_skill_level] table.
   *
   *
   *
   * @param isSkillLevelEnforced True if user must have minimum skill level for all required mandatory skills,
   * false otherwise. Default: false.
   */
  analyzeUserBySkills(
    requiredSkillsJson: string,
    userSkillsJson: string,
    isSkillLevelEnforced: boolean,
  ): any;
}
export { UserSkillAnalyzer };
