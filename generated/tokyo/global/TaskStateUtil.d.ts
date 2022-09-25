declare class TaskStateUtil {
  ATTR_DEFAULT_CLOSE: string;
  ATTR_DEFAULT_WORK: string;
  ATTR_INACTIVE_STATES: string;
  SYSTEM_DEFAULT_CLOSE: number;
  SYSTEM_DEFAULT_WORK: number;
  SYSTEM_INACTIVE_STATES: number;
  constructor(task: any);
  /**
   * Returns the value for the default closed state.
   */
  getDefaultCloseState(): any;
  /**
   * Returns the value for the default work state.
   */
  getDefaultWorkState(): any;
  /**
   * Returns a list of the inactive state values.
   */
  getInactiveStates(): any;
  /**
   * Returns the active status of the specified state.
   * @param state The state value to check.
   */
  isStateInactive(state: string): any;
  /**
   * Decides whether the mark closed business rule should be run or
   * not.
   */
  runMarkClosed(): any;
  /**
   * Decides whether the task closer business rule should be run or
   * not.
   */
  runTaskCloser(): any;
  /**
   * Decides whether the task reopener business rule should be run or
   * not.
   */
  runTaskReopener(): any;
  /**
   * Enables the user to specify their own default work state.
   * @param defaultWorkState The value to use for the default work state.
   */
  setDefaultWorkState(defaultWorkState: string): any;
}
export { TaskStateUtil };
