declare class UserSkillRanking {
  constructor();
  /**
   * Provides a list of qualified users based on matching mandatory skills and levels if the
   * isSkillLevelEnforced parameter is true).
   * @param requiredSkillsJson List of required skills to qualify users.Each skill is listed as a JSON
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
   * @param usersJson List of user Sys IDs from sys_user table (in JSON format) representing users to
   * be qualified against required skills.
   * @param rankType Enables sorting qualified users based on ranking type. Possible values are
   * comparators to provide sorted list of qualified users based on number of matching
   * skills and skill level gap:
   *
   *
   *
   * NO_RANKING (default) – Used if empty value provided.
   *
   * NUM_SKILLS – Number of skills matched against required skills.
   *
   * NUM_SKILL_ MATCHING_LEVEL – Number of user skills matching the required
   * skill level.
   *
   * LEAST_SKILL_ LEVEL_GAP – Finds user skill that most closely meets minimum
   * skill level requirements.
   *
   * MOST_SKILL_ LEVEL_GAP – Finds user that least meets minimum skill level
   * requirements.
   *
   * BEST_OPTIMUM_ USER – Finds optimum user for all skill levels.
   *
   *
   *
   *
   * @param isSkillLevelEnforced True if user must have minimum skill level for all required mandatory skills,
   * false otherwise. Default: false.
   */
  getQualifiedRankedUsers(
    requiredSkillsJson: string,
    usersJson: string,
    rankType: string,
    isSkillLevelEnforced: boolean,
  ): any;
}
export { UserSkillRanking };
