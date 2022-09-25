declare class CostPlanBatchOperations {
  /**
   * Adds one or more cost plans to a specified task (project or demand). Use this method
   * when you want to create multiple cost plans.
   * @param costPlan One or more objects or an array of objects that describe each of the cost plans
   * to add to an existing task.
   */
  add(costPlan: any): any;
  /**
   * Removes all cost plan objects that were added using the
   * CostPlanBatchOperations.add() method.
   */
  clear(): any;
  /**
   * Processes all of the cost plans that were added using the
   * CostPlanBatchOperations.add() method and creates corresponding cost plans
   * and relevant rollups.
   */
  process(): any;
}
export { CostPlanBatchOperations };
