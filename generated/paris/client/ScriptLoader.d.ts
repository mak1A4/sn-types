declare class ScriptLoader {
  /**
   * Loads scripts asynchronously.
   * @param scripts Array of scripts to load.
   * @param callback Function to call when the scripts have been loaded. The callback function must
   * not have any arguments.
   */
  getScripts(scripts: any[], callback: any): any;
  /**
   * Loads scripts asynchronously.
   * @param filePath Path, including the file name, that contains one or more scripts.
   * @param callback Function to call after the scripts have been loaded. This callback function
   * should not have arguments.
   */
  getScripts(filePath: string, callback: any): any;
}
export { ScriptLoader };
