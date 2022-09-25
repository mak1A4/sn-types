declare class AbstractScriptProcessor {
  /**
   * Called by the Prototype JavaScript Framework during object construction.
   * @param request The request
   * @param response The response
   * @param process The process
   */
  initialize(request: string, response: string, process: string): any;
  /**
   * Called by the Prototype JavaScript Framework during object processing. Do not call this
   * method directly.
   */
  process(): any;
}
export { AbstractScriptProcessor };
