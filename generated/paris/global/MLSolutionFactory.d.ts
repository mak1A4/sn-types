declare class MLSolutionFactory {
  /**
   * Gets an MLSolution object for a specified solution name.
   * @param solutionName Name of the solution.
   * @param options Optional. options.version: If provided, creates MLSolution instance for
   * provided version of solutionName.
   */
  getSolution(solutionName: string, options?: any): any;
}
export { MLSolutionFactory };
