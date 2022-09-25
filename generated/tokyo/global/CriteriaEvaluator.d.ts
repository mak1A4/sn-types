declare class CriteriaEvaluator {
  /**
   * Adds the criteria to be evaluated.
   * @param lhComparand The left hand comparand. Must be a named value in the left hand values input
   * into evaluate().
   * @param operator The operator. Must be one of: equals, starts with, contains, does not contain,
   * ends with, or regex matches.
   * @param rhComparand The right hand comparand. Can be evaluated either as one of the right hand
   * values input to evaluate() or as a literal string.
   */
  addCriterion(lhComparand: string, operator: string, rhComparand: string): any;
  /**
   * Evaluates the criteria.
   * @param lhValues A hashmap of name-value pairs to evaluate the left hand comparands of the
   * criteria.
   * @param rhValues Optional right hand values to use instead of the literal value in evaluating
   * the right hand comparands.
   * @param any If true, any criterion matching suffices for a true result. If false, all
   * criteria must match for a true result.
   */
  evaluate(lhValues: any, rhValues: string | undefined, any: boolean): any;
}
export { CriteriaEvaluator };
