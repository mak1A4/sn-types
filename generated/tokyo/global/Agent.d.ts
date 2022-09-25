declare class Agent {
  /**
   * Gets an agent by sys_id.
   * @param user_sys_id The sys_id of the user listed in sys_user table.
   */
  get(user_sys_id: string): any;
  /**
   * Gets the current presence state and channel availability of a provided
   * agent.
   */
  getPresence(): any;
  /**
   * Sets the state of a provided agent’s presence and sets the agent’s channel availability
   * for that state.
   * @param setRequest Contains setRequest.sys_id and setRequest.channels.
   */
  setPresence(setRequest: any): any;
}
export { Agent };
