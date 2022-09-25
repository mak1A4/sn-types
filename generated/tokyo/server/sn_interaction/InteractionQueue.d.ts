declare class InteractionQueue {
  /**
   * Assign the next interaction in a queue to the current user.
   */
  acceptNext(): any;
  /**
   * Get an existing interaction queue by sys_id.
   * @param queue Queue from the interaction_queue table.
   */
  get(queue: any): any;
  /**
   * Returns a list of agents who are online and assigned to a particular queue.
   */
  getAvailableAgents(): any;
  /**
   * Check if a user is an agent for a queue.
   * @param queue Sys ID for a queue in the interaction_queue table.
   */
  isAgentFor(queue: any): any;
  /**
   * Find out whether the queue is in schedule.
   */
  isInSchedule(): any;
}
export { InteractionQueue };
